import { useParams, Link } from "react-router-dom";
import { Star, Clock, Users, BookOpen, Play, Download, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { courses } from "@/data/courses";
import { useToast } from "@/hooks/use-toast";

export default function CourseDetails() {
  const { id } = useParams();
  const { toast } = useToast();
  const course = courses.find(c => c.id === parseInt(id || "0"));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h1>
          <Button asChild>
            <Link to="/courses">Back to Courses</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    toast({
      title: "Enrolled Successfully!",
      description: `You have been enrolled in "${course.title}". Check your dashboard to start learning.`,
    });
  };

  return (
    <div className="min-h-screen pt-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/courses">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div className="glass-card p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{course.category}</Badge>
                <Badge variant={course.price === "Free" ? "default" : "outline"}>
                  {course.price}
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {course.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-medium">{course.rating}</span>
                  <span>(128 reviews)</span>
                </div>
                
                {course.studentsCount && (
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.studentsCount.toLocaleString()} students</span>
                  </div>
                )}
                
                {course.duration && (
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{course.lessons.length} lessons</span>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                  {course.instructor.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-medium text-foreground">Instructor</p>
                  <p className="text-muted-foreground">{course.instructor}</p>
                </div>
              </div>
            </div>

            {/* Course Lessons */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Course Content</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {course.lessons.map((lesson, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover:bg-accent smooth-transition">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="font-medium text-foreground">{lesson}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">5 min</span>
                      <Play className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Preview */}
            <Card className="glass-card">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Button size="lg" className="rounded-full h-16 w-16 p-0">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {course.price}
                  </div>
                  {course.price !== "Free" && (
                    <p className="text-sm text-muted-foreground line-through">$89</p>
                  )}
                </div>
                
                <Button onClick={handleEnroll} className="w-full glow-effect" size="lg">
                  Enroll Now
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  30-day money-back guarantee
                </p>
              </CardContent>
            </Card>

            {/* Course Features */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>This course includes:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm">Lifetime access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm">Certificate of completion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm">Mobile and desktop access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm">Downloadable resources</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm">Direct instructor support</span>
                </div>
              </CardContent>
            </Card>

            {/* Share/Save */}
            <Card className="glass-card">
              <CardContent className="p-4 space-y-3">
                <Button variant="outline" className="w-full glass-button">
                  <Download className="h-4 w-4 mr-2" />
                  Download Syllabus
                </Button>
                <Button variant="outline" className="w-full glass-button">
                  Share Course
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}