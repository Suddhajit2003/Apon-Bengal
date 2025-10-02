import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Ambulance, Shield, Flame, AlertTriangle, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const emergencyContacts = [
  {
    icon: Phone,
    number: '100',
    title: 'পুলিশ',
    titleEn: 'Police',
    color: 'from-sky-500 to-sky-700'
  },
  {
    icon: Ambulance,
    number: '102',
    title: 'অ্যাম্বুলেন্স',
    titleEn: 'Ambulance',
    color: 'from-sky-400 to-sky-600'
  },
  {
    icon: Flame,
    number: '101',
    title: 'ফায়ার সার্ভিস',
    titleEn: 'Fire Service',
    color: 'from-sky-500 to-sky-700'
  },
  {
    icon: Shield,
    number: '1091',
    title: 'মহিলা হেল্পলাইন',
    titleEn: 'Women Helpline',
    color: 'from-sky-400 to-sky-600'
  },
  {
    icon: AlertTriangle,
    number: '1098',
    title: 'শিশু হেল্পলাইন',
    titleEn: 'Child Helpline',
    color: 'from-sky-500 to-sky-700'
  }
];

const galleryCategories = ['সকল', 'উদ্ধার অভিযান', 'প্রশিক্ষণ', 'জনসেবা', 'পুরস্কার'];

const galleryImages = [
  {
    id: 1,
    category: 'উদ্ধার অভিযান',
    title: 'বন্যা উদ্ধার অভিযান',
    titleEn: 'Flood Rescue Operation',
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800'
  },
  {
    id: 2,
    category: 'প্রশিক্ষণ',
    title: 'ফায়ার সার্ভিস প্রশিক্ষণ',
    titleEn: 'Fire Service Training',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800'
  },
  {
    id: 3,
    category: 'জনসেবা',
    title: 'জনসচেতনতা কর্মসূচি',
    titleEn: 'Public Awareness Program',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800'
  },
  {
    id: 4,
    category: 'উদ্ধার অভিযান',
    title: 'জরুরি চিকিৎসা সেবা',
    titleEn: 'Emergency Medical Service',
    image: 'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=800'
  },
  {
    id: 5,
    category: 'পুরস্কার',
    title: 'সাহসিকতার পুরস্কার',
    titleEn: 'Bravery Award',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'
  },
  {
    id: 6,
    category: 'প্রশিক্ষণ',
    title: 'দুর্যোগ প্রস্তুতি প্রশিক্ষণ',
    titleEn: 'Disaster Preparedness Training',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800'
  }
];

export default function EmergencyServices() {
  const [selectedCategory, setSelectedCategory] = useState('সকল');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse'
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'back.out(1.7)'
        });
      }
    });
  }, []);

  const filteredImages = selectedCategory === 'সকল' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Emergency Services Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-6xl">🚨</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 text-sky-600">
              জরুরি সেবা
            </h2>
            <p className="text-xl text-gray-600">
              Emergency Services
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Emergency Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
            {emergencyContacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div
                  key={index}
                  ref={(el) => { cardsRef.current[index] = el; }}
                  className={`group relative bg-gradient-to-br ${contact.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105`}
                >
                  {/* Pulse Animation */}
                  <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 animate-pulse"></div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="text-center mb-3">
                    <a href={`tel:${contact.number}`} className="text-3xl block hover:scale-110 transition-transform duration-300">
                      {contact.number}
                    </a>
                  </div>

                  {/* Title */}
                  <div className="text-center">
                    <h3 className="mb-1 text-white">{contact.title}</h3>
                    <p className="text-sm text-white/80">{contact.titleEn}</p>
                  </div>

                  {/* Call Button */}
                  <button className="mt-4 w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg transition-colors duration-300">
                    কল করুন
                  </button>
                </div>
              );
            })}
          </div>

          {/* Gallery Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-6xl">📸</span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-4 text-sky-600">
                ফটো গ্যালারি
              </h2>
              <p className="text-xl text-gray-600">
                Photo Gallery
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {galleryCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-sky-50 border-2 border-sky-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                >
                  <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/90 via-sky-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="mb-2">{image.title}</h3>
                      <p className="text-sm text-sky-100">{image.titleEn}</p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm">
                    {image.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-sky-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="text-white text-center mt-6">
              <h3 className="text-2xl mb-2">{selectedImage.title}</h3>
              <p className="text-sky-200">{selectedImage.titleEn}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
