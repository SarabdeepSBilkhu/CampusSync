import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Briefcase, 
  Plus, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Users, 
  Clock,
  TrendingUp,
  Building,
  Star
} from "lucide-react";

const samplePlacements = [
  {
    id: 1,
    company: "Infosys",
    role: "Software Engineer",
    package: "₹4.5 LPA",
    location: "Bangalore",
    deadline: "2024-02-15",
    requirements: "B.Tech CS/IT with 60%+",
    type: "On-campus",
    priority: "high",
    description: "Looking for fresh graduates with strong programming skills in Java/Python",
    posted: "2024-01-10",
    applicants: 156
  },
  {
    id: 2,
    company: "TCS",
    role: "Digital Developer",
    package: "₹3.8 LPA",
    location: "Mumbai",
    deadline: "2024-02-20",
    requirements: "All branches welcome",
    type: "On-campus",
    priority: "medium",
    description: "Training program for fresh graduates in digital technologies",
    posted: "2024-01-12",
    applicants: 203
  },
  {
    id: 3,
    company: "Microsoft",
    role: "SDE Intern",
    package: "₹40,000/month",
    location: "Hyderabad",
    deadline: "2024-02-10",
    requirements: "CS/IT students with 8.5+ CGPA",
    type: "Internship",
    priority: "high",
    description: "6-month internship program with full-time offer possibility",
    posted: "2024-01-08",
    applicants: 89
  }
];

const priorityColors = {
  high: "bg-red-100 text-red-800 border-red-200",
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  low: "bg-green-100 text-green-800 border-green-200"
};

export default function Placements() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high": return <TrendingUp className="w-4 h-4" />;
      case "medium": return <Star className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Placement Alerts</h1>
            <p className="text-muted-foreground">Stay updated with latest job opportunities</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Post Alert
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Post Placement Alert</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input placeholder="Company Name" />
                <Input placeholder="Role/Position" />
                <Input placeholder="Package/Salary" />
                <Input placeholder="Location" />
                <Input type="date" placeholder="Application Deadline" />
                <Textarea placeholder="Job Description..." />
                <Button className="w-full" onClick={() => setIsDialogOpen(false)}>
                  Post Alert
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Briefcase className="w-8 h-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Active Alerts</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Building className="w-8 h-8 text-accent" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Companies</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-secondary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Applications</p>
                  <p className="text-2xl font-bold text-foreground">448</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="w-8 h-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                  <p className="text-2xl font-bold text-foreground">78%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Placement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {samplePlacements.map((placement) => (
            <Card key={placement.id} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{placement.company}</CardTitle>
                    <p className="text-lg font-medium text-primary">{placement.role}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge 
                      variant="outline" 
                      className={priorityColors[placement.priority]}
                    >
                      {getPriorityIcon(placement.priority)}
                      <span className="ml-1 capitalize">{placement.priority}</span>
                    </Badge>
                    <Badge variant="secondary">{placement.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{placement.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="font-medium">{placement.package}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>{placement.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-red-600" />
                      <span>Due: {new Date(placement.deadline).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span>{placement.applicants} applied</span>
                    </div>
                  </div>

                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm font-medium mb-1">Requirements:</p>
                    <p className="text-sm text-muted-foreground">{placement.requirements}</p>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button className="flex-1">Apply Now</Button>
                    <Button variant="outline">Save</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}