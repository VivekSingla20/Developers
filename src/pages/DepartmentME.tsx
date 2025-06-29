
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, Target, GraduationCap, FlaskConical, 
  Trophy, Cog, Wrench, Settings
} from 'lucide-react';

const DepartmentME = () => {
  const programs = [
    { name: 'B.E. Mechanical Engineering', duration: '4 Years', intake: '60' },
    { name: 'M.E. Mechanical Engineering (Design)', duration: '2 Years', intake: '18' },
    { name: 'M.E. Mechanical Engineering (Thermal)', duration: '2 Years', intake: '18' }
  ];

  const faculty = [
    { name: 'Dr. Vinod Kumar', position: 'Professor & HOD', specialization: 'Thermal Engineering' },
    { name: 'Dr. Sunita Rani', position: 'Associate Professor', specialization: 'Manufacturing' },
    { name: 'Dr. Deepak Singh', position: 'Assistant Professor', specialization: 'CAD/CAM' },
    { name: 'Dr. Meera Gupta', position: 'Assistant Professor', specialization: 'Fluid Mechanics' }
  ];

  const labs = [
    'Manufacturing Technology Lab',
    'Thermal Engineering Lab',
    'Fluid Mechanics Lab',
    'CAD/CAM Lab',
    'Metallurgy Lab',
    'Automobile Engineering Lab',
    'Refrigeration & AC Lab',
    'Project Lab'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Cog className="h-16 w-16 mr-4" />
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Mechanical Engineering</h1>
              <p className="text-xl text-red-100">Engineering the Future with Innovation</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="labs">Labs</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="alumni">Alumni</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    To be a center of excellence in Mechanical Engineering education and research, 
                    producing innovative engineers who contribute to industrial and technological advancement.
                  </p>
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
                  <ul className="text-gray-700 space-y-2">
                    <li>• Provide comprehensive mechanical engineering education</li>
                    <li>• Foster innovation in design and manufacturing</li>
                    <li>• Develop industry-ready mechanical engineers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="programs" className="space-y-6">
            <div className="grid gap-6">
              {programs.map((program, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2" />
                        {program.name}
                      </span>
                      <Badge variant="secondary">{program.duration}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Intake: {program.intake} students</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faculty" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {faculty.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-red-600 font-medium">{member.position}</p>
                    <p className="text-gray-600">Specialization: {member.specialization}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="research" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ongoing Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Advanced Manufacturing Processes</li>
                    <li>• Renewable Energy Systems</li>
                    <li>• Robotics and Automation</li>
                    <li>• Materials Science and Engineering</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Completed Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Solar Thermal Systems (2023)</li>
                    <li>• CNC Machine Optimization (2023)</li>
                    <li>• Heat Transfer Enhancement (2022)</li>
                    <li>• Vibration Analysis (2022)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="labs" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {labs.map((lab, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <FlaskConical className="h-5 w-5 mr-2 text-red-600" />
                      <span className="font-medium">{lab}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold">International Conference on Manufacturing</h4>
                    <p className="text-sm text-gray-600">May 2024 - Advanced manufacturing technologies</p>
                  </div>
                  <div className="border-l-4 border-pink-500 pl-4">
                    <h4 className="font-semibold">Workshop on CAD/CAM</h4>
                    <p className="text-sm text-gray-600">April 2024 - Hands-on training for students</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alumni" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notable Alumni</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold">Rajesh Kumar (2018)</h4>
                    <p className="text-sm text-gray-600">Design Engineer at Tata Motors</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Priya Sharma (2017)</h4>
                    <p className="text-sm text-gray-600">Project Manager at L&T</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                    <span className="text-sm">Best Mechanical Department Award 2024</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                    <span className="text-sm">Patent Filed for Manufacturing Process</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default DepartmentME;
