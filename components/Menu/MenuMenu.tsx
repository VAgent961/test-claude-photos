export default function MenuMenu() {
  return (
    <>
      <section className="py-20 md:py-28 bg-surface-container-lowest" id="menu-list">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-6">
              Our Dishes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight text-on-surface">
                  Starters
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-on-surface">Traditional Mezze</h4>
                      <p className="text-secondary">A selection of cold and hot appetizers featuring local vegetables and herbs.</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-on-surface">Mountain Herb Salad</h4>
                      <p className="text-secondary">Fresh greens, seasonal vegetables, and traditional dressing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight text-on-surface">
                  Mains
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-on-surface">Grilled Catch of the Day</h4>
                      <p className="text-secondary">Fresh fish from the Batroun coast, seasoned and grilled over an open flame.</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-on-surface">Slow-Cooked Lamb</h4>
                      <p className="text-secondary">Tender lamb served with seasonal accompaniments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
