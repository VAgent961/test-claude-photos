import Link from 'next/link';

export default function MenuHome() {
  return (
    <>
      <section className="relative w-full border-b border-outline-variant" id="home">
        <div className="max-w-7xl mx-auto px-margin py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">

            <div className="md:col-span-5 flex flex-col justify-between py-6 pr-4 border-b md:border-b-0 md:border-r border-outline-variant">
              <div className="space-y-6">
                <span className="text-xs tracking-[0.2em] text-secondary uppercase">
                  TEST Claude Photos
                </span>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-on-surface uppercase">
                  Our Menu
                </h1>
              </div>
              <div className="pt-8 space-y-4">
                <div className="w-12 h-px bg-primary"></div>
                <p className="text-lg md:text-xl text-secondary max-w-sm">
                  Explore our selection of authentic Lebanese dishes prepared with fresh local ingredients.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 relative min-h-[460px] bg-surface-container-low overflow-hidden">
              <img className="w-full h-full object-cover grayscale contrast-125" src="/images/photo-2.jpg" alt="Our restaurant interior showcasing authentic Lebanese dishes" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
