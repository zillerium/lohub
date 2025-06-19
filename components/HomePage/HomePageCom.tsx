'use client';

import Navbar from '@/components/Navbar/Navbar';
import HomeIntro from '@/components/HomePage/HomeIntro';
import SaveTimeCard from '@/components/HomePage/SaveTimeCard';
import ComparisonCard from '@/components/HomePage/ComparisonCard';
import LetThemComeCard from '@/components/HomePage/LetThemComeCard';
import HeroSection from '@/components/HomePage/HeroSection';

export default function HomePageCom() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <HomeIntro />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center px-4 py-12">
        <SaveTimeCard />
        <ComparisonCard />
        <LetThemComeCard />
  	</section>
  <HeroSection />
    </div>
  );
}

