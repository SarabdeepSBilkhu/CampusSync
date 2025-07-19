import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  Plus, 
  MapPin, 
  DollarSign, 
  Clock, 
  MessageCircle,
  Filter,
  Star,
  Coffee,
  Volume2,
  Cigarette,
  Music
} from "lucide-react";

const sampleRoommates = [
  {
    id: 1,
    name: "Arjun Patel",
    branch: "Computer Science",
    semester: "6th",
    budget: "₹8,000-10,000",
    location: "Near Campus",
    sleepSchedule: "Night Owl",
    cleanliness: 4,
    smoking: false,
    drinking: false,
    pets: false,
    interests: ["Gaming", "Movies", "Coding"],
    description: "Looking for a calm roommate who respects study time. Love tech discussions!",
    avatar: "/placeholder.svg",
    verified: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "Priya Singh",
    branch: "Electronics",
    semester: "4th",
    budget: "₹6,000-8,000",
    location: "City Center",
    sleepSchedule: "Early Bird",
    cleanliness: 5,
    smoking: false,
    drinking: false,
    pets: true,
    interests: ["Reading", "Yoga", "Cooking"],
    description: "Early riser, loves cooking healthy meals. Looking for someone who appreciates a clean space.",
    avatar: "/placeholder.svg",
    verified: true,
    rating: 4.9
  },
  {
    id: 3,
    name: "Rohit Kumar",
    branch: "Mechanical",
    semester: "5th",
    budget: "₹7,000-9,000",
    location: "Hostel Area",
    sleepSchedule: "Flexible",
    cleanliness: 4,
    smoking: false,
    drinking: true,
    pets: false,
    interests: ["Sports", "Music", "Photography"],
    description: "Outgoing person who loves weekend adventures. Looking for a fun roommate!",
    avatar: "/placeholder.svg",
    verified: false,
    rating: 4.6
  }
];

const preferences = {
  sleepSchedule: ["Early Bird", "Night Owl", "Flexible"],
  location: ["Near Campus", "City Center", "Hostel Area", "Off Campus"],
  budget: ["₹5,000-7,000", "₹6,000-8,000", "₹7,000-9,000", "₹8,000-10,000", "₹10,000+"]
};

export default function Roommates() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filters, setFilters] = useState({
    location: "",
    budget: "",
    sleepSchedule: ""
  });

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const filteredRoommates = sampleRoommates.filter(roommate => {
    return (
      (!filters.location || roommate.location === filters.location) &&
      (!filters.budget || roommate.budget === filters.budget) &&
      (!filters.sleepSchedule || roommate.sleepSchedule === filters.sleepSchedule)
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Find Roommates</h1>
            <p className="text-muted-foreground">Connect with compatible roommates</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create Roommate Profile</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input placeholder="Full Name" />
                <Input placeholder="Branch/Department" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Semester" />
                  </SelectTrigger>
                  <SelectContent>
                    {["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"].map(sem => (
                      <SelectItem key={sem} value={sem}>{sem} Semester</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Budget Range" />
                  </SelectTrigger>
                  <SelectContent>
                    {preferences.budget.map(budget => (
                      <SelectItem key={budget} value={budget}>{budget}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button className="w-full" onClick={() => setIsDialogOpen(false)}>
                  Create Profile
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <Card className="mb-8 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Filter Preferences</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select value={filters.location} onValueChange={(value) => setFilters({...filters, location: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Location Preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Locations</SelectItem>
                  {preferences.location.map(loc => (
                    <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filters.budget} onValueChange={(value) => setFilters({...filters, budget: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Budget Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Budgets</SelectItem>
                  {preferences.budget.map(budget => (
                    <SelectItem key={budget} value={budget}>{budget}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filters.sleepSchedule} onValueChange={(value) => setFilters({...filters, sleepSchedule: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Sleep Schedule" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Schedule</SelectItem>
                  {preferences.sleepSchedule.map(schedule => (
                    <SelectItem key={schedule} value={schedule}>{schedule}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Roommate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoommates.map((roommate) => (
            <Card key={roommate.id} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={roommate.avatar} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {getInitials(roommate.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-lg">{roommate.name}</CardTitle>
                      {roommate.verified && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{roommate.branch}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{roommate.rating}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">{roommate.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span>{roommate.budget}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>{roommate.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-purple-600" />
                      <span>{roommate.sleepSchedule}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-600" />
                      <span>Cleanliness: {roommate.cleanliness}/5</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {roommate.interests.map((interest, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Cigarette className="w-3 h-3" />
                      <span>{roommate.smoking ? "Smoker" : "Non-smoker"}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Coffee className="w-3 h-3" />
                      <span>{roommate.drinking ? "Drinks" : "No drinks"}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Connect
                    </Button>
                    <Button size="sm" variant="outline">
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRoommates.length === 0 && (
          <Card className="shadow-soft">
            <CardContent className="text-center py-12">
              <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No roommates found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or create your profile to get started!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}