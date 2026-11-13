"use client";

import { useState, FormEvent } from 'react';

type FormData = {
  name: string;
  date: string;
  time: string;
  party_size: string;
  special_requests: string;
};

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ReservationSection2() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    date: '',
    time: '',
    party_size: '',
    special_requests: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [whatsappLink, setWhatsappLink] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    setWhatsappLink('');

    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.ok) {
        setStatus('success');
        setFormData({ name: '', date: '', time: '', party_size: '', special_requests: '' });
        if (data.whatsapp) {
          setWhatsappLink(data.whatsapp);
        }
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        if (data.whatsapp) {
          setWhatsappLink(data.whatsapp);
        }
      }
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 border border-outline-variant bg-surface-container-lowest">

        <section className="lg:col-span-7 p-space-lg md:p-space-xl border-b lg:border-b-0 lg:border-r border-outline-variant flex flex-col justify-between" id="reservation-form">
          <div>
            <form onSubmit={handleSubmit} className="space-y-space-lg" noValidate>

              <div className="space-y-space-xs">
                <label className="block text-lg font-bold tracking-tight text-on-surface" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full bg-surface-container-low border border-outline focus:border-primary focus:ring-0 text-on-surface text-lg px-space-md py-space-sm transition-colors rounded-none placeholder:text-secondary"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">

                <div className="space-y-space-xs">
                  <label className="block text-lg font-bold tracking-tight text-on-surface" htmlFor="date">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-surface-container-low border border-outline focus:border-primary focus:ring-0 text-on-surface text-lg px-space-md py-space-sm transition-colors rounded-none"
                      id="date"
                      name="date"
                      required
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div className="space-y-space-xs">
                  <label className="block text-lg font-bold tracking-tight text-on-surface" htmlFor="time">
                    Time
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-surface-container-low border border-outline focus:border-primary focus:ring-0 text-on-surface text-lg px-space-md py-space-sm transition-colors rounded-none"
                      id="time"
                      name="time"
                      required
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-space-xs">
                <label className="block text-lg font-bold tracking-tight text-on-surface" htmlFor="party-size">
                  Party Size
                </label>
                <input
                  className="w-full bg-surface-container-low border border-outline focus:border-primary focus:ring-0 text-on-surface text-lg px-space-md py-space-sm transition-colors rounded-none placeholder:text-secondary"
                  id="party-size"
                  min="1"
                  name="party_size"
                  placeholder="Number of guests"
                  required
                  type="number"
                  value={formData.party_size}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                />
              </div>

              <div className="space-y-space-xs">
                <label className="block text-lg font-bold tracking-tight text-on-surface" htmlFor="special-requests">
                  Special Requests
                </label>
                <textarea
                  className="w-full bg-surface-container-low border border-outline focus:border-primary focus:ring-0 text-on-surface text-lg px-space-md py-space-sm transition-colors rounded-none placeholder:text-secondary resize-none"
                  id="special-requests"
                  name="special_requests"
                  placeholder="Any special requests or dietary requirements"
                  rows="4"
                  value={formData.special_requests}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                ></textarea>
              </div>

              <div className="pt-space-sm">
                <button
                  className="w-full bg-inverse-surface text-surface py-space-md uppercase font-bold text-lg tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-150 rounded-none border border-inverse-surface hover:border-primary active:translate-y-px disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Submit Request'}
                </button>
              </div>

              {status === 'success' && (
                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-none">
                    <p className="text-lg">Thank you! Your reservation request has been sent. We will confirm your booking shortly.</p>
                  </div>
                  {whatsappLink && (
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-lg font-bold uppercase tracking-widest hover:bg-green-700 transition-colors rounded-none"
                    >
                      Send it on WhatsApp too
                    </a>
                  )}
                </div>
              )}

              {status === 'error' && (
                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-none">
                    <p className="text-lg">{errorMessage}</p>
                  </div>
                  {whatsappLink && (
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-lg font-bold uppercase tracking-widest hover:bg-green-700 transition-colors rounded-none"
                    >
                      Send it on WhatsApp too
                    </a>
                  )}
                </div>
              )}
            </form>
          </div>

          <div className="mt-space-xl pt-space-md border-t border-outline-variant flex items-center justify-between">
            <span className="text-xs tracking-[0.2em] text-secondary uppercase">TEST Claude Photos</span>
            <span className="text-xs tracking-[0.2em] text-secondary uppercase">Batroun, Lebanon</span>
          </div>
        </section>

        <section className="lg:col-span-5 bg-surface-container-low flex flex-col justify-between">

          <div className="relative w-full h-72 sm:h-96 lg:h-[420px] overflow-hidden border-b border-outline-variant">
            <img className="w-full h-full object-cover object-center grayscale contrast-125" src="/images/photo-1.jpg" alt="Our restaurant interior" loading="lazy" />
          </div>

          <div className="p-space-lg md:p-space-xl flex flex-col justify-between flex-grow">
            <div>
              <span className="text-xs tracking-[0.2em] text-primary uppercase">Batroun</span>
              <h2 className="text-2xl font-bold tracking-tight text-on-surface mb-space-sm">Our Location</h2>
              <p className="text-lg text-secondary">
                We are located in Batroun, offering a warm and welcoming atmosphere for your dining experience.
              </p>
            </div>
            <div className="mt-space-lg pt-space-md border-t border-outline-variant flex flex-col gap-space-xs text-xs tracking-[0.2em] text-secondary uppercase">
              <div>Batroun, Lebanon</div>
              <div>Visit us in Batroun for a genuine dining experience</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
