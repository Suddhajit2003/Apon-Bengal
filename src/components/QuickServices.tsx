import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FileText,
  CreditCard,
  Home,
  GraduationCap,
  Heart,
  Briefcase,
  Users,
  Car,
  Lightbulb,
  Building,
  Scale,
  Leaf
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: FileText,
    title: 'জন্ম/মৃত্যু সনদ',
    titleEn: 'Birth/Death Certificate',
    description: 'জন্ম ও মৃত্যু নিবন্ধন সেবা',
    color: 'from-sky-400 to-sky-600',
    illustration: '📋'
  },
  {
    icon: CreditCard,
    title: 'রেশন কার্ড',
    titleEn: 'Ration Card',
    description: 'রেশন কার্ড আবেদন ও পুনর্নবীকরণ',
    color: 'from-sky-500 to-sky-700',
    illustration: '🎫'
  },
  {
    icon: Home,
    title: 'সম্পত্তি নথি',
    titleEn: 'Property Records',
    description: 'ভূমি ও সম্পত্তি নথি',
    color: 'from-sky-400 to-sky-600',
    illustration: '🏠'
  },
  {
    icon: GraduationCap,
    title: 'শিক্ষা সেবা',
    titleEn: 'Education Services',
    description: 'শিক্ষা সংক্রান্ত সমস্ত সেবা',
    color: 'from-sky-500 to-sky-700',
    illustration: '🎓'
  },
  {
    icon: Heart,
    title: 'স্বাস্থ্য সেবা',
    titleEn: 'Healthcare',
    description: 'স্বাস্থ্য ও চিকিৎসা সেবা',
    color: 'from-sky-400 to-sky-600',
    illustration: '🏥'
  },
  {
    icon: Briefcase,
    title: 'ব্যবসায়িক লাইসেন্স',
    titleEn: 'Business License',
    description: 'ব্যবসা শুরু ও লাইসেন্স',
    color: 'from-sky-500 to-sky-700',
    illustration: '💼'
  },
  {
    icon: Users,
    title: 'সামাজিক কল্যাণ',
    titleEn: 'Social Welfare',
    description: 'পেনশন ও সামাজিক নিরাপত্তা',
    color: 'from-sky-400 to-sky-600',
    illustration: '👥'
  },
  {
    icon: Car,
    title: 'যানবাহন সেবা',
    titleEn: 'Vehicle Services',
    description: 'ড্রাইভিং লাইসেন্স ও গাড়ি নিবন্ধন',
    color: 'from-sky-500 to-sky-700',
    illustration: '🚗'
  },
  {
    icon: Lightbulb,
    title: 'বিদ্যুৎ সংযোগ',
    titleEn: 'Electricity',
    description: 'নতুন সংযোগ ও বিল পেমেন্ট',
    color: 'from-sky-400 to-sky-600',
    illustration: '💡'
  },
  {
    icon: Building,
    title: 'পৌর সেবা',
    titleEn: 'Municipal Services',
    description: 'পৌরসভা সংক্রান্ত সেবা',
    color: 'from-sky-500 to-sky-700',
    illustration: '🏛️'
  },
  {
    icon: Scale,
    title: 'আইনি সহায়তা',
    titleEn: 'Legal Aid',
    description: 'আইনি পরামর্শ ও সহায়তা',
    color: 'from-sky-400 to-sky-600',
    illustration: '⚖️'
  },
  {
    icon: Leaf,
    title: 'পরিবেশ সেবা',
    titleEn: 'Environment',
    description: 'পরিবেশ সংরক্ষণ সেবা',
    color: 'from-sky-500 to-sky-700',
    illustration: '🌿'
  }
];

export default function QuickServices() {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-sky-50" id="services">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-6xl">📱</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-sky-600">
            জনপ্রিয় সেবাসমূহ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Popular Services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Illustration Background */}
                <div className="absolute top-0 right-0 text-8xl opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  {service.illustration}
                </div>

                {/* Content */}
                <div className="relative p-6">
                  {/* Icon */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center group-hover:bg-white transition-all duration-300">
                      <Icon className="w-7 h-7 text-white group-hover:text-sky-600" />
                    </div>
                    <span className="text-3xl opacity-70 group-hover:scale-110 transition-transform duration-300">
                      {service.illustration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-800 group-hover:text-white transition-colors duration-300 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-sky-600 group-hover:text-sky-100 transition-colors duration-300 mb-3">
                    {service.titleEn}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center text-sky-600 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm mr-2">আবেদন করুন</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-4 rounded-xl hover:from-sky-600 hover:to-sky-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            সকল সেবা দেখুন
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
