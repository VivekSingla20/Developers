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

const DepartmentEEE = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Department statistics
  const stats = [
    { label: "Students Enrolled", value: "400+", icon: Users },
    { label: "Faculty", value: "12+", icon: GraduationCap },
    { label: "Laboratories", value: "7", icon: Beaker },
    { label: "Placement", value: "95%", icon: Trophy },
  ];

  // Academic programs
  const programs = [
    {
      name: "B.E. Electrical & Electronics Engineering",
      duration: "4 Years",
      intake: "120 Students",
      eligibility: "10+2 with Physics, Chemistry, Mathematics",
      highlights: [
        "AICTE Approved",
        "Industry-Oriented Curriculum",
        "Research Opportunities",
      ],
    },
    {
      name: "M.E. Electrical Engineering (Power Systems)",
      duration: "2 Years",
      intake: "18 Students",
      eligibility: "B.E./B.Tech in EE or related field",
      highlights: [
        "Research-Based Program",
        "Thesis Work",
        "Industry Collaboration",
      ],
    },
    {
      name: "Ph.D Electrical & Electronics Engineering",
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
      name: "Basic Electrical Labs",
      description: "Major Equipments : Double wound 1-p, tfr.1kva 230/230v, Digital Multimeters Auto ranging, L C R Multimeters 954 M K 1, Function generator 3 MHz, Single Phase Variac 8A, CRO  20  MHz, Digital IC Trainer Kits",
      capacity: " Systems",
    },
    {
      name: "Power system 1 lab CAPSA lab & DSP lab",
      description: "Major Equipments : Matlab software latest version, Matlab software tool kit, Power Word software Computers",
      capacity: " Systems",
    },
    {
      name: "Power System & LCA Lab",
      description: "Major Equipments : Energy Auditor, Clamp on earth resistance tester, Digital Multimeters with data logger, Digital insulation tester, Digital  earth tester, Double wound 1-phase, Transformer.1kVA 230/230V",
      capacity: " Systems",
    },
    {
      name: "Instrumentation labs",
      description: "Major Equipments : Industrial control trainer with thermocouple, data logger, LCD Data projector",
      capacity: " Systems",
    },
    {
      name: "Microprocessor labs & micro controller labs",
      description: "Major Equipments : PLC kits with one software, DSO 4 channel 60 MHz, PID controller, 8085 Micro processor trainer kit, Micro controller kits, oscilloscope",
      capacity: " Systems",
    },
    {
      name: "Control labs & Energy auditing lab",
      description: "Major Equipments : DC speed control system, Compensation design, Potentiometeric error detector, Synchro transmitter receiver/trainer, DC position control system `1, CRO 100 MhZ, CRO 60 MhZ, CRO  20  MhZ, Function generator 3 MhZ, Function generator 1 MhZ, Energy Auditor, Lux meter, Clamp on earth resistance tester",
      capacity: " Rooms",
    },
    {
      name: "Electrical Machinery lab",
      description: "Major Equipments : Double wound 1-p, tfr.1kva 230/230v, Single Phase core type tfr1kva220/115v, Three Phase core type tfr1kva415/240v, Three Phase core type tfr. 3kva 415/240v, Three phase variable loading unit, Dc gen.coupled with 3-phase I.M., With Spring balance pulley arrangement, 3 phase I.M/c.With DOL starter, Dc shunt motor, With Spring balance pulley arrangement, 1-p capacitor start split ph I.M.0.5kw, 3-p synch.coupled 3-p dc machine2.5kw, 3-p cylindrical alternator coupled dc mach, Machine design software, Digital Tachometer Contact/Nc Type, Digital Tachometer Contact Type, Rectifier Single phase 0-300V,10A, Rectifier Single phase 0-300V,3A, Three Phase rectifier dc 220v,20A, Three Phase Rectifier  25A",
      capacity: " Rooms",
    },
  ];

  // Fixed faculty data structure with all required properties
  const facultyData = {
    coordinator: [
      {
        name: "Dr. Nisha Tayal",
        designation: "Associate Professor & Coordinator",
        specialization: "Area of Automation",
        email: "nisha.tayal@pu.ac.in",
        phone: "9814800768",
        office: "Room 301, UIET Building",
        experience: "23 years",
        qualification: "M.E. Electrical/Electronics, Punjab Engineering College, Chandigarh",
        publications: 1,
        image: "",
        isCoordinator: true,
        researchAreas: [
          "Automation",
          "Embedded Systems",
          "Smart Grid",
        ],
        courses: [
          "Microcontrollers",
          "Control Systems",
          "Smart Grid"
        ],
      },
    ],
    professors: [
      {
        name: "Dr. Yajvender Pal Verma",
        designation: "Professor",
        specialization: "Renewable Energy, Wind Power, Congestion, Microgrid Issues, DSM",
        email: "yp_verma@pu.ac.in",
        Phone: "9216384592",
        experience: "22 years",
        qualification: "Ph.D., UIET, PU, Chandigarh",
        publications: 85,
        image: "",
        researchAreas: [
          "Renewable Energy",
          "Smart Grid",
          "Power Electronics",
        ],
        courses: [
          "Power Electronics",
          "Smart Grids",
          "Renewable Systems"
        ],
      },
      {
        name: "Dr. Damanjit Kaur",
        designation: "Professor",
        specialization: "Electric Power Systems, Power System Optimization, Artificial Intelligence",
        email: "damaneee@pu.ac.in",
        Phone: "94171513030",
        experience: "18 years",
        qualification: "Ph.D. Power Systems, IIT Roorkee",
        publications: 37,
        image: "",
        researchAreas: [
          "Power Systems Optimization",
          "Smart Grids",
          "AI in EEE",
        ],
        courses: [
          "Power Systems II",
          "Power Electronics & Drives",
          "Lab Coordination",
        ],
      },
      {
        name: "Dr. Deepak Kumar",
        designation: "Professor",
        specialization: "Power System Optimization, Renewable Energy, Smart Grid, Demand Side Management",
        email: "dk_uiet@pu.ac.in",
        Phone: "8427680088",
        experience: "14 years",
        qualification: "Ph.D. Electrical Engineering (Control Systems), National Institute of Technology, Kurukshetra",
        publications: 14,
        image: "",
        researchAreas: [
          "Control Systems",
          "Optimization Techniques",
          "AI in Power Systems",
        ],
        courses: [
          "Control Systems",
          "Electrical Machines",
          "Power Electronics",
          "Optimization",
          "AI Applications",
        ],
      },
    ],
    associateProfessors: [
      {
        name: "Dr. Manoj Kumar Sharma",
        designation: "Associate Professor",
        specialization: "Neural Networks, Fuzzy Logic, Control Systems, Active Noise Control",
        email: "mks_uiet@pu.ac.in",
        Phone: "9872825095",
        experience: "27 years",
        qualification: "Ph.D. Electrical/Electronics (Pursuing), Panjab University, Chandigarh",
        publications: 19,
        image: "",
        researchAreas: [
          "Neural Networks",
          "Fuzzy Logic",
          "Control Systems",
        ],
        courses: [
          "Computer Networks",
          "Network Security",
          "Cryptography"
        ],
      },
      {
        name: "Dr. Parul Gaur",
        designation: "Associate Professor",
        specialization: "Communication Engineering, Digital Electronics, Power Electronics",
        email: "parulgaur@pu.ac.in",
        Phone: "8968403488",
        experience: "15 years",
        qualification: "Ph.D. Electronics & Communication Engineering, Panjab University, Chandigarh",
        publications: 21,
        image: "",
        researchAreas: [
          "Power Electronics",
          "Communication, Optical Comm.",
          "Signal Processing",
        ],
        courses: [
          "Power Electronics",
          "Communication, Optical Comm.",
          "Signal Processing",
        ],
      },
    ],
    assistantProfessors: [
      {
        name: "Dr. Preetika Sharma",
        designation: "Assistant Professor",
        specialization: "Nanoelectronics, Analog and Digital Electronics, Semiconductors",
        email: "preetikamadhav@yahoo.co.in",
        Phone: "9872622921",
        experience: "17 years",
        qualification: "Ph.D. Electronics & Communication, Panjab University, Chandigarh",
        publications: 5,
        image: "",
        researchAreas: [
          "Nanoelectronics",
          "Analog & Digital Electronics",
          "Semiconductors",
        ],
        courses: [
          "Analog Electronics",
          "Digital Electronics",
          "Nanoelectronics / Device Physics",
        ],
      },
      {
        name: "Dr. Sarpreet Kaur",
        designation: "Assistant Professor",
        specialization: "Power Systems",
        email: "sarpreetdua@yahoo.co.in",
        Phone: "9914616916",
        experience: "16 years",
        qualification: "Ph.D. Power Systems (Pursuing), UIET, Panjab University, Chandigarh",
        publications: 9,
        image: "",
        researchAreas: [
          "Power Systems",
        ],
        courses: [
          "Power Systems",
          "core EEE courses",
        ],
      },
      {
        name: "Dr. Gaurav Sapra",
        designation: "Assistant Professor",
        specialization: "Digital Signal Processing, Wireless Communication, Sensor Fabrication, Nanotechnology and Biomedical Devices",
        email: "gaurav.sapra@pu.ac.in",
        Phone: "9815858051",
        experience: "14 years",
        qualification: "Ph.D. Electrical/Electronics, Panjab University, Chandigarh",
        publications: 51,
        image: "",
        researchAreas: [
          "DSP",
          "Sensors",
          "Nanotech",
          "Biomedical Devices",
        ],
        courses: [
          "DSP",
          "Sensor/Device Design",
          "Bio-Instrumentation",
        ],
      },
      {
        name: "Dr. Aditi Gupta",
        designation: "Assistant Professor",
        specialization: "Power Systems, Control Systems",
        email: "aditigupta@pu.ac.in",
        Phone: "9872672319",
        experience: "11 years",
        qualification: "Ph.D. Electrical, Panjab University, Chandigarh",
        publications: 5,
        image: "",
        researchAreas: [
          "Electrical & Electronic Engineering",
          "Energy, Materials Science",
          "CS",
        ],
        courses: [
          "Electrical & Electronic Engineering",
          "Energy, Materials Science",
          "CS",
        ],
      },
      {
        name: "Dr. Sabhyata Soni",
        designation: "Assistant Professor",
        specialization: "",
        email: "",
        Phone: "",
        experience: " years",
        qualification: "",
        publications: 0,
        image: "",
        researchAreas: [
          "",
          "",
          "",
        ],
        courses: [
          "",
          "",
          "",
        ],
      },
      {
        name: "Mr. Kuldeep Singh Bedi",
        designation: "Assistant Professor",
        specialization: "Power Electronic and Drive",
        email: "kkuldeep1234@gmail.com",
        Phone: "9023200077",
        experience: "9 years",
        qualification: "M.E. Electronics, Punjab Engineering College (PEC), Chandigarh",
        publications: 7,
        image: "",
        researchAreas: [
          "Power Electronics & Drives",
        ],
        courses: [
          "Power Electronics",
          "Drives",
          "EEE core courses",
        ],
      },
      {
        name: "Dr. Puneet Kaur",
        designation: "Assistant Professor",
        specialization: "Power Electronics, Electric Drives, Embedded Systems",
        email: "puneetee@pu.ac.in",
        Phone: "",
        experience: " years",
        qualification: "",
        publications: 0,
        image: "",
        researchAreas: [
          "",
          "",
          "",
        ],
        courses: [
          "",
          "",
          "",
        ],
      },
      {
        name: "Dr. Vivek Pahwa",
        designation: "Assistant Professor",
        specialization: "Electrical Machines and Drive Systems, Power Systems",
        email: "pahwa1974_uiet@pu.ac.in",
        Phone: "",
        experience: " years",
        qualification: "",
        publications: 0,
        image: "",
        researchAreas: [
          "",
          "",
          "",
        ],
        courses: [
          "",
          "",
          "",
        ],
      },
    ],
    guestFaculty: [

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
              Department of Electrical & Electronics Engineering
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
              Pioneering Innovation in Electrical & Electronics Engineering
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
                    The program in Electrical & Electronics Engineering is a multidisciplinary course that aims to train engineers in the field of Core Electrical Engineering along with Electronics Engineering & Computer Sciences. The focus of the Electrical & Electronics Department is on three major areas-Power & Energy, Machines to Neural Networks, and Database Management Systems. Additionally, students have the opportunity to explore exciting projects.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The Department is well equipped and has lab facilities: Electric Machinery Lab. Power Systems Lab. Linear Circuit Analysis Lab. Control Engineering. Microcontroller & PLC lab.
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
                      To impart knowledge of Electrical and Electronics Engineering and prepare graduates to achieve excellence in engineering education and research.
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
                      <li>• To prepare students with deep understanding of fundamentals of Electrical and Electronics Engineering.</li>
                      <li>• To prepare professionals with positive attitude, values and vision.</li>
                      <li>• To collaborate with industry, research organizations and academia to encourage innovation.</li>
                      <li>• To provide a platform for engineering graduates to create and design new products and systems that can help industry and society as a whole.</li>
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
                        Graduates will have knowledge of electrical and electronics engineering to solve problems of social relevance, pursue higher education and research.
                      </p>
                      <h4 className="font-semibold mb-2 text-[#118DC4]">PEO2</h4>
                      <p className="text-sm text-gray-600">
                        Graduates will undertake complex problems and develop appropriate solutions.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-[#118DC4]">PEO3</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Graduates will work effectively as individuals and as team members in multidisciplinary projects.
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
                departmentName="Electrical & Electronics Engineering"
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
                          <span className="font-medium">Solar Energy Training Network
                            (SETNET) Partner with NISE (For Solar Energy Manpower
                            Training)</span>
                          <p className="text-sm text-gray-600">Funding: NISE, Gurgaon and MNRE, New Delhi, ₹12.84 Lakhs</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div>
                          <span className="font-medium">Design Innovation Center (DIC) Sub Theme:  Energy Harvesting and Management Technologies</span>
                          <p className="text-sm text-gray-600">Funding: MHRD, New Delhi, ₹10.00 Crores</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div>
                          <span className="font-medium">Energy Harvesting & Management Technologies</span>
                          <p className="text-sm text-gray-600">Funding: Design Innovation Centre, Department of Higher Education, MHRD, ₹231 Lakhs</p>
                        </div>
                      </li>

                      <li className="flex items-start">
                        <div>
                          <span className="font-medium">Design  ,  Development  and Fabrication  of Electronic Preferential Voting  Machine (EPVM)</span>
                          <p className="text-sm text-gray-600">Funding: Department of Science & Technology & Renewable Energy, Chandigarh Administration , ₹1.50 Lakhs</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div>
                          <span className="font-medium">Development  of  an  Indigenous multi-axis  Machine  for  machining of Dental Implants</span>
                          <p className="text-sm text-gray-600">Funding: M/S Esteem Industries, ₹26.90560 Lakhs</p>
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
                          <span className="font-medium">Performance Enhancement of Solar Photovoltaic System Using Multi Mirror Arrangement And To find optimum angle of inclination of solar panel in Chandigarh</span>
                          <p className="text-sm text-gray-600">Funding: DST, Chandigarh, ₹3.00 Lakhs</p>
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
                          eee@uiet.puchd.ac.in
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

export default DepartmentEEE;
