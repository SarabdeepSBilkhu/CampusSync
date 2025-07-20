import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  BookOpen, 
  Briefcase, 
  Users, 
  TrendingUp, 
  Download,
  Star,
  Bell,
  GraduationCap
} from "lucide-react";

const featuresData = [
  {
    title: "Timetable Viewer",
    description: "Organize your class schedule by department and semester",
    icon: Calendar,
    href: "/timetable",
    stats: "12 classes this week",
    color: "text-blue-600"
  },
  {
    title: "Notes Sharing",
    description: "Upload and download study materials with ratings",
    icon: BookOpen,
    href: "/notes",
    stats: "234+ notes available",
    color: "text-green-600"
  },
  {
    title: "Placement Alerts",
    description: "Stay updated with verified job opportunities",
    icon: Briefcase,
    href: "/placements",
    stats: "8 active alerts",
    color: "text-purple-600"
  },
  {
    title: "Roommate Finder",
    description: "Connect with compatible roommates",
    icon: Users,
    href: "/roommates",
    stats: "45+ active profiles",
    color: "text-orange-600"
  }
];

const recentActivity = [
  { action: "New placement alert from Infosys", time: "2 hours ago", type: "placement" },
  { action: "Data Structures notes uploaded", time: "4 hours ago", type: "notes" },
  { action: "3 new roommate matches", time: "6 hours ago", type: "roommate" },
  { action: "Timetable updated for next week", time: "1 day ago", type: "timetable" }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6 fade-in-up stagger-1">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm hover-scale">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white fade-in-up stagger-2">
              Welcome to <span className="text-blue-200 text-shimmer">CampusSync</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto fade-in-up stagger-3">
              Your all-in-one companion for college life. Organize classes, share notes, find opportunities, and connect with roommates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-4">
              <Link to="/timetable">
                <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-gray-900 hover:bg-gray-100 btn-animate hover-lift">
                  Get Started
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-white/20 text-white hover:bg-white/10 btn-animate hover-lift"
                onClick={() => {
                  // Scroll to features section
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Grid */}
        <div id="features" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Everything you need for college success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuresData.map((feature, index) => (
              <Link key={index} to={feature.href}>
                <Card className={`shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 h-full card-hover fade-in-up stagger-${index + 1}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center`}>
                        <feature.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <Badge variant="outline" className="text-sm">
                      {feature.stats}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="shadow-soft card-hover fade-in-up stagger-1">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2 hover-scale" />
              <p className="text-2xl font-bold text-foreground count-up">2,450+</p>
              <p className="text-sm text-muted-foreground">Active Students</p>
            </CardContent>
          </Card>
          <Card className="shadow-soft card-hover fade-in-up stagger-2">
            <CardContent className="p-6 text-center">
              <Download className="w-8 h-8 text-green-600 mx-auto mb-2 hover-scale" />
              <p className="text-2xl font-bold text-foreground count-up">5,680+</p>
              <p className="text-sm text-muted-foreground">Notes Downloaded</p>
            </CardContent>
          </Card>
          <Card className="shadow-soft card-hover fade-in-up stagger-3">
            <CardContent className="p-6 text-center">
              <Briefcase className="w-8 h-8 text-purple-600 mx-auto mb-2 hover-scale" />
              <p className="text-2xl font-bold text-foreground count-up">89%</p>
              <p className="text-sm text-muted-foreground">Placement Success</p>
            </CardContent>
          </Card>
          <Card className="shadow-soft card-hover fade-in-up stagger-4">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-orange-600 mx-auto mb-2 hover-scale" />
              <p className="text-2xl font-bold text-foreground count-up">1,200+</p>
              <p className="text-sm text-muted-foreground">Roommate Matches</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="shadow-soft card-hover fade-in-up stagger-5">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5 hover-scale" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/50 hover-lift fade-in-up" style={{animationDelay: `${(index + 1) * 0.1}s`}}>
                  <div className="w-2 h-2 bg-primary rounded-full loading-pulse"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <Badge variant="outline" className="text-xs hover-scale">
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
