import ResidentialHero from '../../components/ResidentialHero';
import ResidentialBenefits from '../../components/ResidentialBenefits';
import ResidentialProcess from '../../components/ResidentialProcess';
import ResidentialCTA from '../../components/ResidentialCTA';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import { Analytics } from '../../components/Analytics';
import { serviceSchema, breadcrumbSchema } from '../../lib/structuredData';

export const metadata = {
  title: 'Residential Electrical Systems Lebanon | Home Solar Energy',
  description: 'Professional residential electrical systems and solar energy solutions in Lebanon. Smart home electrical design, energy efficiency, and reliable power for Lebanese homes.',
  keywords: 'residential electrical systems Lebanon, home solar energy Lebanon, residential solar Lebanon, smart home electrical Lebanon, home electrical design Lebanon',
  openGraph: {
    title: 'Residential Electrical Systems Lebanon | Home Solar Energy',
    description: 'Professional residential electrical systems and solar energy solutions in Lebanon. Smart home electrical design, energy efficiency, and reliable power for Lebanese homes.',
    images: ['/assets/images/og-residential.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://ipower.com.lb/solutions/residential',
  },
};

export default function ResidentialPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://ipower.com.lb' },
    { name: 'Solutions', url: 'https://ipower.com.lb/solutions' },
    { name: 'Residential', url: 'https://ipower.com.lb/solutions/residential' }
  ];

  return (
    <>
      <SEOHead
        title="Residential Electrical Systems Lebanon | Home Solar Energy"
        description="Professional residential electrical systems and solar energy solutions in Lebanon. Smart home electrical design, energy efficiency, and reliable power for Lebanese homes."
        keywords="residential electrical systems Lebanon, home solar energy Lebanon, residential solar Lebanon, smart home electrical Lebanon, home electrical design Lebanon"
        canonical="https://ipower.com.lb/solutions/residential"
        ogImage="/assets/images/og-residential.jpg"
        structuredData={[
          serviceSchema(
            'Residential Electrical Systems',
            'Professional residential electrical systems and solar energy solutions for Lebanese homes. Smart home electrical design, energy efficiency, and reliable power systems.',
            'Residential Electrical Engineering'
          ),
          breadcrumbSchema(breadcrumbItems)
        ]}
      />
      <Analytics />
      <main className="min-h-screen bg-white">
        <ResidentialHero />
        <div id="benefits">
          <ResidentialBenefits />
        </div>
        <ResidentialProcess />
        <ResidentialCTA />
        <Footer />
      </main>
    </>
  );
}
