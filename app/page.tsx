import AdvancedHero from '@/components/Sections/AdvancedHero';
import StatsSection from '@/components/Sections/StatsSection';
import AnimatedPricing from '@/components/Sections/AnimatedPricing';
import ScrollAnimatedServices from '@/components/Sections/ScrollAnimatedServices';
import AnimatedTestimonials from '@/components/Sections/AnimatedTestimonials';
import CTASection from '@/components/Sections/CTASection';

export default function Home() {
  return (
    <div className="w-full">
      <AdvancedHero />
      <StatsSection />
      <AnimatedPricing />
      <ScrollAnimatedServices />
      <AnimatedTestimonials />
      <CTASection />
    </div>
  );
}
