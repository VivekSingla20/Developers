import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Users, Trophy, BookOpen, Calendar, Star, Award, Activity,
  GraduationCap, Bell, DollarSign, FileText, Heart, User, AlertCircle
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useScholarships, useStudentAchievements } from '@/hooks/useStrapi';

// static data
const studentStats = [
  { icon: Users,        label: 'Total Students',  value: '750+' },
  { icon: GraduationCap, label: 'Graduates (2023)', value: '450'  },
  { icon: Trophy,       label: 'Awards Won',       value: '150+' },
  { icon: Star,         label: 'Average CGPA',     value: '8.2'  },
];

const aicteScholarships = [
  { name: 'AICTE-SWANATH Scholarship', amount: '₹50,000', eligibility: 'Orphan students',    details: 'For students who have lost both parents' },
  { name: 'AICTE Pragati Scholarship', amount: '₹30,000', eligibility: 'Girl students',       details: 'For meritorious girl students in technical education' },
  { name: 'AICTE Saksham Scholarship', amount: '₹30,000', eligibility: 'Disabled students',   details: 'For students with disabilities (>40%)' },
];

const notices = [
  { date: '2024-01-15', title: 'Semester End Examination Schedule',  type: 'Academic',   urgent: true  },
  { date: '2024-01-12', title: 'Workshop on AI and Machine Learning', type: 'Event',      urgent: false },
  { date: '2024-01-10', title: 'Fee Submission Deadline Extension',   type: 'Important',  urgent: true  },
  { date: '2024-01-08', title: 'Industrial Visit Registration Open',  type: 'Activity',   urgent: false },
  { date: '2024-01-05', title: 'Placement Drive - TCS',               type: 'Placement',  urgent: false },
];

const categoryColors: Record<string, string> = {
  Technical:  'bg-blue-100 text-blue-800',
  Research:   'bg-purple-100 text-purple-800',
  Innovation: 'bg-green-100 text-green-800',
  Leadership: 'bg-orange-100 text-orange-800',
  Sports:     'bg-red-100 text-red-800',
  Cultural:   'bg-pink-100 text-pink-800',
};

// hash -> table map
const hashToTab: Record<string, string> = {
  '#be-first-year':     'batches',
  '#research-scholars': 'research',
  '#notices':           'notices',
  '#scholarships':      'scholarships',
  '#aicte-scholarships':'aicte',
  '#achievements':      'achievements',
  '#activities':        'activities',
  '#medical-emergency': 'emergency',
};

const CardSkeleton = ({ count = 4 }: { count?: number }) => (
  <div className="space-y-3">
    {[...Array(count)].map((_, i) => (
      <div key={i} className="bg-gray-50 p-4 rounded-lg animate-pulse">
        <div className="h-4 bg-slate-200 rounded w-1/3 mb-2" />
        <div className="h-3 bg-slate-200 rounded w-2/3 mb-1" />
        <div className="h-3 bg-slate-200 rounded w-1/2" />
      </div>
    ))}
  </div>
);

const Students = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('batches');

  const { data: scholarships, isLoading: loadingScholarships, error: errorScholarships } = useScholarships();
  const { data: achievements, isLoading: loadingAchievements, error: errorAchievements } = useStudentAchievements();

  useEffect(() => {
    const hash = location.hash;
    if (hash && hashToTab[hash]) {
      setActiveTab(hashToTab[hash]);
      setTimeout(() => {
        document.getElementById('students-tabs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      setActiveTab('batches');
    }
  }, [location.hash]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setTimeout(() => {
      document.getElementById('students-tabs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#118DC4]/10 text-[#118DC4] rounded-full text-sm font-medium mb-4">
            Student Life
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Student Services & Information
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive support system for academic excellence, personal development, and career growth of our students.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {studentStats.map((stat, index) => (
            <Card key={index} className="text-center bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-[#118DC4] mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs id="students-tabs" value={activeTab} onValueChange={handleTabChange} className="mb-16">
          <TabsList className="grid w-full lg:w-fit mx-auto grid-cols-4 lg:grid-cols-8 mb-8 h-auto p-1">
            {[
              { value: 'batches',       label: 'BE Batches'   },
              { value: 'research',      label: 'Research'     },
              { value: 'notices',       label: 'Notices'      },
              { value: 'scholarships',  label: 'Scholarships' },
              { value: 'aicte',         label: 'AICTE'        },
              { value: 'achievements',  label: 'Achievements' },
              { value: 'activities',    label: 'Activities'   },
              { value: 'emergency',     label: 'Emergency'    },
            ].map(tab => (
              <TabsTrigger key={tab.value} value={tab.value}
                className="px-2 py-3 text-xs data-[state=active]:bg-[#118DC4] data-[state=active]:text-white">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Batches */}
          <TabsContent value="batches">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-6 w-6 mr-2 text-[#118DC4]" />
                  B.E. 1st Year Batch Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Batch 2024-28</h4>
                    <div className="space-y-4">
                      {[
                        { dept: 'Computer Science & Engineering', intake: 120, coord: 'Dr. Sarbjeet Singh' },
                        { dept: 'Electronics & Communication',    intake: 60,  coord: 'Dr. Jaget Singha'  },
                        { dept: 'Mechanical Engineering',          intake: 60,  coord: 'Prof. Shankar Sehgal' },
                        { dept: 'Information Technology',          intake: 60,  coord: 'Dr. Amandeep Verma'  },
                      ].map(d => (
                        <div key={d.dept} className="p-4 rounded-lg" style={{ backgroundColor: '#e6f3fb' }}>
                          <h5 className="font-semibold mb-1">{d.dept}</h5>
                          <p className="text-sm text-gray-600">Intake: {d.intake} students | Class Coordinator: {d.coord}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Important Information</h4>
                    <div className="space-y-3">
                      {[
                        { color: 'border-[#118DC4]', title: 'Academic Session',    detail: 'July 2024 - June 2028' },
                        { color: 'border-green-500', title: 'Orientation Program', detail: '21st - 23rd August 2024' },
                        { color: 'border-purple-500', title: 'First Semester',     detail: 'Common for all branches' },
                        { color: 'border-orange-500', title: 'Mentor Assignment',  detail: 'Each student assigned a faculty mentor' },
                      ].map(item => (
                        <div key={item.title} className={`border-l-4 ${item.color} pl-4`}>
                          <h5 className="font-semibold">{item.title}</h5>
                          <p className="text-sm text-gray-600">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4 bg-[#118DC4] hover:bg-[#0a6ba2]">
                      Download Student Handbook
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Research */}
          <TabsContent value="research">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-6 w-6 mr-2" style={{ color: '#118DC4' }} />
                  Research Scholars
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Current Ph.D. Scholars</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Rahul Verma',  area: 'Machine Learning in Healthcare', sup: 'Dr. Rajesh Kumar', year: '3rd' },
                        { name: 'Priya Sharma', area: 'IoT Security Frameworks',        sup: 'Dr. Amit Singh',   year: '2nd' },
                        { name: 'Amit Kumar',   area: 'Renewable Energy Systems',       sup: 'Prof. Neha Gupta', year: '4th' },
                      ].map(s => (
                        <div key={s.name} className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold">{s.name}</h5>
                          <p className="text-sm text-gray-600">Research Area: {s.area}</p>
                          <p className="text-xs text-[#118DC4]">Supervisor: {s.sup} | Year: {s.year}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Research Opportunities</h4>
                    <div className="space-y-3">
                      {['Ph.D. Admission Guidelines','Research Fellowship Information','Publication Guidelines','Research Proposal Format'].map(title => (
                        <Button key={title} className="w-full justify-start" variant="outline">
                          <FileText className="h-4 w-4 mr-2 text-[#118DC4]" />{title}
                        </Button>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-[#118DC4]/10 rounded-lg">
                      <h5 className="font-semibold mb-2">Research Support</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Monthly fellowship up to ₹31,000</li>
                        <li>• Access to state-of-the-art labs</li>
                        <li>• Conference funding support</li>
                        <li>• Industry collaboration opportunities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notices */}
          <TabsContent value="notices">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-6 w-6 mr-2" style={{ color: '#118DC4' }} />
                  Student Notices & Announcements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notices.map((notice, index) => (
                    <div key={index} className={`p-4 rounded-lg border-l-4 ${notice.urgent ? 'bg-red-50 border-red-500' : 'bg-gray-50 border-gray-300'}`}>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{notice.title}</h4>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-sm text-gray-600">{notice.date}</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${notice.urgent ? 'bg-red-100 text-red-800' : 'bg-[#118DC4]/10 text-[#118DC4]'}`}>
                              {notice.type}
                            </span>
                            {notice.urgent && <span className="px-2 py-1 bg-red-500 text-white rounded-full text-xs">Urgent</span>}
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="border-[#118DC4] text-[#118DC4] hover:bg-[#118DC4]/10">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button className="bg-[#118DC4] hover:bg-[#0a6ba2]">View All Notices</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Scholarships — live from Strapi */}
          <TabsContent value="scholarships">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-6 w-6 mr-2" style={{ color: '#118DC4' }} />
                  Institute Scholarships
                </CardTitle>
              </CardHeader>
              <CardContent>
                {errorScholarships && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-lg p-3 mb-4 text-sm">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />Could not load scholarship data.
                  </div>
                )}
                {loadingScholarships ? <CardSkeleton /> : (
                  <div className="grid md:grid-cols-2 gap-4">
                    {(scholarships ?? []).map(s => (
                      <div key={s.id} className="bg-gray-50 p-4 rounded-lg border hover:shadow-sm transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">{s.name}</h4>
                          <span className="text-[#118DC4] font-bold text-sm">{s.amount}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1"><strong>Eligibility:</strong> {s.eligibility}</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Deadline:</strong> {s.deadline}</p>
                        {s.details && <p className="text-xs text-gray-500">{s.details}</p>}
                        <Button size="sm" className="mt-3 w-full bg-[#118DC4] hover:bg-[#0a6ba2]">Apply Now</Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* AICTE Scholarships (static) */}
          <TabsContent value="aicte">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-6 w-6 mr-2" style={{ color: '#118DC4' }} />
                  AICTE Scholarships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aicteScholarships.map((s, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#118DC4]">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{s.name}</h4>
                        <span className="text-[#118DC4] font-bold">{s.amount}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1"><strong>Eligibility:</strong> {s.eligibility}</p>
                      <p className="text-sm text-gray-600 mb-3">{s.details}</p>
                      <Button size="sm" variant="outline" className="border-[#118DC4] text-[#118DC4]">
                        Learn More
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements — live from Strapi */}
          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-6 w-6 mr-2" style={{ color: '#118DC4' }} />
                  Student Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                {errorAchievements && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-lg p-3 mb-4 text-sm">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />Could not load achievements data.
                  </div>
                )}
                {loadingAchievements ? <CardSkeleton /> : (
                  <div className="grid md:grid-cols-2 gap-4">
                    {(achievements ?? []).map(a => (
                      <div key={a.id} className="bg-gray-50 p-4 rounded-lg flex items-start space-x-3">
                        <div className="w-10 h-10 bg-[#118DC4]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Trophy className="h-5 w-5 text-[#118DC4]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">{a.student}</h4>
                          <p className="text-sm text-gray-600 mt-1">{a.achievement}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[a.category] ?? 'bg-gray-100 text-gray-700'}`}>
                              {a.category}
                            </span>
                            <span className="text-xs text-gray-400">{a.year}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activities */}
          <TabsContent value="activities">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-6 w-6 mr-2" style={{ color: '#118DC4' }} />
                  Student Activities & Clubs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'Technical Club',   desc: 'Coding, hackathons, and tech workshops',    icon: '💻' },
                    { name: 'Cultural Club',    desc: 'Arts, music, dance, and cultural events',   icon: '🎭' },
                    { name: 'Sports Club',      desc: 'Inter-college sports and fitness programs',  icon: '⚽' },
                    { name: 'Literary Club',    desc: 'Debates, quizzes, and creative writing',    icon: '📚' },
                    { name: 'Robotics Club',    desc: 'Robotics, automation, and AI projects',     icon: '🤖' },
                    { name: 'NSS',              desc: 'National Service Scheme and community work', icon: '🌱' },
                  ].map(club => (
                    <div key={club.name} className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-sm transition-shadow">
                      <div className="text-3xl mb-2">{club.icon}</div>
                      <h4 className="font-semibold text-gray-900 mb-1">{club.name}</h4>
                      <p className="text-sm text-gray-600">{club.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Emergency */}
          <TabsContent value="emergency">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-6 w-6 mr-2 text-red-500" />
                  Medical Emergency Contacts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'Campus Health Center', phone: '+91-172-2534820', hours: '24/7',  note: 'On-campus medical facility' },
                    { title: 'Emergency Ambulance',  phone: '108',             hours: '24/7',  note: 'Free government ambulance service' },
                    { title: 'PGIMER Hospital',      phone: '+91-172-2755555', hours: '24/7',  note: 'Nearest major hospital — 2km' },
                    { title: 'Student Counsellor',   phone: '+91-172-2534821', hours: '9–5 PM', note: 'Mental health and welfare support' },
                  ].map(c => (
                    <div key={c.title} className="bg-red-50 border border-red-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">{c.title}</h4>
                      <p className="text-red-600 font-bold text-lg">{c.phone}</p>
                      <p className="text-sm text-gray-600">{c.hours} | {c.note}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#118DC4] to-[#0a6ba2] text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Student Support Services</h3>
            <p className="mb-6 max-w-2xl mx-auto" style={{ color: '#e6f3fb' }}>
              We are committed to providing comprehensive support for your academic journey and personal development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white font-semibold px-8 py-3 hover:bg-gray-50" style={{ color: '#118DC4' }}>
                Student Portal
              </Button>
              <Button className="bg-white font-semibold px-8 py-3 hover:bg-gray-50" style={{ color: '#118DC4' }}>
                Download Syllabus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;