import Link from 'next/link';

export default function MenuLocation() {
  return (
    <>
      <section className="w-full border-t border-outline-variant bg-surface-container-low py-space-xl" id="location">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface uppercase">
                Location
              </h2>
              <p className="text-lg md:text-xl text-secondary max-w-md">
                Batroun, Lebanon
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-8 space-y-6" id="menu-reservation-cta">
              <h3 className="text-xl font-bold tracking-tight text-on-surface uppercase">
                Reservation
              </h3>
              <p className="text-lg text-secondary">
                Please submit your request below and we will confirm your booking.
              </p>
              <div>
                <Link className="w-full bg-primary text-white hover:bg-opacity-90 font-bold text-lg uppercase tracking-widest transition-colors duration-150 rounded-none text-center py-4" href="/reservation">
                  Book a Table
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
