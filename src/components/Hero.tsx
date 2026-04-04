import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  GraduationCap,
  Users,
  Award,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import UietImage from "../assets/images/UietImage.jpeg";

const Hero = () => {
  const quickStats = [
    { icon: GraduationCap, value: "20+", label: "Years of Excellence" },
    { icon: Users, value: "2000+", label: "Active Students" },
    { icon: Award, value: "95%", label: "Placement Rate" },
    { icon: BookOpen, value: "15+", label: "Programs Offered" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>

      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url("${UietImage}")` }}
      ></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container-modern relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-8 lg:py-0">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm mt-8 rounded-full border border-white/30 text-xs sm:text-sm">
              <span className="font-medium text-white">
                🏛️ Government Institute of Excellence
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white max-w-3xl mx-auto">
                Shaping Future
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Engineers & Leaders
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto text-gray-100">
                University Institute of Engineering & Technology - A premier
                government institution under Panjab University, fostering
                innovation, excellence, and ethical values since 2002.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-1">
              {[
                "NAAC A++",
                "AICTE Approved",
                "NBA Accredited",
                "NIRF Ranked",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs sm:text-sm font-medium text-white backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Key Features */}
            {/* <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm justify-center lg:justify-start">
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white">
                NAAC A+ Accredited
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white">
                NBA Approved Programs
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white">
                Industry Partnerships
              </span>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center">
              <Link to="/admissions" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Admissions Portal
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link to="/about" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/40  hover:bg-white/20 backdrop-blur-sm font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl group"
                >
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Quick Navigation */}
            {/* <div className="pt-6 lg:pt-8">
              <p className="text-blue-200 text-sm mb-3 sm:mb-4">Quick Access:</p>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                <Link to="/academics" className="text-blue-300 hover:text-white text-xs sm:text-sm underline-offset-4 hover:underline transition-colors">
                  Academic Programs
                </Link>
                <Link to="/placements" className="text-blue-300 hover:text-white text-xs sm:text-sm underline-offset-4 hover:underline transition-colors">
                  Placement Records
                </Link>
                <Link to="/research" className="text-blue-300 hover:text-white text-xs sm:text-sm underline-offset-4 hover:underline transition-colors">
                  Research & Innovation
                </Link>
                <Link to="/contact" className="text-blue-300 hover:text-white text-xs sm:text-sm underline-offset-4 hover:underline transition-colors">
                  Contact Us
                </Link>
              </div>
            </div> */}
          </div>

          {/* Right Content - Stats Cards */}
          <div className="lg:pl-8">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="modern-card glass-effect text-center p-4 sm:p-6 hover-lift transform hover:scale-105 transition-all duration-300"
                >
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mx-auto mb-2 sm:mb-3" />
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-200 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Card */}
            {/* <div className="mt-6 sm:mt-8 modern-card glass-effect p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                Why Choose UIET?
              </h3>
              <div className="space-y-2 sm:space-y-3 text-gray-100 text-xs sm:text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-overflow-safe">
                    Premier government institution with 20+ years of excellence
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-overflow-safe">
                    NAAC A+ accredited with world-class infrastructure
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-overflow-safe">
                    95% placement rate with top industry partnerships
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-overflow-safe">
                    Located in the beautiful planned city of Chandigarh
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hidden sm:block">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Explore More</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/70 to-transparent"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
