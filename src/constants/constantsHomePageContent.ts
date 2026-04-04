import {
  Award,
  BookOpen,
  Building2,
  Calendar,
  Calculator,
  Cog,
  Code,
  Dna,
  Download,
  GraduationCap,
  Microscope,
  Trophy,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export const features = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    description:
      "Excellence in engineering education with industry-relevant curriculum",
    link: "/academics",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Highly qualified and experienced faculty members",
    link: "/faculty",
  },

  {
    icon: Building2,
    title: "Modern Infrastructure",
    description: "State-of-the-art facilities and well-equipped laboratories",
    link: "/about#infrastructure",
  },
  {
    icon: BookOpen,
    title: "Research Focus",
    description: "Strong emphasis on research and innovation",
    link: "/research",
  },
  {
    icon: Microscope,
    title: "Industry Connect",
    description: "Strong industry partnerships and placement record",
    link: "/placements",
  },
];

export const departments = [
  {
    name: "Department of Computer Science & Engineering",
    icon: Code,
    students: 480,
    faculty: 25,
    link: "/departments/cse",
  },
  {
    name: "Department of Electronics & Communication Engineering",
    icon: Cog,
    students: 360,
    faculty: 20,
    link: "/departments/ece",
  },
  {
    name: "Department of Electrical & Electronics Engineering",
    icon: Zap,
    students: 240,
    faculty: 15,
    link: "/departments/eee",
  },
  {
    name: "Department of Information Technology",
    icon: Code,
    students: 360,
    faculty: 18,
    link: "/departments/it",
  },
  {
    name: "Department of Mechanical Engineering",
    icon: Wrench,
    students: 240,
    faculty: 16,
    link: "/departments/me",
  },
  {
    name: "Department of Biotechnology",
    icon: Dna,
    students: 120,
    faculty: 12,
    link: "/departments/bt",
  },
  {
    name: "Department of Applied Sciences",
    icon: Calculator,
    students: 60,
    faculty: 10,
    link: "/departments/as",
    showStudents: false,
  },
];

export const campusLife = [
  {
    title: "Goonj – Annual Cultural Fest",
    description:
      "UIET's flagship annual cultural festival featuring fashion shows (Glitterati), dance competitions (Groovz), rock nights, Pronite, quizzes, and a city-level beauty pageant. Held every year around March–April, it's the most awaited event on campus.",
    image: "/images/campus/goonj.jpg", // replace with actual image path
    link: "/students/goonj",
  },
  {
    title: "Technical Clubs & Societies",
    description:
      "Home to IEEE, ISTE, SAE, ACM chapters, and student-run clubs like JUGAAD (Robotics), P-Club (Programming), Google Developer Club, DIG (Design & Innovation Group), and EDC — offering workshops, hackathons, and hands-on tech projects year-round.",
    image: "/images/campus/technical-clubs.jpg",
    link: "/students/clubs",
  },
  {
    title: "Sports & UMANG Fest",
    description:
      "Students enjoy cricket, football, basketball, badminton, and tennis on campus, with access to Panjab University's world-class North Campus sports facilities. UMANG is the dedicated annual sports festival celebrating athletic talent across disciplines.",
    image: "/images/campus/sports.jpg",
    link: "/students/sports",
  },
  {
    title: "Cultural & Arts Clubs",
    description:
      "Express yourself through EUPHORIA (Music Club), OSMIUM (Theatre Club), the Dance Club, DebSoc (Debate Society), Comic Tribe, and MagBoard. Regular performances, open mics, and inter-college competitions keep creative life thriving at UIET.",
    image: "/images/campus/cultural.jpg",
    link: "/students/cultural",
  },
];

export const downloads = [
  { title: "Admission Brochure 2026", href: "/admissions" },
  { title: "Previous Year Papers", href: "/previous-papers" },
  { title: "NBA Accreditation Letter", href: "/downloads" },
  { title: "NIRF Report", href: "/downloads" },
];

export const quickAccess = [
  {
    title: "Admissions",
    description: "Access official admissions portal for various programs",
    icon: GraduationCap,
    href: "/admissions",
    iconBg: "bg-green-100 group-hover:bg-green-500",
    iconColor: "text-green-600 group-hover:text-white",
    titleColor: "group-hover:text-green-600",
    shadowColor: "hover:shadow-green-500/20",
  },
  {
    title: "Previous Papers",
    description: "Access question papers",
    icon: BookOpen,
    href: "/previous-papers",
    iconBg: "bg-[#118DC4]/10 group-hover:bg-[#118DC4]",
    iconColor: "text-[#118DC4] group-hover:text-white",
    titleColor: "group-hover:text-[#118DC4]",
    shadowColor: "hover:shadow-[#118DC4]/20",
  },
  {
    title: "Downloads",
    description: "To download details about these",
    icon: Award,
    href: "/downloads",
    iconBg: "bg-purple-100 group-hover:bg-purple-500",
    iconColor: "text-purple-600 group-hover:text-white",
    titleColor: "group-hover:text-purple-600",
    shadowColor: "hover:shadow-purple-500/20",
  },
  {
    title: "Placements",
    description: "Career opportunities",
    icon: Trophy,
    href: "/placements",
    iconBg: "bg-orange-100 group-hover:bg-orange-500",
    iconColor: "text-orange-600 group-hover:text-white",
    titleColor: "group-hover:text-orange-600",
    shadowColor: "hover:shadow-orange-500/20",
  },
  {
    title: "News & Updates",
    description: "Latest announcements & events",
    icon: Calendar,
    href: "/news",
    iconBg: "bg-red-100 group-hover:bg-red-500",
    iconColor: "text-red-600 group-hover:text-white",
    titleColor: "group-hover:text-red-600",
    shadowColor: "hover:shadow-red-500/20",
  },
];

const seenResourceTitles = new Set(quickAccess.map((item) => item.title));
const uniqueDownloads = downloads.filter((item) => {
  if (seenResourceTitles.has(item.title)) return false;
  seenResourceTitles.add(item.title);
  return true;
});

export const resourceAndAccessItems = [
  ...quickAccess,
  ...uniqueDownloads.map((item) => ({
    title: item.title,
    description: "To download details about these",
    icon: Download,
    href: item.href,
    iconBg: "bg-[#118DC4]/10 group-hover:bg-[#118DC4]",
    iconColor: "text-[#118DC4] group-hover:text-white",
    titleColor: "group-hover:text-[#118DC4]",
    shadowColor: "hover:shadow-[#118DC4]/20",
  })),
];

export const placementStats = [
  { value: 314, prefix: "", suffix: "+", label: "Placement Offers" },
  { value: 42, prefix: "₹", suffix: " LPA", label: "Highest CTC" },
  { value: 50, prefix: "", suffix: "+", label: "Recruiting Companies" },
  { value: 95, prefix: "", suffix: "%", label: "Placement Rate" },
];

export const companies = [
  "Infosys",
  "TCS",
  "IBM",
  "Wipro",
  "HCL",
  "Airtel",
  "Accenture",
  "Cognizant",
  "Tech Mahindra",
  "Capgemini",
  "Samsung",
  "Adobe",
];

export const accreditationHighlights = [
  "NAAC A++ Accredited",
  "AICTE Approved",
  "NIRF Tier-1 Ranking",
  "NBA Accredited Programs",
  "Est. 2002 · 20+ Years",
  ...features.map((feature) => feature.title),
];

export const visionFocusAreas = [
  "Engineering Education Excellence",
  "Advanced Research & Innovation",
  "Industry & Academic Collaboration",
  "Global Technology Leadership",
];

export const missionItems = [
  "To produce professionally competent students for a career in engineering and technology by providing value-based quality education",
  "To provide the readily acceptable quality trained manpower to meet the requirements of the National and International industry in the emerging areas of engineering and technology as well as for research and design",
  "To develop strong collaboration with academic and research institutes as well as the industry in the country and abroad",
  "To provide world level consultancy to generate wealth through services and new product design",
];

export const coreValues = [
  {
    title: "Excellence",
    description:
      "100% syllabus coverage, ~40 one-hour lectures/subject, full tutorial & lab engagement",
  },
  {
    title: "Innovation",
    description:
      "Encouraging R&D, prototype-to-patent culture, supported by grants and MoUs",
  },
  {
    title: "Integrity",
    description:
      "Ethical conduct, transparency, accountability in academic and professional affairs",
  },
];
