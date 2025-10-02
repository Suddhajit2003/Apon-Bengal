import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Award, Users, Shield, Zap } from 'lucide-react';
import CmImage from '/src/Public/Cm.png';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Target,
    title: 'আমাদের লক্ষ্য',
    titleEn: 'Our Mission',
    description: 'সকল নাগরিকের জন্য সহজ, দ্রুত এবং স্বচ্ছ ডিজিটাল সেবা প্রদান করা',
    descriptionEn: 'To provide easy, fast and transparent digital services to all citizens',
    color: 'from-sky-400 to-sky-600'
  },
  {
    icon: Eye,
    title: 'আমাদের দৃষ্টিভঙ্গি',
    titleEn: 'Our Vision',
    description: 'ডিজিটাল পশ্চিমবঙ্গ গড়ে তোলা যেখানে প্রতিটি সেবা এক ক্লিকে পাওয়া যায়',
    descriptionEn: 'Building a Digital West Bengal where every service is just one click away',
    color: 'from-sky-500 to-sky-700'
  },
  {
    icon: Shield,
    title: 'বিশ্বস্ততা',
    titleEn: 'Trust',
    description: 'নাগরিকদের তথ্যের সম্পূর্ণ নিরাপত্তা এবং গোপনীয়তা নিশ্চিত করা',
    descriptionEn: 'Ensuring complete security and privacy of citizen data',
    color: 'from-sky-400 to-sky-600'
  }
];

const features = [
  {
    icon: Users,
    number: '150+',
    title: 'ডিজিটাল সেবা',
    titleEn: 'Digital Services'
  },
  {
    icon: Zap,
    number: '24/7',
    title: 'সেবা প্রদান',
    titleEn: 'Service Availability'
  },
  {
    icon: Award,
    number: '98%',
    title: 'সন্তুষ্টির হার',
    titleEn: 'Satisfaction Rate'
  }
];

export default function AboutUs() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate cards
    cardsRef.current.forEach((card, index) => {
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
          delay: index * 0.2,
          ease: 'power3.out'
        });
      }
    });

    // Animate image
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-6xl">📖</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-sky-600">
            আমাদের সম্পর্কে
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            About Apon Bangla - পশ্চিমবঙ্গ সরকারের ডিজিটাল উদ্যোগ
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-sky-50 to-white">
              <img
                src={CmImage}
                alt="মুখ্যমন্ত্রী মমতা বন্দ্যোপাধ্যায়"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 via-transparent to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl mb-2 font-semibold">
                  মমতা বন্দ্যোপাধ্যায়
                </h3>
                <p className="text-sky-100 text-lg">
                  মুখ্যমন্ত্রী, পশ্চিমবঙ্গ
                </p>
                <p className="text-sky-200 text-sm mt-1">
                  Hon'ble Chief Minister, West Bengal
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-sky-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl text-sky-600 mb-4">
                স্বাগতম আপন বাংলায়
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                আপন বা��লা হল পশ্চিমবঙ্গ সরকারের একটি অত্যাধুনিক ডিজিটাল প্ল্যাটফর্ম যা নাগরিকদের জন্য সরকারি সেবাকে আরও সহজ, দ্রুত এবং স্বচ্ছ করে তুলেছে।
              </p>
              <p className="text-gray-600 leading-relaxed">
                এই প্ল্যাটফর্মের মাধ্যমে আপনি বিভিন্ন সরকারি সেবা যেমন জন্ম সনদ, রেশন কার্ড, সম্পত্তি নথি, শিক্ষা সেবা এবং আরও অনেক কিছু একটি মাত্র জায়গায় পেতে পারেন।
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-4 bg-sky-50 rounded-xl hover:bg-sky-100 transition-all duration-300 group"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl text-sky-600 mb-1">{feature.number}</div>
                    <div className="text-xs text-gray-600">{feature.title}</div>
                    <div className="text-xs text-gray-500">{feature.titleEn}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group relative bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border-2 border-sky-100 hover:border-sky-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl text-sky-600 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-sky-500 mb-4">
                  {value.titleEn}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-2 leading-relaxed">
                  {value.description}
                </p>
                <p className="text-sm text-gray-500 italic">
                  {value.descriptionEn}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-sky-50 to-sky-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl text-sky-600 mb-4">
              আমাদের সাথে যুক্ত হন
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              পশ্চিমবঙ্গের ডিজিটাল পরিবর্তনের অংশীদার হন এবং সরকারি সেবা আরও সহজ করতে সাহায্য করুন
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-3 rounded-xl hover:from-sky-600 hover:to-sky-700 transition-all transform hover:scale-105 shadow-lg">
                যোগাযোগ করুন
              </button>
              <button className="bg-white text-sky-600 px-8 py-3 rounded-xl hover:bg-sky-50 transition-all transform hover:scale-105 shadow-lg border-2 border-sky-200">
                আরও জানুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
