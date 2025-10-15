import Hero from './components/Hero';
import WhySolar from './components/WhySolar';
import OurSolutions from './components/OurSolutions';
import ProjectsGallery from './components/ProjectsGallery';
import AboutiPower from './components/AboutiPower';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import { Analytics } from './components/Analytics';
import { organizationSchema, localBusinessSchema, faqSchema } from './lib/structuredData';

export const metadata = {
  title: 'iPower - Leading Electrical Engineering & Solar Energy Lebanon',
  description: 'Premier electrical engineering and solar energy solutions in Lebanon. Industrial automation, renewable energy systems, and smart electrical infrastructure for residential, commercial & industrial clients.',
  keywords: 'electrical engineering Lebanon, solar energy Lebanon, industrial automation, renewable energy solutions, electrical systems Lebanon, solar companies Lebanon, electrical contractors Lebanon',
  openGraph: {
    title: 'iPower - Leading Electrical Engineering & Solar Energy Lebanon',
    description: 'Premier electrical engineering and solar energy solutions in Lebanon. Industrial automation, renewable energy systems, and smart electrical infrastructure.',
    images: ['/assets/images/og-homepage.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iPower - Leading Electrical Engineering & Solar Energy Lebanon',
    description: 'Premier electrical engineering and solar energy solutions in Lebanon. Industrial automation, renewable energy systems, and smart electrical infrastructure.',
    images: ['/assets/images/og-homepage.jpg'],
  },
  alternates: {
    canonical: 'https://ipower.com.lb',
  },
};

export default function Home() {
  const faqData = [
    {
      question: "What electrical engineering services does iPower provide in Lebanon?",
      answer: "iPower provides comprehensive electrical engineering services including solar energy systems, industrial automation, power distribution, control systems, and electrical design for residential, commercial, and industrial clients across Lebanon."
    },
    {
      question: "How long has iPower been providing solar energy solutions in Lebanon?",
      answer: "iPower has been engineering energy independence since 2011, with over 14 years of experience in electrical engineering and solar energy solutions across Lebanon."
    },
    {
      question: "What types of solar energy systems does iPower install?",
      answer: "iPower installs residential solar systems, commercial solar solutions, industrial solar farms, hybrid systems, and grid-tie systems, all designed specifically for Lebanon's climate and energy needs."
    }
  ];

  return (
    <>
      <SEOHead
        title="iPower - Leading Electrical Engineering & Solar Energy Lebanon"
        description="Premier electrical engineering and solar energy solutions in Lebanon. Industrial automation, renewable energy systems, and smart electrical infrastructure for residential, commercial & industrial clients."
        keywords="electrical engineering Lebanon, solar energy Lebanon, industrial automation, renewable energy solutions, electrical systems Lebanon, solar companies Lebanon, electrical contractors Lebanon"
        canonical="https://ipower.com.lb"
        ogImage="/assets/images/og-homepage.jpg"
        structuredData={[
          organizationSchema,
          localBusinessSchema,
          faqSchema(faqData)
        ]}
      />
      <Analytics />
      <main className="min-h-screen bg-white">
        <Hero />
        <WhySolar />
        <OurSolutions />
        <ProjectsGallery />
        <AboutiPower />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
