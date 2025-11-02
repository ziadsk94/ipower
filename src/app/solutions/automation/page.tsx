import AutomationHero from '../../components/AutomationHero';
import AutomationServices from '../../components/AutomationServices';
import AutomationCTA from '../../components/AutomationCTA';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import { Analytics } from '../../components/Analytics';
import { serviceSchema, breadcrumbSchema } from '../../lib/structuredData';

export const metadata = {
  title: 'Automation Solutions Lebanon | Power & Automation Control',
  description: 'Smart automation systems for intelligent control and monitoring of electrical infrastructure in Lebanon. Automated doors, biometric systems, lighting control, and more.',
  keywords: 'automation solutions Lebanon, power control systems Lebanon, smart home automation Lebanon, biometric entry systems Lebanon, automated lighting Lebanon',
  openGraph: {
    title: 'Automation Solutions Lebanon | Power & Automation Control',
    description: 'Smart automation systems for intelligent control and monitoring of electrical infrastructure in Lebanon. Automated doors, biometric systems, lighting control, and more.',
    images: ['/assets/images/og-automation.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://ipower.com.lb/solutions/automation',
  },
};

export default function AutomationPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://ipower.com.lb' },
    { name: 'Solutions', url: 'https://ipower.com.lb/solutions' },
    { name: 'Automation', url: 'https://ipower.com.lb/solutions/automation' }
  ];

  return (
    <>
      <SEOHead
        title="Automation Solutions Lebanon | Power & Automation Control"
        description="Smart automation systems for intelligent control and monitoring of electrical infrastructure in Lebanon. Automated doors, biometric systems, lighting control, and more."
        keywords="automation solutions Lebanon, power control systems Lebanon, smart home automation Lebanon, biometric entry systems Lebanon, automated lighting Lebanon"
        canonical="https://ipower.com.lb/solutions/automation"
        ogImage="/assets/images/og-automation.jpg"
        structuredData={[
          serviceSchema(
            'Automation Solutions',
            'Smart automation systems for intelligent control and monitoring of electrical infrastructure. Automated doors, biometric entry systems, lighting control, watering systems, and more.',
            'Automation & Control Systems'
          ),
          breadcrumbSchema(breadcrumbItems)
        ]}
      />
      <Analytics />
      <main className="min-h-screen bg-white">
        <AutomationHero />
        <AutomationServices />
        <AutomationCTA />
        <Footer />
      </main>
    </>
  );
}

