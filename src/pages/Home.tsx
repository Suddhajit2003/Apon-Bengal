import HeroSection from '../components/HeroSection';
import QuickServices from '../components/QuickServices';
import StatsCounter from '../components/StatsCounter';
import VideoShowcase from '../components/VideoShowcase';
import EmergencyServices from '../components/EmergencyServices';
import AboutUs from '../components/AboutUs';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickServices /> 
      {/* <StatsCounter /> */}
      {/* <VideoShowcase /> */}
      {/* <EmergencyServices /> */}
      <AboutUs />
      {/* <FAQ /> */}
    </>
  );
}

