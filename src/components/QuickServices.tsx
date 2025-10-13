import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: Target,
    titleEn: 'Our Mission',
    color: 'from-sky-400 to-sky-600',
    illustration: '🎯',
    path: '/mission'
  },
  {
    icon: Eye,
    titleEn: 'Our Vision',
    color: 'from-sky-500 to-sky-700',
    illustration: '👁️',
    path: '/vision'
  }
];

export default function QuickServices() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out'
        });
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-sky-50" id="mission-vision">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            {/* <span className="text-6xl">🌟</span> */}
          </div>
          {/* <h2 className="text-4xl md:text-5xl mb-4 text-sky-600">
            আমাদের লক্ষ্য
          </h2> */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Apon Bangla is an initiative to expand its engagement with the state's diaspora spread across the globe.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Two Big Rectangular Cards Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => {
            const isMission = index === 0;
            return (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                onClick={() => navigate(card.path)}
                className={`group relative ${isMission ? 'bg-gradient-to-br from-sky-400 to-sky-600' : 'bg-white'} rounded-2xl shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-105 overflow-hidden ${
                  isMission 
                    ? 'border-2 border-transparent group-hover:border-white' 
                    : 'border-2 border-gray-200 group-hover:border-sky-500'
                }`}
              >
                {/* Illustration Background */}
                <div className={`absolute bottom-0 right-0 text-[120px] transition-opacity duration-500 leading-none pointer-events-none ${
                  isMission 
                    ? 'opacity-20 group-hover:opacity-30' 
                    : 'opacity-10 group-hover:opacity-20'
                }`}>
                  {card.illustration}
                </div>

                {/* Content */}
                <div className="relative px-16 py-20 min-h-[250px] flex flex-col items-center justify-center text-center">
                  {/* Title */}
                  <h3 className={`text-4xl font-bold transition-colors duration-500 ${
                    isMission 
                      ? 'text-white' 
                      : 'text-sky-600'
                  }`}>
                    {card.titleEn}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
