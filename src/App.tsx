import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "@/pages/Index";
import ContactPage from "@/pages/ContactPage";
import AboutPU from "@/pages/AboutPU";
import AboutPage from "@/pages/AboutPage";
import AcademicsPage from "@/pages/AcademicsPage";
import DepartmentsPage from "@/pages/DepartmentsPage";
import DepartmentCSE from "@/pages/DepartmentCSE";
import DepartmentIT from "@/pages/DepartmentIT";
import DepartmentECE from "@/pages/DepartmentECE";
import DepartmentEEE from "@/pages/DepartmentEEE";
import DepartmentBT from "@/pages/DepartmentBT";
import NotFound from "@/pages/NotFound";
import DepartmentME from "@/pages/DepartmentME";
import DepartmentAS from "@/pages/DepartmentAS";
import AdmissionsPage from "@/pages/AdmissionsPage";
import ResearchPage from "@/pages/ResearchPage";
import FacultyPage from "@/pages/FacultyPage";
import CommitteesPage from "@/pages/CommitteesPage";
import PlacementsPage from "@/pages/PlacementsPage";
import PreviousYearPapersPage from "@/pages/PreviousYearPapersPage";
import StudentsPage from "./pages/StudentsPage";
import ImportantDownloadsPage from "./pages/ImportantDownloadsPage";
import FacultyProfilePage from "./pages/FacultyProfilePage";
import NewsPage from "./pages/NewsPage";
import EmploymentPage from "./pages/EmploymentPage";
import ScrollToTop from "./lib/ScrollToTop";

const queryClient = new QueryClient();

const ExternalRedirect = ({ to }: { to: string }) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/pu" element={<AboutPU />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/departments/cse" element={<DepartmentCSE />} />
          <Route path="/departments/it" element={<DepartmentIT />} />
          <Route path="/departments/ece" element={<DepartmentECE />} />
          <Route path="/departments/eee" element={<DepartmentEEE />} />
          <Route path="/departments/bt" element={<DepartmentBT />} />
          <Route path="/departments/me" element={<DepartmentME />} />
          <Route path="/departments/as" element={<DepartmentAS />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/committees" element={<CommitteesPage />} />
          <Route path="/placements" element={<PlacementsPage />} />
          <Route path="/previous-papers" element={<PreviousYearPapersPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/downloads" element={<ImportantDownloadsPage />} />
          <Route path="/importantDownload" element={<Navigate to="/downloads" replace />} />
          <Route path="/facultyprofile" element={<FacultyProfilePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/employment" element={<EmploymentPage />} />

          {/* Redirect routes for legacy/footer links */}
          <Route path="/scholarships/shraman" element={<Navigate to="/students#scholarships" replace />} />
          <Route path="/student-notices" element={<Navigate to="/news" replace />} />
          <Route path="/aicte-approval" element={<Navigate to="/downloads" replace />} />
          <Route path="/nba-accreditation" element={<Navigate to="/downloads" replace />} />
          <Route path="/nirf" element={<Navigate to="/downloads" replace />} />
          <Route path="/handbook" element={<Navigate to="/downloads" replace />} />
          <Route path="/research-scholars" element={<Navigate to="/students#research-scholars" replace />} />

          {/* External official portals */}
          <Route path="/teqip" element={<ExternalRedirect to="https://uiet.puchd.ac.in/teqip/" />} />
          <Route path="/tbiu" element={<ExternalRedirect to="https://tbiu.dicpu.in/" />} />
          <Route path="/nats" element={<ExternalRedirect to="https://www.mhrdnats.gov.in/" />} />
          <Route path="/rti" element={<ExternalRedirect to="https://rti.puchd.ac.in/" />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
