import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import EmployerGrades from '@/components/home/EmployerGrades';
import CandidatePreview from '@/components/home/CandidatePreview';
import AssessmentHub from '@/components/home/AssessmentHub';
import ResumeBuilder from '@/components/home/ResumeBuilder';
import Testimonials from '@/components/home/Testimonials';
import Footer from '@/components/home/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HireX | AI-Autonomous Job Portal & Career Reports',
  description: 'Advanced job portal with GitHub/LinkedIn integration, AI skill testing, and 360-degree candidate reporting.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <EmployerGrades />
      <CandidatePreview />
      <AssessmentHub />
      <ResumeBuilder />
      <Testimonials />
      <Footer />
    </main>
  );
}