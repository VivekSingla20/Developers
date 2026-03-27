import { useQuery } from '@tanstack/react-query';
import {
  getFaculty,
  getNews,
  getRecruiters,
  getResearchAreas,
  getCommittees,
  getScholarships,
  getPreviousYearPapers,
  getAdmissionSchedules,
  getStudentAchievements,
  getEventDownloads,
} from '@/lib/strapi';

// Cache for 5 minutes
const STALE_TIME = 5 * 60 * 1000;

export const useFaculty = () =>
  useQuery({
    queryKey: ['faculty'],
    queryFn: getFaculty,
    staleTime: STALE_TIME,
  });

export const useNews = () =>
  useQuery({
    queryKey: ['news-notices'],
    queryFn: getNews,
    staleTime: STALE_TIME,
  });

export const useRecruiters = () =>
  useQuery({
    queryKey: ['recruiters'],
    queryFn: getRecruiters,
    staleTime: STALE_TIME,
  });

export const useResearchAreas = () =>
  useQuery({
    queryKey: ['research-areas'],
    queryFn: getResearchAreas,
    staleTime: STALE_TIME,
  });

export const useCommittees = () =>
  useQuery({
    queryKey: ['committees'],
    queryFn: getCommittees,
    staleTime: STALE_TIME,
  });

export const useScholarships = () =>
  useQuery({
    queryKey: ['scholarships'],
    queryFn: getScholarships,
    staleTime: STALE_TIME,
  });

export const usePreviousYearPapers = () =>
  useQuery({
    queryKey: ['previous-year-papers'],
    queryFn: getPreviousYearPapers,
    staleTime: STALE_TIME,
  });

export const useAdmissionSchedules = () =>
  useQuery({
    queryKey: ['admission-schedules'],
    queryFn: getAdmissionSchedules,
    staleTime: STALE_TIME,
  });

export const useStudentAchievements = () =>
  useQuery({
    queryKey: ['student-achievements'],
    queryFn: getStudentAchievements,
    staleTime: STALE_TIME,
  });

export const useEventDownloads = () =>
  useQuery({
    queryKey: ['event-downloads'],
    queryFn: getEventDownloads,
    staleTime: STALE_TIME,
  });