import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Eye,
  Lightbulb,
  Target,
  ExternalLink,
} from "lucide-react";
import {
  accreditationHighlights,
  campusLife,
  companies,
  coreValues,
  departments,
  missionItems,
  placementStats,
  resourceAndAccessItems,
  visionFocusAreas,
} from "@/constants/constantsHomePageContent";

const HomepageContent = () => {
  const placementSectionRef = useRef<HTMLDivElement | null>(null);
  const [animateStats, setAnimateStats] = useState(false);
  const [statValues, setStatValues] = useState(placementStats.map(() => 0));

  useEffect(() => {
    const section = placementSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateStats(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animateStats) return;

    const duration = 1400;
    let startTime: number | null = null;
    let frameId = 0;

    const update = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setStatValues(
        placementStats.map((stat) => Math.floor(stat.value * progress))
      );

      if (progress < 1) {
        frameId = window.requestAnimationFrame(update);
      }
    };

    frameId = window.requestAnimationFrame(update);

    return () => window.cancelAnimationFrame(frameId);
  }, [animateStats]);

  return (
    <div className="space-y-6 sm:space-y-8 py-4 sm:py-6">
      {/* Accreditation Bar */}
      <section className="bg-gray-100 border-y border-gray-200 overflow-hidden">
        <div className="container-modern py-3 sm:py-4">
          <div className="relative overflow-hidden">
            <div className="marquee-track hover:[animation-play-state:paused]">
              {[...accreditationHighlights, ...accreditationHighlights].map(
                (item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white border border-gray-200 text-xs sm:text-sm text-gray-700 font-medium whitespace-nowrap"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#118DC4]" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="container-modern">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose UIET?
          </h2>
          <p className="text-lg text-gray-600">
            Discover what makes us a leading engineering institute
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 group border-0 shadow-md hover:shadow-[#118DC4]/20"
            >
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#118DC4]/10 to-[#118DC4]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-[#118DC4]/20 group-hover:to-[#118DC4]/30 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-10 w-10 text-[#118DC4]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-[#118DC4] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Link to={feature.link}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#118DC4]/40 text-[#118DC4] hover:bg-[#118DC4] hover:text-white hover:border-[#118DC4] transition-all duration-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Campus Life Section */}
      <section className="bg-gradient-to-br from-[#118DC4]/8 via-[#118DC4]/5 to-transparent py-10 sm:py-14">
        <div className="container-modern">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Campus Life
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Experience vibrant student life at UIET with diverse opportunities
              for growth and engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusLife.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-md hover:shadow-[#118DC4]/20 hover:-translate-y-2"
              >
                <Link to={item.link}>
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-5 sm:p-6">
                    <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-[#118DC4] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link to="/students">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-[#118DC4] to-[#0d75a8] hover:from-[#0f7db0] hover:to-[#0a5d87] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Explore Student Life
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="bg-gradient-to-br from-gray-50 to-[#118DC4]/5 py-10 sm:py-14">
        <div className="container-modern">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Departments
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of engineering programs designed to
              shape tomorrow's innovators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-md hover:shadow-[#118DC4]/20 hover:-translate-y-2"
              >
                <Link to={dept.link}>
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-[#118DC4]/10 rounded-lg flex items-center justify-center group-hover:bg-[#118DC4] group-hover:scale-110 transition-all duration-300">
                        <dept.icon className="h-6 w-6 text-[#118DC4] group-hover:text-white transition-colors" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-[#118DC4] group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-4 group-hover:text-[#118DC4] transition-colors leading-tight">
                      {dept.name}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      {dept.showStudents !== false && (
                        <div className="flex justify-between items-center">
                          <span>Students:</span>
                          <span className="font-semibold text-[#118DC4]">
                            {dept.students}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <span>Faculty:</span>
                        <span className="font-semibold text-[#118DC4]">
                          {dept.faculty}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Recruiters Marquee */}
      <section className="bg-gray-50 border-y border-gray-200 py-8 overflow-hidden">
        <div className="container-modern">
          <h3 className="text-center text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-5">
            Our Students Work At
          </h3>
          <div className="relative overflow-hidden">
            <div className="marquee-track hover:[animation-play-state:paused]">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company}-${index}`}
                  className="px-4 sm:px-5 py-2 rounded-full bg-white border border-gray-200 text-xs sm:text-sm text-gray-700 font-medium whitespace-nowrap shadow-sm"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Placement Stats Section */}
      <section ref={placementSectionRef} className="container-modern py-4">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Placements at UIET
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placementStats.map((stat, index) => (
            <Card
              key={stat.label}
              className="border border-[#118DC4]/20 bg-gradient-to-br from-white to-[#118DC4]/5 shadow-md"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#118DC4] mb-2">
                  {stat.prefix}
                  {statValues[index]}
                  {stat.suffix}
                </p>
                <p className="text-sm md:text-base text-gray-700 font-medium">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Link to="/placements#statistics">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-[#118DC4] to-[#0d75a8] hover:from-[#0f7db0] hover:to-[#0a5d87] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              View Placement Report
            </Button>
          </Link>
        </div>
      </section>


      {/* Vision & Mission Section */}
      <section id="mission" className="container-modern py-4">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Vision & Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
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
              <div className="p-4 rounded-lg bg-[#f0f9ff]">
                <h4 className="font-semibold mb-2 text-[#118DC4]">
                  Key Focus Areas
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {visionFocusAreas.map((area) => (
                    <li key={area}>• {area}</li>
                  ))}
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
                {missionItems.map((item) => (
                  <li key={item} className="flex items-start">
                    <Lightbulb className="h-5 w-5 mr-2 mt-0.5 text-[#118DC4]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Core Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="text-center p-4 rounded-lg bg-[#e6f3fb]"
                >
                  <h4 className="font-semibold mb-2 text-[#118DC4]">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
      {/* Resources & Quick Access Section */}
      <section className="container-modern py-4">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Resources & Quick Access
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Find important links and downloadable resources in one place
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {resourceAndAccessItems.map((item) => (
            <Link key={item.title} to={item.href} className="h-full">
              <Card
                className={`h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-md hover:-translate-y-2 ${item.shadowColor}`}
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 ${item.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300`}
                  >
                    <item.icon
                      className={`h-7 w-7 sm:h-8 sm:w-8 ${item.iconColor} transition-colors`}
                    />
                  </div>
                  <h3
                    className={`text-sm sm:text-base font-semibold text-gray-900 ${item.titleColor} transition-colors mb-2`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <style>
        {`
          @keyframes companyMarquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .marquee-track {
            display: flex;
            gap: 1rem;
            width: max-content;
            animation: companyMarquee 28s linear infinite;
          }
        `}
      </style>

      {/* Contact Section */}
      <section className="py-10 sm:py-14 relative overflow-hidden bg-transparent">
        {/* Background decoration */}
        <div className="hidden sm:block absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="hidden sm:block absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full translate-y-24 -translate-x-24"></div>

        <div className="container-modern relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
                Get In Touch
              </h2>
              <p className="text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed text-gray-700">
                Have questions about admissions, academics, or campus life?
                We're here to help you every step of the way.
              </p>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-black/20 transition-colors">
                    <MapPin className="h-5 w-5 text-gray-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-700">
                      Sector 25, Chandigarh - 160014
                    </p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-black/20 transition-colors">
                    <Phone className="h-5 w-5 text-gray-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a
                      href="tel:+91-172-2534816"
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      +91-172-2534816
                    </a>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-black/20 transition-colors">
                    <Mail className="h-5 w-5 text-gray-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a
                      href="mailto:info@uiet.puchd.ac.in"
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      info@uiet.puchd.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-gray-800 tracking-tight">
                Quick Inquiry
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#118DC4] focus:border-[#118DC4] transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#118DC4] focus:border-[#118DC4] transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#118DC4] focus:border-[#118DC4] resize-none transition-all"
                  ></textarea>
                </div>
                <Button className="w-full bg-[#118DC4] text-white font-semibold py-3 rounded-xl hover:bg-[#0e79aa] transition-all duration-300 hover:scale-[1.015] active:scale-[0.98]">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-gray-200 shadow-xl bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Find Us on the Map
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6 max-w-xl">
                  View the campus location directly on Google Maps for easy navigation to UIET, Sector 25, Chandigarh.
                </p>
                <a
                  href="https://www.google.com/maps?q=University+Institute+of+Engineering+and+Technology+Panjab+University+Chandigarh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#118DC4] hover:bg-[#0a6ba2] text-white">
                    Open Google Maps
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
              <div className="min-h-[320px]">
                <iframe
                  title="UIET Google Map"
                  src="https://www.google.com/maps?q=University+Institute+of+Engineering+and+Technology+Panjab+University+Chandigarh&output=embed"
                  className="h-full w-full min-h-[320px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomepageContent;
