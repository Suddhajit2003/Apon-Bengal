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
          Apon Bangla is an initiative to expand its engagement with the state’s diaspora across the globe.
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
                className={`group relative ${isMission ? 'bg-gradient-to-br from-sky-400 to-sky-600' : 'bg-white'} rounded-2xl shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-105`}
              >
                {/* Animated Border Effect */}
                <div className={`absolute inset-0 rounded-2xl ${isMission ? 'border-4 border-white/30 group-hover:border-white' : 'border-4 border-transparent group-hover:border-sky-500'} transition-all duration-500`}></div>
                
                {/* Illustration Background */}
                <div className={`absolute bottom-0 right-0 text-[120px] ${isMission ? 'opacity-20' : 'opacity-10'} transition-opacity duration-500 leading-none`}>
                  {card.illustration}
                </div>

                {/* Content */}
                <div className="relative px-16 py-20 min-h-[250px] flex flex-col items-center justify-center text-center">
                  {/* Title */}
                  <h3 className={`text-4xl font-bold ${isMission ? 'text-gray-900' : 'text-gray-800'}`}>
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
