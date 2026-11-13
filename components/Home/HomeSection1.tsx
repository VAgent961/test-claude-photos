import Link from 'next/link';

export default function HomeSection1() {
  return (
    <>
      <section className="relative min-h-[100dvh] flex items-center justify-center border-b border-outline-variant">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/photo-1.jpg")' }}>
          <div className="absolute inset-0 bg-inverse-surface/65 backdrop-contrast-125"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-margin text-center text-surface py-space-xl">
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-space-md text-surface">
            Authentic Flavors in Batroun
          </h1>
          <p className="font-body text-lg md:text-xl text-secondary-fixed mb-space-xl max-w-2xl mx-auto tracking-normal">
            Visit us in Batroun for a genuine dining experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md">
            <Link className="w-full sm:w-auto inline-block bg-primary text-white hover:bg-opacity-90 font-bold text-lg uppercase tracking-widest px-8 py-4 border border-primary transition-all duration-150 active:scale-95 text-center" href="/reservation">
              Book a Table
            </Link>
            <Link className="w-full sm:w-auto inline-block bg-transparent text-surface hover:bg-surface hover:text-on-surface font-bold text-lg uppercase tracking-widest px-8 py-4 border border-surface transition-all duration-150 active:scale-95 text-center" href="/menu">
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
