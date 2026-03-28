import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Microscope, BookOpen, Users, Award, TrendingUp, Globe, Lightbulb, FileText, AlertCircle } from 'lucide-react';
import { useResearchAreas } from '@/hooks/useStrapi';

// static data
const publications = [
  {
    title: 'Advanced Deep Learning Architectures for Medical Image Analysis',
    authors: 'Dr. Rajesh Kumar, Dr. Priya Sharma',
    journal: 'IEEE Transactions on Medical Imaging',
    year: '2024',
    citations: 45,
  },
  {
    title: 'Sustainable Smart Grid Technologies for Urban Infrastructure',
    authors: 'Dr. Amit Singh, Dr. Neha Gupta',
    journal: 'Nature Energy',
    year: '2024',
    citations: 32,
  },
  {
    title: 'Novel VLSI Architectures for Low-Power IoT Applications',
    authors: 'Dr. Suresh Patel, Dr. Ravi Kumar',
    journal: 'IEEE Journal of Solid-State Circuits',
    year: '2023',
    citations: 28,
  },
];

const facilities = [
  { name: 'AI & ML Research Lab',         equipment: 'High-performance Computing Clusters, GPU Servers',                         area: '500 sq ft', capacity: '25 researchers' },
  { name: 'VLSI Design Center',           equipment: 'EDA Tools, FPGA Development Boards, Testing Equipment',                    area: '400 sq ft', capacity: '20 researchers' },
  { name: 'Biotechnology Research Lab',   equipment: 'PCR Machines, Spectrophotometers, Cell Culture Facilities',               area: '600 sq ft', capacity: '30 researchers' },
  { name: 'Sustainable Technology Lab',   equipment: 'Solar Panels, Wind Turbines, Energy Storage Systems',                     area: '800 sq ft', capacity: '35 researchers' },
];

const AREA_ICONS = [Lightbulb, Microscope, Globe, TrendingUp, BookOpen, Award];

// skeleton
const AreaSkeleton = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {[...Array(4)].map((_, i) => (
      <Card key={i} className="bg-white shadow-lg border-0 animate-pulse">
        <CardHeader className="pb-4">
          <div className="h-6 bg-slate-200 rounded w-3/4 mb-3" />
          <div className="h-4 bg-slate-200 rounded w-full" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {[...Array(3)].map((_, j) => (
              <div key={j} className="text-center">
                <div className="h-5 bg-slate-200 rounded w-1/2 mx-auto mb-1" />
                <div className="h-3 bg-slate-200 rounded w-3/4 mx-auto" />
              </div>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            {[...Array(3)].map((_, k) => (
              <div key={k} className="h-5 bg-slate-200 rounded-full w-20" />
            ))}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const Research = () => {
  const { data: researchAreas, isLoading, error } = useResearchAreas();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#118DC4]/10 text-[#118DC4] rounded-full text-sm font-medium mb-4">
            Research & Innovation
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Advancing Knowledge Through Research
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our research initiatives drive innovation and contribute to solving real-world challenges
            through cutting-edge technology and interdisciplinary collaboration.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: FileText,   color: 'text-[#118DC4]',    value: '200+',   label: 'Research Papers'  },
            { icon: Award,      color: 'text-green-600',     value: '45',     label: 'Active Projects'  },
            { icon: Users,      color: 'text-purple-600',    value: '150+',   label: 'Researchers'      },
            { icon: TrendingUp, color: 'text-orange-600',    value: '₹15 Cr', label: 'Research Funding' },
          ].map(({ icon: Icon, color, value, label }, i) => (
            <Card key={i} className="text-center bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Icon className={`h-8 w-8 ${color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-slate-900 mb-1">{value}</div>
                <div className="text-slate-600 text-sm">{label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Areas — live from Strapi */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Key Research Areas</h3>

          {error && (
            <div className="flex items-center gap-3 text-red-600 bg-red-50 rounded-xl p-5 mb-8">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p>Could not load research areas. Please check your connection.</p>
            </div>
          )}

          {isLoading ? (
            <AreaSkeleton />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {(researchAreas ?? []).map((area, index) => {
                const Icon = AREA_ICONS[index % AREA_ICONS.length];
                // highlights stored as comma-separated string in Strapi
                const highlights = area.highlights
                  ? area.highlights.split(',').map(h => h.trim()).filter(Boolean)
                  : [];

                return (
                  <Card key={area.id} className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon className="h-8 w-8 text-[#118DC4]" />
                        <CardTitle className="text-xl text-slate-900">{area.title}</CardTitle>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{area.description}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-3 gap-4 text-center mb-4">
                        <div>
                          <div className="text-lg font-semibold text-slate-900">{area.projects}</div>
                          <div className="text-sm text-slate-600">Projects</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-slate-900">{area.publications}</div>
                          <div className="text-sm text-slate-600">Publications</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-slate-900">{area.funding}</div>
                          <div className="text-sm text-slate-600">Funding</div>
                        </div>
                      </div>
                      {highlights.length > 0 && (
                        <div className="mb-4">
                          <div className="text-sm font-semibold text-slate-900 mb-2">Key Focus Areas:</div>
                          <div className="flex flex-wrap gap-2">
                            {highlights.map((h, idx) => (
                              <span key={idx} className="bg-[#118DC4]/10 text-[#118DC4] text-xs px-2 py-1 rounded-full">
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      <Button variant="outline" className="w-full border-[#118DC4] text-[#118DC4] hover:bg-[#118DC4]/10">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>

        {/* Publications & Facilities tabs (static) */}
        <Tabs defaultValue="publications" className="mb-16">
          <TabsList className="grid w-full lg:w-fit mx-auto grid-cols-2 mb-8 h-12">
            <TabsTrigger value="publications" className="px-8 text-base data-[state=active]:bg-[#118DC4] data-[state=active]:text-white">
              Recent Publications
            </TabsTrigger>
            <TabsTrigger value="facilities" className="px-8 text-base data-[state=active]:bg-[#118DC4] data-[state=active]:text-white">
              Research Facilities
            </TabsTrigger>
          </TabsList>

          <TabsContent value="publications">
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <Card key={index} className="bg-white shadow-md border-0">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-slate-900 leading-tight pr-4">{pub.title}</h4>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                        {pub.year}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-2">{pub.authors}</p>
                    <div className="flex justify-between items-center text-sm text-slate-500">
                      <span className="italic">{pub.journal}</span>
                      <span>{pub.citations} citations</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="facilities">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {facilities.map((facility, index) => (
                <Card key={index} className="bg-white shadow-md border-0">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">{facility.name}</h4>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div><strong>Equipment:</strong> {facility.equipment}</div>
                      <div><strong>Area:</strong> {facility.area}</div>
                      <div><strong>Capacity:</strong> {facility.capacity}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#118DC4] to-[#0a6ba2] text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Join Our Research Community</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Collaborate with leading researchers and contribute to groundbreaking discoveries that shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#118DC4] hover:bg-blue-50 font-semibold px-8 py-3">
                Research Opportunities
              </Button>
              <Button className="bg-white text-[#118DC4] hover:bg-blue-50 font-semibold px-8 py-3">
                Collaboration Proposals
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;