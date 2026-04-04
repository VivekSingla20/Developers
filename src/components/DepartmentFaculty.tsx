import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  Award,
  BookOpen,
  GraduationCap,
  Search,
  Users,
  MapPin,
  ExternalLink,
  Calendar,
} from "lucide-react";

interface FacultyMember {
  name: string;
  designation: string;
  specialization: string;
  email: string;
  phone?: string;
  office?: string;
  experience: string;
  qualification: string;
  publications: number;
  image: string;
  isCoordinator?: boolean;
  researchAreas: string[];
  courses: string[];
}

interface DepartmentFacultyProps {
  departmentName: string;
  facultyData: {
    coordinator: FacultyMember[];
    professors: FacultyMember[];
    associateProfessors: FacultyMember[];
    assistantProfessors: FacultyMember[];
    guestFaculty: FacultyMember[];
  };
}

const DepartmentFaculty: React.FC<DepartmentFacultyProps> = ({
  departmentName,
  facultyData,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterFaculty = (faculty: FacultyMember[]) => {
    return faculty.filter(
      (member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.specialization
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        member.researchAreas.some((area) =>
          area.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  };

  const FacultyCard = ({ faculty }: { faculty: FacultyMember }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative">
            <img
              src={`https://images.unsplash.com/${faculty.image}?w=120&h=120&fit=crop&crop=face`}
              alt={faculty.name}
              className="w-20 h-20 rounded-full object-cover border-3 border-blue-100 group-hover:border-blue-300 transition-colors"
            />
            {faculty.isCoordinator && (
              <div className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                Coordinator
              </div>
            )}
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {faculty.name}
            </h3>
            <p className="text-blue-600 font-semibold mb-2 text-sm">
              {faculty.designation}
            </p>
            <p className="text-slate-600 mb-3 text-sm">
              {faculty.specialization}
            </p>

            <div className="grid grid-cols-1 gap-2 text-xs text-slate-600 mb-3">
              <div className="flex items-center justify-center sm:justify-start">
                <GraduationCap className="h-3 w-3 mr-2 text-blue-500" />
                {faculty.qualification}
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Calendar className="h-3 w-3 mr-2 text-green-500" />
                {faculty.experience} Experience
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <BookOpen className="h-3 w-3 mr-2 text-purple-500" />
                {faculty.publications} Publications
              </div>
              {faculty.office && (
                <div className="flex items-center justify-center sm:justify-start">
                  <MapPin className="h-3 w-3 mr-2 text-red-500" />
                  {faculty.office}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-1 mb-3">
              {faculty.researchAreas.slice(0, 3).map((area, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {area}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" size="sm" className="text-xs">
                <Mail className="h-3 w-3 mr-1" />
                Contact
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                <ExternalLink className="h-3 w-3 mr-1" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const getTotalFaculty = () => {
    return Object.values(facultyData).reduce(
      (total, group) => total + group.length,
      0
    );
  };

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            {departmentName} Faculty
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Our Expert Faculty Team
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Meet our distinguished faculty members who bring decades of academic
            excellence and industry experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Card className="text-center bg-white shadow-md border-0">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600">
                {getTotalFaculty()}
              </div>
              <div className="text-slate-600 text-sm">Total Faculty</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-white shadow-md border-0">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600">
                {facultyData.professors.length}
              </div>
              <div className="text-slate-600 text-sm">Professors</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-white shadow-md border-0">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-purple-600">
                {facultyData.associateProfessors.length}
              </div>
              <div className="text-slate-600 text-sm">Associate Professors</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-white shadow-md border-0">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-orange-600">
                {facultyData.assistantProfessors.length}
              </div>
              <div className="text-slate-600 text-sm">Assistant Professors</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-white shadow-md border-0">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-red-600">
                {facultyData.guestFaculty.length}
              </div>
              <div className="text-slate-600 text-sm">Guest Faculty</div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search faculty by name, specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-slate-300 focus:border-blue-500 rounded-xl shadow-sm"
            />
          </div>
        </div>

        {/* Faculty Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full lg:w-fit mx-auto mb-8 h-auto p-1 bg-white shadow-lg rounded-xl gap-2 sm:gap-1">
            <TabsTrigger value="all" className="px-3 py-2 rounded-lg text-sm">
              All Faculty
            </TabsTrigger>
            <TabsTrigger
              value="coordinator"
              className="px-3 py-2 rounded-lg text-sm"
            >
              Coordinator
            </TabsTrigger>
            <TabsTrigger
              value="professors"
              className="px-3 py-2 rounded-lg text-sm"
            >
              Professors
            </TabsTrigger>
            <TabsTrigger
              value="associate"
              className="px-3 py-2 rounded-lg text-sm"
            >
              Associate Prof.
            </TabsTrigger>
            <TabsTrigger
              value="assistant"
              className="px-3 py-2 rounded-lg text-sm"
            >
              Assistant Prof.
            </TabsTrigger>
            <TabsTrigger value="guest" className="px-3 py-2 rounded-lg text-sm">
              Guest Faculty
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-8">
              {/* Coordinator */}
              {facultyData.coordinator.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Department Coordinator
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filterFaculty(facultyData.coordinator).map(
                      (faculty, index) => (
                        <FacultyCard key={index} faculty={faculty} />
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Professors */}
              {facultyData.professors.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Professors
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filterFaculty(facultyData.professors).map(
                      (faculty, index) => (
                        <FacultyCard key={index} faculty={faculty} />
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Associate Professors */}
              {facultyData.associateProfessors.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Associate Professors
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filterFaculty(facultyData.associateProfessors).map(
                      (faculty, index) => (
                        <FacultyCard key={index} faculty={faculty} />
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Assistant Professors */}
              {facultyData.assistantProfessors.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Assistant Professors
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filterFaculty(facultyData.assistantProfessors).map(
                      (faculty, index) => (
                        <FacultyCard key={index} faculty={faculty} />
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Guest Faculty */}
              {facultyData.guestFaculty.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Guest Faculty
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filterFaculty(facultyData.guestFaculty).map(
                      (faculty, index) => (
                        <FacultyCard key={index} faculty={faculty} />
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Individual Category Tabs */}
          <TabsContent value="coordinator">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filterFaculty(facultyData.coordinator).map((faculty, index) => (
                <FacultyCard key={index} faculty={faculty} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="professors">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filterFaculty(facultyData.professors).map((faculty, index) => (
                <FacultyCard key={index} faculty={faculty} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="associate">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filterFaculty(facultyData.associateProfessors).map(
                (faculty, index) => (
                  <FacultyCard key={index} faculty={faculty} />
                )
              )}
            </div>
          </TabsContent>

          <TabsContent value="assistant">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filterFaculty(facultyData.assistantProfessors).map(
                (faculty, index) => (
                  <FacultyCard key={index} faculty={faculty} />
                )
              )}
            </div>
          </TabsContent>

          <TabsContent value="guest">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filterFaculty(facultyData.guestFaculty).map((faculty, index) => (
                <FacultyCard key={index} faculty={faculty} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DepartmentFaculty;
