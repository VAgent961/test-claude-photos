import LocationSection1 from '@/components/Location/LocationSection1';

export const metadata = {
  title: 'Location & Hours | TEST Claude Photos',
  description: 'Find us in Batroun. Get directions and view our opening hours.',
  keywords: 'Batroun location, restaurants in Batroun'
};

export default function LocationPage() {
  return (
    <div className="bg-background text-on-surface font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      <LocationSection1 />
    </div>
  );
}
