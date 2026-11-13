import ReservationSection1 from '@/components/Reservation/ReservationSection1';
import ReservationSection2 from '@/components/Reservation/ReservationSection2';

export const metadata = {
  title: 'Book a Table | TEST Claude Photos',
  description: 'Request a table reservation at TEST Claude Photos in Batroun. We look forward to welcoming you.',
  keywords: 'Table reservation Batroun, book a table'
};

export default function ReservationPage() {
  return (
    <div className="bg-surface text-on-surface min-h-full selection:bg-primary-container selection:text-on-primary-container">
      <ReservationSection1 />
      <ReservationSection2 />
    </div>
  );
}
