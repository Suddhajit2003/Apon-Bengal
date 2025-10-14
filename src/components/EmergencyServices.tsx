import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, X } from 'lucide-react';

const festivalsImages = [
  // {
  //   id: 1,
  //   title: 'বসন্ত উৎসব ও হোলি',
  //   titleEn: 'Basanta Utsab & Holi',
  //   image: new URL('../Public/apan_bangla.jpeg', import.meta.url).href,
  //   span: 'row-span-2'
  // },
  {
    id: 2,
    title: 'দুর্গাপূজা',
    titleEn: 'Durga Puja',
    image: new URL('../Public/durgapuja.png', import.meta.url).href,
    span: 'row-span-1'
  },
  {
    id: 3,
    title: 'পবিত্র ঈদ',
    titleEn: 'Holy Eid',
    image: new URL('../Public/eid.jpg', import.meta.url).href,
    span: 'row-span-1'
  },
  {
    id: 4,
    title: 'হুল উৎসব',
    titleEn: 'Hul Festival',
    image: new URL('../Public/hul.jpg', import.meta.url).href,
    span: 'row-span-2'
  },
  {
    id: 5,
    title: 'কালীপূজা ও দিওয়ালি',
    titleEn: 'Kali Puja & Diwali',
    image: new URL('../Public/dwali.jpeg', import.meta.url).href,
    span: 'row-span-1'
  },
  {
    id: 6,
    title: 'জগদ্ধাত্রী পূজা',
    titleEn: 'Jagaddhatri Puja',
    image: new URL('../Public/jagaddhartri.jpg', import.meta.url).href,
    span: 'row-span-2'
  },
  {
    id: 7,
    title: 'বড়োদিন',
    titleEn: 'Christmas',
    image: new URL('../Public/Christmas.jpeg', import.meta.url).href,
    span: 'row-span-1'
  },
  {
    id: 8,
    title: 'নববর্ষ',
    titleEn: 'New Year',
    image: new URL('../Public/Newyear.jpeg', import.meta.url).href,
    span: 'row-span-1'
  },
  {
    id: 9,
    title: 'রথযাত্রা',
    titleEn: 'Rath Yatra',
    image: new URL('../Public/rath.png', import.meta.url).href,
    span: 'row-span-2'
  },
  {
    id: 10,
    title: 'রবীন্দ্র জয়ন্তী',
    titleEn: 'Rabindra Jayanti',
    image: new URL('../Public/rabindranath.jpeg', import.meta.url).href,
    span: 'row-span-1'
  },
  {
    id: 11,
    title: 'পৌষ সংক্রান্তি',
    titleEn: 'Poush Sankranti',
    image: new URL('../Public/poushparbon.jpeg', import.meta.url).href,
    span: 'row-span-1'
  },
  {
    id: 12,
    title: 'সরস্বতী পূজা',
    titleEn: 'Saraswati Puja',
    image: new URL('../Public/swarasatipuja.jpeg', import.meta.url).href,
    span: 'row-span-2'
  }
];

const stateEventsImages = [
  {
    id: 1,
    title: 'জাতীয় দিবস উদযাপন',
    titleEn: 'National Day Celebration',
    image: new URL('../Public/apan_bangla.jpeg', import.meta.url).href,
    span: 'row-span-2'
  },
  {
    id: 2,
    title: 'সরকারী অনুষ্ঠান',
    titleEn: 'Government Function',
    image: new URL('../Public/durgapuja.png', import.meta.url).href,
    span: 'row-span-1'
  },
  {
    id: 3,
    title: 'রাজ্যিক পুরস্কার',
    titleEn: 'State Award',
    image: new URL('../Public/eid.jpg', import.meta.url).href,
    span: 'row-span-1'
  },
  {
    id: 4,
    title: 'সাংস্কৃতিক অনুষ্ঠান',
    titleEn: 'Cultural Event',
    image: new URL('../Public/hul.jpg', import.meta.url).href,
    span: 'row-span-2'
  },
  {
    id: 5,
    title: 'শিক্ষা মেলা',
    titleEn: 'Education Fair',
    image: new URL('../Public/dwali.jpeg', import.meta.url).href,
    span: 'row-span-1'
  },
  {
    id: 6,
    title: 'স্বাস্থ্য শিবির',
    titleEn: 'Health Camp',
    image: new URL('../Public/jagaddhartri.jpg', import.meta.url).href,
    span: 'row-span-2'
  },
  {
    id: 7,
    title: 'কৃষি মেলা',
    titleEn: 'Agriculture Fair',
    image: new URL('../Public/Christmas.jpeg', import.meta.url).href,
    span: 'row-span-1'
  },
  {
    id: 8,
    title: 'বিজ্ঞান প্রদর্শনী',
    titleEn: 'Science Exhibition',
    image: new URL('../Public/Newyear.jpeg', import.meta.url).href,
    span: 'row-span-1'
  },
  {
    id: 9,
    title: 'খেলাধুলা অনুষ্ঠান',
    titleEn: 'Sports Event',
    image: new URL('../Public/rath.png', import.meta.url).href,
    span: 'row-span-2'
  },
  {
    id: 10,
    title: 'সাহিত্য উৎসব',
    titleEn: 'Literature Festival',
    image: new URL('../Public/rabindranath.jpeg', import.meta.url).href,
    span: 'row-span-1'
  },
  {
    id: 11,
    title: 'সংগীত অনুষ্ঠান',
    titleEn: 'Music Concert',
    image: new URL('../Public/poushparbon.jpeg', import.meta.url).href,
    span: 'row-span-1'
  },
  {
    id: 12,
    title: 'বাণিজ্য মেলা',
    titleEn: 'Trade Fair',
    image: new URL('../Public/swarasatipuja.jpeg', import.meta.url).href,
    span: 'row-span-2'
  }
];

export default function EmergencyServices() {
  const [selectedTab, setSelectedTab] = useState('festivals');
  const [selectedImage, setSelectedImage] = useState<typeof festivalsImages[0] | null>(null);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const handleImageClick = (image: any) => {
    if (selectedTab === 'festivals') {
      navigate('/festivals');
    } else {
      navigate('/state-events');
    }
  };

  return (
    <>
      <section ref={sectionRef} className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-4">
          {/* Help and Support Button */}
          <div className="text-center mb-16 px-4 sm:px-6 md:px-8">
            <button 
              onClick={() => navigate('/help-support')}
              className="group relative bg-gradient-to-br from-sky-500 to-sky-700 rounded-2xl px-8 sm:px-12 md:px-16 py-6 text-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="flex items-center gap-3 justify-center">
                <Phone className="w-6 h-6" />
                <div className="text-lg font-semibold">Help and Support</div>
              </div>
            </button>
          </div>

          {/* Gallery Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4 font-bold text-sky-600">
                "১২ মাসে ১৩ পার্বণ"
              </h2>
              <p className="text-xl text-gray-600 font-medium">Bengal through the year</p>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Tab Buttons - Moved to Top */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => setSelectedTab('festivals')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedTab === 'festivals'
                    ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-sky-50 border-2 border-sky-200'
                }`}
              >
                Festivals
              </button>
              <button
                onClick={() => setSelectedTab('stateEvents')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedTab === 'stateEvents'
                    ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-sky-50 border-2 border-sky-200'
                }`}
              >
                State Functions & Other Events
              </button>
            </div>

            {/* Dynamic Content Based on Selected Tab */}
            {selectedTab === 'festivals' ? (
              <>
                {/* Festivals Grid - Masonry Style Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4 mb-20">
                  {festivalsImages.map((image, index) => {
                    // Check if this image is in the last row (last 4 images for 4-column layout)
                    const isLastRow = index >= festivalsImages.length - 4;
                    
                    return (
                      <div
                        key={image.id}
                        onClick={() => handleImageClick(image)}
                        className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${image.span} ${isLastRow ? '' : 'shadow-lg hover:shadow-2xl'}`}
                      >
                        <img
                          src={image.image}
                          alt={image.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-blue-200/30 to-sky-300/50 opacity-60 group-hover:opacity-20 transition-opacity duration-300"></div>
                        {isLastRow && (
                          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-sky-50 via-sky-100/80 to-transparent backdrop-blur-md"></div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                            <p className="text-sm text-sky-200">{image.titleEn}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </>
            ) : (
              <>
                {/* State Events Grid - Masonry Style Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4 mb-20">
                  {stateEventsImages.map((image, index) => {
                    // Check if this image is in the last row (last 4 images for 4-column layout)
                    const isLastRow = index >= stateEventsImages.length - 4;
                    
                    return (
                      <div
                        key={image.id}
                        onClick={() => handleImageClick(image)}
                        className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${image.span} ${isLastRow ? '' : 'shadow-lg hover:shadow-2xl'}`}
                      >
                        <img
                          src={image.image}
                          alt={image.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-blue-200/30 to-sky-300/50 opacity-60 group-hover:opacity-20 transition-opacity duration-300"></div>
                        {isLastRow && (
                          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-sky-50 via-sky-100/80 to-transparent backdrop-blur-md"></div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                            <p className="text-sm text-sky-200">{image.titleEn}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </>
            )}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-sky-400 transition-colors bg-black/50 rounded-full p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="text-white text-center mt-6">
              <h3 className="text-3xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-xl text-sky-300">{selectedImage.titleEn}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}