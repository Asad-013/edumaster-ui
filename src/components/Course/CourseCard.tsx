import { Star, Clock, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Course } from "@/data/courses";
import { Link } from "react-router-dom";

interface CourseCardProps {
  course: Course;
  className?: string;
}

export function CourseCard({ course, className }: CourseCardProps) {
  return (
    <Card className={`glass-card group hover:scale-105 smooth-transition overflow-hidden ${className}`}>
      <div className="aspect-video relative overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {course.category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge 
            variant={course.price === "Free" ? "default" : "outline"} 
            className={course.price === "Free" ? "bg-success text-success-foreground" : "bg-background/80 backdrop-blur-sm"}
          >
            {course.price}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary smooth-transition">
          {course.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="font-medium">{course.rating}</span>
          </div>
          
          {course.duration && (
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
          )}
          
          {course.studentsCount && (
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{course.studentsCount.toLocaleString()}</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            <span>{course.lessons.length} lessons</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            By {course.instructor}
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full group-hover:glow-effect smooth-transition">
          <Link to={`/course/${course.id}`}>
            View Course
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}