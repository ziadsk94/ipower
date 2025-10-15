import ProjectsHero from '../components/ProjectsHero';
import ProjectsGrid from '../components/ProjectsGrid';
import ProjectSpotlight from '../components/ProjectSpotlight';
import FeaturedCaseStudies from '../components/FeaturedCaseStudies';
import GallerySection from '../components/GallerySection';
import PerformanceImpact from '../components/PerformanceImpact';
import ProjectsCTA from '../components/ProjectsCTA';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { Analytics } from '../components/Analytics';
import { projectSchema, breadcrumbSchema } from '../lib/structuredData';

export const metadata = {
  title: 'Electrical Engineering Projects Lebanon | iPower Portfolio',
  description: 'Explore iPower\'s electrical engineering and solar energy projects across Lebanon. Industrial automation, commercial solar, residential systems, and renewable energy solutions.',
  keywords: 'electrical engineering projects Lebanon, solar energy projects Lebanon, industrial projects Lebanon, electrical engineering portfolio Lebanon, renewable energy projects Lebanon',
  openGraph: {
    title: 'Electrical Engineering Projects Lebanon | iPower Portfolio',
    description: 'Explore iPower\'s electrical engineering and solar energy projects across Lebanon. Industrial automation, commercial solar, residential systems, and renewable energy solutions.',
    images: ['/assets/images/og-projects.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://ipower.com.lb/projects',
  },
};

export default function ProjectsPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://ipower.com.lb' },
    { name: 'Projects', url: 'https://ipower.com.lb/projects' }
  ];

  return (
    <>
      <SEOHead
        title="Electrical Engineering Projects Lebanon | iPower Portfolio"
        description="Explore iPower's electrical engineering and solar energy projects across Lebanon. Industrial automation, commercial solar, residential systems, and renewable energy solutions."
        keywords="electrical engineering projects Lebanon, solar energy projects Lebanon, industrial projects Lebanon, electrical engineering portfolio Lebanon, renewable energy projects Lebanon"
        canonical="https://ipower.com.lb/projects"
        ogImage="/assets/images/og-projects.jpg"
        structuredData={[
          projectSchema(
            'iPower Electrical Engineering Projects',
            'Comprehensive portfolio of electrical engineering and solar energy projects across Lebanon, including industrial automation, commercial solar systems, and residential electrical solutions.',
            'Lebanon',
            '30+ MW',
            '2024'
          ),
          breadcrumbSchema(breadcrumbItems)
        ]}
      />
      <Analytics />
      <main className="min-h-screen">
        <ProjectsHero />
        <div id="projects-grid">
          <ProjectsGrid />
        </div>
        <ProjectSpotlight />
        <FeaturedCaseStudies />
        <GallerySection />
        <PerformanceImpact />
        <ProjectsCTA />
        <Footer />
      </main>
    </>
  );
}
