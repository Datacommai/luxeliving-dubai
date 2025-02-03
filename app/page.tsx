'use client';
import { Navigation } from './components/navigation/navigation';
import { FeaturedHeader } from './components/featured-header/featured-header';
import { HeroSection } from './components/hero-section/hero-section';
import { FeaturedPropertiesSection } from './components/featured-properties-section/featured-properties-section';
import { Footer } from './components/footer/footer';
import { useState } from 'react';
import { FilterType } from './components/property-selection/property-selection';

export default function Home() {
 const [filters, setFilters] = useState<Partial<FilterType>>();

 return (
  <main className="flex flex-col justify-center items-center">
   <Navigation />
   <HeroSection selectedFilters={(filters) => setFilters(filters)} />
   <FeaturedHeader />
   <FeaturedPropertiesSection filters={filters as FilterType} />
   <Footer />
  </main>
 );
}
