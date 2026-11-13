import HomeSection1 from '@/components/Home/HomeSection1';
import HomeSection2 from '@/components/Home/HomeSection2';
import HomeSection3 from '@/components/Home/HomeSection3';

export const metadata = {
  title: 'TEST Claude Photos | Authentic Dining in Batroun',
  description: 'Experience authentic Lebanese cuisine at TEST Claude Photos in Batroun. Join us for a memorable meal. Book your table today.',
  keywords: 'restaurants in Batroun, Batroun dining, Lebanese food Batroun, where to eat in Batroun'
};

export default function HomePage() {
  return (
    <div className="bg-background text-on-surface antialiased selection:bg-primary-container selection:text-on-surface">
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
    </div>
  );
}
