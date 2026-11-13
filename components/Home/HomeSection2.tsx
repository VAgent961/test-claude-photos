export default function HomeSection2() {
  return (
    <>
      <section className="py-20 md:py-28 bg-surface-container-lowest" id="about">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface">
                Our Kitchen
              </h2>
              <p className="text-lg md:text-xl text-secondary leading-relaxed">
                We believe in simple, honest food prepared with local ingredients. Our restaurant provides a welcoming space for friends and family to gather and enjoy the traditions of Lebanese cooking.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <img className="w-full h-full object-cover" src="/images/photo-2.jpg" alt="The restaurant entrance and dining area in Batroun" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
