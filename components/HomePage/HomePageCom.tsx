'use client';

import Navbar from '@/components/Navbar/Navbar';
import HomeIntro from '@/components/HomePage/HomeIntro';
export default function HomePageCom() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <HomeIntro />
    </div>
  );
}
