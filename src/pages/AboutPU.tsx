import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  GraduationCap,
  Users,
  Calendar,
  Trophy,
  MapPin,
} from "lucide-react";

const AboutPU = () => {
  const milestones = [
    { year: "1882", event: "Panjab University established in Lahore" },
    { year: "1947", event: "Relocated to India after partition" },
    { year: "1956", event: "Moved to Chandigarh campus" },
    { year: "1973", event: "Reconstituted as Inter-State Body Corporate" },
    { year: "2002", event: "UIET established as constituent college" },
  ];

  const stats = [
    { label: "Departments", value: "75+", icon: Building },
    { label: "Students", value: "15,000+", icon: Users },
    { label: "Faculty", value: "500+", icon: GraduationCap },
    { label: "Years of Excellence", value: "140+", icon: Calendar },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="text-white py-16"
        style={{ background: "linear-gradient(to right, #118DC4, #0d7db8)" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Building className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Panjab University</h1>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "#e0f7ff" }}
            >
              Established under the Panjab University Act VII of 1947
            </p>
            <p> - enacted by the Government of India </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* University Overview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap
                  className="h-6 w-6 mr-2"
                  style={{ color: "#118DC4" }}
                />
                About Panjab University
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Panjab University is located in Sector 14 and Sector 25 of Chandigarh, 
                spreading across an area of almost 550 acres.
                Panjab University, established in 1882, is one of the oldest
                universities in India. Originally founded in Lahore, it was
                re-established in India after the partition in 1947 and shifted
                to its present location in Chandigarh in 1956.
              </p>
              <p className="text-gray-700">
                The university is known for its commitment to academic
                excellence, research innovation, and holistic development of
                students. It has been accredited with an 'A++' grade by NAAC and
                is recognized as a university with potential for excellence by
                the UGC.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">NAAC A++ Accredited</Badge>
                <Badge variant="secondary">UGC Recognized</Badge>
                <Badge variant="secondary">Category-I University</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-gray-700 text-sm mb-2">
                  As Envisioned in Panjab University Act, 1947.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed text-justify">
                  "The University shall be incorporated for the purposes, among
                  others, of making provision for imparting education in Arts,
                  Letters, Science and the learned professions and of furthering
                  advancement of learning, the prosecution of original research,
                  with power to appoint University Professors, Readers and
                  Lecturers, to hold and manage educational endowments, to
                  erect, equip and maintain University colleges, libraries,
                  laboratories and museums, to make regulations relating to the
                  residence and conduct of students and to do all such acts as
                  tend to promote study and research.".
                </p>
              </div>

              <div>
                <h4
                  className="font-semibold mb-2"
                  style={{ color: "#118DC4" }}
                ></h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  {/* <li>• Provide quality higher education and research opportunities</li>
                  <li>• Foster innovation and entrepreneurship</li>
                  <li>• Promote inclusive growth and social responsibility</li>
                  <li>• Build partnerships with global institutions</li> */}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon
                  className="h-8 w-8 mx-auto mb-3"
                  style={{ color: "#118DC4" }}
                />
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Historical Timeline */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-6 w-6 mr-2" style={{ color: "#118DC4" }} />
              Historical Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div
                    className="text-white rounded-full px-3 py-1 text-sm font-medium"
                    style={{ backgroundColor: "#118DC4" }}
                  >
                    {milestone.year}
                  </div>
                  <div className="flex-1 text-gray-700">{milestone.event}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Academic Excellence */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Academic Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Trophy className="h-5 w-5 mr-2 text-yellow-600 mt-0.5" />
                  <span className="text-gray-700">
                    Ranked among top universities in India
                  </span>
                </li>
                <li className="flex items-start">
                  <Trophy className="h-5 w-5 mr-2 text-yellow-600 mt-0.5" />
                  <span className="text-gray-700">
                    75+ departments offering diverse programs
                  </span>
                </li>
                <li className="flex items-start">
                  <Trophy className="h-5 w-5 mr-2 text-yellow-600 mt-0.5" />
                  <span className="text-gray-700">
                    Strong industry partnerships and collaborations
                  </span>
                </li>
                <li className="flex items-start">
                  <Trophy className="h-5 w-5 mr-2 text-yellow-600 mt-0.5" />
                  <span className="text-gray-700">
                    Excellence in research and innovation
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Campus Life</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
                  <span className="text-gray-700">
                    Beautiful 550-acre campus in Chandigarh
                  </span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
                  <span className="text-gray-700">
                    Modern hostels and accommodation facilities
                  </span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
                  <span className="text-gray-700">
                    Sports complexes and recreational facilities
                  </span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
                  <span className="text-gray-700">
                    Rich cultural and academic environment
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card style={{ backgroundColor: "#f0f9ff" }}>
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Visit Panjab University</h3>
            <p className="text-gray-600 mb-6">
              Experience the rich heritage and academic excellence of one of
              India's premier universities
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold">Address</h4>
                <p style={{ color: "#118DC4" }}>
                  Sector 14, Chandigarh - 160014
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold">Website</h4>
                <p style={{ color: "#118DC4" }}>www.puchd.ac.in</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold">Phone</h4>
                <p style={{ color: "#118DC4" }}>+91-172-2534818</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPU;
