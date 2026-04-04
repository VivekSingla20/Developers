import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building,
  GraduationCap,
  Users,
  Calendar,
  Trophy,
  MapPin,
  Phone,
  Mail,
  Globe,
  Award,
  Target,
  Eye,
  Lightbulb,
  BookOpen,
  Camera,
  ArrowRight,
} from "lucide-react";
import {
  Library as LibraryIcon,
  GraduationCap as AcademicCapIcon,
  Cpu as ChipIcon,
  Wifi as WifiIcon,
  Home as HomeIcon,
  Users as UsersIcon,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const AboutPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  // Map hash fragments to tab values
  const hashToTab = {
    "#mission": "mission",
    "#director": "director",
    "#location": "location",
    "#infrastructure": "infrastructure",
    "#chandigarh": "chandigarh"
  };

  useEffect(() => {
    const hash = location.hash;
    if (hash && hashToTab[hash]) {
      setActiveTab(hashToTab[hash]);
      // Also scroll to tabs section when navigating via navbar
      const tabsElement = document.getElementById('about-tabs');
      if (tabsElement) {
        setTimeout(() => {
          tabsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      setActiveTab("overview");
    }
  }, [location.hash]);

  // Handle tab change and scroll to tabs section
  const handleTabChange = (value) => {
    setActiveTab(value);
    // Scroll to the tabs section for better visibility
    const tabsElement = document.getElementById('about-tabs');
    if (tabsElement) {
      setTimeout(() => {
        tabsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  const stats = [
    { icon: Users, value: "7,600+", label: "Students" },
    { icon: GraduationCap, value: "150+", label: "Faculty" },
    { icon: Building, value: "7", label: "Departments" },
    { icon: Calendar, value: "Since 1958", label: "Years of Excellence" },
  ];

  const infrastructure = [
    {
      icon: LibraryIcon,
      name: "Library (UIET + A.C. Joshi)",
      count: "≈ 670 000+ books & 660 periodicals",
    },
    {
      icon: AcademicCapIcon,
      name: "Academic Blocks",
      count: "Three blocks",
    },
    {
      icon: ChipIcon,
      name: "Research Labs",
      count: "State‑of‑the‑art per department",
    },
    {
      icon: WifiIcon,
      name: "Internet",
      count: "500 Mbps + campus-wide Wi‑Fi",
    },
    {
      icon: HomeIcon,
      name: "Hostels",
      count: "21 (8 Boys, 11 Girls, 1 Working women, 1 International)",
    },

    {
      icon: UsersIcon,
      name: "Smart Classrooms",
      count: "AC + AV-equipped",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        id="uiet"
        className="text-white py-16"
        style={{ background: 'linear-gradient(to right, #118DC4, #0d6fa3)' }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Building className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">
              University Institute of Engineering & Technology
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-6" style={{ color: '#e1f4fd' }}>
              A premier engineering institution under Panjab University,
              committed to excellence in technical education, research, and
              innovation since <strong>2002</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge
                variant="secondary"
                className="text-white"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'rgba(255,255,255,0.3)' }}
              >
                NAAC Accredited (Front‑Runner Institute)
              </Badge>
              <Badge
                variant="secondary"
                className="text-white"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'rgba(255,255,255,0.3)' }}
              >
                NBA Accredited
              </Badge>
              <Badge
                variant="secondary"
                className="text-white"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'rgba(255,255,255,0.3)' }}
              >
                NIRF Tier‑1
              </Badge>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/academics">
                <Button className="bg-white hover:bg-gray-100" style={{ color: '#118DC4' }}>
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Explore Academics
                </Button>
              </Link>
              <Link to="/admissions">
                <Button className="bg-white hover:bg-gray-100 h-auto whitespace-normal sm:whitespace-nowrap text-center leading-tight" style={{ color: '#118DC4' }}>
                  Official Admissions Portal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Tabs id="about-tabs" value={activeTab} onValueChange={handleTabChange} className="w-full">
          {/* Fixed TabsList for better responsiveness */}
          <div className="w-full overflow-x-auto mb-8">
            <TabsList className="flex flex-nowrap w-max min-w-full justify-start gap-1 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger
                value="overview"
                className="whitespace-nowrap px-3 py-2 text-sm"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="pu"
                className="whitespace-nowrap px-3 py-2 text-sm"
              >
                Panjab University
              </TabsTrigger>
              <TabsTrigger
                value="chandigarh"
                className="whitespace-nowrap px-3 py-2 text-sm"
              >
                Chandigarh
              </TabsTrigger>
              <TabsTrigger
                value="location"
                className="whitespace-nowrap px-3 py-2 text-sm"
              >
                Location
              </TabsTrigger>
              <TabsTrigger
                value="director"
                className="whitespace-nowrap px-3 py-2 text-sm"
              >
                Director's Message
              </TabsTrigger>
              <TabsTrigger
                value="mission"
                className="whitespace-nowrap px-3 py-2 text-sm"
              >
                Vision & Mission
              </TabsTrigger>
              <TabsTrigger
                value="infrastructure"
                className="whitespace-nowrap px-3 py-2 text-sm"
              >
                Infrastructure
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="space-y-8">
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 mx-auto mb-3" style={{ color: '#118DC4' }} />
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* About UIET */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="h-6 w-6 mr-2" />
                    About UIET
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    The University Institute of Engineering and Technology (UIET) is the engineering
                    institute of Panjab University, Chandigarh. It offers undergraduate (BE/B.Tech),
                    postgraduate (M.Tech), and doctoral programs. UIET is known for its strong focus on
                    academics, research, and industry interaction. It is recognized by the AICTE and accredited by the NBA.
                  </p>
                  <p className="text-gray-700">
                    UIET offers B.E., M.E. and Ph.D. programs across 7 core
                    engineering disciplines, supported by strong faculty and
                    modern infrastructure.
                  </p>
                  <div className="flex gap-3">
                    <Link to="/academics">
                      <Button size="sm" style={{ backgroundColor: '#118DC4', color: 'white' }}>
                        <BookOpen className="h-4 w-4 mr-2" />
                        View Programs
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Academic & Placement Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 mr-2 mt-0.5" style={{ color: "#118DC4" }} />
                      <span className="text-gray-700">
                        Ranked among top engineering institutes (Tier‑1 NIRF
                        category)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 mr-2 mt-0.5" style={{ color: "#118DC4" }} />
                      <span className="text-gray-700">
                        78.4% placement in 2024‑25, Highest on‑campus CTC
                        ₹24.73 L, Avg ₹8.5 L
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 mr-2 mt-0.5" style={{ color: "#118DC4" }} />
                      <span className="text-gray-700">
                        Strong collaborations and industry linkages across core
                        and IT sectors
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 mr-2 mt-0.5" style={{ color: "#118DC4" }} />
                      <span className="text-gray-700">
                        Modern labs, smart classrooms, and rigorous academic
                        delivery
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t">
                    <Link to="/placements">
                      <Button variant="outline" size="sm" className="w-full" style={{ borderColor: '#118DC4', color: '#118DC4' }}>
                        <Trophy className="h-4 w-4 mr-2" />
                        View Placement Records
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Navigation */}
            <Card style={{ background: 'linear-gradient(to right, #f0f9ff, #e1f4fd)' }}>
              <CardHeader>
                <CardTitle>Explore More</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link to="/research" className="block">
                    <div className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <Lightbulb className="h-6 w-6 mb-2" style={{ color: '#118DC4' }} />
                      <h4 className="font-semibold">Research & Innovation</h4>
                      <p className="text-sm text-gray-600">
                        Cutting-edge research projects
                      </p>
                    </div>
                  </Link>
                  <Link to="/students" className="block">
                    <div className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <Users className="h-6 w-6 mb-2" style={{ color: "#118DC4" }} />
                      <h4 className="font-semibold">Student Life</h4>
                      <p className="text-sm text-gray-600">
                        Campus life and activities
                      </p>
                    </div>
                  </Link>
                  <Link to="/faculty" className="block">
                    <div className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <GraduationCap className="h-6 w-6 mb-2" style={{ color: "#118DC4" }} />
                      <h4 className="font-semibold">Faculty</h4>
                      <p className="text-sm text-gray-600">
                        Meet our expert faculty
                      </p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pu" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="h-6 w-6 mr-2" />
                  Panjab University
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Established in 1882 in Lahore and reimagined in independent
                  India at Chandigarh in 1956, Panjab University is one of
                  India's most historic and respected educational institutions.
                  Known for its academic excellence, lush green campus, and
                  globally admired architectural heritage, PU continues to be a
                  beacon of learning and research in India.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#118DC4' }}>
                      Key Highlights
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Year of Establishment: 1882</li>
                      <li>
                        • NAAC Accredited with A++ Grade (CGPA 3.68 – Cycle 4)
                      </li>
                      <li>• 75+ teaching and research departments</li>
                      <li>• 15,000+ students enrolled across disciplines</li>
                      <li>
                        • Scenic 550-acre campus in Sector 14 & 25, Chandigarh
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#118DC4' }}>
                      Recognition & Rankings
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Recognized as a Category-I University by UGC</li>
                      <li>
                        • Featured in QS World University Rankings (2025:
                        1001–1200 band)
                      </li>
                      <li>
                        • Times Higher Education (THE) World Rankings: 801–1000
                      </li>
                      <li>
                        • NIRF 2024: Pharmacy – Rank #7, Research – Rank #35
                      </li>
                      <li>
                        • Consistently ranked among India's top universities
                      </li>
                      <li>
                        • Active global collaborations & MoUs with top
                        institutions
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  href="https://puchd.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="mt-4"
                    style={{ backgroundColor: '#118DC4', color: 'white' }}
                  >
                    Explore Panjab University
                  </Button>
                </a>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chandigarh" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 mr-2" />
                  About Chandigarh
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Chandigarh, the dream city of India's first Prime Minister Pt.
                  Jawahar Lal Nehru, was designed by the legendary architect
                  Le Corbusier. Located at the foothills of the Shivaliks, it
                  derives its name from the nearby "Chandi Mandir", The deity ‘Chandi’,
                  the goddess of power and a fort of ‘garh’ laying beyond the temple gave
                  the city its name “Chandigarh-The City Beautiful”.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#118DC4' }}>
                      Historical & Geographical Highlights
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • Planned post-Partition as Punjab's new capital (est.
                        1952)
                      </li>
                      <li>
                        • Union Territory & shared capital of Punjab and Haryana
                      </li>
                      <li>
                        • Built on ancient lake basin; Harappan presence ~8000
                        years ago
                      </li>
                      <li>
                        • Located in Shivalik foothills, area: 114 sq km,
                        altitude: 304–365 m
                      </li>
                      <li>
                        • Drained by Sukhna Choe and Patiala‑ki‑Rao Choe streams
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#118DC4' }}>
                      City Design & Urban Features
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • Master plan shaped like a human body (Capitol = Head,
                        Sector 17 = Heart)
                      </li>
                      <li>
                        • Circulation system: 7Vs (V1–V7 roads), plus V8 cycle
                        tracks (~193 km)
                      </li>
                      <li>
                        • Self-sufficient sectors (800×1200 m), each divided
                        into 4 parts (A–D)
                      </li>
                      <li>
                        • Capitol Complex houses Secretariat, High Court,
                        Assembly & Open Hand
                      </li>
                      <li>
                        • Major institutions: PU, PEC, PGIMER in Sectors 10–14
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#118DC4' }}>
                      Environment & Infrastructure
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • Over 1800 parks and gardens; green cover ~46.25%
                      </li>
                      <li>
                        • Key gardens: Rose Garden, Leisure Valley, Rock Garden,
                        Sukhna Lake
                      </li>
                      <li>
                        • Tree-lined roads: 26 flowering, 22 evergreen species
                      </li>
                      <li>
                        • Climate: Hot summers (~42 °C), cold winters (~2 °C),
                        avg rainfall: ~800–970 mm
                      </li>
                      <li>
                        • Industrial Area (2.35 sq km) planned for non-polluting
                        industries
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#118DC4' }}>
                      Demographics & Stats
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • Population (2011 census): ~1,055,45 | Density:
                        ~9,258/sq km
                      </li>
                      <li>
                        • Literacy Rate: 86.05% | Sex Ratio: 818 females/1000
                        males
                      </li>
                      <li>• Birth Rate: 11.38 ‰ | Death Rate: 5.38 ‰</li>
                      <li>
                        • Infant Mortality Rate: 20.64 ‰ | Growth Rate: ~19%
                        (since 2011)
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="location" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="h-6 w-6 mr-2" />
                  Campus Location & Facilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3" style={{ color: '#118DC4' }}>
                      Campus Address
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 font-medium">
                        University Institute of Engineering & Technology
                        <br />
                        Panjab University, South Campus
                        <br />
                        Sector 25, Chandigarh – 160014
                        <br />
                        India
                      </p>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" style={{ color: '#118DC4' }} />
                        <span className="text-sm">+91‑172‑2541242</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" style={{ color: '#118DC4' }} />
                        <span className="text-sm">+91‑62800 89748</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" style={{ color: '#118DC4' }} />
                        <span className="text-sm">directoruiet@pu.ac.in</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2" style={{ color: '#118DC4' }} />
                        <span className="text-sm">www.uiet.puchd.ac.in</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3" style={{ color: '#118DC4' }}>
                      Campus Features
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Part of Panjab University's 550-acre campus</li>
                      <li>• UIET's dedicated 11-acre green academic zone</li>
                      <li>• Three large academic blocks and departmental labs</li>
                      <li>• Mechanical workshops and digital classrooms</li>
                      <li>• Central A.C. Joshi Library with 6.7 lakh+ books</li>
                      <li>
                        • Seminar halls, conference rooms, and Wi-Fi zones
                      </li>
                      <li>• Separate hostels for boys and girls</li>
                      <li>• Cafeteria and mess for residents and students</li>
                      <li>• Sports complex, playgrounds, and gym facilities</li>
                      <li>• ATM, health services, and 24×7 campus security</li>
                      <li>
                        • Upcoming: New academic blocks, auditorium, library
                        extension, hostel expansion
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="director" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  Director's Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#f0f9ff' }}>
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#118DC4' }}>
                      <GraduationCap className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Professor Sukhwinder Singh
                      </h3>
                      <p className="font-medium mb-4" style={{ color: '#118DC4' }}>
                        Director, UIET
                      </p>
                      <blockquote className="text-gray-700 italic">
                        "I am happy to take this opportunity to introduce you to
                        the University Institute of Engineering and Technology
                        (UIET), an in-campus Engineering Institute situated in
                        the heart of Panjab University, Chandigarh. Since its
                        establishment, UIET has come a long way and is geared
                        towards rapid growth. This is possible because highly
                        competitive students are selected through an all-India
                        entrance test, research-oriented faculty, and an
                        infrastructure that is most suited to learning. Apart
                        from focusing on academics, the institute also lays
                        emphasis on the soft skills of students to prepare them
                        for the professional world. Networking with leading
                        organizations and institutes has greatly benefited the
                        institute hugely in orienting students to R&D activities
                        as per the requirements of industry. Corporate sector
                        has been very forthcoming in assessing UIET students. As
                        a result majority of our students are placed through
                        campus placements. I strongly feel that the industry can
                        benefit from the tremendous potential that UIET has and
                        can further collaborate in creating an industry-academic
                        interface. I extend an invitation to the corporate
                        sector to participate in the Campus Recruitment Program
                        of UIET."
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Academic Vision</h4>
                      <p className="text-sm text-gray-600">
                        Fostering innovation-driven education with
                        industry-relevant curriculum and hands-on learning
                        experiences.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Research Focus</h4>
                      <p className="text-sm text-gray-600">
                        Promoting cutting-edge research in emerging technologies
                        and sustainable solutions for societal challenges.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mission" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    To be the Front runner in Engineering Education and Research
                  </p>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#f0f9ff' }}>
                    <h4 className="font-semibold mb-2" style={{ color: '#118DC4' }}>
                      Key Focus Areas
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Engineering Education Excellence</li>
                      <li>• Advanced Research & Innovation</li>
                      <li>• Industry & Academic Collaboration</li>
                      <li>• Global Technology Leadership</li>
                    </ul>
                  </div>
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
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 mr-2 mt-0.5" style={{ color: "#118DC4" }} />
                      <span>
                        To produce professionally competent students for a career in engineering and technology by providing value-based quality education
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 mr-2 mt-0.5" style={{ color: "#118DC4" }} />
                      <span>
                        To provide the readily acceptable quality trained manpower to meet the requirements of the National and International industry in the emerging areas of engineering and technology as well as for research and design
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 mr-2 mt-0.5" style={{ color: "#118DC4" }} />
                      <span>
                        To develop strong collaboration with academic and research institutes as well as the industry in the country and abroad
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 mr-2 mt-0.5" style={{ color: "#118DC4" }} />
                      <span>
                        To provide world level consultancy to generate wealth through services and new product design
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "#e6f3fb" }}>
                    <h4 className="font-semibold mb-2" style={{ color: "#118DC4" }}>
                      Excellence
                    </h4>
                    <p className="text-sm text-gray-600">
                      100% syllabus coverage, ~40 one‑hour lectures/subject,
                      full tutorial & lab engagement
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "#e6f3fb" }}>
                    <h4 className="font-semibold mb-2" style={{ color: "#118DC4" }}>
                      Innovation
                    </h4>
                    <p className="text-sm text-gray-600">
                      Encouraging R&D, prototype-to‑patent culture, supported by
                      grants and MoUs
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "#e6f3fb" }}>
                    <h4 className="font-semibold mb-2" style={{ color: "#118DC4" }}>
                      Integrity
                    </h4>
                    <p className="text-sm text-gray-600">
                      Ethical conduct, transparency, accountability in academic
                      and professional affairs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="infrastructure" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {infrastructure.map((facility, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <facility.icon className="h-8 w-8 mx-auto mb-3" style={{ color: "#118DC4" }} />
                    <h3 className="font-semibold text-lg mb-2">
                      {facility.name}
                    </h3>
                    <p className="font-medium" style={{ color: "#118DC4" }}>
                      {facility.count}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Detailed Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3" style={{ color: "#118DC4" }}>
                      Academic Facilities
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>
                        • Three academic blocks (lecture halls, faculty offices),
                        mechanical workshops
                      </li>
                      <li>
                        • Departmental labs equipped for advanced research and
                        innovation
                      </li>
                      <li>
                        • UIET library + A.C. Joshi Library (~670,000 volumes,
                        660 journals, 24×7 inflibnet access)
                      </li>
                      <li>
                        • High‑speed internet (500 Mbps leased + campus-wide
                        Wi‑Fi) via National Knowledge Network
                      </li>
                      <li>
                        • Seminar room (120 seats) and
                        conference hall
                      </li>
                      <li>• Smart classrooms with AC and AV systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3" style={{ color: "#118DC4" }}>
                      Student Amenities
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>
                        • All hostels with Wi‑Fi, common rooms; merit-based
                        allocation
                      </li>
                      <li>
                        • Access to Panjab University campus facilities:
                        swimming pool, playgrounds, shooting range, sports
                        complex
                      </li>
                      <li>
                        • On‑campus health centre and 24×7 power backup (500 kVA
                        gensets)
                      </li>
                      <li>• University transportation services available</li>
                      <li>
                        • Vibrant student life: 20+ clubs, auditorium, seminar
                        rooms, gyms, and upcoming multi‑activity Student Centre
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
