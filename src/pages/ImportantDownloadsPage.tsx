import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, FileText, File, Image, BookOpen, Calendar, Search, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEventDownloads } from '@/hooks/useStrapi';
import { getStrapiImageUrl, StrapiEventDownload } from '@/lib/strapi';

// Helpers
const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

const getFileIcon = (filename?: string) => {
  if (!filename) return <FileText className="h-6 w-6 text-gray-500" />;
  const ext = filename.split('.').pop()?.toLowerCase();
  if (ext === 'pdf') return <FileText className="h-6 w-6 text-red-600" />;
  if (ext === 'doc' || ext === 'docx') return <File className="h-6 w-6 text-blue-600" />;
  if (['jpg', 'jpeg', 'png'].includes(ext ?? '')) return <Image className="h-6 w-6 text-green-600" />;
  return <FileText className="h-6 w-6 text-gray-600" />;
};

const DownloadRow = ({ item }: { item: StrapiEventDownload }) => {
  const fileUrl = getStrapiImageUrl(item.file ?? null);
  const imageUrl = getStrapiImageUrl(item.image ?? null);
  const url = fileUrl ?? imageUrl;
  const filename = item.file?.url?.split('/').pop() ?? item.image?.url?.split('/').pop();

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {getFileIcon(filename)}
        <div className="min-w-0">
          <p className="font-medium text-gray-900 text-sm truncate">{item.title}</p>
          {item.description && (
            <p className="text-xs text-gray-500 truncate">{item.description}</p>
          )}
          {item.date && (
            <p className="text-xs text-gray-400 mt-0.5">{formatDate(item.date)}</p>
          )}
        </div>
      </div>
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" download>
          <Button size="sm" className="ml-3 bg-[#118DC4] hover:bg-[#0d7db0] flex-shrink-0">
            <Download className="h-3.5 w-3.5 mr-1" />Download
          </Button>
        </a>
      ) : (
        <Button size="sm" variant="outline" disabled className="ml-3 flex-shrink-0 text-gray-400">
          <Download className="h-3.5 w-3.5 mr-1" />N/A
        </Button>
      )}
    </div>
  );
};

// Skeleton
const DownloadSkeleton = () => (
  <div className="space-y-3">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="flex items-center gap-3 p-4 border rounded-lg animate-pulse">
        <div className="h-6 w-6 bg-slate-200 rounded flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-slate-200 rounded w-2/3" />
          <div className="h-3 bg-slate-200 rounded w-1/3" />
        </div>
        <div className="h-8 w-24 bg-slate-200 rounded flex-shrink-0" />
      </div>
    ))}
  </div>
);

const ImportantDownloadsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: downloads, isLoading, error } = useEventDownloads();

  // Split by category
  const byCategory = useMemo(() => {
    const items = (downloads ?? []).filter(d => d.isActive !== false);
    return {
      event: items.filter(d => d.category === 'event'),
      download: items.filter(d => d.category === 'download'),
      notice: items.filter(d => d.category === 'notice'),
    };
  }, [downloads]);

  const filterItems = (items: StrapiEventDownload[]) => {
    if (!searchTerm) return items;
    const q = searchTerm.toLowerCase();
    return items.filter(d =>
      d.title.toLowerCase().includes(q) ||
      d.description?.toLowerCase().includes(q)
    );
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Download className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Important Downloads</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Access important academic documents, forms, notices, and event materials.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {error && (
            <div className="flex items-center gap-3 text-red-600 bg-red-50 rounded-xl p-5 mb-8">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p>Could not load downloads. Please check your connection.</p>
            </div>
          )}

          <Tabs defaultValue="download">
            <TabsList className="mb-8 bg-white shadow-sm w-full flex-wrap h-auto">
              <TabsTrigger value="download"
                className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                <FileText className="h-4 w-4 mr-1.5" />Documents
              </TabsTrigger>
              <TabsTrigger value="notice"
                className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                <BookOpen className="h-4 w-4 mr-1.5" />Notices
              </TabsTrigger>
              <TabsTrigger value="event"
                className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                <Calendar className="h-4 w-4 mr-1.5" />Events
              </TabsTrigger>
            </TabsList>

            {(['download', 'notice', 'event'] as const).map(cat => {
              const items = filterItems(byCategory[cat]);
              return (
                <TabsContent key={cat} value={cat}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="capitalize text-indigo-700">{cat}s</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {isLoading ? <DownloadSkeleton /> : items.length === 0 ? (
                        <div className="text-center py-12 text-gray-500">
                          <FileText className="h-10 w-10 mx-auto mb-3 opacity-30" />
                          <p>No {cat}s found{searchTerm ? ` matching "${searchTerm}"` : ''}.</p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {items.map(item => <DownloadRow key={item.id} item={item} />)}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImportantDownloadsPage;