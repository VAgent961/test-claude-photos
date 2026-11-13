export default function HomeSection3() {
  return (
    <>
      <section className="py-20 md:py-28 bg-surface" id="gallery">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-6">
              A Taste of Our Table
            </h2>
            <p className="text-lg md:text-xl text-secondary leading-relaxed">
              From fresh daily specials to classic dishes, explore the atmosphere and cuisine that define our restaurant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <img className="w-full h-full object-cover" src="/images/photo-2.jpg" alt="A selection of our signature dishes and restaurant atmosphere" loading="lazy" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <img className="w-full h-full object-cover" src="/images/photo-1.jpg" alt="Our restaurant interior showcasing authentic Lebanese dishes" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
