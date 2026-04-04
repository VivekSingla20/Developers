
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Star, Users, Building, Calendar, Award, MapPin } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide quality technical education fostering innovation, research excellence, and ethical values for national development.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To emerge as a center of excellence in technical education, producing globally competent engineers and researchers.'
    },
    {
      icon: Star,
      title: 'Academic Excellence',
      description: 'Maintaining highest standards in teaching, learning, and research with industry-relevant curriculum.'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Contributing to society through skilled graduates, research innovations, and community engagement programs.'
    }
  ];

  const achievements = [
    { icon: Award, text: 'NAAC Grade A+ Accreditation (2020-2025)' },
    { icon: Building, text: 'NBA Accredited Engineering Programs' },
    { icon: Star, text: 'NIRF Ranking - Engineering Category' },
    { icon: Users, text: '95% Placement Rate with Top Companies' },
    { icon: Target, text: 'Research Publications in International Journals' },
    { icon: MapPin, text: 'International Academic Collaborations' }
  ];

  const milestones = [
    { year: '2002', event: 'Institute Established under Panjab University' },
    { year: '2005', event: 'First Batch of B.Tech Students Graduated' },
    { year: '2010', event: 'M.Tech Programs Launched' },
    { year: '2015', event: 'Ph.D Programs Initiated' },
    { year: '2020', event: 'NAAC A+ Accreditation Achieved' },
    { year: '2023', event: 'New Research Centers Established' }
  ];

  return (
 <section id="about" className="gov-section bg-gray-50">
  <div className="container-width">
    {/* Header */}
    <div className="text-center mb-12">
      <div className="mb-4 px-4 py-2 text-white rounded-full text-sm font-semibold inline-block" style={{backgroundColor: '#118DC4'}}>
        About UIET
      </div>
      <h2 className="section-title">Premier Technical Education Institute</h2>
      <p className="section-subtitle">
        University Institute of Engineering & Technology (UIET), established in 2002, 
        stands as a distinguished technical institution under Panjab University, Chandigarh.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
      {/* Left Content */}
      <div className="space-y-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold" style={{color: '#118DC4'}}>
            Excellence in Engineering Education Since 2002
          </h3>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong style={{color: '#118DC4'}}>University Institute of Engineering & Technology (UIET)</strong> is a premier 
              government institution that has been at the forefront of technical education and research 
              for over two decades. Located in the planned city of Chandigarh, we serve as a beacon 
              of academic excellence in North India.
            </p>
            
            <p>
              Our institute operates under the prestigious <strong style={{color: '#118DC4'}}>Panjab University</strong>, one of 
              India's oldest and most respected universities. We offer comprehensive undergraduate, 
              postgraduate, and doctoral programs across various engineering disciplines.
            </p>
            
            <p>
              With state-of-the-art infrastructure, experienced faculty, and strong industry partnerships, 
              UIET provides a conducive environment for holistic development of students, preparing them 
              to meet the challenges of the modern technological landscape.
            </p>
          </div>

          {/* Key Facts */}
          <div className="gov-card p-6 rounded-lg" style={{border: '1px solid #118DC4'}}>
            <h4 className="text-lg font-semibold mb-4" style={{color: '#118DC4'}}>Institute at a Glance</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div><strong style={{color: '#118DC4'}}>Established:</strong> 2002</div>
              <div><strong style={{color: '#118DC4'}}>Type:</strong> Government Institute</div>
              <div><strong style={{color: '#118DC4'}}>Affiliated to:</strong> Panjab University</div>
              <div><strong style={{color: '#118DC4'}}>Location:</strong> Chandigarh, India</div>
              <div><strong style={{color: '#118DC4'}}>Campus Area:</strong> 25+ Acres</div>
              <div><strong style={{color: '#118DC4'}}>Students:</strong> 2000+ Active</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Timeline */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold" style={{color: '#118DC4'}}>Our Journey</h3>
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg" style={{borderLeft: '4px solid #118DC4'}}>
              <div className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{backgroundColor: '#118DC4'}}>
                {milestone.year}
              </div>
              <p className="text-gray-700 text-sm flex-1">{milestone.event}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Vision & Mission Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {features.map((feature, index) => (
        <Card key={index} className="gov-card text-center hover:shadow-md transition-shadow duration-200" style={{border: '1px solid rgba(17, 141, 196, 0.2)'}}>
          <CardContent className="p-6">
            <feature.icon className="h-12 w-12 mx-auto mb-4" style={{color: '#118DC4'}} />
            <h3 className="text-lg font-semibold mb-3" style={{color: '#118DC4'}}>{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Achievements Section */}
    <div className="bg-white rounded-lg p-8 shadow-sm" style={{border: '1px solid rgba(17, 141, 196, 0.2)'}}>
      <h3 className="text-2xl font-bold text-center mb-8" style={{color: '#118DC4'}}>Key Achievements & Recognitions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 rounded-lg" style={{backgroundColor: 'rgba(17, 141, 196, 0.05)', border: '1px solid rgba(17, 141, 196, 0.1)'}}>
            <achievement.icon className="h-6 w-6 mt-1 flex-shrink-0" style={{color: '#118DC4'}} />
            <span className="text-gray-700 text-sm">{achievement.text}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Government Compliance Section */}
    <div className="mt-16 rounded-lg p-8 text-center" style={{background: 'linear-gradient(135deg, rgba(17, 141, 196, 0.1) 0%, rgba(17, 141, 196, 0.05) 100%)', border: '1px solid rgba(17, 141, 196, 0.2)'}}>
      <h3 className="text-2xl font-bold mb-4" style={{color: '#118DC4'}}>Government Compliance & Transparency</h3>
      <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
        As a government institution, UIET maintains complete transparency in its operations and 
        adheres to all regulatory requirements set by UGC, AICTE, and other governing bodies.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="px-4 py-2 text-white rounded-full text-sm font-semibold" style={{backgroundColor: '#118DC4'}}>UGC Recognized</span>
        <span className="px-4 py-2 text-white rounded-full text-sm font-semibold" style={{backgroundColor: '#118DC4'}}>AICTE Approved</span>
        <span className="px-4 py-2 text-white rounded-full text-sm font-semibold" style={{backgroundColor: '#118DC4'}}>RTI Compliant</span>
        <span className="px-4 py-2 text-white rounded-full text-sm font-semibold" style={{backgroundColor: '#118DC4'}}>Government Audited</span>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;
