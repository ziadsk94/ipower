import IndustrialHero from '../../components/IndustrialHero';
import IndustrialMetrics from '../../components/IndustrialMetrics';
import IndustrialEngineering from '../../components/IndustrialEngineering';
import IndustrialProjects from '../../components/IndustrialProjects';
import IndustrialPartners from '../../components/IndustrialPartners';
import IndustrialCTA from '../../components/IndustrialCTA';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import { Analytics } from '../../components/Analytics';
import { serviceSchema, breadcrumbSchema } from '../../lib/structuredData';

export const metadata = {
  title: 'Industrial Electrical Systems Lebanon | Industrial Automation',
  description: 'Advanced industrial electrical systems and automation solutions in Lebanon. Industrial solar energy, automation & control systems, power distribution for Lebanese industries.',
  keywords: 'industrial electrical systems Lebanon, industrial automation Lebanon, industrial solar Lebanon, industrial electrical contractors Lebanon, automation systems Lebanon',
  openGraph: {
    title: 'Industrial Electrical Systems Lebanon | Industrial Automation',
    description: 'Advanced industrial electrical systems and automation solutions in Lebanon. Industrial solar energy, automation & control systems, power distribution for Lebanese industries.',
    images: ['/assets/images/og-industrial.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://ipower.com.lb/solutions/industrial',
  },
};

export default function IndustrialPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://ipower.com.lb' },
    { name: 'Solutions', url: 'https://ipower.com.lb/solutions' },
    { name: 'Industrial', url: 'https://ipower.com.lb/solutions/industrial' }
  ];

  return (
    <>
      <SEOHead
        title="Industrial Electrical Systems Lebanon | Industrial Automation"
        description="Advanced industrial electrical systems and automation solutions in Lebanon. Industrial solar energy, automation & control systems, power distribution for Lebanese industries."
        keywords="industrial electrical systems Lebanon, industrial automation Lebanon, industrial solar Lebanon, industrial electrical contractors Lebanon, automation systems Lebanon"
        canonical="https://ipower.com.lb/solutions/industrial"
        ogImage="/assets/images/og-industrial.jpg"
        structuredData={[
          serviceSchema(
            'Industrial Electrical Systems',
            'Advanced industrial electrical systems and automation solutions for Lebanese industries. Industrial solar energy, automation & control systems, and power distribution.',
            'Industrial Electrical Engineering'
          ),
          breadcrumbSchema(breadcrumbItems)
        ]}
      />
      <Analytics />
      <main className="min-h-screen bg-white">
        <IndustrialHero />
        <div id="metrics">
          <IndustrialMetrics />
        </div>
        <IndustrialEngineering />
        <IndustrialProjects />
        <IndustrialPartners />
        <IndustrialCTA />
        <Footer />
      </main>
    </>
  );
}
