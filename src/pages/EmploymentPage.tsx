import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Briefcase, Building2, ExternalLink, Mail, Phone } from "lucide-react";

const employmentHighlights = [
  {
    title: "Placement and recruitment notices",
    description: "Track campus drives, internship calls, and recruiter announcements in one place.",
  },
  {
    title: "Career support for students",
    description: "Access interview guidance, resume support, and employer-facing resources.",
  },
  {
    title: "Institutional job links",
    description: "Use official university and UIET links for external vacancies and public sector opportunities.",
  },
];

const employmentContacts = [
  {
    title: "Training & Placement Cell",
    value: "+91-172-2534826",
    href: "tel:+911722534826",
  },
  {
    title: "Placement Email",
    value: "placements@uiet.puchd.ac.in",
    href: "mailto:placements@uiet.puchd.ac.in",
  },
  {
    title: "University Jobs Portal",
    value: "PU Employment / Jobs",
    href: "https://jobs.puchd.ac.in/list-jobs.php",
  },
];

const EmploymentPage = () => {
  const isExternalLink = (href: string) => /^https?:\/\//.test(href);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#118DC4] text-white py-20">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.12),_transparent_32%)]" />
        <div className="relative container mx-auto px-4 max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium mb-6 backdrop-blur-sm">
            <Briefcase className="h-4 w-4" />
            Employment
          </div>
          <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight mb-4">
            Employment and career opportunities at UIET
          </h1>
          <p className="text-base md:text-xl text-slate-100 max-w-3xl mx-auto">
            Find recruitment updates, public job links, and placement support resources for students and graduates.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 max-w-7xl space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {employmentHighlights.map((item) => (
              <Card key={item.title} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#118DC4]/10 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-[#118DC4]" />
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Where to look</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    UIET recruitment updates are published through official notices, the placement cell, and university job portals.
                  </p>
                  <p>
                    Students should follow the latest notices before applying so they do not miss deadlines, eligibility requirements, or interview schedules.
                  </p>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="https://jobs.puchd.ac.in/list-jobs.php" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#118DC4] hover:bg-[#0d7db0] text-white w-full sm:w-auto">
                      Visit PU Jobs Portal
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <Link to="/placements">
                    <Button variant="outline" className="w-full sm:w-auto border-[#118DC4] text-[#118DC4] hover:bg-[#118DC4]/10">
                      Go to Placements
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-[#118DC4] to-[#0a6b9b] text-white">
              <CardContent className="p-8 space-y-5">
                <h2 className="text-2xl font-bold">Contact</h2>
                {employmentContacts.map((contact) => (
                  <a
                    key={contact.title}
                    href={contact.href}
                    target={isExternalLink(contact.href) ? "_blank" : undefined}
                    rel={isExternalLink(contact.href) ? "noopener noreferrer" : undefined}
                    className="block rounded-2xl bg-white/10 border border-white/10 p-4 hover:bg-white/15 transition-colors"
                  >
                    <div className="text-sm text-white/80 mb-1">{contact.title}</div>
                    <div className="font-semibold">{contact.value}</div>
                  </a>
                ))}
                <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                  <div className="text-sm text-white/80 mb-1">Office Hours</div>
                  <div className="font-semibold">Monday to Friday, 9:00 AM - 5:00 PM</div>
                </div>
                <a
                  href="mailto:directoruiet@pu.ac.in"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  directoruiet@pu.ac.in
                </a>
                <a
                  href="tel:+911722541242"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  0172-2541242
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmploymentPage;
