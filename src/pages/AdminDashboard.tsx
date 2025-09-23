import { Users, BookOpen, CheckCircle, AlertTriangle, TrendingUp, Shield, Settings, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/Progress/ProgressBar";
import { courses, users } from "@/data/courses";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const admin = users.admin;
  const totalUsers = 156; // Mock data
  const totalCourses = courses.length;
  const pendingApprovals = 3; // Mock data
  const totalRevenue = 12450; // Mock data

  const pendingCourses = [
    {
      id: 3,
      title: "Advanced JavaScript Patterns",
      instructor: "Mike Johnson",
      category: "Web Development",
      submittedDate: "2 days ago",
      status: "pending"
    },
    {
      id: 4,
      title: "Digital Marketing Mastery",
      instructor: "Sarah Wilson",
      category: "Marketing",
      submittedDate: "5 days ago",
      status: "pending"
    }
  ];

  const recentUsers = [
    { name: "Emma Thompson", email: "emma@example.com", joinDate: "Today", role: "Student" },
    { name: "David Chen", email: "david@example.com", joinDate: "Yesterday", role: "Instructor" },
    { name: "Lisa Rodriguez", email: "lisa@example.com", joinDate: "2 days ago", role: "Student" }
  ];

  return (
    <div className="min-h-screen pt-8">
      <div className="container mx-auto px-4">
        {/* Welcome Header */}
        <div className="glass-card p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Admin Dashboard
              </h1>
              <p className="text-xl text-muted-foreground">
                Welcome back, {admin.name}
              </p>
            </div>
            <div className="hidden md:block">
              <div className="h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                <Shield className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalUsers}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalCourses}</div>
              <p className="text-xs text-muted-foreground">Active courses</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">{pendingApprovals}</div>
              <p className="text-xs text-muted-foreground">Require review</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course Approvals */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Pending Course Approvals</h2>
            <div className="space-y-4">
              {pendingCourses.map(course => (
                <Card key={course.id} className="glass-card">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-foreground">{course.title}</h3>
                          <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                          <p className="text-xs text-muted-foreground mt-1">Submitted {course.submittedDate}</p>
                        </div>
                        <Badge variant="outline" className="text-orange-500 border-orange-500">
                          Pending
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{course.category}</Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
                            Reject
                          </Button>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Approve
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <div className="text-center pt-4">
                <Button variant="outline" className="glass-button">
                  View All Pending ({pendingApprovals})
                </Button>
              </div>
            </div>
          </div>

          {/* User Management */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Recent Users</h2>
            <div className="space-y-4">
              {recentUsers.map((user, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <p className="text-xs text-muted-foreground">Joined {user.joinDate}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={user.role === "Instructor" ? "default" : "secondary"}>
                          {user.role}
                        </Badge>
                        <Button size="sm" variant="outline" className="glass-button">
                          Manage
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <div className="text-center pt-4">
                <Button variant="outline" className="glass-button">
                  <Users className="h-4 w-4 mr-2" />
                  Manage All Users
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <Card className="glass-card mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Platform Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Course Completion Rate</h4>
                <ProgressBar value={78} label="Overall completion" />
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">User Engagement</h4>
                <ProgressBar value={85} label="Daily active users" />
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Revenue Growth</h4>
                <ProgressBar value={92} label="Monthly target" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="glass-card mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="glass-button h-auto p-4 flex flex-col space-y-2">
                <Users className="h-6 w-6" />
                <span>User Management</span>
              </Button>
              
              <Button variant="outline" className="glass-button h-auto p-4 flex flex-col space-y-2">
                <BookOpen className="h-6 w-6" />
                <span>Course Management</span>
              </Button>
              
              <Button variant="outline" className="glass-button h-auto p-4 flex flex-col space-y-2">
                <BarChart3 className="h-6 w-6" />
                <span>Analytics Report</span>
              </Button>
              
              <Button variant="outline" className="glass-button h-auto p-4 flex flex-col space-y-2">
                <Settings className="h-6 w-6" />
                <span>Platform Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="glass-card mt-8">
          <CardHeader>
            <CardTitle>System Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/50">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    Course "React for Beginners" was approved and published
                  </p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/50">
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    New instructor "David Chen" registered and verified
                  </p>
                  <p className="text-xs text-muted-foreground">3 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/50">
                <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    Course "Advanced JavaScript Patterns" submitted for review
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