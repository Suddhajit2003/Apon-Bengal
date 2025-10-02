import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function VideoShowcase() {
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-sky-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-6xl">🎬</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-sky-600">
            আমাদের যাত্রা
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our Journey - ডিজিটাল বাংলার গল্প
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <div ref={contentRef} className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Video */}
              <video
                ref={videoRef}
                className="w-full h-auto"
                muted={isMuted}
                playsInline
                poster="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200"
              >
                <source src="https://res.cloudinary.com/dmpuonbwk/video/upload/v1759395979/videoplayback_hdbiz8.mp4" type="video/mp4" />
              </video>

              {/* Play/Pause Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={togglePlay}
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all transform hover:scale-110 shadow-2xl"
                >
                  {isPlaying ? (
                    <Pause className="w-10 h-10 text-sky-600" />
                  ) : (
                    <Play className="w-10 h-10 text-sky-600 ml-1" />
                  )}
                </button>
              </div>

              {/* Controls */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={toggleMute}
                  className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-sky-600" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-sky-600" />
                  )}
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-sky-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-600 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-8 left-8 right-8 bg-white rounded-2xl shadow-xl p-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl text-sky-600 mb-1">5M+</div>
                <div className="text-xs text-gray-600">নাগরিক</div>
              </div>
              <div className="text-center border-x border-gray-200">
                <div className="text-2xl text-sky-600 mb-1">150+</div>
                <div className="text-xs text-gray-600">সেবা</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-sky-600 mb-1">24/7</div>
                <div className="text-xs text-gray-600">সহায়তা</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8 space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl text-sky-600">
                ডিজিটাল পরিবর্তনের পথে পশ্চিমবঙ্গ
              </h3>
              <p className="text-lg text-gray-700">
                West Bengal's Digital Transformation Journey
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              আপন বাংলা প্ল্যাটফর্মের মাধ্যমে আমরা সরকারি সেবাকে আরও সহজ, স্বচ্ছ এবং দ্রুত করে তুলছি। 
              প্রযুক্তির সাহায্যে নাগরিকদের দোরগোড়ায় পৌঁছে দিচ্ছি সকল সরকারি সুবিধা।
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-sky-50 rounded-xl hover:bg-sky-100 transition-colors group">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h4 className="text-sky-600 mb-1">সহজ ও স্বচ্ছ সেবা</h4>
                  <p className="text-sm text-gray-600">সকল সরকারি সেবা এক প্ল্যাটফর্মে</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-sky-50 rounded-xl hover:bg-sky-100 transition-colors group">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h4 className="text-sky-600 mb-1">দ্রুত প্রক্রিয়াকরণ</h4>
                  <p className="text-sm text-gray-600">ডিজিটাল প্রক্রিয়ায় দ্রুত সেবা প্রদান</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-sky-50 rounded-xl hover:bg-sky-100 transition-colors group">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🔒</span>
                </div>
                <div>
                  <h4 className="text-sky-600 mb-1">নিরাপদ ও সুরক্ষিত</h4>
                  <p className="text-sm text-gray-600">আপনার তথ্যের সম্পূর্ণ নিরাপত্তা</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-4 rounded-xl hover:from-sky-600 hover:to-sky-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                আরও জানুন
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
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