export default function LocationSection1() {
  return (
    <>
      <div className="border border-outline-variant bg-surface-container-lowest p-space-xl md:p-16 flex flex-col gap-10">

        <div className="max-w-2xl border-l-2 border-primary pl-6 flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface">
            Visit Us in Batroun
          </h1>
          <p className="text-lg md:text-xl text-secondary leading-relaxed">
            We are located in Batroun. Use the map below to find your way to our restaurant.
          </p>
        </div>

        <div className="w-full border border-outline-variant bg-surface-container-low overflow-hidden relative">
          <div className="w-full h-[520px]">
            <iframe
              allowFullScreen
              className="w-full h-full border-0 filter grayscale contrast-125 opacity-95"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26398.974442111516!2d35.651717282855524!3d34.25368541814143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f50a8b948cfbb%3A0xa193d5be7fa61ee7!2sBatroun%2C%20Lebanon!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              title="Location Map"
            >
            </iframe>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-outline-variant">
          <div className="flex items-center gap-2">
            <span className="text-xs tracking-[0.2em] text-secondary uppercase">
              Batroun, Lebanon
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
