import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  MessageSquare,
  Users,
  Building,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "University Institute of Engineering and Technology",
        "Sector 25, South Campus, Panjab University",
        "Chandigarh (U.T.), INDIA 160014",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["0172-2541242", "+916280089748", "7719716783"],
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "directoruiet@pu.ac.in",
      ],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  const departments = [
    {
      name: "Department of Computer Science & Engineering",
      email: "cse@uiet.puchd.ac.in",
      phone: "+91-172-2534820",
      head: "Dr. Rajesh Kumar",
    },
    {
      name: "Department of Electronics & Communication Engineering",
      email: "ece@uiet.puchd.ac.in",
      phone: "+91-172-2534821",
      head: "Dr. Priya Sharma",
    },
    {
      name: "Department of Mechanical Engineering",
      email: "me@uiet.puchd.ac.in",
      phone: "+91-172-2534822",
      head: "Dr. Amit Singh",
    },
    {
      name: "Department of Civil Engineering",
      email: "ce@uiet.puchd.ac.in",
      phone: "+91-172-2534823",
      head: "Dr. Neha Gupta",
    },
    {
      name: "Department of Biotechnology",
      email: "bt@uiet.puchd.ac.in",
      phone: "+91-172-2534824",
      head: "Dr. Suresh Patel",
    },
  ];

  const quickContacts = [
    {
      title: "Admissions Office",
      phone: "+91-172-2534825",
      email: "admissions@uiet.puchd.ac.in",
    },
    {
      title: "Placement Cell",
      phone: "+91-172-2534826",
      email: "placements@uiet.puchd.ac.in",
    },
    {
      title: "Student Affairs",
      phone: "+91-172-2534827",
      email: "students@uiet.puchd.ac.in",
    },
    {
      title: "Library",
      phone: "+91-172-2534828",
      email: "library@uiet.puchd.ac.in",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: "#e0f7ff", color: "#118DC4" }}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to us and
            we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: "#e0f7ff" }}
                      >
                        <info.icon
                          className="w-6 h-6"
                          style={{ color: "#118DC4" }}
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contacts */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Quick Contacts
              </h3>
              <div className="space-y-3">
                {quickContacts.map((contact, index) => (
                  <Card
                    key={index}
                    className="border border-slate-200 shadow-sm"
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-slate-900">
                            {contact.title}
                          </h4>
                          <p className="text-slate-600 text-sm">
                            {contact.email}
                          </p>
                        </div>
                        <div
                          className="font-medium"
                          style={{ color: "#118DC4" }}
                        >
                          {contact.phone}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent"
                        style={{ "--tw-ring-color": "#118DC4" } as any}
                        onFocus={(e) =>
                          (e.target.style.boxShadow = `0 0 0 2px rgba(17, 141, 196, 0.2)`)
                        }
                        onBlur={(e) => (e.target.style.boxShadow = "none")}
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent"
                        style={{ "--tw-ring-color": "#118DC4" } as any}
                        onFocus={(e) =>
                          (e.target.style.boxShadow = `0 0 0 2px rgba(17, 141, 196, 0.2)`)
                        }
                        onBlur={(e) => (e.target.style.boxShadow = "none")}
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={{ "--tw-ring-color": "#118DC4" } as any}
                      onFocus={(e) =>
                        (e.target.style.boxShadow = `0 0 0 2px rgba(17, 141, 196, 0.2)`)
                      }
                      onBlur={(e) => (e.target.style.boxShadow = "none")}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={{ "--tw-ring-color": "#118DC4" } as any}
                      onFocus={(e) =>
                        (e.target.style.boxShadow = `0 0 0 2px rgba(17, 141, 196, 0.2)`)
                      }
                      onBlur={(e) => (e.target.style.boxShadow = "none")}
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Subject
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={{ "--tw-ring-color": "#118DC4" } as any}
                      onFocus={(e) =>
                        (e.target.style.boxShadow = `0 0 0 2px rgba(17, 141, 196, 0.2)`)
                      }
                      onBlur={(e) => (e.target.style.boxShadow = "none")}
                    >
                      <option>General Inquiry</option>
                      <option>Admissions</option>
                      <option>Academic Programs</option>
                      <option>Research Collaboration</option>
                      <option>Campus Visit</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent resize-none"
                      style={{ "--tw-ring-color": "#118DC4" } as any}
                      onFocus={(e) =>
                        (e.target.style.boxShadow = `0 0 0 2px rgba(17, 141, 196, 0.2)`)
                      }
                      onBlur={(e) => (e.target.style.boxShadow = "none")}
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  <Button
                    className="w-full py-3 hover: [#0d7db8]"
                    style={{ backgroundColor: "#118DC4" }}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Department Contacts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Department Contacts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Building
                      className="w-6 h-6"
                      style={{ color: "#118DC4" }}
                    />
                    <h4 className="font-semibold text-slate-900">
                      {dept.name}
                    </h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-600">HOD: {dept.head}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-600">{dept.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-600">{dept.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map and Directions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Visit Our Campus
              </h3>
              <div className="space-y-4">
                <p className="text-slate-600">
                  Located in the heart of Chandigarh, our campus is easily
                  accessible by various modes of transportation.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-slate-900">By Car:</h4>
                    <p className="text-slate-600 text-sm">
                      Take NH-5 and exit at Sector 25. Free parking available on
                      campus.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">By Bus:</h4>
                    <p className="text-slate-600 text-sm">
                      CTU buses regularly serve Sector 25. Nearest bus stop is
                      200m from campus.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">By Train:</h4>
                    <p className="text-slate-600 text-sm">
                      Chandigarh Railway Station (8km). Auto-rickshaws and taxis
                      available.
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Globe className="w-4 h-4 mr-2" />
                  View on Google Maps
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-0 shadow-lg text-white self-start"
            style={{
              background: "linear-gradient(to bottom right, #118DC4, #8b5cf6)",
            }}
          >
            <CardContent className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Schedule a Campus Visit
              </h3>
              <p className="text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed" style={{ color: "#e0f7ff" }}>
                Experience our world-class facilities firsthand. Schedule a guided
                campus tour and see why UIET is the perfect choice for your
                engineering education.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" style={{ color: "#b3e5fc" }} />
                  <span className="text-sm sm:text-base" style={{ color: "#e0f7ff" }}>
                    Tours available Monday–Saturday
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" style={{ color: "#b3e5fc" }} />
                  <span className="text-sm sm:text-base" style={{ color: "#e0f7ff" }}>
                    Group and individual tours
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" style={{ color: "#b3e5fc" }} />
                  <span className="text-sm sm:text-base" style={{ color: "#e0f7ff" }}>
                    Meet faculty and current students
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
