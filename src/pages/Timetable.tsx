import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Plus } from "lucide-react";

const departments = [
  "Computer Science", "Electronics", "Mechanical", "Civil", "Chemical"
];

const semesters = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

const timeSlots = [
  "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", 
  "12:00 - 13:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00"
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const sampleTimetable = {
  "Monday": [
    { time: "09:00 - 10:00", subject: "Data Structures", room: "CS-101", type: "Lecture" },
    { time: "10:00 - 11:00", subject: "DBMS", room: "CS-102", type: "Theory" },
    { time: "11:00 - 12:00", subject: "Break", room: "", type: "break" },
    { time: "12:00 - 13:00", subject: "OS Lab", room: "CS-Lab1", type: "Lab" },
  ],
  "Tuesday": [
    { time: "09:00 - 10:00", subject: "Computer Networks", room: "CS-103", type: "Lecture" },
    { time: "10:00 - 11:00", subject: "Software Engineering", room: "CS-104", type: "Theory" },
    { time: "11:00 - 12:00", subject: "Break", room: "", type: "break" },
    { time: "14:00 - 15:00", subject: "DBMS Lab", room: "CS-Lab2", type: "Lab" },
  ],
  // Add more days as needed
};

export default function Timetable() {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");

  const getSubjectTypeColor = (type: string) => {
    switch (type) {
      case "Lecture": return "bg-primary text-primary-foreground";
      case "Theory": return "bg-accent text-accent-foreground";
      case "Lab": return "bg-secondary text-secondary-foreground";
      case "break": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Class Timetable</h1>
          <p className="text-muted-foreground">View your weekly class schedule</p>
        </div>

        {/* Filters */}
        <Card className="mb-8 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Filter Schedule</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Department</label>
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Semester</label>
                <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Semester" />
                  </SelectTrigger>
                  <SelectContent>
                    {semesters.map((sem) => (
                      <SelectItem key={sem} value={sem}>{sem} Semester</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Class
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timetable Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {days.map((day) => (
            <Card key={day} className="shadow-soft">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-center">{day}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {sampleTimetable[day]?.map((slot, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      slot.type === "break" 
                        ? "border-dashed border-muted-foreground/30" 
                        : "border-border"
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{slot.time}</span>
                    </div>
                    {slot.type !== "break" ? (
                      <>
                        <h4 className="font-medium text-sm mb-1">{slot.subject}</h4>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{slot.room}</span>
                        </div>
                        <Badge variant="outline" className={`mt-2 text-xs ${getSubjectTypeColor(slot.type)}`}>
                          {slot.type}
                        </Badge>
                      </>
                    ) : (
                      <span className="text-sm text-muted-foreground italic">Break</span>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}