import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/Course/CourseCard";
import { courses } from "@/data/courses";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

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
      <HeroGeometric 
        badge="Learn and Grow"
        title1="Learn Without"
        title2={rotatingWords[currentWordIndex]}
      />

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