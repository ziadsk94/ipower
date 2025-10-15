import CommercialHero from '../../components/CommercialHero';
import CommercialValues from '../../components/CommercialValues';
import CommercialCaseStudy from '../../components/CommercialCaseStudy';
import CommercialMonitoring from '../../components/CommercialMonitoring';
import CommercialTestimonial from '../../components/CommercialTestimonial';
import CommercialCTA from '../../components/CommercialCTA';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import { Analytics } from '../../components/Analytics';
import { serviceSchema, breadcrumbSchema } from '../../lib/structuredData';

export const metadata = {
  title: 'Commercial Electrical Systems Lebanon | Business Solar Energy',
  description: 'Professional commercial electrical systems and solar energy solutions in Lebanon. Business electrical design, energy efficiency, and reliable power for Lebanese businesses.',
  keywords: 'commercial electrical systems Lebanon, business solar energy Lebanon, commercial solar Lebanon, business electrical design Lebanon, commercial electrical contractors Lebanon',
  openGraph: {
    title: 'Commercial Electrical Systems Lebanon | Business Solar Energy',
    description: 'Professional commercial electrical systems and solar energy solutions in Lebanon. Business electrical design, energy efficiency, and reliable power for Lebanese businesses.',
    images: ['/assets/images/og-commercial.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://ipower.com.lb/solutions/commercial',
  },
};

export default function CommercialPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://ipower.com.lb' },
    { name: 'Solutions', url: 'https://ipower.com.lb/solutions' },
    { name: 'Commercial', url: 'https://ipower.com.lb/solutions/commercial' }
  ];

  return (
    <>
      <SEOHead
        title="Commercial Electrical Systems Lebanon | Business Solar Energy"
        description="Professional commercial electrical systems and solar energy solutions in Lebanon. Business electrical design, energy efficiency, and reliable power for Lebanese businesses."
        keywords="commercial electrical systems Lebanon, business solar energy Lebanon, commercial solar Lebanon, business electrical design Lebanon, commercial electrical contractors Lebanon"
        canonical="https://ipower.com.lb/solutions/commercial"
        ogImage="/assets/images/og-commercial.jpg"
        structuredData={[
          serviceSchema(
            'Commercial Electrical Systems',
            'Professional commercial electrical systems and solar energy solutions for Lebanese businesses. Business electrical design, energy efficiency, and reliable power systems.',
            'Commercial Electrical Engineering'
          ),
          breadcrumbSchema(breadcrumbItems)
        ]}
      />
      <Analytics />
      <main className="min-h-screen bg-white">
        <CommercialHero />
        <div id="values">
          <CommercialValues />
        </div>
        <CommercialCaseStudy />
        <CommercialMonitoring />
        <CommercialTestimonial />
        <CommercialCTA />
        <Footer />
      </main>
    </>
  );
}
