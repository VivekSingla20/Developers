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
  BookOpen,
  Users,
  Award,
  Building,
  Code,
  Database,
  Globe,
  Smartphone,
  Brain,
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

const DepartmentECE = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Department statistics
  const stats = [
    { label: "Students Enrolled", value: "400+", icon: Users },
    { label: "Faculty", value: "20+", icon: GraduationCap },
    { label: "Laboratories", value: "6", icon: Beaker },
    { label: "Placement", value: "95%", icon: Trophy },
  ];

  // Academic programs
  const programs = [
    {
      name: "B.E. Electronics & Communication Engineering",
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
      name: "M.E. Electronics & Communication Engineering",
      duration: "2 Years",
      intake: "18 Students",
      eligibility: "B.E./B.Tech in ECE or related field",
      highlights: [
        "Research-Based Program",
        "Thesis Work",
        "Industry Collaboration",
      ],
    },
    {
      name: "Ph.D Electronics & Communication Engineering",
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
      name: "Communication Lab",
      description: "Communication Lab: Communication lab is equipped with AM, FM, PCM/DM, TDM, ASK, FSK, PSK, QPSK trainers, Data Format Trainer kits, and RFID development system. For simulation of communication systems, MATLAB, and opti-system are used. The hardware tools available are OTDR, WDM trainer, Spectrum Analyzer, and Optical Communication Trainer. For simulation of computer networks, Deft Netz is used",
      capacity: " Systems",
    },
    {
      name: "VLSI and Embedded System Lab",
      description: "VLSI and Embedded System Lab: The lab is used for design and simulation of analog and digital systems. FPGA and CPLD kits (Spartan 3 and Virtex 5) are available for designing the systems. The software tools used are Tanner tool, Silvaco, µ-wind, Model-Sim, and Xilinx ISE, Xilinx Embedded Development Kit.",
      capacity: " Systems",
    },
    {
      name: "Wireless Communication and Microwave Lab",
      description: "Wireless Communication and Microwave Lab: This lab contains equipments related to design and implementation of wireless systems. The tools used are GSM simulator, GSM evaluation kit, GPS trainer, CDMA and FDM trainers, Satellite Communication Trainer, ISDN trainer, and 3GHz spectrum analyzer. The microwave experiments are performed on Klystron benches and Gunn benches. Microwave power sensors are used for power measurement. The simulation of circuits is done using Microwave wizard.",
      capacity: " Systems",
    },
    {
      name: "Signal Processing and Image Processing Lab",
      description: "Signal Processing and Image Processing Lab: This lab contains software and hardware tools required for design and implementation of signal processing and image processing systems. MATLAB, Systemvue, and Mathematica are the software tool used for simulation of systems. The hardware tools used in this lab are ADSP processors, Blackfin development boards, TMS processors and Digital storage Oscilloscope.",
      capacity: " Systems",
    },
    {
      name: "Digital Electronics and Microprocessor Lab",
      description: "Digital Electronics and Microprocessor Lab: The goal of this lab is to make students conversant with the designing of digital systems, and programmable aspects of microprocessors and microcontrollers. This lab is equipped with 8085, and 8086 microprocessors, 8051 and PIC micro controllers, ARM based systems, and various interfacing cards. For implementation of digital systems, digital trainers and logic analyzers are available. The software tools used is Keil, and Proteus VSM",
      capacity: " Systems",
    },
    {
      name: "Analog Electronics Lab",
      description: "Analog Electronics Lab: This lab is intended to give the students a practical experience in working with semiconductor devices and examines the design and operation of important circuits that utilize these devices. The software tools used in the lab are p-spice, TCAD, Circuit-Maker, and Chip-Scope Pro. Hardware tools used in the lab are Analog electronic trainers and PCB designing machine.",
      capacity: " Rooms",
    },
  ];

  // Fixed faculty data structure with all required properties
  const facultyData = {
    coordinator: [
      {
        name: "Dr. Jaget Singh",
        designation: "Professor & Coordinator",
        specialization: "Antenna and Microwave Engineering",
        email: "jaget_singh80yahoo.co.in",
        phone: "9464169791",
        office: "Room 301, UIET Building",
        experience: "8 years approx",
        qualification: "M.Tech, R.G.P.V. Bhopal",
        publications: 13,
        image: "/",
        isCoordinator: true,
        researchAreas: [
          "Microwave",
          "Antennas Design",
        ],
        courses: ["Microwave", "Antennas Design"],
      },
    ],
    professors: [
      {
        name: "Prof. Renu Vig",
        designation: "Professor",
        specialization: "Wireless and Mobile Communication",
        email: "renuvig@pu.ac.in",
        phone: "9814126152",
        experience: "35+ years",
        qualification: "Ph.D. Artificial Intelligence & Neural Networks, Panjab University, Chandigarh",
        publications: 164,
        image: "",
        researchAreas: [
          "Artificial Intelligence",
          "Neural Networks",
          "Fuzzy Logic",
          "Signal Processing",
          "Biomedical Systems",
        ],
        courses: ["Signal Processing", "Fuzzy Systems", "AI/Neural Networks", "Control Systems"],
      },
      {
        name: "Prof. Sunil Aggarwal",
        designation: "Professor",
        specialization: "Wireless communication, Artificial Intelligence",
        email: "s.agrawal@pu.ac.in",
        phone: "9417723296",
        experience: "34 years",
        qualification: "Ph.D. Electronics & Communication, Panjab University (Chandigarh)",
        publications: 63,
        image: "",
        researchAreas: [
          "Wireless Comm",
          "AI",
          "Signal/Image Processing",
        ],
        courses: [
          "Wireless Comm",
          "AI",
          "Signal/Image Processing",
        ],
      },
      {
        name: "Prof. Arvind Kumar",
        designation: "Professor",
        specialization: "Microelectronics, Sensors Design, Biomass and Photovoltaic Energy Systems",
        email: "arvind_uiet@pu.ac.in",
        phone: "9417600579",
        experience: "10+ years",
        qualification: "Ph.D. Thin-Film Based Temperature Sensors, Panjab University (Chandigarh)",
        publications: 6,
        image: "",
        researchAreas: [
          "Microelectronics",
          "VLSI",
          "Sensor Design",
        ],
        courses: [
          "Microelectronics",
          "VLSI",
          "Sensor Design",
        ],
      },
      {
        name: "Dr. Naresh Kumar",
        designation: "Professor",
        specialization: "Wireless and Mobile Communication",
        email: "naresh_uiet@yahoo.com",
        phone: "9216392982",
        experience: "21 years",
        qualification: "Ph.D. Electronics & Communication Engg., Panjab University (Chandigarh)",
        publications: 56,
        image: "",
        researchAreas: [
          "Wireless Comm",
          "Underwater Acoustic Comm",
          "Cognitive Radios",
        ],
        courses: [
          "Wireless Comm",
          "Underwater Acoustic Comm",
          "Cognitive Radios",
        ],
      },
      {
        name: "Dr. Sumit Budhiraja",
        designation: "Professor",
        specialization: "Signal Processing and Communication",
        email: "sumitbudhiraja@gmail.com",
        phone: "9876193545",
        experience: "20 years",
        qualification: "Ph.D. Electronics & Communication Engg., Panjab University (Chandigarh)",
        publications: 50,
        image: "",
        researchAreas: [
          "Signal & Image Processing",
          "Sparse Representation",
        ],
        courses: [
          "Signal & Image Processing",
          "Sparse Representation",
        ],
      },
      {
        name: "Dr. Preeti Singh",
        designation: "Professor",
        specialization: "Optical Communication (wired and wireless) and Optical Biosensor",
        email: "preeti_singh@pu.ac.in",
        phone: "8054001599",
        experience: "24 years",
        qualification: "Ph.D. CSE (Medical Image Retrieval), Panjab University (Chandigarh)",
        publications: 35,
        image: "",
        researchAreas: [
          "Image Processing",
          "ML/DL",
          "Biomedical Imaging",
        ],
        courses: [
          "Image Processing",
          "ML/DL",
          "Biomedical Imaging",
        ],
      },
      {
        name: "Dr. Charu Madhu",
        designation: "Professor",
        specialization: "Nanophotonics, Optical Communication",
        email: "charu_uiet@pu.ac.in",
        phone: "8146560572",
        experience: "17 years",
        qualification: "Ph.D. Nanoelectronics, Panjab University (Chandigarh)",
        publications: 65,
        image: "",
        researchAreas: [
          "Nanophotonics",
          "Optical Communication",
          "Device Modeling",
        ],
        courses: [
          "Nanophotonics",
          "Optical Communication",
          "Device Modeling",
        ],
      },
      {
        name: "Dr. Nidhi Garg",
        designation: "Professor",
        specialization: "Digital System Design, Digital signal and Bio-signal Processing",
        email: "nidhi_garg@pu.ac.in ",
        phone: "8727058014",
        experience: "14 years",
        qualification: "Ph.D., Panjab University (Chandigarh)",
        publications: 14,
        image: "",
        researchAreas: [
          "Digital systems",
          "signal & bio-signal processing",
        ],
        courses: [
          "Digital systems",
          "signal & bio-signal processing",
        ],
      },
    ],
    associateProfessors: [
      {
        name: "Dr. Neeraj Sharma",
        designation: "Associate Professor",
        specialization: "Optical Fiber Communication",
        email: "sharma_n@pu.ac.in",
        Phone: "9988403911",
        experience: "18 years",
        qualification: "Ph.D. Electronics & Communication, Panjab University, Chandigarh",
        publications: 30,
        image: "",
        researchAreas: [
          "Optical communication",
          "MEMS",
          "Microsystems",
        ],
        courses: [
          "Optical communication",
          "MEMS",
          "Microsystems",
        ],
      },
    ],
    assistantProfessors: [
      {
        name: "Ms. Sharmelle Thangjam",
        designation: "Assistant Professor",
        specialization: "Signal Processing",
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
        name: "Mr. Vishal Sharma",
        designation: "Assistant Professor",
        specialization: "VLSI and Microelectronics",
        email: "vishaluiet@pu.ac.in",
        Phone: "8360644211",
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
        name: "Ms. Preeti Gupta",
        designation: "Assistant Professor",
        specialization: "Digital System Design, Control System and Biometrics",
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
        name: "Dr. Amit Chaudhary",
        designation: "Assistant Professor",
        specialization: "Semiconductor and VLSI",
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
        name: "Dr. Sarvjit Singh",
        designation: "Assistant Professor",
        specialization: "Wireless Communication",
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
        name: "Dr. Garima Joshi",
        designation: "Assistant Professor",
        specialization: "VLSI Design, Image Processing, Pattern Recognition",
        email: "joshi_garima5@yahoo.com",
        Phone: "8847436313",
        experience: "21 years",
        qualification: "Ph.D. VLSI, Image Processing, Pattern Recognition, UIET, Panjab University, Chandigarh",
        publications: 32,
        image: "",
        researchAreas: [
          "VLSI",
          "Image Processing",
          "Pattern Recognition",
        ],
        courses: [
          "VLSI",
          "Image Processing",
          "Pattern Recognition",
        ],
      },
      {
        name: "Ms. Daljeet Kaur",
        designation: "Assistant Professor",
        specialization: "Image Processing",
        email: "er.daljeetkaur@gmail.com",
        Phone: "9888491183",
        experience: "15 years",
        qualification: "M.E. Electronics & Communication, NITTTR, Punjab University, Chandigarh",
        publications: 5,
        image: "",
        researchAreas: [
          "Material Science",
          "Nanotechnology",
        ],
        courses: [
          "Material Science",
          "Nanotechnology",
        ],
      },
      {
        name: "Dr. Pardeep Kaur",
        designation: "Assistant Professor",
        specialization: "Wireless Sensor Networks and Optical Communication",
        email: "pardeep.tur@gmail.com",
        Phone: "9815402979",
        experience: "12 years",
        qualification: "Ph.D. ECE, Panjab University, Chandigarh",
        publications: 10,
        image: "",
        researchAreas: [
          "Wireless Sensor Networks",
          "Optical/FSO Communication",
        ],
        courses: [
          "Wireless Sensor Networks",
          "Optical/FSO Communication",
        ],
      },
      {
        name: "Mr. Sanjiv Kumar",
        designation: "Assistant Professor",
        specialization: "Optical Communication",
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
        name: "Ms. Harvinder Kaur",
        designation: "Assistant Professor",
        specialization: "Optical Communication",
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
        name: "Mr. Vijay Kumar",
        designation: "Assistant Professor",
        specialization: "VLSI Design",
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
        name: "Dr. Gurpreet Kaur",
        designation: "Assistant Professor",
        specialization: "Digital Signal Processing",
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
              Department of Electronics & Communication Engineering
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
              Pioneering Innovation in Electronics & Communication Engineering
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
                    Department of Electronics and Communication is one of the most sought after departments of UIET and boasts of excellent infrastructure. The students are encouraged to take up challenging projects and enhance their knowledge about various aspects of Electronics. The course curriculum is upgraded regularly to keep pace with the changing world of electronics. The Department is well equipped in all aspects and has the following labs: Digital Microprocessor, Microcontroller and Logic Design Lab, Communication Engineering Lab, Mobile and Satellite Communication Lab, Optical Communication Lab, Embedded System Design Lab, Digital Signal Processing Lab.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Research programmes in the broad areas of all types of Wireless communication, signal processing, optical communication, antenna system & VLSI design.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Large number of sponsored research projects funded by Govt and Industries.
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
                      Electronics & Communication Engineering will contribute to the ever changing industrial requirements, economic growth and global societal needs by enhancing the technical skills and entrepreneurship abilities.
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
                      <li>• To produce qualified engineers who are competent in the areas of Electronics & Communication Engineering and able to meet the challenges of ever changing industry requirements at global level.</li>
                      <li>• To develop strong theoretical concepts complemented with practical trainings.</li>
                      <li>• To inculcate innovative skills, research aptitude, team-work, ethical practices in students so as to meet expectations of the industry as well as society.</li>
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
                        To build a strong foundation in scientific and engineering fundamentals necessary to formulate, solve and analyze engineering problems for successful careers to meet the global demands of the society.
                      </p>
                      <h4 className="font-semibold mb-2 text-[#118DC4]">PEO2</h4>
                      <p className="text-sm text-gray-600">
                        To develop the ability among students to synthesize data and technical concepts of Electronics and Communication for application to develop core and multidisciplinary projects.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-[#118DC4]">PEO3</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        To promote awareness among students for the value of lifelong learning and to introduce them to professional ethics and codes of professional practice.
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
                departmentName="Electronics & Communication Engineering"
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

                      <li className="flex items-start">
                        {/* <TrendingUp className="h-4 w-4 mr-2 text-green-600 mt-1" /> */}
                        <div>
                          <span className="font-medium">Visvesvaraya Part time PhD Scheme</span>
                          <p className="text-sm text-gray-600">Funding: Ministry of Electronics & Information Technology (MeitY), Govt. of India, ₹2.50 Lakhs</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        {/* <TrendingUp className="h-4 w-4 mr-2 text-green-600 mt-1" /> */}
                        <div>
                          <span className="font-medium">Revolutionizing Colonic Histopathology using Artificial Intelligence</span>
                          <p className="text-sm text-gray-600">Funding: Consultancy to M/s Amit Trehan LLC, USA, ₹1.30 Lakhs</p>
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
                          <p className="text-sm text-gray-600">Funding: Ministry of Electronics & Information Technology, Govt. of India, ₹1.82 Crores</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Award className="h-4 w-4 mr-2 text-[#118DC4] mt-1" />
                        <div>
                          <span className="font-medium">Visvesvaraya Part time PhD Scheme(2022)</span>
                          <p className="text-sm text-gray-600">Funding: Ministry of Electronics & Information Technology (MeitY), Govt. of India, ₹2.50 Lakhs</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Award className="h-4 w-4 mr-2 text-[#118DC4] mt-1" />
                        <div>
                          <span className="font-medium">NTU-PU Science and Technology R&D Project(2022)</span>
                          <p className="text-sm text-gray-600">Funding: NTU STPC funding, Nottingham Trent University, UK, ₹9.98 Lakhs</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Award className="h-4 w-4 mr-2 text-blue-600 mt-1" />
                        <div>
                          <span className="font-medium">Development of Unified IP Based Communication Platform for Voice, Video and Data Services</span>
                          <p className="text-sm text-gray-600">Funding: Ministry of Electronics & Information Technology, Govt. of India & Coral Telecommunication, Noida as industry partner, ₹66.00 Lakhs</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Award className="h-4 w-4 mr-2 text-blue-600 mt-1" />
                        <div>
                          <span className="font-medium">Kisan Mitra (2019)</span>
                          <p className="text-sm text-gray-600">Funding: Department of Agriculture & Farmers Welfare, Govt of Haryana, ₹14.84 Lakhs</p>
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
                          ece@uiet.puchd.ac.in
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

export default DepartmentECE;
