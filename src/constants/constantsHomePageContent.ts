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
    icon: Award,
    title: "NAAC A+ Accredited",
    description: "Recognized for academic excellence and quality standards",
    link: "/about",
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
    name: "Computer Science & Engineering",
    icon: Code,
    students: 480,
    faculty: 25,
    link: "/departments/cse",
  },
  {
    name: "Electronics & Communication",
    icon: Cog,
    students: 360,
    faculty: 20,
    link: "/departments/ece",
  },
  {
    name: "Electrical & Electronics",
    icon: Zap,
    students: 240,
    faculty: 15,
    link: "/departments/eee",
  },
  {
    name: "Information Technology",
    icon: Code,
    students: 360,
    faculty: 18,
    link: "/departments/it",
  },
  {
    name: "Mechanical Engineering",
    icon: Wrench,
    students: 240,
    faculty: 16,
    link: "/departments/me",
  },
  {
    name: "Biotechnology",
    icon: Dna,
    students: 120,
    faculty: 12,
    link: "/departments/bt",
  },
  {
    name: "Applied Sciences",
    icon: Calculator,
    students: 60,
    faculty: 10,
    link: "/departments/as",
  },
];

export const campusLife = [
  {
    title: "Student Clubs & Societies",
    description: "Technical and cultural clubs for holistic development",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=300&h=200&fit=crop",
    link: "/students#clubs",
  },
  {
    title: "Annual Tech Fest - UTechnos",
    description: "Premier technical festival with competitions and workshops",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop",
    link: "/students#events",
  },
  {
    title: "Sports & Recreation",
    description: "Sports facilities and inter-college tournaments",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    link: "/students#sports",
  },
  {
    title: "Research Projects",
    description: "Student involvement in cutting-edge research",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    link: "/research",
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
    title: "Admissions 2024",
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
