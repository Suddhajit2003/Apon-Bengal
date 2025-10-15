import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock useScrollAnimation hook for demo
const useScrollAnimation = (threshold: number) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useState(null)[0];
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return { ref, isVisible };
};

const achievements = [
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    title: "নিবন্ধিত নাগরিক",
    titleEn: "Registered Citizens",
  },
  {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    title: "সেবা প্রদান",
    titleEn: "Services Delivered",
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    title: "ডিজিটাল সেবা",
    titleEn: "Digital Services",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    title: "সন্তুষ্টির হার",
    titleEn: "Satisfaction Rate",
  },
  {
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
    title: "পশ্চিমবঙ্গ সংস্কৃতি",
    titleEn: "West Bengal Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
    title: "ঐতিহ্যবাহী স্থান",
    titleEn: "Heritage Site",
  },
  {
    src: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    title: "ঐতিহ্যবাহী শিল্প",
    titleEn: "Traditional Art",
  },
];

export default function StatsCounter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [newsScrollPosition, setNewsScrollPosition] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.2);
  const slidesCount = achievements.length;

  // auto-play gallery
  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(
      () => setCurrentIndex((i) => (i + 1) % slidesCount),
      5000
    );
    return () => clearInterval(id);
  }, [isAutoPlaying, slidesCount]);

  // auto-scroll news section
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setNewsScrollPosition((prev) => {
        if (prev >= 1440) return 0;
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  const goNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((i) => (i + 1) % slidesCount);
  };
  const goPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((i) => (i - 1 + slidesCount) % slidesCount);
  };
  const goTo = (i: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(i);
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white overflow-hidden" id="achievements" ref={ref}>
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* News Scrolling Section */}
          <div className="mb-16 w-full overflow-hidden">
            <h3 className="text-4xl lg:text-5xl font-bold text-center mb-8" style={{ color: '#0ea5e9' }}>Buzz in bengal</h3>
            <br />
            <div className="relative w-full overflow-hidden bg-gradient-to-r from-white via-gray-50 to-white rounded-2xl shadow-lg py-8">
              <div 
                className="flex gap-8 px-4"
                style={{
                  transform: `translateX(-${newsScrollPosition}px)`,
                  willChange: 'transform',
                }}
              >
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-8">
                    <div className="flex-shrink-0" style={{ width: '320px', height: '280px' }}>
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full h-full flex flex-col relative">
                        <div className="relative h-32 overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1569971977492-344a4b1c709b?w=400&q=80"
                            alt="Durga Puja"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                          Festival
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-center">
                          <h4 className="font-bold text-lg text-gray-900 mb-2">Durga Puja Celebrations</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">Watch the vibrant festivities of the biggest festival in Bengal.</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0" style={{ width: '320px', height: '280px' }}>
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full h-full flex flex-col relative">
                        <div className="relative h-32 overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1563370644857-2782e31e1926?w=400&q=80"
                            alt="Tea Gardens"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                          Tourism
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-center">
                          <h4 className="font-bold text-lg text-gray-900 mb-2">Darjeeling Tea Gardens</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">A scenic journey through the lush green landscapes.</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0" style={{ width: '320px', height: '280px' }}>
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full h-full flex flex-col relative">
                        <div className="relative h-32 overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=400&q=80"
                            alt="Cultural Night"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute top-2 right-2 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                          Culture
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-center">
                          <h4 className="font-bold text-lg text-gray-900 mb-2">Cultural Night Highlights</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">Experience the rich traditions of Bengali performing arts.</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0" style={{ width: '320px', height: '280px' }}>
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full h-full flex flex-col relative">
                        <div className="relative h-32 overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1578926314433-e2789279f4aa?w=400&q=80"
                            alt="Artist"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute top-2 right-2 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                          Art
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-center">
                          <h4 className="font-bold text-lg text-gray-900 mb-2">Artist Spotlight</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">A conversation with a master craft artist.</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0" style={{ width: '320px', height: '280px' }}>
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full h-full flex flex-col relative">
                        <div className="relative h-32 overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80"
                            alt="Festival"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                          Heritage
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-center">
                          <h4 className="font-bold text-lg text-gray-900 mb-2">Traditional Festival</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">Celebrating the cultural heritage of West Bengal.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2
              className={`text-4xl lg:text-5xl font-bold mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ color: '#0ea5e9' }}
            >
              Gallery
            </h2>
            {/* <p className="text-2xl lg:text-3xl font-semibold" style={{ color: '#64748b' }}>
              Bengal throughout the year
            </p> */}
          </div>

          <div className="max-w-6xl mx-auto">
            <div className={`relative transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <div className="relative h-[500px] lg:h-[600px]" style={{ perspective: '1000px' }}>
                {achievements.map((img, idx) => {
                  const offset = idx - currentIndex;
                  const isActive = idx === currentIndex;
                  const isPrev =
                    offset === -1 ||
                    (currentIndex === 0 && idx === slidesCount - 1);
                  const isNext =
                    offset === 1 ||
                    (currentIndex === slidesCount - 1 && idx === 0);

                  return (
                    <div
                      key={idx}
                      className="absolute inset-0 transition-all duration-1000 ease-out"
                      style={{
                        opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                        transform: isActive
                          ? "translateX(0) scale(1) rotateY(0deg)"
                          : isPrev
                          ? "translateX(-60%) scale(0.9) rotateY(25deg)"
                          : isNext
                          ? "translateX(60%) scale(0.9) rotateY(-25deg)"
                          : "translateX(0) scale(0.75)",
                        zIndex: isActive ? 30 : isPrev || isNext ? 10 : 0,
                        filter: isActive ? "none" : "blur(2px)",
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                        <img
                          src={img.src}
                          alt={img.titleEn}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">{img.title}</h3>
                          <p className="text-sm opacity-90">
                            Image {idx + 1} of {slidesCount}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
            </div>

            <div className="mt-8 flex justify-center gap-3 flex-wrap">
              {achievements.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    idx === currentIndex
                      ? "ring-4 ring-blue-600 scale-110 shadow-lg"
                      : "opacity-60 hover:opacity-100 hover:scale-105"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {achievements.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-blue-600 w-12"
                      : "bg-gray-300 w-2 hover:w-6"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  isAutoPlaying
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                }`}
              >
                {isAutoPlaying ? "⏸ Pause Auto-play" : "▶ Resume Auto-play"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}