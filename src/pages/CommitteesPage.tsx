import React, { useState, useEffect, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Users, Shield, Heart, Scale, UserCheck, AlertTriangle,
  Beaker, Laptop, Search, Phone, Mail, Clock, MapPin, AlertCircle
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useCommittees } from '@/hooks/useStrapi';

// Icon map
const categoryIconMap: Record<string, React.ElementType> = {
  academic:  Users,
  welfare:   Heart,
  safety:    Shield,
  research:  Beaker,
  events:    Laptop,
};

const categoryColors: Record<string, string> = {
  academic: 'bg-blue-100 text-blue-800',
  welfare:  'bg-green-100 text-green-800',
  safety:   'bg-red-100 text-red-800',
  research: 'bg-purple-100 text-purple-800',
  events:   'bg-orange-100 text-orange-800',
};

const CATEGORIES = ['all', 'academic', 'welfare', 'safety', 'research', 'events'] as const;

// committee skeleton
const CommitteeSkeleton = () => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {[...Array(4)].map((_, i) => (
      <Card key={i} className="animate-pulse">
        <CardHeader>
          <div className="h-5 bg-slate-200 rounded w-2/3 mb-2" />
          <div className="h-3 bg-slate-200 rounded w-full" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="h-3 bg-slate-200 rounded w-1/2" />
            <div className="h-3 bg-slate-200 rounded w-3/4" />
            <div className="h-3 bg-slate-200 rounded w-1/3" />
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const CommitteesPage = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const { data: committees, isLoading, error } = useCommittees();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const el = document.getElementById(hash.substring(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, [location.hash]);

  const filtered = useMemo(() => {
    let items = committees ?? [];
    if (activeCategory !== 'all') items = items.filter(c => c.category === activeCategory);
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      items = items.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.description?.toLowerCase().includes(q) ||
        c.chairperson?.toLowerCase().includes(q)
      );
    }
    return items;
  }, [committees, activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#118DC4] to-[#0d6fa3] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Institutional Committees</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            UIET's governance structure includes specialized committees ensuring academic excellence,
            student welfare, and institutional integrity.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search committees..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#118DC4] focus:border-[#118DC4]"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors capitalize ${
                    activeCategory === cat
                      ? 'bg-[#118DC4] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {error && (
            <div className="flex items-center gap-3 text-red-600 bg-red-50 rounded-xl p-5 mb-8">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p>Could not load committee data. Please check your connection.</p>
            </div>
          )}

          {isLoading ? <CommitteeSkeleton /> : (
            <>
              {filtered.length === 0 && (
                <div className="text-center py-16 text-gray-500">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-30" />
                  <p className="text-lg">No committees found matching your search.</p>
                </div>
              )}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {filtered.map(committee => {
                  const Icon = categoryIconMap[committee.category] ?? Users;
                  const members = committee.members
                    ? committee.members.split(',').map(m => m.trim()).filter(Boolean)
                    : [];
                  const responsibilities = committee.responsibilities
                    ? committee.responsibilities.split(',').map(r => r.trim()).filter(Boolean)
                    : [];
                  const achievements = committee.achievements
                    ? committee.achievements.split(',').map(a => a.trim()).filter(Boolean)
                    : [];

                  return (
                    <Card key={committee.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-[#118DC4]/10 rounded-lg">
                              <Icon className="h-6 w-6 text-[#118DC4]" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{committee.name}</CardTitle>
                              <Badge className={`mt-1 text-xs capitalize ${categoryColors[committee.category] ?? 'bg-gray-100 text-gray-700'}`}>
                                {committee.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        {committee.description && (
                          <p className="text-gray-600 text-sm mt-2">{committee.description}</p>
                        )}
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {committee.chairperson && (
                          <div>
                            <h4 className="font-semibold text-sm text-gray-700 mb-1">Chairperson</h4>
                            <p className="text-sm text-[#118DC4]">{committee.chairperson}</p>
                          </div>
                        )}

                        {members.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-sm text-gray-700 mb-1">Members</h4>
                            <ul className="text-sm text-gray-600 space-y-0.5">
                              {members.map((m, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-[#118DC4] mr-1">•</span>{m}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {responsibilities.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-sm text-gray-700 mb-1">Key Responsibilities</h4>
                            <ul className="text-sm text-gray-600 space-y-0.5">
                              {responsibilities.slice(0, 4).map((r, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-green-500 mr-1">✓</span>{r}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 pt-2 border-t">
                          {committee.meetingSchedule && (
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />{committee.meetingSchedule}
                            </span>
                          )}
                          {committee.contact && (
                            <a href={`mailto:${committee.contact}`}
                              className="flex items-center gap-1 text-[#118DC4] hover:underline">
                              <Mail className="h-3.5 w-3.5" />{committee.contact}
                            </a>
                          )}
                        </div>

                        {achievements.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {achievements.map((a, i) => (
                              <Badge key={i} variant="outline" className="text-xs border-[#118DC4]/30 text-[#118DC4]">
                                {a}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommitteesPage;