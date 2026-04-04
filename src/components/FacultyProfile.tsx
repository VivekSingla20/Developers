
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, Phone, Globe, Award, BookOpen, GraduationCap, 
  MapPin, Calendar, Users, FileText, ExternalLink 
} from 'lucide-react';

interface Publication {
  title: string;
  journal: string;
  year: string;
  type: 'Journal' | 'Conference' | 'Book Chapter';
}

interface Project {
  title: string;
  funding: string;
  duration: string;
  role: string;
}

interface FacultyProfileProps {
  faculty: {
    name: string;
    designation: string;
    department: string;
    email: string;
    phone?: string;
    office?: string;
    image: string;
    qualifications: string[];
    specializations: string[];
    experience: string;
    teachingExperience: string;
    researchInterests: string[];
    publications: Publication[];
    projects: Project[];
    awards: string[];
    memberships: string[];
    courses: string[];
    biography?: string;
    googleScholar?: string;
    researchGate?: string;
    linkedin?: string;
  };
}

const FacultyProfile: React.FC<FacultyProfileProps> = ({ faculty }) => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              <img
                src={`https://images.unsplash.com/${faculty.image}?w=200&h=200&fit=crop&crop=face`}
                alt={faculty.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-3xl font-bold mb-2">{faculty.name}</h1>
                <p className="text-blue-100 text-xl mb-2">{faculty.designation}</p>
                <p className="text-blue-200 mb-4">{faculty.department}</p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                  <div className="flex items-center text-blue-100">
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="text-sm">{faculty.email}</span>
                  </div>
                  {faculty.phone && (
                    <div className="flex items-center text-blue-100">
                      <Phone className="h-4 w-4 mr-2" />
                      <span className="text-sm">{faculty.phone}</span>
                    </div>
                  )}
                  {faculty.office && (
                    <div className="flex items-center text-blue-100">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{faculty.office}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {faculty.googleScholar && (
                    <Button asChild variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-blue-600">
                      <a href={faculty.googleScholar} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Google Scholar
                      </a>
                    </Button>
                  )}
                  {faculty.researchGate && (
                    <Button asChild variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-blue-600">
                      <a href={faculty.researchGate} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        ResearchGate
                      </a>
                    </Button>
                  )}
                  {faculty.linkedin && (
                    <Button asChild variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-blue-600">
                      <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Biography */}
          {faculty.biography && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Biography
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{faculty.biography}</p>
              </CardContent>
            </Card>
          )}

          {/* Research Interests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Research Interests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {faculty.researchInterests.map((interest, index) => (
                  <Badge key={index} variant="secondary">{interest}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Publications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Recent Publications ({faculty.publications.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {faculty.publications.slice(0, 5).map((pub, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-gray-900 mb-1">{pub.title}</h4>
                    <p className="text-gray-600 text-sm mb-1">{pub.journal}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">{pub.type}</Badge>
                      <span className="text-gray-500 text-xs">{pub.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Research Projects */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Research Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {faculty.projects.map((project, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-gray-900 mb-1">{project.title}</h4>
                    <p className="text-gray-600 text-sm mb-2">Funding: {project.funding}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Duration: {project.duration}</span>
                      <span>Role: {project.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Quick Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                Quick Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-600 text-sm">{faculty.experience}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Teaching Experience</h4>
                <p className="text-gray-600 text-sm">{faculty.teachingExperience}</p>
              </div>
            </CardContent>
          </Card>

          {/* Qualifications */}
          <Card>
            <CardHeader>
              <CardTitle>Qualifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {faculty.qualifications.map((qual, index) => (
                  <li key={index} className="text-gray-700 text-sm flex items-start">
                    <GraduationCap className="h-4 w-4 mr-2 mt-0.5 text-blue-600" />
                    {qual}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Specializations */}
          <Card>
            <CardHeader>
              <CardTitle>Specializations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {faculty.specializations.map((spec, index) => (
                  <Badge key={index} variant="outline">{spec}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Current Courses */}
          <Card>
            <CardHeader>
              <CardTitle>Current Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {faculty.courses.map((course, index) => (
                  <li key={index} className="text-gray-700 text-sm flex items-start">
                    <BookOpen className="h-4 w-4 mr-2 mt-0.5 text-green-600" />
                    {course}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Awards */}
          {faculty.awards.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Awards & Honors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {faculty.awards.map((award, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start">
                      <Award className="h-4 w-4 mr-2 mt-0.5 text-yellow-600" />
                      {award}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Professional Memberships */}
          {faculty.memberships.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Professional Memberships</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {faculty.memberships.map((membership, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start">
                      <Users className="h-4 w-4 mr-2 mt-0.5 text-purple-600" />
                      {membership}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
