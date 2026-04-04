import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, GraduationCap, Users, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import UietImage from "../assets/images/UietImage.jpeg";

const Hero = () => {
  const quickStats = [
    { icon: GraduationCap, value: "20+",   label: "Years of Excellence" },
    { icon: Users,         value: "2000+", label: "Active Students"     },
    { icon: Award,         value: "95%",   label: "Placement Rate"      },
    { icon: BookOpen,      value: "15+",   label: "Programs Offered"    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${UietImage}")` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="container-modern relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-16 lg:py-0">

          {/* Left Content — fully left-aligned on desktop, centered on mobile */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">

            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-sm">
              <span className="font-medium text-white">
                🏛️ Government Institute of Excellence
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                Shaping Future
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Engineers & Leaders
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200 max-w-xl">
                A premier government institution under Panjab University,
                fostering innovation, excellence, and ethical values since 2002.
              </p>
            </div>

            {/* Accreditation badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {["NAAC A++", "AICTE Approved", "NBA Accredited", "NIRF Ranked"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs sm:text-sm font-medium text-white backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link to="/admissions" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Admissions Portal
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/50 hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-4 rounded-xl group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content — Stats Cards */}
          <div className="flex items-center justify-center lg:justify-end lg:pl-8">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-sm lg:max-w-none">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="modern-card glass-effect text-center p-5 sm:p-6 hover-lift transform hover:scale-105 transition-all duration-300"
                >
                  <stat.icon className="h-7 w-7 sm:h-8 sm:w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;