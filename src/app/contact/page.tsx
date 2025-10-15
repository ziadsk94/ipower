import ContactHero from '../components/ContactHero';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import EmbeddedMap from '../components/EmbeddedMap';
import QuickContact from '../components/QuickContact';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { Analytics } from '../components/Analytics';
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '../lib/structuredData';

export const metadata = {
  title: 'Contact iPower - Electrical Engineering Lebanon | Get Quote',
  description: 'Contact iPower for electrical engineering and solar energy solutions in Lebanon. Get free consultation, quotes, and expert advice for your electrical projects.',
  keywords: 'contact iPower Lebanon, electrical engineering consultation Lebanon, solar energy quote Lebanon, electrical contractors Lebanon, get electrical quote Lebanon',
  openGraph: {
    title: 'Contact iPower - Electrical Engineering Lebanon | Get Quote',
    description: 'Contact iPower for electrical engineering and solar energy solutions in Lebanon. Get free consultation, quotes, and expert advice for your electrical projects.',
    images: ['/assets/images/og-contact.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://ipower.com.lb/contact',
  },
};

export default function ContactPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://ipower.com.lb' },
    { name: 'Contact', url: 'https://ipower.com.lb/contact' }
  ];

  const faqData = [
    {
      question: "How can I get a quote for electrical engineering services in Lebanon?",
      answer: "Contact iPower through our website form, call +961-70-123-456, or email info@ipower.com.lb. We provide free consultations and detailed quotes for all electrical engineering projects."
    },
    {
      question: "What are iPower's business hours in Lebanon?",
      answer: "iPower operates Monday to Saturday, 8:00 AM to 5:00 PM Lebanon time. We provide 24/7 support for emergency electrical services and ongoing project support."
    },
    {
      question: "Where is iPower located in Lebanon?",
      answer: "iPower is located at Abbaseye Main Street, South Lebanon. We serve clients across Lebanon including Beirut, Mount Lebanon, South Lebanon, and other regions."
    }
  ];

  return (
    <>
      <SEOHead
        title="Contact iPower - Electrical Engineering Lebanon | Get Quote"
        description="Contact iPower for electrical engineering and solar energy solutions in Lebanon. Get free consultation, quotes, and expert advice for your electrical projects."
        keywords="contact iPower Lebanon, electrical engineering consultation Lebanon, solar energy quote Lebanon, electrical contractors Lebanon, get electrical quote Lebanon"
        canonical="https://ipower.com.lb/contact"
        ogImage="/assets/images/og-contact.jpg"
        structuredData={[
          localBusinessSchema,
          breadcrumbSchema(breadcrumbItems),
          faqSchema(faqData)
        ]}
      />
      <Analytics />
      <main className="min-h-screen">
        <ContactHero />
        <div id="contact-form">
          <ContactForm />
        </div>
        <ContactInfo />
        <EmbeddedMap />
        <QuickContact />
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}
