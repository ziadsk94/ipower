import AboutHero from '../components/AboutHero';
import OurStory from '../components/OurStory';
import OurExpertise from '../components/OurExpertise';
import OurCommitment from '../components/OurCommitment';
import OurProjects from '../components/OurProjects';
import OurClients from '../components/OurClients';
import MeetTeam from '../components/MeetTeam';
import QualitySafety from '../components/QualitySafety';
import AboutCTA from '../components/AboutCTA';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { Analytics } from '../components/Analytics';
import { organizationSchema, breadcrumbSchema, faqSchema } from '../lib/structuredData';

export const metadata = {
  title: 'About iPower - Electrical Engineering Company Lebanon',
  description: 'Learn about iPower, Lebanon\'s leading electrical engineering company since 2011. Expert team, advanced technology, and commitment to sustainable energy solutions.',
  keywords: 'about iPower Lebanon, electrical engineering company Lebanon, iPower team Lebanon, electrical engineering expertise Lebanon, renewable energy company Lebanon',
  openGraph: {
    title: 'About iPower - Electrical Engineering Company Lebanon',
    description: 'Learn about iPower, Lebanon\'s leading electrical engineering company since 2011. Expert team, advanced technology, and commitment to sustainable energy solutions.',
    images: ['/assets/images/og-about.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://ipower.com.lb/about',
  },
};

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://ipower.com.lb' },
    { name: 'About', url: 'https://ipower.com.lb/about' }
  ];

  const faqData = [
    {
      question: "When was iPower founded and what is the company's mission?",
      answer: "iPower was founded in 2011 with the mission to engineer energy independence for Lebanon. We specialize in electrical engineering, solar energy systems, and industrial automation solutions."
    },
    {
      question: "What makes iPower different from other electrical engineering companies in Lebanon?",
      answer: "iPower combines 14+ years of experience with cutting-edge technology, local expertise, and a commitment to sustainable energy solutions. We serve residential, commercial, and industrial clients across Lebanon."
    },
    {
      question: "What certifications and standards does iPower maintain?",
      answer: "iPower maintains ISO 9001 quality management certification, CE marking compliance, UL listed products, and IEC standards. We ensure 100% safety record and 24/7 support availability."
    }
  ];

  return (
    <>
      <SEOHead
        title="About iPower - Electrical Engineering Company Lebanon"
        description="Learn about iPower, Lebanon's leading electrical engineering company since 2011. Expert team, advanced technology, and commitment to sustainable energy solutions."
        keywords="about iPower Lebanon, electrical engineering company Lebanon, iPower team Lebanon, electrical engineering expertise Lebanon, renewable energy company Lebanon"
        canonical="https://ipower.com.lb/about"
        ogImage="/assets/images/og-about.jpg"
        structuredData={[
          organizationSchema,
          breadcrumbSchema(breadcrumbItems),
          faqSchema(faqData)
        ]}
      />
      <Analytics />
      <main className="min-h-screen">
        <AboutHero />
        <OurStory />
        <OurExpertise />
        <div id="our-commitment">
          <OurCommitment />
        </div>
        <OurProjects />
        <OurClients />
        <MeetTeam />
        <QualitySafety />
        <AboutCTA />
        <Footer />
      </main>
    </>
  );
}
