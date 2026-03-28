import React, { useState, useMemo } from 'react';
import {
  Calendar, ExternalLink, GraduationCap, TrendingUp, Star, Bell,
  FileText, Download, Award, BookOpen, Briefcase, Search, Filter,
  ArrowRight, Share2, X, Loader2, AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNews } from '@/hooks/useStrapi';
import { StrapiNewsNotice, parseTags } from '@/lib/strapi';

const categoryConfig = {
  all:         { label: 'All News',      icon: Bell },
  admission:   { label: 'Admissions',    icon: GraduationCap },
  placement:   { label: 'Placements',    icon: Briefcase },
  research:    { label: 'Research',      icon: Star },
  event:       { label: 'Events',        icon: Calendar },
  achievement: { label: 'Achievements',  icon: Award },
  notice:      { label: 'Notices',       icon: FileText },
  academic:    { label: 'Academic',      icon: BookOpen },
} as const;

type Category = keyof typeof categoryConfig;

// helpers
const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case 'high':   return <Badge className="bg-[#118DC4] text-white">High Priority</Badge>;
    case 'medium': return <Badge className="bg-[#118DC4]/60 text-white">Medium</Badge>;
    case 'low':    return <Badge className="bg-gray-500 text-white">Low</Badge>;
    default:       return null;
  }
};

// News Card
const NewsCard = ({
  news,
  onSelect,
}: {
  news: StrapiNewsNotice;
  onSelect: (n: StrapiNewsNotice) => void;
}) => {
  const categoryInfo = categoryConfig[news.category as Category] ?? categoryConfig.all;
  const IconComponent = categoryInfo.icon;

  return (
    <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-[#118DC4] h-full flex flex-col bg-white">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="p-2 rounded-lg bg-[#118DC4]/10 text-[#118DC4]">
            <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            <Badge variant="outline" className="text-xs border-[#118DC4] text-[#118DC4]">
              {categoryInfo.label}
            </Badge>
            {news.isNew    && <Badge className="bg-[#118DC4] text-white text-xs">NEW</Badge>}
            {news.isPinned && <Badge className="bg-[#118DC4]/80 text-white text-xs">PINNED</Badge>}
          </div>
        </div>
        <div className="flex-shrink-0">{getPriorityBadge(news.priority)}</div>
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 flex-grow-0">
        {news.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 flex-grow">
        {news.description}
      </p>

      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4">
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">{news.date ? formatDate(news.date) : '—'}</span>
          <span className="sm:hidden">
            {news.date ? new Date(news.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }) : '—'}
          </span>
        </span>
        {news.author && (
          <span className="text-[#118DC4] truncate ml-2">{news.author}</span>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
        <Button
          onClick={() => onSelect(news)}
          className="bg-[#118DC4] hover:bg-[#0d6fa3] text-white flex-1 text-sm"
        >
          Read More <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
        </Button>

        <div className="flex gap-2">
          {news.link && (
            <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-none">
              <a href={news.link} className="flex items-center gap-1 text-xs sm:text-sm">
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Visit</span>
              </a>
            </Button>
          )}
          {news.downloadLink && (
            <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-none">
              <a href={news.downloadLink} className="flex items-center gap-1 text-xs sm:text-sm">
                <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Download</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

// Loading Skeleton
const NewsSkeleton = () => (
  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
    {[...Array(6)].map((_, i) => (
      <Card key={i} className="p-6 border-l-4 border-[#118DC4]/30 animate-pulse">
        <div className="space-y-3">
          <div className="h-4 bg-slate-200 rounded w-1/3" />
          <div className="h-6 bg-slate-200 rounded w-5/6" />
          <div className="h-4 bg-slate-200 rounded w-full" />
          <div className="h-4 bg-slate-200 rounded w-2/3" />
          <div className="h-9 bg-slate-200 rounded" />
        </div>
      </Card>
    ))}
  </div>
);

// Main page
const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNews, setSelectedNews] = useState<StrapiNewsNotice | null>(null);
  const [sortBy, setSortBy] = useState('date');

  const { data: newsData, isLoading, error } = useNews();

  const filteredNews = useMemo(() => {
    let items = newsData ?? [];

    if (selectedCategory !== 'all') {
      items = items.filter(n => n.category === selectedCategory);
    }

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      items = items.filter(n =>
        n.title.toLowerCase().includes(q) ||
        n.description?.toLowerCase().includes(q) ||
        parseTags(n.tags).some(tag => tag.toLowerCase().includes(q))
      );
    }

    // Sort: pinned first, then by date
    return [...items].sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [newsData, selectedCategory, searchTerm, sortBy]);

  const totalItems    = newsData?.length ?? 0;
  const newCount      = newsData?.filter(n => n.isNew).length ?? 0;
  const pinnedCount   = newsData?.filter(n => n.isPinned).length ?? 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#118DC4] to-[#0d6fa3] text-white py-8 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 text-blue-100 max-w-3xl mx-auto">
            Stay informed with the latest announcements, achievements, and important updates from UIET
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
              <div className="text-xl sm:text-2xl font-bold">{totalItems}</div>
              <div className="text-xs sm:text-sm text-blue-100">Total Updates</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
              <div className="text-xl sm:text-2xl font-bold">{newCount}</div>
              <div className="text-xs sm:text-sm text-blue-100">New Updates</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 col-span-2 md:col-span-1 border border-white/20">
              <div className="text-xl sm:text-2xl font-bold">{pinnedCount}</div>
              <div className="text-xs sm:text-sm text-blue-100">Important</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-4 sm:py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            <div className="relative flex-1 max-w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search news and updates..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#118DC4] focus:border-[#118DC4] transition-colors"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-[#118DC4]" />
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-[#118DC4] focus:border-[#118DC4] transition-colors"
              >
                <option value="date">Latest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 sm:py-12">
        <div className="container mx-auto px-4">

          {/* Error */}
          {error && (
            <div className="flex items-center gap-3 text-red-600 bg-red-50 rounded-xl p-6 mb-8">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p>Could not load news data. Please check your connection and try again.</p>
            </div>
          )}

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="w-full justify-start mb-6 sm:mb-8 bg-gray-50 p-1 h-auto flex-wrap gap-1 border border-gray-200">
              {Object.entries(categoryConfig).map(([key, config]) => {
                const IconComponent = config.icon;
                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 data-[state=active]:bg-[#118DC4] data-[state=active]:text-white text-xs sm:text-sm hover:bg-[#118DC4]/10 transition-colors"
                  >
                    <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">{config.label}</span>
                    <span className="sm:hidden">{config.label.split(' ')[0]}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            <div className="space-y-6">
              {isLoading ? (
                <NewsSkeleton />
              ) : filteredNews.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                  {filteredNews.map(news => (
                    <NewsCard key={news.id} news={news} onSelect={setSelectedNews} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 sm:py-12">
                  <Bell className="h-12 w-12 sm:h-16 sm:w-16 text-[#118DC4]/30 mx-auto mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">No Updates Found</h3>
                  <p className="text-sm sm:text-base text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </Tabs>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] overflow-y-auto border border-gray-200 shadow-2xl">
            <div className="p-4 sm:p-6">
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pr-4">
                  {selectedNews.title}
                </h2>
                <Button
                  variant="ghost"
                  onClick={() => setSelectedNews(null)}
                  className="text-gray-500 hover:text-gray-700 hover:bg-[#118DC4]/10 flex-shrink-0"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-600">
                <span className="flex items-center gap-1 text-[#118DC4]">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                  {selectedNews.date ? formatDate(selectedNews.date) : '—'}
                </span>
                {selectedNews.author && (
                  <span className="text-gray-600">By: {selectedNews.author}</span>
                )}
              </div>

              <div className="prose max-w-none mb-4 sm:mb-6">
                <div className="whitespace-pre-line text-gray-700 text-sm sm:text-base leading-relaxed">
                  {selectedNews.content}
                </div>
              </div>

              {/* Tags */}
              {selectedNews.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {parseTags(selectedNews.tags).map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs border-[#118DC4]/40 text-[#118DC4]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                {selectedNews.link && (
                  <Button asChild className="bg-[#118DC4] hover:bg-[#0d6fa3] text-white">
                    <a href={selectedNews.link} className="flex items-center justify-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Visit Page
                    </a>
                  </Button>
                )}
                {selectedNews.downloadLink && (
                  <Button variant="outline" asChild className="border-[#118DC4] text-[#118DC4] hover:bg-[#118DC4] hover:text-white">
                    <a href={selectedNews.downloadLink} className="flex items-center justify-center gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="border-[#118DC4] text-[#118DC4] hover:bg-[#118DC4] hover:text-white flex items-center justify-center gap-2"
                  onClick={() => navigator.clipboard?.writeText(window.location.href)}
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default NewsPage;