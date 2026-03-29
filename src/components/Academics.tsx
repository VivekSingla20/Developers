import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GraduationCap,
  Clock,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  Calculator,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Academics = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("undergraduate");

  useEffect(() => {
    // Handle tab switching (no hash for programs)
    setActiveTab("undergraduate");

    // Handle scrolling to specific sections for hash fragments
    const hash = location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Remove the # character
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  // Handle tab change and scroll to tabs section
  const handleTabChange = (value) => {
    setActiveTab(value);
    // Scroll to the tabs section for better visibility
    const tabsElement = document.getElementById('academics-tabs');
    if (tabsElement) {
      setTimeout(() => {
        tabsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };
  const programs = {
    undergraduate: [
      {
        name: "Computer Science & Engineering",
        duration: "4 Years",
        seats: "60",
        code: "CSE",
        description:
          "Comprehensive program covering software development, algorithms, and emerging technologies.",
        highlights: [
          "AI/ML",
          "Data Science",
          "Software Engineering",
          "Cybersecurity",
        ],
        link: "/departments/cse",
      },
      {
        name: "Electronics & Communication Engineering",
        duration: "4 Years",
        seats: "60",
        code: "ECE",
        description:
          "Focus on electronics, communication systems, and signal processing.",
        highlights: [
          "VLSI Design",
          "Embedded Systems",
          "Communication Networks",
          "IoT",
        ],
        link: "/departments/ece",
      },
      {
        name: "Electrical & Electronics Engineering",
        duration: "4 Years",
        seats: "60",
        code: "EEE",
        description:
          "Power systems, control engineering, and renewable energy solutions.",
        highlights: [
          "Power Systems",
          "Control Engineering",
          "Renewable Energy",
          "Electric Drives",
        ],
        link: "/departments/eee",
      },
      {
        name: "Information Technology",
        duration: "4 Years",
        seats: "60",
        code: "IT",
        description:
          "Modern IT solutions, web technologies, and digital transformation.",
        highlights: [
          "Web Development",
          "Mobile Computing",
          "Cloud Technology",
          "Digital Marketing",
        ],
        link: "/departments/it",
      },
      {
        name: "Mechanical Engineering",
        duration: "4 Years",
        seats: "60",
        code: "ME",
        description:
          "Traditional engineering discipline with modern applications.",
        highlights: [
          "CAD/CAM",
          "Robotics",
          "Thermal Engineering",
          "Manufacturing",
        ],
        link: "/departments/me",
      },
      {
        name: "Biotechnology",
        duration: "4 Years",
        seats: "30",
        code: "BT",
        description:
          "Interdisciplinary program combining biology with technology.",
        highlights: [
          "Genetic Engineering",
          "Bioinformatics",
          "Bioprocessing",
          "Medical Biotechnology",
        ],
        link: "/departments/bt",
      },
      {
        name: "Applied Sciences",
        duration: "Foundation",
        seats: "All Students",
        code: "AS",
        description:
          "Foundation courses in mathematics, physics, chemistry, and communication.",
        highlights: [
          "Mathematics",
          "Physics",
          "Chemistry",
          "English & Communication",
        ],
        link: "/departments/as",
      },
    ],
    postgraduate: [
      {
        name: "M.Tech Computer Science & Engineering",
        duration: "2 Years",
        seats: "25",
        code: "M.Tech CSE",
        description: "Advanced study in computer science with research focus.",
        highlights: [
          "Research Projects",
          "Advanced Algorithms",
          "Machine Learning",
          "Thesis Work",
        ],
      },
      {
        name: "M.Tech Electronics & Communication",
        duration: "2 Years",
        seats: "25",
        code: "M.Tech ECE",
        description:
          "Specialized program in advanced electronics and communication.",
        highlights: [
          "VLSI Systems",
          "Signal Processing",
          "Communication Theory",
          "Research",
        ],
      },
      {
        name: "MBA (Technology Management)",
        duration: "2 Years",
        seats: "30",
        code: "MBA-TM",
        description: "Management program tailored for engineering graduates.",
        highlights: [
          "Technology Strategy",
          "Innovation Management",
          "Leadership",
          "Entrepreneurship",
        ],
      },
    ],
    doctoral: [
      {
        name: "Ph.D in Engineering",
        duration: "3-6 Years",
        seats: "Variable",
        code: "Ph.D",
        description:
          "Research-intensive program for aspiring researchers and academicians.",
        highlights: [
          "Original Research",
          "Publications",
          "Teaching Experience",
          "Industry Collaboration",
        ],
      },
    ],
  };

  const facilities = [
    {
      icon: BookOpen,
      title: "Central Library",
      description: "Over 50,000 books and digital resources",
      link: "/about#infrastructure",
    },
    {
      icon: Users,
      title: "Research Labs",
      description: "State-of-the-art laboratories for all departments",
      link: "/research",
    },
    {
      icon: Award,
      title: "Industry Partnerships",
      description: "Collaborations with leading companies",
      link: "/placements",
    },
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      description: "Experienced professors and industry experts",
      link: "/faculty",
    },
  ];

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block px-4 py-2 text-sm font-medium mb-4 rounded-full"
            style={{ backgroundColor: "#e6f3fb", color: "#118DC4" }}
          >
            Academic Programs
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            World-Class Education
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive engineering education programs designed to prepare
            students for successful careers in technology and innovation.
          </p>
        </div>

        {/* Programs Tabs */}
        <Tabs id="academics-tabs" value={activeTab} onValueChange={handleTabChange} className="mb-20">
          <TabsList className="grid w-full lg:w-fit mx-auto grid-cols-3 mb-8 h-auto">
            <TabsTrigger value="undergraduate" className="px-2 sm:px-8 text-xs sm:text-base">
              Undergraduate
            </TabsTrigger>
            <TabsTrigger value="postgraduate" className="px-2 sm:px-8 text-xs sm:text-base">
              Postgraduate
            </TabsTrigger>
            <TabsTrigger value="doctoral" className="px-2 sm:px-8 text-xs sm:text-base">
              Doctoral
            </TabsTrigger>
          </TabsList>

          {Object.entries(programs).map(([level, programList]) => (
            <TabsContent key={level} value={level}>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {programList.map((program, index) => (
                  <Card
                    key={index}
                    className="hover-card border border-slate-200 shadow-sm"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg text-slate-900 leading-tight pr-4">
                          {program.name}
                        </CardTitle>
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                          style={{
                            backgroundColor: "#e6f3fb",
                            color: "#118DC4",
                          }}
                        >
                          {program.code}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-slate-600">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {program.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {program.seats} Seats
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                        {program.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3 text-sm">
                          Key Highlights:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {program.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link to={program.link}>
                        <Button
                          variant="outline"
                          className="w-full hover-button"
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Academic Calendar & Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Academic Resources
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/downloads">
              <Card id="calendar" className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <BookOpen
                    className="h-8 w-8 mx-auto mb-3"
                    style={{ color: "#118DC4" }}
                  />
                  <h4 className="font-semibold mb-2">Academic Calendar</h4>
                  <p className="text-sm text-gray-600">
                    Important dates and schedules
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/previous-papers">
              <Card id="timetable" className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <BookOpen
                    className="h-8 w-8 mx-auto mb-3"
                    style={{ color: "#118DC4" }}
                  />
                  <h4 className="font-semibold mb-2">Previous Papers</h4>
                  <p className="text-sm text-gray-600">
                    Question papers archive
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/downloads">
              <Card id="syllabus" className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Calculator
                    className="h-8 w-8 mx-auto mb-3"
                    style={{ color: "#118DC4" }}
                  />
                  <h4 className="font-semibold mb-2">Syllabus</h4>
                  <p className="text-sm text-gray-600">
                    Curriculum and syllabus
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/downloads">
              <Card id="examination" className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Award
                    className="h-8 w-8 mx-auto mb-3"
                    style={{ color: "#118DC4" }}
                  />
                  <h4 className="font-semibold mb-2">Examination</h4>
                  <p className="text-sm text-gray-600">
                    Exam schedules and results
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Facilities */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Academic Facilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Link key={index} to={facility.link}>
                <Card className="text-center hover-card border-0 shadow-lg bg-white cursor-pointer">
                  <CardContent className="p-8">
                    <facility.icon
                      className="h-12 w-12 mx-auto mb-4"
                      style={{ color: "#118DC4" }}
                    />
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      {facility.title}
                    </h4>
                    <p className="text-slate-600">{facility.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
