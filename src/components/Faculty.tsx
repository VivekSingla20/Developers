import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Mail,
  Phone,
  Award,
  BookOpen,
  GraduationCap,
  Users,
  Search,
  AlertCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useFaculty } from "@/hooks/useStrapi";
import { getStrapiImageUrl, StrapiFaculty } from "@/lib/strapi";

// Faculty Card
const FacultyCard = ({ faculty }: { faculty: StrapiFaculty }) => {
  const photoUrl = getStrapiImageUrl(faculty.photo ?? null);

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative flex-shrink-0">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt={faculty.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-[#118DC4]/20 group-hover:border-[#118DC4]/40 transition-colors"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-[#118DC4]/10 flex items-center justify-center border-4 border-[#118DC4]/20">
                <span className="text-2xl font-bold text-[#118DC4]">
                  {faculty.name.charAt(0)}
                </span>
              </div>
            )}
            <div className="absolute -bottom-1 -right-1 bg-green-500 h-6 w-6 rounded-full border-2 border-white" />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {faculty.name}
            </h3>
            <p className="text-[#118DC4] font-semibold mb-2">
              {faculty.designation}
            </p>
            <p className="text-slate-600 mb-3 text-sm leading-relaxed">
              {faculty.specialization}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600 mb-4">
              <div className="flex items-center justify-center sm:justify-start">
                <GraduationCap className="h-4 w-4 mr-2 text-[#118DC4]" />
                {faculty.qualification}
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Award className="h-4 w-4 mr-2 text-green-500" />
                {faculty.experience} Experience
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <BookOpen className="h-4 w-4 mr-2 text-purple-500" />
                {faculty.publications} Publications
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center justify-center hover:bg-[#118DC4]/10 hover:border-[#118DC4]/50"
                onClick={() => window.open(`mailto:${faculty.email}`)}
              >
                <Mail className="h-4 w-4 mr-2 text-[#118DC4]" />
                Email
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center justify-center hover:bg-green-50 hover:border-green-300"
                onClick={() => window.open(`tel:${faculty.phone}`)}
              >
                <Phone className="h-4 w-4 mr-2 text-green-500" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Loading Skeleton
const FacultySkeleton = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {[...Array(6)].map((_, i) => (
      <Card key={i} className="border-0 shadow-md">
        <CardContent className="p-6">
          <div className="flex space-x-4 animate-pulse">
            <div className="w-24 h-24 rounded-full bg-slate-200 flex-shrink-0" />
            <div className="flex-1 space-y-3">
              <div className="h-5 bg-slate-200 rounded w-3/4" />
              <div className="h-4 bg-slate-200 rounded w-1/2" />
              <div className="h-4 bg-slate-200 rounded w-full" />
              <div className="h-4 bg-slate-200 rounded w-2/3" />
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const DEPARTMENTS = [
  "Computer Science",
  "Information Technology",
  "Electronics",
  "Mechanical",
  "Electrical",
  "Biotechnology",
  "Applied Sciences",
] as const;

const DEPT_LABELS: Record<string, string> = {
  "Computer Science": "CSE",
  "Information Technology": "IT",
  "Electronics": "ECE",
  "Mechanical": "ME",
  "Electrical": "EEE",
  "Biotechnology": "BT",
  "Applied Sciences": "AS",
};

const stats = [
  { icon: Users, value: "120+", label: "Faculty Members" },
  { icon: GraduationCap, value: "85%", label: "With PhD" },
  { icon: BookOpen, value: "500+", label: "Publications" },
  { icon: Award, value: "30+", label: "Years Avg. Experience" },
];

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: faculty, isLoading, error } = useFaculty();

  // Group faculty by department
  const byDepartment = React.useMemo(() => {
    if (!faculty) return {} as Record<string, StrapiFaculty[]>;
    return faculty.reduce<Record<string, StrapiFaculty[]>>((acc, f) => {
      const dept = f.department || "Other";
      if (!acc[dept]) acc[dept] = [];
      acc[dept].push(f);
      return acc;
    }, {});
  }, [faculty]);

  const allFaculty = faculty ?? [];

  const filteredFaculty = React.useMemo(() => {
    if (!searchTerm) return allFaculty;
    const q = searchTerm.toLowerCase();
    return allFaculty.filter(
      (f) =>
        f.name.toLowerCase().includes(q) ||
        f.specialization?.toLowerCase().includes(q) ||
        f.department?.toLowerCase().includes(q)
    );
  }, [allFaculty, searchTerm]);

  return (
    <section id="faculty" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#118DC4]/10 text-[#118DC4] rounded-full text-sm font-medium mb-4">
            Our Faculty
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Meet Our Expert Faculty
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our distinguished faculty members bring decades of academic
            excellence, research expertise, and industry experience to provide
            world-class education.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-[#118DC4] mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search faculty by name, specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-slate-300 focus:border-[#118DC4] rounded-xl shadow-sm"
            />
          </div>
        </div>

        {/* Error state */}
        {error && (
          <div className="flex items-center justify-center gap-3 text-red-600 bg-red-50 rounded-xl p-6 mb-8">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p>Could not load faculty data. Please check your connection and try again.</p>
          </div>
        )}

        {/* Loading state */}
        {isLoading && <FacultySkeleton />}

        {/* Faculty Tabs */}
        {!isLoading && !error && (
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:flex lg:justify-center gap-2 mx-auto mb-12 bg-white rounded-xl p-2 w-full max-w-4xl">
              <TabsTrigger
                value="all"
                className="px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-100 data-[state=active]:bg-[#118DC4] data-[state=active]:text-white data-[state=active]:shadow-md text-sm font-medium"
              >
                All Faculty
              </TabsTrigger>
              {DEPARTMENTS.filter((d) => byDepartment[d]?.length > 0).map((dept) => (
                <TabsTrigger
                  key={dept}
                  value={dept}
                  className="px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-100 data-[state=active]:bg-[#118DC4] data-[state=active]:text-white data-[state=active]:shadow-md text-sm font-medium"
                >
                  {DEPT_LABELS[dept] ?? dept}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {(searchTerm ? filteredFaculty : allFaculty).map((f) => (
                  <FacultyCard key={f.id} faculty={f} />
                ))}
              </div>
              {filteredFaculty.length === 0 && searchTerm && (
                <p className="text-center text-slate-500 py-12">No faculty found matching "{searchTerm}"</p>
              )}
            </TabsContent>

            {DEPARTMENTS.filter((d) => byDepartment[d]?.length > 0).map((dept) => (
              <TabsContent key={dept} value={dept}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {byDepartment[dept].map((f) => (
                    <FacultyCard key={f.id} faculty={f} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#118DC4] to-[#0a6ba2] text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Join Our Faculty Team</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We are always looking for passionate educators and researchers to
              join our growing faculty community.
            </p>
            <Button className="bg-white text-[#118DC4] hover:bg-blue-50 font-semibold px-8 py-3">
              View Open Positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
