import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, FileCheck, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    icon: Users,
    number: 5000000,
    suffix: '+',
    title: 'নিবন্ধিত নাগরিক',
    titleEn: 'Registered Citizens',
    color: 'from-sky-400 to-sky-600',
    illustration: '👥'
  },
  {
    icon: FileCheck,
    number: 12000000,
    suffix: '+',
    title: 'সেবা প্রদান',
    titleEn: 'Services Delivered',
    color: 'from-sky-500 to-sky-700',
    illustration: '✅'
  },
  {
    icon: Award,
    number: 150,
    suffix: '+',
    title: 'ডিজিটাল সেবা',
    titleEn: 'Digital Services',
    color: 'from-sky-400 to-sky-600',
    illustration: '🏆'
  },
  {
    icon: TrendingUp,
    number: 98,
    suffix: '%',
    title: 'সন্তুষ্টির হার',
    titleEn: 'Satisfaction Rate',
    color: 'from-sky-500 to-sky-700',
    illustration: '📈'
  }
];

export default function StatsCounter() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate counters
            countersRef.current.forEach((counter, index) => {
              if (counter) {
                const target = achievements[index].number;
                gsap.to(counter, {
                  innerText: target,
                  duration: 2,
                  snap: { innerText: 1 },
                  ease: 'power2.out',
                  onUpdate: function() {
                    counter.innerText = Math.ceil(parseFloat(counter.innerText)).toLocaleString('en-IN');
                  }
                });
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-sky-500 to-sky-700 relative overflow-hidden" id="achievements">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-6xl">🎯</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            আমাদের অর্জন
          </h2>
          <p className="text-xl text-sky-100">
            Our Achievements
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Illustration Background */}
                <div className="absolute top-4 right-4 text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  {achievement.illustration}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-xl items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Counter */}
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span
                      ref={(el) => { countersRef.current[index] = el; }}
                      className="text-4xl md:text-5xl text-white"
                    >
                      0
                    </span>
                    <span className="text-3xl md:text-4xl text-white ml-1">
                      {achievement.suffix}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-sky-100">
                  {achievement.titleEn}
                </p>

                {/* Progress Bar */}
                <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${achievement.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-6">
            <p className="text-white text-lg">
              🏅 <span className="mx-2">|</span> National Award for Digital Excellence 2024 <span className="mx-2">|</span> 
              <span className="text-sky-200">জাতীয় ডিজিটাল উৎকর্ষতা পুরস্কার</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
