import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BookOpen, 
  Upload, 
  Download, 
  Search, 
  ThumbsUp, 
  Star, 
  Calendar,
  User,
  FileText
} from "lucide-react";

const subjects = [
  "Data Structures", "DBMS", "Computer Networks", "Operating Systems", 
  "Software Engineering", "Machine Learning", "Web Development"
];

const semesters = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

const sampleNotes = [
  {
    id: 1,
    title: "Data Structures Complete Notes",
    subject: "Data Structures",
    semester: "3rd",
    uploader: "Rajesh Kumar",
    uploadDate: "2024-01-15",
    downloads: 234,
    likes: 45,
    rating: 4.8,
    size: "2.4 MB",
    type: "PDF"
  },
  {
    id: 2,
    title: "DBMS Query Examples",
    subject: "DBMS",
    semester: "4th",
    uploader: "Priya Sharma",
    uploadDate: "2024-01-10",
    downloads: 156,
    likes: 32,
    rating: 4.6,
    size: "1.8 MB",
    type: "PDF"
  },
  {
    id: 3,
    title: "OS Process Management",
    subject: "Operating Systems",
    semester: "4th",
    uploader: "Amit Singh",
    uploadDate: "2024-01-05",
    downloads: 189,
    likes: 38,
    rating: 4.7,
    size: "3.1 MB",
    type: "PDF"
  }
];

export default function Notes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedSemester, setSelectedSemester] = useState("all");

  const filteredNotes = sampleNotes.filter(note => {
    return (
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedSubject === "all" || note.subject === selectedSubject) &&
      (selectedSemester === "all" || note.semester === selectedSemester)
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Study Notes</h1>
          <p className="text-muted-foreground">Share and access study materials</p>
        </div>

        {/* Upload Section */}
        <Card className="mb-8 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Upload className="w-5 h-5" />
              <span>Upload Notes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Upload your study notes</h3>
              <p className="text-muted-foreground mb-4">Drag and drop PDF files or click to browse</p>
              <Button>Choose Files</Button>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Find Notes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Search notes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                <SelectTrigger>
                  <SelectValue placeholder="Semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Semesters</SelectItem>
                  {semesters.map((sem) => (
                    <SelectItem key={sem} value={sem}>{sem} Semester</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <Card key={note.id} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg mb-2">{note.title}</CardTitle>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline">{note.subject}</Badge>
                      <Badge variant="secondary">{note.semester} Sem</Badge>
                    </div>
                  </div>
                  <FileText className="w-8 h-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>{note.uploader}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(note.uploadDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{note.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{note.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{note.rating}</span>
                      </div>
                    </div>
                    <span className="text-muted-foreground">{note.size}</span>
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline">
                      <ThumbsUp className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <Card className="shadow-soft">
            <CardContent className="text-center py-12">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No notes found</h3>
              <p className="text-muted-foreground">Try adjusting your search filters or upload some notes!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}