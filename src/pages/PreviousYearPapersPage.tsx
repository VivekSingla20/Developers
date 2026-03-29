import React, { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Calendar, Book, Search, Filter, AlertCircle } from "lucide-react";
import { usePreviousYearPapers } from "@/hooks/useStrapi";
import { getStrapiImageUrl, StrapiPreviousYearPaper } from "@/lib/strapi";

// Helpers
const DEPARTMENTS = ["All", "CSE", "ECE", "EEE", "IT", "ME", "BT", "AS"] as const;
const PROGRAMS = ["B.Tech", "M.Tech", "Ph.D"] as const;

const deptColors: Record<string, string> = {
  CSE: "bg-blue-100 text-blue-800",
  ECE: "bg-purple-100 text-purple-800",
  EEE: "bg-yellow-100 text-yellow-800",
  IT: "bg-green-100 text-green-800",
  ME: "bg-orange-100 text-orange-800",
  BT: "bg-pink-100 text-pink-800",
  AS: "bg-gray-100 text-gray-800",
};

// Paper card
const PaperCard = ({ paper }: { paper: StrapiPreviousYearPaper }) => {
  const fileUrl = getStrapiImageUrl(paper.file ?? null) ?? paper.fileUrl;

  return (
    <Card className="border hover:shadow-md transition-shadow bg-white">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <FileText className="h-8 w-8 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="min-w-0">
              <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1">{paper.subject}</h4>
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <Badge className={`text-xs ${deptColors[paper.department] ?? 'bg-gray-100 text-gray-700'}`}>
                  {paper.department}
                </Badge>
                <span className="text-gray-500 flex items-center gap-1">
                  <Calendar className="h-3 w-3" />{paper.year}
                </span>
                <span className="text-gray-500">Sem {paper.semester}</span>
                {paper.credits && (
                  <span className="text-gray-400">{paper.credits} credits</span>
                )}
              </div>
            </div>
          </div>
          {fileUrl ? (
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-[#118DC4] hover:bg-[#0d7db0] flex-shrink-0">
                <Download className="h-3.5 w-3.5 mr-1" />PDF
              </Button>
            </a>
          ) : (
            <Button size="sm" variant="outline" disabled className="flex-shrink-0 text-gray-400">
              <Download className="h-3.5 w-3.5 mr-1" />PDF
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// Skeleton
const PapersSkeleton = () => (
  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {[...Array(9)].map((_, i) => (
      <Card key={i} className="animate-pulse">
        <CardContent className="p-4">
          <div className="flex gap-3">
            <div className="h-8 w-8 bg-slate-200 rounded flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-slate-200 rounded w-3/4" />
              <div className="h-3 bg-slate-200 rounded w-1/2" />
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

// Main Page
const PreviousYearPapersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const { data: allPapers, isLoading, error } = usePreviousYearPapers();

  // Derive unique years from data
  const years = useMemo(() => {
    if (!allPapers) return ["All"];
    const unique = [...new Set(allPapers.map(p => p.year))].sort((a, b) => b.localeCompare(a));
    return ["All", ...unique];
  }, [allPapers]);

  // Filter papers
  const filterPapers = (program: string) => {
    let items = (allPapers ?? []).filter(p => p.program === program);
    if (selectedDepartment !== "All") items = items.filter(p => p.department === selectedDepartment);
    if (selectedYear !== "All") items = items.filter(p => p.year === selectedYear);
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      items = items.filter(p =>
        p.subject.toLowerCase().includes(q) ||
        p.department.toLowerCase().includes(q)
      );
    }
    return items;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#118DC4] to-[#0d6fa3] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Book className="h-16 w-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Previous Year Papers</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Access past examination papers to prepare effectively for your exams.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by subject..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#118DC4] focus:border-[#118DC4]"
              />
            </div>

            <div className="flex gap-2 flex-wrap items-center">
              <Filter className="h-4 w-4 text-gray-500" />
              {/* Department */}
              <select
                value={selectedDepartment}
                onChange={e => setSelectedDepartment(e.target.value)}
                className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#118DC4]"
              >
                {DEPARTMENTS.map(d => <option key={d} value={d}>{d === "All" ? "All Depts" : d}</option>)}
              </select>
              {/* Year */}
              <select
                value={selectedYear}
                onChange={e => setSelectedYear(e.target.value)}
                className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#118DC4]"
              >
                {years.map(y => <option key={y} value={y}>{y === "All" ? "All Years" : y}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Papers by program */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          {error && (
            <div className="flex items-center gap-3 text-red-600 bg-red-50 rounded-xl p-5 mb-8">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p>Could not load papers. Please check your connection.</p>
            </div>
          )}

          <Tabs defaultValue="B.Tech">
            <TabsList className="mb-8 bg-white shadow-sm w-full grid grid-cols-1 sm:grid-cols-3 h-auto">
              {PROGRAMS.map(p => (
                <TabsTrigger key={p} value={p}
                  className="data-[state=active]:bg-[#118DC4] data-[state=active]:text-white">
                  {p}
                </TabsTrigger>
              ))}
            </TabsList>

            {PROGRAMS.map(program => {
              const papers = filterPapers(program);
              return (
                <TabsContent key={program} value={program}>
                  {isLoading ? <PapersSkeleton /> : papers.length === 0 ? (
                    <div className="text-center py-16 text-gray-500">
                      <FileText className="h-12 w-12 mx-auto mb-4 opacity-30" />
                      <p>No papers found for the selected filters.</p>
                    </div>
                  ) : (
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {papers.map(paper => <PaperCard key={paper.id} paper={paper} />)}
                    </div>
                  )}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PreviousYearPapersPage;