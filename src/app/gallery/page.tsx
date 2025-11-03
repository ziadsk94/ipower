import GalleryPage from '../components/GalleryPage';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { Analytics } from '../components/Analytics';
import { breadcrumbSchema } from '../lib/structuredData';

export const metadata = {
  title: 'Gallery | iPower Electrical Engineering Projects',
  description: 'Explore iPower\'s gallery of electrical engineering projects, installations, and solutions across Lebanon. View photos and videos of our work.',
  keywords: 'iPower gallery Lebanon, electrical engineering gallery, solar projects gallery Lebanon, electrical installations photos',
  openGraph: {
    title: 'Gallery | iPower Electrical Engineering Projects',
    description: 'Explore iPower\'s gallery of electrical engineering projects, installations, and solutions across Lebanon.',
    images: ['/assets/images/og-gallery.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://ipower.com.lb/gallery',
  },
};

export default function Gallery() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://ipower.com.lb' },
    { name: 'Gallery', url: 'https://ipower.com.lb/gallery' }
  ];

  return (
    <>
      <SEOHead
        title="Gallery | iPower Electrical Engineering Projects"
        description="Explore iPower's gallery of electrical engineering projects, installations, and solutions across Lebanon. View photos and videos of our work."
        keywords="iPower gallery Lebanon, electrical engineering gallery, solar projects gallery Lebanon, electrical installations photos"
        canonical="https://ipower.com.lb/gallery"
        ogImage="/assets/images/og-gallery.jpg"
        structuredData={[
          breadcrumbSchema(breadcrumbItems)
        ]}
      />
      <Analytics />
      <main className="min-h-screen">
        <GalleryPage />
        <Footer />
      </main>
    </>
  );
}

