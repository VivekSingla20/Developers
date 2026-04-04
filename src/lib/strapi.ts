const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

// Core fetch wrapper 
async function fetchStrapi<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}`);
  if (!res.ok) {
    throw new Error(`Strapi API error: ${res.status} ${res.statusText} — ${endpoint}`);
  }
  const json = await res.json();
  return json.data as T;
}

// Image URL helper 
export function getStrapiImageUrl(imageData: StrapiImage | null | undefined): string | null {
  if (!imageData) return null;
  const url = imageData.url;
  if (!url) return null;
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

// Types
export interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
  };
}

export interface StrapiFaculty {
  id: number;
  name: string;
  designation: string;
  department: 'Computer Science' | 'Information Technology' | 'Electronics' | 'Mechanical' | 'Electrical' | 'Biotechnology' | 'Applied Sciences';
  specialization: string;
  email: string;
  phone: string;
  experience: string;
  qualification: string;
  publications: number;
  photo?: StrapiImage;
  publishedAt: string;
}

export interface StrapiNewsNotice {
  id: number;
  title: string;
  description: string;
  content: string;
  category: 'admission' | 'placement' | 'research' | 'event' | 'achievement' | 'notice' | 'academic';
  date: string;
  isNew: boolean;
  isPinned: boolean;
  priority: 'high' | 'medium' | 'low';
  author?: string;
  link?: string;
  downloadLink?: string;
  tags?: string; // comma-separated
  attachment?: StrapiImage;
  publishedAt: string;
}

export interface StrapiRecruiter {
  id: number;
  name: string;
  package: string;
  hired: number;
  year: string;
  logo?: StrapiImage;
}

export interface StrapiResearchArea {
  id: number;
  title: string;
  description: string;
  projects: number;
  publications: number;
  funding: string;
  highlights: string; // comma-separated
}

export interface StrapiCommittee {
  id: number;
  name: string;
  category: 'academic' | 'welfare' | 'safety' | 'research' | 'events';
  description: string;
  chairperson: string;
  members: string; // comma-separated
  responsibilities: string; // comma-separated
  meetingSchedule: string;
  contact: string;
  achievements: string; // comma-separated
}

export interface StrapiScholarship {
  id: number;
  name: string;
  amount: string;
  eligibility: string;
  deadline: string;
  type: 'institute' | 'aicte' | 'government';
  details: string;
}

export interface StrapiPreviousYearPaper {
  id: number;
  subject: string;
  department: 'CSE' | 'ECE' | 'EEE' | 'IT' | 'ME' | 'BT' | 'AS';
  year: string;
  semester: string;
  program: 'B.Tech' | 'M.Tech' | 'Ph.D';
  credits: number;
  fileUrl?: string;
  file?: StrapiImage;
}

export interface StrapiAdmissionSchedule {
  id: number;
  program: string;
  applicationStart: string;
  applicationEnd: string;
  examDate: string;
  resultsDate: string;
  seats: number;
  eligibility: string;
  applyLink: string;
}

export interface StrapiStudentAchievement {
  id: number;
  student: string;
  achievement: string;
  category: 'Technical' | 'Research' | 'Innovation' | 'Leadership' | 'Sports' | 'Cultural';
  year: string;
}

export interface StrapiEventDownload {
  id: number;
  title: string;
  description: string;
  date: string;
  category: 'event' | 'download' | 'notice';
  isActive: boolean;
  file?: StrapiImage;
  image?: StrapiImage;
}

// API functions
export const getFaculty = () =>
  fetchStrapi<StrapiFaculty[]>('faculties?populate=photo&sort=department:asc,pagination[limit]=200');

export const getNews = () =>
  fetchStrapi<StrapiNewsNotice[]>('news-notices?populate=attachment&sort=isPinned:desc,date:desc&pagination[limit]=100');

export const getRecruiters = () =>
  fetchStrapi<StrapiRecruiter[]>('recruiters?populate=logo&sort=hired:desc&pagination[limit]=100');

export const getResearchAreas = () =>
  fetchStrapi<StrapiResearchArea[]>('research-areas?pagination[limit]=50');

export const getCommittees = () =>
  fetchStrapi<StrapiCommittee[]>('committees?sort=category:asc&pagination[limit]=50');

export const getScholarships = () =>
  fetchStrapi<StrapiScholarship[]>('scholarships?sort=type:asc&pagination[limit]=50');

export const getPreviousYearPapers = () =>
  fetchStrapi<StrapiPreviousYearPaper[]>('previous-year-papers?populate=file&sort=year:desc&pagination[limit]=200');

export const getAdmissionSchedules = () =>
  fetchStrapi<StrapiAdmissionSchedule[]>('admission-schedules?pagination[limit]=20');

export const getStudentAchievements = () =>
  fetchStrapi<StrapiStudentAchievement[]>('student-achievements?sort=year:desc&pagination[limit]=100');

export const getEventDownloads = () =>
  fetchStrapi<StrapiEventDownload[]>('event-downloads?populate=file,image&sort=date:desc&pagination[limit]=50');

// Tag helper
export function parseTags(tags?: string): string[] {
  if (!tags) return [];
  return tags.split(',').map(t => t.trim()).filter(Boolean);
}
