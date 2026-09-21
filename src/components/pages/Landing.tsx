import React from 'react';
import HeroSection from '../landing/HeroSection';
import MissionSection from '../landing/MissionSection';
import PlatformsSection from '../landing/PlatformsSection';
// import BlocksSection from '../landing/BlocksSection';
// import InstitutionsSection from '../landing/InstitutionsSection';
// import FlowSection from '../landing/FlowSection';
// import AISection from '../landing/AISection';
// import GovernanceSection from '../landing/GovernanceSection';
import GetStartedSection from '../landing/GetStartedSection';
import VerifiedSection from '../landing/VerifiedSection';

export default function Landing() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <PlatformsSection />
      <GetStartedSection />
      <VerifiedSection />
    </>
  );
}
