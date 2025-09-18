import React from 'react';
import BeginnerCard from '../levelcomps/BeginnerCard';
import MediumCard from '../levelcomps/MediumCard';
import AdvancedCard from '../levelcomps/AdvancedCard';

const FeaturedLevels: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8">Course Levels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BeginnerCard />
          <MediumCard />
          <AdvancedCard />
        </div>
      </div>
    </section>
  );
};

export default FeaturedLevels;