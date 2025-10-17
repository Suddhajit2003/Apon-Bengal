import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AponBanglaImage from '/apan_bangla.jpeg';
import BlueCheckmark from '/blue theek.png';

gsap.registerPlugin(ScrollTrigger);

export default function VideoShowcase() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;

    if (content) {
      gsap.from(content, {
        scrollTrigger: {
          trigger: content,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-sky-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            {/* <span className="text-6xl">🎬</span> */}
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-sky-600">
          আপন বাংলা কার্ড
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Apon Bangla Card
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="lg:pr-8 space-y-6">
            <div className="space-y-4">
              {/* <h3 className="text-3xl text-sky-600">
                ডিজিটাল পরিবর্তনের পথে পশ্চিমবঙ্গ
              </h3> */}
              <p className="text-lg text-gray-700">
              For Apon Bangla Card following details are required:              </p>
            </div>
{/* 
            <p className="text-gray-600 leading-relaxed">
              আপন বাংলা প্ল্যাটফর্মের মাধ্যমে আমরা সরকারি সেবাকে আরও সহজ, স্বচ্ছ এবং দ্রুত করে তুলছি। 
              প্রযুক্তির সাহায্যে নাগরিকদের দোরগোড়ায় পৌঁছে দিচ্ছি সকল সরকারি সুবিধা।
            </p> */}

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-sky-50 rounded-xl hover:bg-sky-100 transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <img src={BlueCheckmark} alt="Checkmark" className="w-8 h-8" />
                </div>
                <div>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
Basic Information : First name, Middle name, Last name, Date of birth, Passport details, Current residing country, Mobile number, Email id, Whether you are NRI/PIO/OCIs.
</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-sky-50 rounded-xl hover:bg-sky-100 transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <img src={BlueCheckmark} alt="Checkmark" className="w-8 h-8" />
                </div>
                <div>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">Current Address/Residential/Work Address : Country and address details where you are presently residing
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-sky-50 rounded-xl hover:bg-sky-100 transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <img src={BlueCheckmark} alt="Checkmark" className="w-8 h-8" />
                </div>
                <div>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">Applicant's Address in West Bengal : Address, District, Police station, Pin code, Total family members residing in West Bengal, Contact person,Contact mobile number
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-sky-50 rounded-xl hover:bg-sky-100 transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <img src={BlueCheckmark} alt="Checkmark" className="w-8 h-8" />
                </div>
                <div>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">Required Documents : Photo, Signature, Passport, Address proof</a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-3 rounded-xl hover:from-sky-600 hover:to-sky-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Read more
              </button>
            </div>
          </div>

          {/* Image Display */}
          <div ref={contentRef} className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
              {/* Image */}
              <img
                src={AponBanglaImage}
                alt="আপন বাংলা ডিজিটাল কার্ড"
                className="w-full h-auto max-h-[800px] object-contain rounded-2xl"
              />

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-sky-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-600 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
            </div>

          </div>
        </div>

        {/* Bottom Decorative Wave */}
        {/* <div className="mt-20 relative">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-4xl mb-2">🏆</div>
              <p className="text-sm text-gray-600">National Award</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌟</div>
              <p className="text-sm text-gray-600">ISO Certified</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✅</div>
              <p className="text-sm text-gray-600">Verified Services</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <p className="text-sm text-gray-600">Fast Processing</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}