import { useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { CourseCard } from "@/components/Course/CourseCard";
import { courses } from "@/data/courses";

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = ["all", ...new Set(courses.map(course => course.category))];

  const filteredCourses = courses
    .filter(course => 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(course => 
      selectedCategory === "all" || course.category === selectedCategory
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "students":
          return (b.studentsCount || 0) - (a.studentsCount || 0);
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen pt-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Discover Courses
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection of courses designed to help you learn new skills and advance your career.
          </p>
        </div>

        {/* Filters */}
        <div className="glass-card p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/50 border-border"
              />
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-background/50 border-border">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="glass-card">
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort Filter */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 bg-background/50 border-border">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="glass-card">
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="students">Most Popular</SelectItem>
                  <SelectItem value="title">A-Z</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex rounded-lg border border-border overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {searchTerm && (
              <Badge variant="secondary" className="bg-accent">
                Search: {searchTerm}
              </Badge>
            )}
            {selectedCategory !== "all" && (
              <Badge variant="secondary" className="bg-accent">
                Category: {selectedCategory}
              </Badge>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Course Grid */}
        <div className={`grid gap-8 mb-12 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1"
        }`}>
          {filteredCourses.map((course, index) => (
            <div 
              key={course.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="glass-card p-12 max-w-md mx-auto">
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No courses found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                variant="outline"
                className="glass-button"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}