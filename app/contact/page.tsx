"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navigation />
      
      <main className="pt-40 pb-20">
        <section className="px-8 md:px-12 mb-24">
          <div className="max-w-7xl mx-auto text-center">
            <span className="font-label text-primary font-bold tracking-[0.3em] text-[10px] mb-6 block uppercase">
              Contact Us
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8 text-white">
              Begin Your <span className="italic font-normal">Journey</span>
            </h1>
          </div>
        </section>

        <section className="px-8 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 flex flex-col gap-16">
              <div>
                <h2 className="font-headline text-2xl font-bold italic text-white mb-10">Coordinates</h2>
                <div className="space-y-10">
                    <div className="flex items-start gap-6">
                      <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="font-label text-[10px] tracking-[0.2em] text-on-surface/40 uppercase font-bold mb-2">
                          The Location
                        </p>
                        <p className="font-body text-white leading-relaxed">
                          8855 Thornton Road Suite B
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <p className="font-label text-[10px] tracking-[0.2em] text-on-surface/40 uppercase font-bold mb-2">
                          Phone Number
                        </p>
                        <p className="font-body text-white">209 482-1352</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                      <div>
                        <p className="font-label text-[10px] tracking-[0.2em] text-on-surface/40 uppercase font-bold mb-2">
                          Email
                        </p>
                        <p className="font-body text-white">Cama5638@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>

              <div>
                <h2 className="font-headline text-2xl font-bold italic text-white mb-10">Hours</h2>
                <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-label text-[10px] tracking-[0.2em] text-on-surface/40 uppercase font-bold mb-2">
                          Monday - Friday
                        </p>
                        <p className="font-body text-white text-lg">5:30 PM - 8:30 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-label text-[10px] tracking-[0.2em] text-on-surface/40 uppercase font-bold mb-2">
                          Saturday
                        </p>
                        <p className="font-body text-white text-lg">9:00 AM - 12:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

              <div className="aspect-[4/3] w-full relative overflow-hidden border border-outline/20 lg:hidden">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=8855+Thornton+Rd+suite+b,+Stockton,+CA+95209&zoom=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0, }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                ></iframe>
                <div className="absolute bottom-6 left-6 premium-glass px-5 py-2.5 border border-white/10 pointer-events-none">
                  <p className="font-label text-[9px] tracking-[0.2em] text-white uppercase font-bold">
                    ESTABLISHMENT HQ
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="relative border border-outline/30 p-8 md:p-12 bg-surface/30 rounded-sm">
                <h2 className="font-headline text-2xl font-bold italic text-white mb-12">Inquiry</h2>
                <form className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative">
                      <label htmlFor="Name" className="block font-label text-[10px] tracking-widest text-on-surface/50 mb-3 uppercase font-semibold">
                        First and Last Name
                      </label>
                      <input
                        id="Name"
                        className="w-full bg-transparent subtle-border border-0 focus:border-b-2 focus:border-primary focus:ring-0 text-white py-4 px-0 font-body placeholder:text-surface-variant transition-all outline-none"
                        placeholder="Your Name"
                        type="text"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="Email" className="block font-label text-[10px] tracking-widest text-on-surface/50 mb-3 uppercase font-semibold">
                        Email Address
                      </label>
                      <input
                        id="Email"
                        className="w-full bg-transparent subtle-border border-0 focus:border-b-2 focus:border-primary focus:ring-0 text-white py-4 px-0 font-body placeholder:text-surface-variant transition-all outline-none"
                        placeholder="email@domain.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label htmlFor="ClassSelect" className="block font-label text-[10px] tracking-widest text-on-surface/50 mb-3 uppercase font-semibold">
                      Focus of Interest
                    </label>
                    <select id="ClassSelect" className="w-full bg-transparent subtle-border border-0 focus:border-b-2 focus:border-primary focus:ring-0 text-white py-4 px-0 font-body transition-all appearance-none cursor-pointer">
                      <option className="bg-surface text-white">BRAZILIAN JIU-JITSU</option>
                      <option className="bg-surface text-white">MUAY THAI</option>
                      <option className="bg-surface text-white">TAEKWON DO</option>
                      <option className="bg-surface text-white">PRIVATE INSTRUCTION</option>
                    </select>
                  </div>
                  <button
                    className="bg-primary text-white py-5 px-12 font-headline font-bold italic tracking-tight text-sm hover:brightness-110 transition-all active:scale-[0.98]"
                    type="submit"
                  >
                    SUBMIT INQUIRY
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Full-width Google Maps for desktop */}
          <div className="hidden lg:block max-w-7xl mx-auto mt-16">
            <div className="aspect-[21/9] w-full relative overflow-hidden border border-outline/20">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=8855+Thornton+Rd+suite+b,+Stockton,+CA+95209&zoom=15"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) brightness(0.75)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
              ></iframe>
              <div className="absolute bottom-6 left-6 premium-glass px-5 py-2.5 border border-white/10 pointer-events-none">
                <p className="font-label text-[9px] tracking-[0.2em] text-white uppercase font-bold">
                  ESTABLISHMENT HQ
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
