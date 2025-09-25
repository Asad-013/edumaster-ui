import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/Course/CourseCard";
import { courses } from "@/data/courses";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";

export default function Landing() {
  const featuredCourses = courses.slice(0, 3);

  const rotatingWords = ["Limits", "Boundaries", "Obstacles", "Expectations"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero z-10" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight relative">
              Learn Without
              <span className="block text-6xl md:text-8xl text-white relative z-10 overflow-hidden">
                {rotatingWords[currentWordIndex]}
                <span className="radial-gradient-glow absolute rounded-full opacity-75 animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl text-muted-foreground max-w-2xl mx-auto leading-relaxed tracking-wide drop-shadow-sm">
              Discover thousands of courses, connect with expert instructors, and advance your career with our cutting-edge learning platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="text-lg px-8 py-6 glow-effect">
                <Link to="/courses">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 glass-button">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
              <div className="glass-card p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground">1000+</h3>
                <p className="text-muted-foreground">Courses Available</p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground">50K+</h3>
                <p className="text-muted-foreground">Active Students</p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <Star className="h-12 w-12 text-warning mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground">4.8</h3>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start your learning journey with our most popular and highly-rated courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <div key={course.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" asChild className="glass-button">
              <Link to="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students already learning on EduFlow. Get access to expert-led courses and advance your skills today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6 glow-effect">
                <Link to="/dashboard/student">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 glass-button">
                <Link to="/courses">Browse Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}