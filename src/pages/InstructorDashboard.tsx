import { BookOpen, Users, DollarSign, TrendingUp, Plus, Edit, Eye, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/Progress/ProgressBar";
import { courses, users } from "@/data/courses";
import { Link } from "react-router-dom";

export default function InstructorDashboard() {
  const instructor = users.instructor;
  const myCourses = courses.filter(course => course.instructor === instructor.name);
  const totalStudents = 89; // Mock data
  const totalEarnings = 2340; // Mock data
  const avgRating = 4.7; // Mock data

  const courseStats = [
    { courseId: 1, title: "React for Beginners", students: 45, completion: 78, rating: 4.8, earnings: 1200 },
    { courseId: 2, title: "Advanced React Patterns", students: 23, completion: 65, rating: 4.6, earnings: 890 }
  ];

  const recentStudents = [
    { name: "Alice Cooper", course: "React for Beginners", progress: 85, joinDate: "2 days ago" },
    { name: "Bob Wilson", course: "React for Beginners", progress: 23, joinDate: "1 week ago" },
    { name: "Carol Smith", course: "Advanced React Patterns", progress: 67, joinDate: "3 days ago" }
  ];

  return (
    <div className="min-h-screen pt-8">
      <div className="container mx-auto px-4">
        {/* Welcome Header */}
        <div className="glass-card p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Instructor Dashboard
              </h1>
              <p className="text-xl text-muted-foreground">
                Welcome back, {instructor.name}!
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button className="glass-button bg-gradient-primary">
                <Plus className="h-4 w-4 mr-2" />
                Create Course
              </Button>
              <div className="h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                {instructor.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">My Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{myCourses.length}</div>
              <p className="text-xs text-muted-foreground">Active courses</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStudents}</div>
              <p className="text-xs text-muted-foreground">Enrolled students</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalEarnings}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{avgRating}</div>
              <p className="text-xs text-muted-foreground">⭐ Overall rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* My Courses */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">My Courses</h2>
            <div className="space-y-4">
              {courseStats.map(course => (
                <Card key={course.courseId} className="glass-card">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-foreground">{course.title}</h3>
                          <p className="text-sm text-muted-foreground">{course.students} students enrolled</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="glass-button">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="glass-button" asChild>
                            <Link to={`/course/${course.courseId}`}>
                              <Eye className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <ProgressBar value={course.completion} label="Avg Completion" />
                        <div className="flex justify-between text-sm">
                          <span>Rating: ⭐ {course.rating}</span>
                          <span>Earnings: ${course.earnings}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Button variant="outline" className="glass-button w-full">
                <Plus className="h-4 w-4 mr-2" />
                Create New Course
              </Button>
            </div>
          </div>

          {/* Recent Students */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Recent Students</h2>
            <div className="space-y-4">
              {recentStudents.map((student, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-foreground">{student.name}</h3>
                          <p className="text-sm text-muted-foreground">{student.course}</p>
                          <p className="text-xs text-muted-foreground">Joined {student.joinDate}</p>
                        </div>
                        <Badge variant="secondary">{student.progress}%</Badge>
                      </div>
                      <ProgressBar value={student.progress} label="Progress" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Analytics & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Analytics */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Course Analytics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Student Engagement</h4>
                <ProgressBar value={82} label="Active learners" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Course Completion</h4>
                <ProgressBar value={71} label="Average completion" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Student Satisfaction</h4>
                <ProgressBar value={94} label="Positive feedback" />
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="glass-button h-auto p-4 flex flex-col space-y-2">
                  <Plus className="h-6 w-6" />
                  <span>New Course</span>
                </Button>
                <Button variant="outline" className="glass-button h-auto p-4 flex flex-col space-y-2">
                  <Edit className="h-6 w-6" />
                  <span>Edit Content</span>
                </Button>
                <Button variant="outline" className="glass-button h-auto p-4 flex flex-col space-y-2">
                  <Users className="h-6 w-6" />
                  <span>View Students</span>
                </Button>
                <Button variant="outline" className="glass-button h-auto p-4 flex flex-col space-y-2">
                  <BarChart3 className="h-6 w-6" />
                  <span>Analytics</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="glass-card mt-8">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/50">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    Alice Cooper completed "State & Props" lesson
                  </p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/50">
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    New student Bob Wilson enrolled in React for Beginners
                  </p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/50">
                <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    Received 5-star rating from Carol Smith
                  </p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}