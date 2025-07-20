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
  const [newAlert, setNewAlert] = useState({
    company: "",
    role: "",
    package: "",
    location: "",
    deadline: "",
    description: ""
  });

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high": return <TrendingUp className="w-4 h-4" />;
      case "medium": return <Star className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 fade-in-up">
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
                <Input 
                  placeholder="Company Name" 
                  value={newAlert.company}
                  onChange={(e) => setNewAlert({...newAlert, company: e.target.value})}
                />
                <Input 
                  placeholder="Role/Position" 
                  value={newAlert.role}
                  onChange={(e) => setNewAlert({...newAlert, role: e.target.value})}
                />
                <Input 
                  placeholder="Package/Salary" 
                  value={newAlert.package}
                  onChange={(e) => setNewAlert({...newAlert, package: e.target.value})}
                />
                <Input 
                  placeholder="Location" 
                  value={newAlert.location}
                  onChange={(e) => setNewAlert({...newAlert, location: e.target.value})}
                />
                <Input 
                  type="date" 
                  placeholder="Application Deadline"
                  value={newAlert.deadline}
                  onChange={(e) => setNewAlert({...newAlert, deadline: e.target.value})}
                />
                <Textarea 
                  placeholder="Job Description..." 
                  value={newAlert.description}
                  onChange={(e) => setNewAlert({...newAlert, description: e.target.value})}
                />
                <Button 
                  className="w-full" 
                  onClick={() => {
                    if (newAlert.company && newAlert.role) {
                      alert(`Placement alert for ${newAlert.role} at ${newAlert.company} posted successfully!`);
                      setNewAlert({company: "", role: "", package: "", location: "", deadline: "", description: ""});
                      setIsDialogOpen(false);
                    } else {
                      alert("Please fill in at least the company name and role!");
                    }
                  }}
                >
                  Post Alert
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft card-hover fade-in-up stagger-1">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Briefcase className="w-8 h-8 text-primary hover-scale" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Active Alerts</p>
                  <p className="text-2xl font-bold text-foreground count-up">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-soft card-hover fade-in-up stagger-2">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Building className="w-8 h-8 text-accent hover-scale" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Companies</p>
                  <p className="text-2xl font-bold text-foreground count-up">8</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-soft card-hover fade-in-up stagger-3">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-secondary hover-scale" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Applications</p>
                  <p className="text-2xl font-bold text-foreground count-up">448</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-soft card-hover fade-in-up stagger-4">
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="w-8 h-8 text-primary hover-scale" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                  <p className="text-2xl font-bold text-foreground count-up">78%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Placement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {samplePlacements.map((placement, index) => (
            <Card key={placement.id} className="shadow-soft hover:shadow-medium transition-shadow card-hover fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
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
                    <Button 
                      className="flex-1"
                      onClick={() => {
                        alert(`Application submitted for ${placement.role} at ${placement.company}! You would be redirected to the company's application portal in a real app.`);
                      }}
                    >
                      Apply Now
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        alert(`Saved ${placement.role} at ${placement.company} to your favorites!`);
                      }}
                    >
                      Save
                    </Button>
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