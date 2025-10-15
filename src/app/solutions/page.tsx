import SolutionsHero from '../components/SolutionsHero';
import WhyiPower from '../components/WhyiPower';
import SolutionCategories from '../components/SolutionCategories';
import ProcessTechnology from '../components/ProcessTechnology';
import SolutionsCTA from '../components/SolutionsCTA';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { Analytics } from '../components/Analytics';
import { serviceSchema, breadcrumbSchema } from '../lib/structuredData';

export const metadata = {
  title: 'Electrical Engineering Solutions Lebanon | iPower',
  description: 'Comprehensive electrical engineering solutions in Lebanon. Residential, commercial & industrial electrical systems, solar energy, automation & control systems.',
  keywords: 'electrical engineering solutions Lebanon, solar energy systems Lebanon, industrial automation Lebanon, electrical design Lebanon, power systems Lebanon',
  openGraph: {
    title: 'Electrical Engineering Solutions Lebanon | iPower',
    description: 'Comprehensive electrical engineering solutions in Lebanon. Residential, commercial & industrial electrical systems, solar energy, automation & control systems.',
    images: ['/assets/images/og-solutions.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://ipower.com.lb/solutions',
  },
};

export default function SolutionsPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://ipower.com.lb' },
    { name: 'Solutions', url: 'https://ipower.com.lb/solutions' }
  ];

  return (
    <>
      <SEOHead
        title="Electrical Engineering Solutions Lebanon | iPower"
        description="Comprehensive electrical engineering solutions in Lebanon. Residential, commercial & industrial electrical systems, solar energy, automation & control systems."
        keywords="electrical engineering solutions Lebanon, solar energy systems Lebanon, industrial automation Lebanon, electrical design Lebanon, power systems Lebanon"
        canonical="https://ipower.com.lb/solutions"
        ogImage="/assets/images/og-solutions.jpg"
        structuredData={[
          serviceSchema(
            'Electrical Engineering Solutions',
            'Comprehensive electrical engineering solutions including solar energy systems, industrial automation, power distribution, and control systems for residential, commercial, and industrial clients in Lebanon.',
            'Electrical Engineering'
          ),
          breadcrumbSchema(breadcrumbItems)
        ]}
      />
      <Analytics />
      <main className="min-h-screen bg-white">
        <SolutionsHero />
        <WhyiPower />
        <div id="solutions">
          <SolutionCategories />
        </div>
        <ProcessTechnology />
        <SolutionsCTA />
        <Footer />
      </main>
    </>
  );
}
