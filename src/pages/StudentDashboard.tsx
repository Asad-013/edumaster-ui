import { BookOpen, Clock, Trophy, Play, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/Progress/ProgressBar";
import { courses, users } from "@/data/courses";
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  const student = users.student;
  const enrolledCourses = courses.filter(course => 
    student.enrolledCourses?.includes(course.id)
  );

  const totalProgress = student.progress ? 
    Object.values(student.progress).reduce((acc, progress) => 
      acc + parseInt(progress.replace('%', '')), 0
    ) / Object.values(student.progress).length : 0;

  return (
    <div className="min-h-screen pt-8">
      <div className="container mx-auto px-4">
        {/* Welcome Header */}
        <div className="glass-card p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Welcome back, {student.name}!
              </h1>
              <p className="text-xl text-muted-foreground">
                Continue your learning journey
              </p>
            </div>
            <div className="hidden md:block">
              <div className="h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                {student.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{enrolledCourses.length}</div>
              <p className="text-xs text-muted-foreground">Active enrollments</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Math.round(totalProgress)}%</div>
              <p className="text-xs text-muted-foreground">Across all courses</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Certificates earned</p>
            </CardContent>
          </Card>
        </div>

        {/* Current Courses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Continue Learning */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Continue Learning</h2>
            <div className="space-y-4">
              {enrolledCourses.map(course => {
                const progress = student.progress?.[course.id] || "0%";
                const progressValue = parseInt(progress.replace('%', ''));
                
                return (
                  <Card key={course.id} className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="font-semibold text-foreground">{course.title}</h3>
                            <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                          </div>
                          
                          <ProgressBar value={progressValue} label="Progress" />
                          
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary">{course.category}</Badge>
                            <Button size="sm" asChild>
                              <Link to={`/course/${course.id}`}>
                                <Play className="h-4 w-4 mr-2" />
                                Continue
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Recommended Courses */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Recommended for You</h2>
            <div className="space-y-4">
              {courses.filter(course => !student.enrolledCourses?.includes(course.id)).slice(0, 3).map(course => (
                <Card key={course.id} className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1 space-y-2">
                        <div>
                          <h3 className="font-semibold text-foreground">{course.title}</h3>
                          <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">{course.category}</Badge>
                            <Badge variant={course.price === "Free" ? "default" : "outline"}>
                              {course.price}
                            </Badge>
                          </div>
                          
                          <Button size="sm" variant="outline" asChild className="glass-button">
                            <Link to={`/course/${course.id}`}>
                              View Course
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <div className="text-center pt-4">
                <Button variant="outline" asChild className="glass-button">
                  <Link to="/courses">
                    Explore All Courses
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="glass-card mt-8">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/50">
                <div className="h-2 w-2 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    Completed lesson "JSX & Components" in React for Beginners
                  </p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/50">
                <div className="h-2 w-2 bg-success rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    Earned certificate for "Web Development Fundamentals"
                  </p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/50">
                <div className="h-2 w-2 bg-secondary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    Started new course "UI/UX Design Basics"
                  </p>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}