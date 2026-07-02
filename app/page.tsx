import { HeroBlock } from '@/components/ui/hero-block';
import { AboutContactSection } from '@/components/ui/about-contact-section';
import { NewsSection } from '@/components/ui/news-section';
import { ProjectsSection } from '@/components/ui/projects-section';

export default function Home() {
  return (
    <main>
      <HeroBlock />
      <ProjectsSection />
      <div className="h-8 sm:h-12 md:h-16" />
      <NewsSection />
      <AboutContactSection />
    </main>
  );
}
