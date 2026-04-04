import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DepartmentFaculty from "@/components/DepartmentFaculty";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GraduationCap,
  Users,
  Award,
  Building,
  Code,
  Beaker,
  ChevronRight,
  ExternalLink,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Trophy,
  Target
} from "lucide-react";

const DepartmentIT = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Department statistics
  const stats = [
    { label: "Students Enrolled", value: "400+", icon: Users },
    { label: "Faculty", value: "28+", icon: GraduationCap },
    { label: "Laboratories", value: "6", icon: Beaker },
    { label: "Placement", value: "95%", icon: Trophy },
  ];

  // Academic programs
  const programs = [
    {
      name: "B.E. Information Technology",
      duration: "4 Years",
      intake: "60 Students",
      eligibility: "10+2 with Physics, Chemistry, Mathematics",
      highlights: [
        "AICTE Approved",
        "Industry-Oriented Curriculum",
        "Research Opportunities",
      ],
    },
    {
      name: "M.E. Information Technology",
      duration: "2 Years",
      intake: "18 Students",
      eligibility: "B.E./B.Tech in IT or related field",
      highlights: [
        "Research-Based Program",
        "Thesis Work",
        "Industry Collaboration",
      ],
    },
    {
      name: "Ph.D Information Technology",
      duration: "3-5 Years",
      intake: "Variable",
      eligibility: "M.E./M.Tech with valid GATE/NET score",
      highlights: [
        "Advanced Research",
        "Publications",
        "Teaching Assistantship",
      ],
    },
  ];

  const researchAreas = [
    { area: '5G & Beyond Communication', projects: 8, funding: '₹25L' },
    { area: 'VLSI Design & Testing', projects: 12, funding: '₹35L' },
    { area: 'IoT & Wireless Sensor Networks', projects: 10, funding: '₹20L' },
    { area: 'Digital Signal Processing', projects: 6, funding: '₹15L' },
    { area: 'Antenna Design & RF Engineering', projects: 5, funding: '₹18L' },
    { area: 'Machine Learning in Communications', projects: 7, funding: '₹22L' }
  ];

  // Recent achievements
  const achievements = [
    {
      title: "Best Department Award",
      description:
        "Recognized for excellence in academic performance and research",
      year: "2023",
    },
    {
      title: "Research Publications",
      description:
        "50+ papers published in international journals and conferences",
      year: "2023",
    },
    {
      title: "Industry Collaborations",
      description:
        "MoUs signed with leading tech companies for internships and placements",
      year: "2023",
    },
    {
      title: "Student Achievements",
      description:
        "Students secured top positions in coding competitions and hackathons",
      year: "2023",
    },
  ];

  // Infrastructure and facilities
  const facilities = [
    {
      name: "Advanced Computing Lab",
      description: "High-performance workstations with latest software tools",
      capacity: "40 Systems",
    },
    {
      name: "Network Security Lab",
      description: "Dedicated lab for cybersecurity and network analysis",
      capacity: "30 Systems",
    },
    {
      name: "Mobile Development Lab",
      description: "Android and iOS development environment",
      capacity: "35 Systems",
    },
    {
      name: "AI/ML Research Lab",
      description: "GPU-enabled systems for machine learning research",
      capacity: "20 Systems",
    },
    {
      name: "Project Development Lab",
      description: "24/7 access lab for final year projects",
      capacity: "25 Systems",
    },
    {
      name: "Smart Classrooms",
      description: "Interactive boards and multimedia facilities",
      capacity: "3 Rooms",
    },
  ];

  // Fixed faculty data structure with all required properties
  const facultyData = {
    coordinator: [
      {
        name: "Dr. Rajesh Kumar",
        designation: "Professor & Head",
        specialization: "Machine Learning, Data Mining",
        email: "rajesh.kumar@uiet.puchd.ac.in",
        phone: "+91-172-2534816",
        office: "Room 301, UIET Building",
        experience: "15+ years",
        qualification: "Ph.D. Computer Science, IIT Delhi",
        publications: 45,
        image: "photo-1507003211169-0a1dd7228f2d",
        isCoordinator: true,
        researchAreas: [
          "Machine Learning",
          "Data Mining",
          "Artificial Intelligence",
        ],
        courses: ["Advanced Algorithms", "Machine Learning", "Data Structures"],
      },
    ],
    professors: [
      {
        name: "Dr. Priya Sharma",
        designation: "Professor",
        specialization: "Artificial Intelligence, Neural Networks",
        email: "priya.sharma@uiet.puchd.ac.in",
        experience: "12+ years",
        qualification: "Ph.D. Computer Science, IIT Bombay",
        publications: 38,
        image: "photo-1494790108755-2616b612b786",
        researchAreas: [
          "Artificial Intelligence",
          "Neural Networks",
          "Deep Learning",
        ],
        courses: ["AI Fundamentals", "Neural Networks", "Pattern Recognition"],
      },
      {
        name: "Dr. Amit Singh",
        designation: "Professor",
        specialization: "Software Engineering, Database Systems",
        email: "amit.singh@uiet.puchd.ac.in",
        experience: "14+ years",
        qualification: "Ph.D. Software Engineering, IIT Kanpur",
        publications: 42,
        image: "photo-1472099645785-5658abf4ff4e",
        researchAreas: [
          "Software Engineering",
          "Database Systems",
          "System Design",
        ],
        courses: [
          "Software Engineering",
          "Database Management",
          "System Analysis",
        ],
      },
    ],
    associateProfessors: [
      {
        name: "Dr. Neha Gupta",
        designation: "Associate Professor",
        specialization: "Computer Networks, Cybersecurity",
        email: "neha.gupta@uiet.puchd.ac.in",
        experience: "10+ years",
        qualification: "Ph.D. Computer Networks, NIT Kurukshetra",
        publications: 28,
        image: "photo-1438761681033-6461ffad8d80",
        researchAreas: [
          "Computer Networks",
          "Cybersecurity",
          "Network Security",
        ],
        courses: ["Computer Networks", "Network Security", "Cryptography"],
      },
      {
        name: "Dr. Vikash Yadav",
        designation: "Associate Professor",
        specialization: "Human-Computer Interaction, UI/UX Design",
        email: "vikash.yadav@uiet.puchd.ac.in",
        experience: "8+ years",
        qualification: "Ph.D. Human-Computer Interaction, PU Chandigarh",
        publications: 22,
        image: "photo-1500648767791-00dcc994a43e",
        researchAreas: ["HCI", "UI/UX Design", "User Experience"],
        courses: ["HCI", "UI/UX Design", "Web Development"],
      },
    ],
    assistantProfessors: [
      {
        name: "Dr. Sunita Dhiman",
        designation: "Assistant Professor",
        specialization: "Data Science, Big Data Analytics",
        email: "sunita.dhiman@uiet.puchd.ac.in",
        experience: "6+ years",
        qualification: "Ph.D. Data Science, Thapar University",
        publications: 18,
        image: "photo-1544005313-94ddf0286df2",
        researchAreas: [
          "Data Science",
          "Big Data Analytics",
          "Machine Learning",
        ],
        courses: ["Data Science", "Big Data", "Statistics"],
      },
      {
        name: "Dr. Rohit Tanwar",
        designation: "Assistant Professor",
        specialization: "Cloud Computing, Distributed Systems",
        email: "rohit.tanwar@uiet.puchd.ac.in",
        experience: "5+ years",
        qualification: "Ph.D. Cloud Computing, BITS Pilani",
        publications: 15,
        image: "photo-1507591064344-4c6ce005b128",
        researchAreas: [
          "Cloud Computing",
          "Distributed Systems",
          "Parallel Computing",
        ],
        courses: [
          "Cloud Computing",
          "Distributed Systems",
          "Operating Systems",
        ],
      },
    ],
    guestFaculty: [
      {
        name: "Prof. Arun Mehta",
        designation: "Guest Faculty",
        specialization: "Web Development, Programming Languages",
        email: "arun.mehta@uiet.puchd.ac.in",
        experience: "4+ years",
        qualification: "M.Tech. Computer Science",
        publications: 8,
        image: "photo-1519085360753-af0119f7cbe7",
        researchAreas: [
          "Web Development",
          "Programming Languages",
          "Software Development",
        ],
        courses: [
          "Web Development",
          "Programming Languages",
          "Software Engineering",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#118DC4] via-[#0D76A8] to-[#0A5D8A] text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Code className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Department of Information Technology
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
              Pioneering Innovation in Information Technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <Button
                  size="lg"
                  className="bg-white text-[#118DC4] hover:bg-blue-50 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Admissions Portal <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                className="bg-white text-[#118DC4] hover:bg-blue-50 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Department Brochure <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#118DC4] to-[#0D76A8] rounded-xl flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              {/* Department Introduction */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    About the Department
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The Department of Information Technology has 5 labs equipped with over 120 computers networked using Ethernet. The IT labs are well equipped with software like Embedded Systems Design: Keil RTOS, DSP Based design: MATLAB, Signal Processing Toolkit. Microcontroller Based Design: Microcontrollers Simulation Package RDBMS: Oracle 10g for Windows and Linux, SQL Server 2000 Image Processing: MATLAB Image Processing toolkit, Software Engineering & Project Management: IBM Rational Rose. M/s Bharti telecom have established a Professor Chair in telecommunication and Information Technology. Under the aegis of this chair, Bharti Research and Training Centre is being established.
                  </p>
                </CardContent>
              </Card>

              {/* Department Vision and Mission */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      The Department of Information Technology aims to develop information technology engineers who work professionally and creatively for the advancement of technology and betterment of society.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-gray-700 space-y-2">
                      <li>• To impart quality education by developing information technology facilities, faculty and resources that generates professionals who are leaders for a dynamic information society.</li>
                      <li>• To develop a collaborative culture, so as to nurture an environment of increased research amongst the students and faculty.</li>
                      <li>• To encourage hands-on learning by fostering industrial partnerships to create real world solutions through innovation, product development, entrepreneurship and consultancy services.</li>
                      <li>• To enhance human potential by encouraging transparency and accountability amongst all stakeholders, in order to nurture ethical values in students.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Program Educational Objectives */}
              <Card>
                <CardHeader>
                  <CardTitle>Program Educational Objectives (PEOs)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-[#118DC4]">PEO1</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Graduates are prepared to be employable in industry and possess knowledge of engineering & IT concepts, practices and tools to support design, development, application and maintenance of IT enabled products and projects.
                      </p>
                      <h4 className="font-semibold mb-2 text-[#118DC4]">PEO2</h4>
                      <p className="text-sm text-gray-600">
                        Graduates are prepared to pursue higher education in their area of interest.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-[#118DC4]">PEO3</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Graduates are prepared to possess professional skills like team work, ethics, competence in written & oral communication.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="programs" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Academic Programs
                </h2>
                <div className="space-y-6">
                  {programs.map((program, index) => (
                    <Card key={index} className="border-none shadow-lg">
                      <CardHeader>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <CardTitle className="text-xl text-[#118DC4] mb-2">
                              {program.name}
                            </CardTitle>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                Duration: {program.duration}
                              </div>
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                Intake: {program.intake}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Eligibility:
                            </h4>
                            <p className="text-gray-700">
                              {program.eligibility}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Program Highlights:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {program.highlights.map((highlight, idx) => (
                                <Badge
                                  key={idx}
                                  className="bg-green-100 text-green-800"
                                >
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faculty">
              <DepartmentFaculty
                departmentName="Information Technology"
                facultyData={facultyData}
              />
            </TabsContent>

            <TabsContent value="research" className="space-y-6">
              {/* Research Areas */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {researchAreas.map((area, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{area.area}</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-500">Projects: </span>
                          <span className="font-medium text-[#118DC4]">{area.projects}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Funding: </span>
                          <span className="font-medium text-green-600">{area.funding}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Ongoing and Completed Research */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Ongoing Research Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div>
                          <span className="font-medium">Design and development of system on chip for single lead wearable ECG for medical devices</span>
                          <p className="text-sm text-gray-600">Funding: Ministry of Electronics & Information Technology, Govt. of India, ₹3.63 Crores</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div>
                          <span className="font-medium">Capacity Building through skill and entrepreneurship development on e-Waste Management </span>
                          <p className="text-sm text-gray-600">Funding: Ministry of Electronics & Information Technology, Govt. of India, ₹2.53 Crores</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Completed Research Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Award className="h-4 w-4 mr-2 text-[#118DC4] mt-1" />
                        <div>
                          <span className="font-medium">Development of 5G / 4G based UAV augmented intelligent monitoring & surveillance system (2022)</span>
                          <p className="text-sm text-gray-600">Amount(in Rs): Rs 1.82 Crores</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Award className="h-4 w-4 mr-2 text-[#118DC4] mt-1" />
                        <div>
                          <span className="font-medium">Visvesvaraya Part time PhD Scheme(2022)</span>
                          <p className="text-sm text-gray-600">Amount(in Rs): Rs 2.50 Lakhs</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Award className="h-4 w-4 mr-2 text-[#118DC4] mt-1" />
                        <div>
                          <span className="font-medium">NTU-PU Science and Technology R&D Project(2022)</span>
                          <p className="text-sm text-gray-600">Amount(in Rs): Rs 9.98 Lakhs</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Research Collaborations */}
              <Card>
                <CardHeader>
                  <CardTitle>Research Collaborations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[#118DC4] mb-3">Industry Partners</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Texas Instruments</li>
                        <li>• Qualcomm Technologies</li>
                        <li>• Samsung R&D Institute</li>
                        <li>• Intel Technology</li>
                        <li>• MediaTek Inc.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#118DC4] mb-3">Academic Partners</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• IIT Delhi</li>
                        <li>• IIT Kanpur</li>
                        <li>• IIIT Hyderabad</li>
                        <li>• University of California</li>
                        <li>• Technical University of Munich</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex justify-center pt-2">
                <Link to="/research">
                  <Button variant="outline" className="border-[#118DC4] text-[#118DC4] hover:bg-[#118DC4]/10">
                    Explore Central Research Hub
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="facilities" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Infrastructure & Facilities
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {facilities.map((facility, index) => (
                    <Card
                      key={index}
                      className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <CardHeader>
                        <CardTitle className="text-lg text-[#118DC4]">
                          {facility.name}
                        </CardTitle>
                        <CardDescription>
                          {facility.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-gray-600">
                          <Building className="h-4 w-4 mr-2" />
                          <span>{facility.capacity}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Recent Achievements
                </h2>
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className="border-none shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#118DC4] to-[#0D76A8] rounded-xl flex items-center justify-center flex-shrink-0">
                            <Award className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              {achievement.title}
                            </h3>
                            <p className="text-gray-700 mb-2">
                              {achievement.description}
                            </p>
                            <Badge
                              variant="outline"
                              className="text-[#118DC4] border-[#118DC4]"
                            >
                              {achievement.year}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Contact Department
            </h2>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Department Office
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-[#118DC4]" />
                        <span className="text-gray-700">
                          Room 301, UIET Building, Panjab University
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-[#118DC4]" />
                        <span className="text-gray-700">+91-172-2534816</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-[#118DC4]" />
                        <span className="text-gray-700">
                          it@uiet.puchd.ac.in
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Office Hours
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
                      </p>
                      <p>
                        <strong>Saturday:</strong> 9:00 AM - 1:00 PM
                      </p>
                      <p>
                        <strong>Sunday:</strong> Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DepartmentIT;
