import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar, FileText, Users, GraduationCap, CheckCircle,
  AlertCircle, Clock, CreditCard, Globe, Trophy, ExternalLink,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { useAdmissionSchedules } from "@/hooks/useStrapi";

const JAC_PORTAL_URL = "https://jacchd.admissions.nic.in/";

// static data
const specialAdmissions = [
  {
    name: "Sports Admissions",
    icon: Trophy,
    description: "Special admission for outstanding sports persons",
    seats: "5% of total seats",
    requirements: ["State/National level sports certificate", "Academic eligibility", "Sports trial"],
    process: "Merit-based selection with sports achievements consideration",
  },
  {
    name: "PUMEET",
    icon: GraduationCap,
    description: "Panjab University Management Entrance Examination Test",
    seats: "Variable",
    requirements: ["Bachelor's degree", "PUMEET qualification", "Group discussion & interview"],
    process: "Written test followed by GD-PI rounds",
  },
  {
    name: "PULEET",
    icon: Users,
    description: "Panjab University Law Entrance Examination Test",
    seats: "Variable",
    requirements: ["10+2 or graduation", "PULEET qualification", "English proficiency"],
    process: "Written examination and merit-based selection",
  },
];

const eligibilityCriteria = {
  be: ["Must appear in JEE Main (Paper 1) and have a valid All India Rank (AIR)", "Must have passed Class XII or be appearing in Class XII in the same year", "Candidates who passed Class XII in 2022 or earlier are not eligible", "Minimum 60% aggregate in Class XII (as per current admission norms)", "Admissions are through JAC Chandigarh counselling; UIET has no separate entrance exam"],
  me: ["B.E./B.Tech in relevant discipline", "Minimum 60% marks or 6.5 CGPA", "Valid GATE score", "Relevant qualifying degree from a recognized university"],
  phd: ["M.E./M.Tech/M.Sc. in relevant field", "Minimum 60% marks or 6.5 CGPA", "NET/GATE/JRF qualification", "Research proposal submission", "Interview clearing mandatory"],
  nri: ["International qualification equivalent", "English proficiency (IELTS/TOEFL)", "Financial capability certificate", "Visa documentation", "Medical clearance"],
};

const applicationProcess = [
  { step: 1, title: "Clear JEE Main", description: "Appear in JEE Main (Paper 1). UIET admissions are based on JEE Main AIR through JAC Chandigarh.", icon: GraduationCap },
  { step: 2, title: "Check Eligibility", description: "Confirm Class XII year and minimum marks eligibility before registration.", icon: CheckCircle },
  { step: 3, title: "Register on JAC Portal", description: "Register on the JAC Chandigarh portal using your JEE Main application number and personal details.", icon: Users, link: JAC_PORTAL_URL },
  { step: 4, title: "Pay Counselling Fee", description: "Pay non-refundable counselling fee: Rs. 2800 (General) / Rs. 1400 (SC/ST/PwD).", icon: CreditCard },
  { step: 5, title: "Upload Documents", description: "Upload Class XII marksheet and applicable category certificates before deadline.", icon: FileText },
  { step: 6, title: "Fill & Lock Choices", description: "Select and lock institute/branch choices on the portal. Locked choices cannot be edited.", icon: Clock },
  { step: 7, title: "Seat Allotment Rounds", description: "Participate in counselling rounds (regular, special, and spot) based on JEE Main AIR and choices.", icon: Calendar },
  { step: 8, title: "Pay Seat Acceptance Fee", description: "Pay seat acceptance fee of Rs. 40000 to confirm allotted seat.", icon: CreditCard },
  { step: 9, title: "Report Physically at UIET", description: "Report at UIET with original documents for verification and final admission formalities.", icon: CheckCircle },
];

const importantAdmissionNote =
  "Important note: UIET admissions follow JAC Chandigarh counselling and the latest official notices. Dates are tentative until published by the institute.";

const admissionContacts = [
  { label: "Admissions Office", value: "+91-172-2541242", href: "tel:+911722541242" },
  { label: "Admissions Email", value: "admissions@uiet.puchd.ac.in", href: "mailto:admissions@uiet.puchd.ac.in" },
  { label: "UIET Notices", value: "Latest notices and updates", href: "/news" },
];

const feeStructure = [
  { program: "B.E. (per year)", tuition: "₹1,20,000", hostel: "₹45,000", other: "₹15,000", total: "₹1,80,000" },
  { program: "M.E./M.Tech (per year)", tuition: "₹80,000", hostel: "₹45,000", other: "₹12,000", total: "₹1,37,000" },
  { program: "Ph.D (per year)", tuition: "₹30,000", hostel: "₹45,000", other: "₹8,000", total: "₹83,000" },
  { program: "NRI/Foreign (per year)", tuition: "$5,000", hostel: "$1,200", other: "$300", total: "$6,500" },
];

// Schedule card skeleton
const ScheduleSkeleton = () => (
  <div className="space-y-6">
    {[...Array(4)].map((_, i) => (
      <Card key={i} className="border-0 shadow-md bg-white animate-pulse">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            <div className="col-span-1 sm:col-span-2 lg:col-span-2 space-y-2">
              <div className="h-5 bg-slate-200 rounded w-3/4" />
              <div className="h-3 bg-slate-200 rounded w-1/2" />
            </div>
            {[...Array(4)].map((_, j) => (
              <div key={j} className="text-center space-y-1">
                <div className="h-3 bg-slate-200 rounded w-3/4 mx-auto" />
                <div className="h-3 bg-slate-200 rounded w-full mx-auto" />
              </div>
            ))}
            <div className="h-9 bg-slate-200 rounded" />
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const Admissions = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("schedule");
  const { data: admissionSchedule, isLoading, error } = useAdmissionSchedules();
  const openExternalLink = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    window.open(href, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const el = document.getElementById(hash.substring(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [location.hash]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setTimeout(() => {
      document.getElementById("admissions-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <section id="admissions" className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-[#118DC4]/10 text-[#118DC4] rounded-full text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4 mr-2" />Admissions
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Join UIET</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Begin your journey towards excellence in engineering education. Multiple admission pathways available.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { value: '602', label: 'Total Seats' },
            { value: '95%', label: 'Placement Rate' },
            { value: '₹45 LPA', label: 'Highest Package' },
            { value: '22+', label: 'Years Legacy' },
          ].map(stat => (
            <Card key={stat.label} className="text-center border-0 shadow-md bg-white">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-[#118DC4] mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {admissionContacts.map((contact) => (
            <a key={contact.label} href={contact.href} className="block">
              <Card className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#118DC4] mb-1">{contact.label}</div>
                  <div className="text-slate-900 font-medium leading-tight">{contact.value}</div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Main Tabs */}
        <Tabs id="admissions-tabs" value={activeTab} onValueChange={handleTabChange} className="mb-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full lg:w-fit mx-auto mb-8 bg-white shadow-sm h-auto p-1 gap-1 rounded-xl">
            <TabsTrigger
              value="schedule"
              className="rounded-lg text-xs sm:text-sm px-3 py-2.5 font-medium data-[state=active]:bg-[#118DC4] data-[state=active]:text-white"
            >
              Schedule
            </TabsTrigger>
            <TabsTrigger
              value="special"
              className="rounded-lg text-xs sm:text-sm px-3 py-2.5 font-medium data-[state=active]:bg-[#118DC4] data-[state=active]:text-white"
            >
              Special
            </TabsTrigger>
            <TabsTrigger
              value="eligibility"
              className="rounded-lg text-xs sm:text-sm px-3 py-2.5 font-medium data-[state=active]:bg-[#118DC4] data-[state=active]:text-white"
            >
              Eligibility
            </TabsTrigger>
            <TabsTrigger
              value="process"
              className="rounded-lg text-xs sm:text-sm px-3 py-2.5 font-medium data-[state=active]:bg-[#118DC4] data-[state=active]:text-white"
            >
              Process
            </TabsTrigger>
            <TabsTrigger
              value="fees"
              className="rounded-lg text-xs sm:text-sm px-3 py-2.5 font-medium data-[state=active]:bg-[#118DC4] data-[state=active]:text-white"
            >
              Fees
            </TabsTrigger>
          </TabsList>

          {/* Schedule — live from Strapi */}
          <TabsContent value="schedule">
            {error && (
              <div className="flex items-center gap-3 text-red-600 bg-red-50 rounded-xl p-5 mb-6">
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <p>Could not load admission schedule. Please check your connection.</p>
              </div>
            )}
            {isLoading ? <ScheduleSkeleton /> : (
              <div className="space-y-6">
                {(admissionSchedule ?? []).map((schedule) => (
                  <Card key={schedule.id} className="border-0 shadow-md bg-white">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 items-center">
                        <div className="sm:col-span-2 lg:col-span-2">
                          <h3 className="text-xl font-bold text-slate-900">{schedule.program}</h3>
                          <p className="text-slate-600 text-sm">{schedule.seats} seats</p>
                          <p className="text-[#118DC4] text-xs">{schedule.eligibility}</p>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-slate-900">Registration Open</div>
                          <div className="text-[#118DC4] text-sm">{schedule.applicationStart}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-slate-900">Registration Close</div>
                          <div className="text-red-600 text-sm">{schedule.applicationEnd}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-slate-900">Entrance Exam</div>
                          <div className="text-purple-600 text-sm">{schedule.examDate}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-slate-900">Result Date</div>
                          <div className="text-green-600 text-sm">{schedule.resultsDate}</div>
                        </div>
                        <div className="sm:col-span-2 lg:col-span-1">
                          <a
                            href={schedule.applyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(event) => openExternalLink(event, schedule.applyLink)}
                            className="block w-full"
                          >
                            <Button className="w-full bg-[#118DC4] hover:bg-[#0d7db0] text-white font-semibold rounded-lg text-xs sm:text-sm px-3 sm:px-4 py-2.5 h-auto whitespace-normal lg:whitespace-nowrap leading-tight text-center">
                              Visit Admissions Portal
                            </Button>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Special Admissions */}
          <TabsContent value="special">
            <div className="grid grid-cols-1 gap-6">
              {specialAdmissions.map((admission, index) => (
                <Card key={index} className="border-0 shadow-md bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <admission.icon className="h-6 w-6 mr-3 text-[#118DC4]" />
                      {admission.name}
                    </CardTitle>
                    <p className="text-gray-600">{admission.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Available Seats</h4>
                        <p className="text-[#118DC4] font-medium">{admission.seats}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Requirements</h4>
                        <ul className="text-sm space-y-1">
                          {admission.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1 h-1 bg-[#118DC4] rounded-full mt-2 mr-2" />{req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Selection Process</h4>
                        <p className="text-sm text-gray-600">{admission.process}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Eligibility */}
          <TabsContent value="eligibility">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(eligibilityCriteria).map(([key, criteria]) => (
                <Card key={key} className="border-0 shadow-md bg-white">
                  <CardHeader>
                    <CardTitle className="text-[#118DC4] uppercase text-sm tracking-wider">
                      {key === 'be' ? 'B.E./B.Tech' : key === 'me' ? 'M.E./M.Tech' : key === 'phd' ? 'Ph.D.' : 'NRI/Foreign'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {criteria.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Application Process */}
          <TabsContent value="process">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applicationProcess.map((step) => (
                <Card key={step.step} className="border-0 shadow-md bg-white text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#118DC4] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <step.icon className="h-6 w-6 text-[#118DC4] mx-auto mb-2" />
                    <h4 className="font-semibold text-slate-900 mb-1">{step.title}</h4>
                    <p className="text-sm text-slate-600">{step.description}</p>
                    {step.link && (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => openExternalLink(event, step.link!)}
                        className="inline-flex items-center mt-4 text-sm font-medium text-[#118DC4] hover:text-[#0a6ba2]"
                      >
                        Visit JAC Portal <Globe className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-lg border border-[#118DC4]/30 bg-[#118DC4]/10">
              <p className="text-sm text-[#0f7ab8]">
                <strong>Important:</strong> {importantAdmissionNote}
              </p>
            </div>
          </TabsContent>

          {/* Fee Structure */}
          <TabsContent value="fees">
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#118DC4] text-white">
                        <th className="text-left p-4">Program</th>
                        <th className="text-center p-4">Tuition</th>
                        <th className="text-center p-4">Hostel</th>
                        <th className="text-center p-4">Other</th>
                        <th className="text-center p-4 font-bold">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeStructure.map((fee, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="p-4 font-medium">{fee.program}</td>
                          <td className="p-4 text-center">{fee.tuition}</td>
                          <td className="p-4 text-center">{fee.hostel}</td>
                          <td className="p-4 text-center">{fee.other}</td>
                          <td className="p-4 text-center font-bold text-[#118DC4]">{fee.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-amber-50 border-t">
                  <p className="text-xs text-amber-700">* Fee structure is tentative and subject to revision as per official UIET notices. Scholarships and concessions available for eligible students.</p>
                </div>
              </CardContent>
            </Card>
            <div className="mt-4 flex justify-end">
              <a href="/news" className="inline-flex items-center text-sm font-medium text-[#118DC4] hover:text-[#0a6ba2]">
                View UIET Notices <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#118DC4] to-[#0a6ba2] text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Take the first step towards your engineering career at UIET. Our admissions team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={JAC_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => openExternalLink(event, JAC_PORTAL_URL)}
              >
                <Button className="w-full sm:w-auto bg-white text-[#118DC4] hover:bg-blue-50 font-semibold px-8 py-3 rounded-xl">
                  Admissions Portal
                </Button>
              </a>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-xl"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;