import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import Index from "./pages/Index";
import Timetable from "./pages/Timetable";
import Notes from "./pages/Notes";
import Placements from "./pages/Placements";
import Roommates from "./pages/Roommates";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/CampusSync">
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/roommates" element={<Roommates />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
