import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Building,
  GraduationCap,
  MoreHorizontal,
  ChevronRight,
  Bell,
  Star,
  TrendingUp,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

// Navigation data structure
const navigationItems = [
  { name: "Home", href: "/" },
  {
    name: "Institute",
    href: "/about",
    dropdown: [
      { name: "About UIET", href: "/about" },
      { name: "About Panjab University", href: "/about/pu" },
      { name: "Vision & Mission", href: "/about#mission" },
      { name: "Director's Message", href: "/about#director" },
      { name: "Campus & Location", href: "/about#location" },
      { name: "Infrastructure", href: "/about#infrastructure" },
      { name: "Chandigarh City", href: "/about#chandigarh" },
    ],
  },
  {
    name: "Academics",
    href: "/academics",
    dropdown: [
      { name: "Academic Programs", href: "/academics" },
      { name: "Academic Calendar", href: "/academics#calendar" },
      { name: "Curriculum & Syllabus", href: "/academics#syllabus" },
      { name: "Timetable", href: "/academics#timetable" },
      { name: "Examination System", href: "/academics#examination" },
      { name: "Previous Year Papers", href: "/previous-papers" },
      { name: "Important Downloads", href: "/downloads" },
    ],
  },
  {
    name: "Departments",
    href: "/departments",
    dropdown: [
      { name: "All Departments", href: "/departments" },
      { name: "Computer Science & Engineering", href: "/departments/cse" },
      { name: "Electronics & Communication", href: "/departments/ece" },
      { name: "Electrical & Electronics", href: "/departments/eee" },
      { name: "Information Technology", href: "/departments/it" },
      { name: "Mechanical Engineering", href: "/departments/me" },
      { name: "Biotechnology", href: "/departments/bt" },
      { name: "Applied Sciences", href: "/departments/as" },
    ],
  },
  { name: "Faculty", href: "/faculty" },
  { name: "Research", href: "/research" },
  {
    name: "Admissions",
    href: "/admissions",
    dropdown: [
      { name: "B.E. Admissions 2024", href: "/admissions" },
      { name: "M.E./M.Tech Admissions", href: "/admissions#mtech" },
      { name: "Ph.D Admissions", href: "/admissions#phd" },
      { name: "NRI/Foreign Admissions", href: "/admissions#nri" },
      { name: "Sports Quota Admissions", href: "/admissions#sports" },
      { name: "PUMEET Information", href: "/admissions#pumeet" },
      { name: "PULEET Information", href: "/admissions#puleet" },
    ],
  },
  {
    name: "Students",
    href: "/students",
    dropdown: [
      { name: "Student Life Overview", href: "/students" },
      { name: "B.E. 1st Year Batch", href: "/students#be-first-year" },
      { name: "Research Scholars", href: "/students#research-scholars" },
      { name: "Clubs & Societies", href: "/students#clubs" },
      { name: "Student Activities", href: "/students#activities" },
      { name: "Student Achievements", href: "/students#achievements" },
      { name: "Notices & Updates", href: "/students#notices" },
      { name: "Scholarships", href: "/students#scholarships" },
      { name: "AICTE Scholarships", href: "/students#aicte-scholarships" },
      { name: "Medical Emergency", href: "/students#medical-emergency" },
      { name: "Alumni Network", href: "/students#alumni" },
      { name: "Employment Opportunities", href: "/employment" },
    ],
  },
  {
    name: "Committees",
    href: "/committees",
    dropdown: [
      { name: "All Committees", href: "/committees" },
      { name: "Departmental Committee", href: "/committees#departmental" },
      { name: "Grievance Redressal Cell", href: "/committees#grievance" },
      { name: "Anti-Sexual Harassment", href: "/committees#harassment" },
      { name: "Board of Control", href: "/committees#board" },
      { name: "SC/ST Cell", href: "/committees#scst" },
      { name: "Anti-Ragging Committee", href: "/committees#ragging" },
      { name: "R&D Cell", href: "/committees#rnd" },
      { name: "UTechnos Committee", href: "/committees#utechnos" },
    ],
  },
  {
    name: "Placements",
    href: "/placements",
    dropdown: [
      { name: "Placement Overview", href: "/placements" },
      { name: "TPO's Message", href: "/placements#tpo-message" },
      { name: "Placement Statistics", href: "/placements#statistics" },
      { name: "Past Recruiters", href: "/placements#recruiters" },
      { name: "Campus Placement Procedure", href: "/placements#procedure" },
      { name: "Placement Web Portal", href: "/placements#portal" },
      { name: "Training Programs", href: "/placements#training" },
      { name: "TPC Team Contact", href: "/placements#tpc-contact" },
      { name: "Placement Brochure", href: "/placements#brochure" },
      { name: "Employment Opportunities", href: "/employment" },
    ],
  },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

// Trending news/announcements data
const trendingNews = [
  {
    id: 1,
    type: "admission",
    icon: GraduationCap,
    title: "JEE Main 2024-25 Counselling Started - Apply Now",
    link: "/news",
    isNew: true,
    priority: "high"
  },
  {
    id: 2,
    type: "placement",
    icon: TrendingUp,
    title: "Record Breaking Placements 2024-25 - 314 Offers with ₹42 LPA Highest Package",
    link: "/news",
    isNew: false,
    priority: "high"
  },
  {
    id: 3,
    type: "research",
    icon: Star,
    title: "UIET Researchers Publish 50+ Papers in Top International Journals",
    link: "/news",
    isNew: true,
    priority: "medium"
  },
  {
    id: 4,
    type: "event",
    icon: Calendar,
    title: "Technical Fest UTechnos 2024-25 Registration Open",
    link: "/news",
    isNew: false,
    priority: "medium"
  },
  {
    id: 5,
    type: "achievement",
    icon: Star,
    title: "UIET Maintains NIRF Tier-1 Ranking in Engineering Category",
    link: "/news",
    isNew: false,
    priority: "high"
  }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMoreItem, setExpandedMoreItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleItems, setVisibleItems] = useState(navigationItems.length);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [showNotifications, setShowNotifications] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [topOffset, setTopOffset] = useState(0);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);
  const topBarsRef = useRef<HTMLDivElement | null>(null);
  const mainNavRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  // Handle keyboard navigation for news banner
  const handleKeyDown = (e) => {
    if (!showNotifications) return;
    
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setCurrentNewsIndex((prev) => (prev === 0 ? trendingNews.length - 1 : prev - 1));
      setProgress(0);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setCurrentNewsIndex((prev) => (prev + 1) % trendingNews.length);
      setProgress(0);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const topBarsHeight = topBarsRef.current?.offsetHeight ?? 0;
      setTopOffset(Math.max(0, topBarsHeight - window.scrollY));
    };

    const handleResize = () => {
      const topBarsHeight = topBarsRef.current?.offsetHeight ?? 0;
      const currentNavHeight = mainNavRef.current?.offsetHeight ?? 0;

      setTopOffset(Math.max(0, topBarsHeight - window.scrollY));
      setNavHeight(currentNavHeight);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const topBarsHeight = topBarsRef.current?.offsetHeight ?? 0;
    const currentNavHeight = mainNavRef.current?.offsetHeight ?? 0;

    setTopOffset(Math.max(0, topBarsHeight - window.scrollY));
    setNavHeight(currentNavHeight);
  }, [showNotifications, isMenuOpen]);

  // Auto-rotate trending news with progress tracking
  useEffect(() => {
    if (!showNotifications || isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % trendingNews.length);
      setProgress(0);
    }, 4000); // Change every 4 seconds
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + (100 / (4000 / 50))));
    }, 50);
    
    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [showNotifications, isPaused, currentNewsIndex]);

  useEffect(() => {
    const calculateVisibleItems = () => {
      if (!navRef.current) return;

      const containerWidth = navRef.current.offsetWidth;
      const baseItemWidth = 95;
      const moreButtonWidth = 70;
      const padding = 40;

      const availableWidth = containerWidth - moreButtonWidth - padding;
      const maxItems = Math.floor(availableWidth / baseItemWidth);

      let minItems, maxItemsAllowed;
      if (containerWidth >= 1400) {
        minItems = 8;
        maxItemsAllowed = navigationItems.length;
      } else if (containerWidth >= 1200) {
        minItems = 6;
        maxItemsAllowed = 8;
      } else if (containerWidth >= 1024) {
        minItems = 5;
        maxItemsAllowed = 7;
      } else {
        minItems = 3;
        maxItemsAllowed = 5;
      }

      const itemsToShow = Math.max(
        minItems,
        Math.min(maxItems, maxItemsAllowed, navigationItems.length)
      );
      setVisibleItems(itemsToShow);
    };

    calculateVisibleItems();
    window.addEventListener("resize", calculateVisibleItems);
    const timeoutId = setTimeout(calculateVisibleItems, 100);

    return () => {
      window.removeEventListener("resize", calculateVisibleItems);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setExpandedMoreItem(null);
  }, [location.pathname]);

  const isActivePath = (href) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const hasActiveDropdownItem = (dropdown) => {
    return dropdown.some((item) => isActivePath(item.href.split("#")[0]));
  };

  const visibleNavItems = navigationItems.slice(0, visibleItems);
  const hiddenNavItems = navigationItems.slice(visibleItems);

  return (
    <>
      <header ref={topBarsRef}>
      {/* Government Info Bar */}
      <div className="bg-gradient-to-r from-[#118DC4] to-[#0f7db0] text-white py-1 sm:py-2">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-6">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 min-w-0 flex-1">
              <div className="flex items-center space-x-1 min-w-0">
                <Building className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="font-medium truncate">
                  Government Institute
                </span>
              </div>
              <div className="hidden sm:flex items-center space-x-1 min-w-0">
                <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="truncate">Panjab University</span>
              </div>
            </div>
            <div className="bg-white/20 text-white border border-white/30 text-xs px-1.5 sm:px-2 py-1 rounded flex-shrink-0 ml-1 sm:ml-2">
              NAAC A+
            </div>
          </div>
        </div>
      </div>

      {/* Trending News/Announcements Banner */}
      {showNotifications && trendingNews.length > 0 && (
        <div 
          className="relative bg-gradient-to-r from-orange-50 to-red-50 border-b border-orange-100 py-2 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Trending news and announcements"
        >
          <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 min-w-0 flex-1">
                <div className="flex items-center space-x-1 flex-shrink-0">
                  <Bell className="h-4 w-4 text-orange-600 animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-orange-800 hidden sm:inline">
                    Trending
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="relative h-6 overflow-hidden">
                    <div 
                      className="absolute inset-0 transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateY(-${currentNewsIndex * 100}%)` }}
                    >
                      {trendingNews.map((news, index) => (
                        <Link 
                          key={news.id}
                          to={news.link}
                          className="flex items-center h-6 group hover:text-[#118DC4] transition-colors duration-200"
                        >
                          <div className="flex items-center space-x-2 min-w-0">
                            {React.createElement(news.icon, {
                              className: "h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-orange-600 group-hover:text-[#118DC4] transition-colors"
                            })}
                            <span className="text-xs sm:text-sm text-gray-800 group-hover:text-[#118DC4] truncate font-medium transition-colors">
                              {news.title}
                            </span>
                            {news.isNew && (
                              <span className="inline-block px-2 py-0.5 bg-red-500 text-white text-xs rounded-full font-bold animate-pulse flex-shrink-0">
                                NEW
                              </span>
                            )}
                            <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-[#118DC4] transition-colors flex-shrink-0" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0">
                {/* News counter for mobile */}
                <div className="sm:hidden text-xs text-orange-700 bg-orange-100 px-2 py-1 rounded-full font-medium">
                  {currentNewsIndex + 1}/{trendingNews.length}
                </div>
                {/* News navigation dots */}
                <div className="hidden sm:flex items-center space-x-1">
                  {trendingNews.map((news, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentNewsIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#118DC4] focus:ring-offset-1 ${
                        index === currentNewsIndex 
                          ? 'bg-[#118DC4] scale-110' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Show news: ${news.title.substring(0, 50)}...`}
                      title={news.title}
                    />
                  ))}
                </div>
                {/* Close button */}
                <button
                  onClick={() => setShowNotifications(false)}
                  className="p-1 hover:bg-orange-100 rounded-full transition-colors duration-200 text-orange-600 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1"
                  aria-label="Close trending news banner"
                  title="Close notifications"
                >
                  <X className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              </div>
            </div>
          </div>
          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-200">
            <div 
              className="h-full bg-[#118DC4] transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Contact Info */}
      <div className="bg-gray-50/80 backdrop-blur-sm border-b py-1 sm:py-2">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-6">
          <div className="flex justify-between items-center text-xs sm:text-sm text-gray-700">
            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 min-w-0 flex-1">
              <a
                href="tel:+91-172-2541242"
                className="flex items-center hover:text-[#118DC4] transition-colors min-w-0"
              >
                <Phone className="h-3 w-3 mr-1 flex-shrink-0" />
                <span className="hidden sm:inline truncate">
                  +91-172-2541242
                </span>
                <span className="sm:hidden">Call</span>
              </a>
              <a
                href="mailto:directoruiet@pu.ac.in"
                className="hidden sm:flex items-center hover:text-[#118DC4] transition-colors min-w-0"
              >
                <Mail className="h-3 w-3 mr-1 flex-shrink-0" />
                <span className="hidden lg:inline truncate">
                  directoruiet@pu.ac.in
                </span>
                <span className="lg:hidden">Email</span>
              </a>
            </div>
            <div className="flex items-center space-x-1 text-xs flex-shrink-0 ml-1 sm:ml-2">
              <MapPin className="h-3 w-3 flex-shrink-0" />
              <span className="hidden sm:inline">Sector 25, Chandigarh</span>
              <span className="sm:hidden">CHD</span>
            </div>
          </div>
        </div>
      </div>

      </header>

      {/* Main Header */}
      <div
        ref={mainNavRef}
        style={{ top: `${topOffset}px` }}
        className={`fixed left-0 right-0 z-50 w-full mx-auto px-1 sm:px-2 md:px-4 lg:px-6 bg-white/95 backdrop-blur-md border-b border-gray-200/90 ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="flex justify-between items-center py-2 sm:py-3 md:py-4">
          {/* Logo and Institute Name */}
          <Link
            to="/"
            className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 flex-shrink-0 min-w-0"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center">
              <img
                src="https://imgs.search.brave.com/xC3gTQLulY-1CaC5-1vGWxLNAxY4ZXfdRp1O-EvepC4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/OS85NC9VSUVUX2xv/Z28ucG5nLzUxMnB4/LVVJRVRfbG9nby5w/bmc"
                alt="UIET Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-gray-900 tracking-tight leading-tight">
                <span className="hidden lg:inline">
                  University Institute of Engineering & Technology
                </span>
                <span className="hidden sm:inline lg:hidden">
                  UIET, Panjab University
                </span>
                <span className="sm:hidden">UIET</span>
              </h1>
              <p className="text-xs sm:text-sm text-[#118DC4] font-medium">
                <span className="hidden sm:inline">
                  Panjab University, Chandigarh
                </span>
                <span className="sm:hidden">Panjab University</span>
              </p>
            </div>
          </Link>

          {/* Responsive Desktop Navigation */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 flex-1 justify-center mx-1 xl:mx-2 2xl:mx-4 min-w-0"
          >
            {/* Visible Navigation Items */}
            {visibleNavItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() =>
                  item.dropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center px-1.5 lg:px-2 xl:px-3 py-2 transition-all duration-200 font-medium hover:bg-[#118DC4]/10 rounded-lg text-xs xl:text-sm whitespace-nowrap ${
                    isActivePath(item.href) ||
                    (item.dropdown && hasActiveDropdownItem(item.dropdown))
                      ? "text-[#118DC4] bg-[#118DC4]/10 shadow-sm"
                      : "text-gray-700 hover:text-[#118DC4]"
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 lg:w-64 bg-white rounded-xl shadow-xl border border-gray-200 z-50 py-2 opacity-0 translate-y-2 animate-[fadeInUp_0.2s_ease-out_forwards] before:content-[''] before:absolute before:-top-1 before:left-0 before:w-full before:h-1 before:bg-transparent">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className={`block px-4 py-3 text-sm transition-all duration-150 border-b border-gray-100 last:border-b-0 hover:pl-6 ${
                          isActivePath(subItem.href.split("#")[0])
                            ? "bg-[#118DC4]/10 text-[#118DC4] font-medium border-l-4 border-l-[#118DC4]"
                            : "text-gray-700 hover:bg-[#118DC4]/10 hover:text-[#118DC4]"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Improved More Dropdown */}
            {hiddenNavItems.length > 0 && (
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("more")}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setExpandedMoreItem(null);
                }}
              >
                <button className="flex items-center px-1.5 lg:px-2 xl:px-3 py-2 text-xs xl:text-sm text-gray-700 hover:text-[#118DC4] hover:bg-[#118DC4]/10 font-medium rounded-lg transition-all duration-200 whitespace-nowrap">
                  <MoreHorizontal className="h-4 w-4 mr-1" />
                  More
                </button>
                {activeDropdown === "more" && (
                  <div className="absolute top-full right-0 mt-1 w-64 lg:w-72 bg-white rounded-xl shadow-xl border border-gray-200 z-50 opacity-0 translate-y-2 animate-[fadeInUp_0.2s_ease-out_forwards] before:content-[''] before:absolute before:-top-1 before:right-4 before:w-16 before:h-1 before:bg-transparent max-h-[75vh] overflow-y-auto">
                    {/* Scrollable container with custom scrollbar */}
                    <div className="py-2 space-y-1 custom-scrollbar">
                      {hiddenNavItems.map((item) => (
                        <div key={item.name} className="relative">
                          <div className="flex items-center">
                            <Link
                              to={item.href}
                              className={`flex-1 block px-4 py-3 text-sm transition-all duration-150 hover:pl-6 ${
                                isActivePath(item.href)
                                  ? "bg-[#118DC4]/10 text-[#118DC4] font-medium border-l-4 border-l-[#118DC4]"
                                  : "text-gray-700 hover:bg-[#118DC4]/10 hover:text-[#118DC4]"
                              }`}
                            >
                              {item.name}
                            </Link>
                            {item.dropdown && (
                              <button
                                className="p-2 text-gray-400 hover:text-[#118DC4] hover:bg-[#118DC4]/10 rounded-lg mr-2 transition-all duration-150"
                                onClick={() =>
                                  setExpandedMoreItem(
                                    expandedMoreItem === item.name
                                      ? null
                                      : item.name
                                  )
                                }
                              >
                                <ChevronRight
                                  className={`h-4 w-4 transition-transform duration-200 ${
                                    expandedMoreItem === item.name
                                      ? "rotate-90"
                                      : ""
                                  }`}
                                />
                              </button>
                            )}
                          </div>

                          {/* Collapsible sub-items */}
                          {item.dropdown && expandedMoreItem === item.name && (
                            <div className="pl-6 bg-gray-50/50 border-l-2 border-gray-200 ml-4 mr-2 rounded-r-lg">
                              <div className="py-2 space-y-1">
                                {item.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    className={`block px-3 py-2 text-xs transition-all duration-150 rounded-lg hover:pl-5 ${
                                      isActivePath(subItem.href.split("#")[0])
                                        ? "bg-[#118DC4]/10 text-[#118DC4] font-medium"
                                        : "text-gray-600 hover:bg-[#118DC4]/10 hover:text-[#118DC4]"
                                    }`}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3 flex-shrink-0">
            <Link to="/admissions" className="block">
              <Button className="bg-gradient-to-r from-[#118DC4] to-[#0f7db0] hover:from-[#0f7db0] hover:to-[#0d6a94] text-white font-medium text-xs sm:text-sm px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <span className="hidden sm:inline">Apply Now</span>
                <span className="sm:hidden">Apply</span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-1.5 sm:p-2 hover:bg-[#118DC4]/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white/95 backdrop-blur-md shadow-lg rounded-b-xl mb-2 max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] overflow-y-auto">
            <nav className="py-2 sm:py-3 md:py-4 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      className={`flex-1 block px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 transition-all duration-200 rounded-lg mx-2 font-medium text-sm ${
                        isActivePath(item.href) ||
                        (item.dropdown && hasActiveDropdownItem(item.dropdown))
                          ? "text-[#118DC4] bg-[#118DC4]/10 shadow-sm"
                          : "text-gray-700 hover:bg-[#118DC4]/10 hover:text-[#118DC4]"
                      }`}
                      onClick={() => !item.dropdown && setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mx-2 p-1.5 sm:p-2 hover:bg-[#118DC4]/10"
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )
                        }
                      >
                        <ChevronDown
                          className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                    )}
                  </div>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="pl-3 sm:pl-4 md:pl-6 space-y-1 bg-gray-50/50 mx-2 rounded-lg py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-sm transition-all duration-150 rounded ${
                            isActivePath(subItem.href.split("#")[0])
                              ? "text-[#118DC4] bg-[#118DC4]/10 font-medium"
                              : "text-gray-600 hover:text-[#118DC4] hover:bg-[#118DC4]/10"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-2 sm:px-3 md:px-4 pt-2 sm:pt-3 md:pt-4">
                <Link to="/admissions">
                  <Button
                    className="w-full bg-gradient-to-r from-[#118DC4] to-[#0f7db0] hover:from-[#0f7db0] hover:to-[#0d6a94] text-white font-medium text-sm shadow-lg py-2 sm:py-2.5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      <div style={{ height: `${navHeight}px` }} aria-hidden="true" />

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          /* Custom scrollbar for more dropdown */
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #cbd5e1 transparent;
          }
          
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 3px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: #94a3b8;
          }
          
          /* Additional responsive breakpoints */
          @media (max-width: 360px) {
            .text-xs { font-size: 0.7rem; }
            .space-x-1 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.125rem; }
          }
          
          @media (min-width: 1536px) {
            .2xl\\:mx-4 { margin-left: 1rem; margin-right: 1rem; }
          }
          
          /* Ensure proper truncation */
          .truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          
          /* Mobile menu height constraints */
          @media (max-height: 600px) {
            .max-h-\\[60vh\\] { max-height: 50vh; }
          }
        `}
      </style>
    </>
  );
};

export default Header;
