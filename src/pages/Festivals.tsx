import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const festivalsData = [
  {
    id: 1,
    title: 'দুর্গা পূজা',
    titleEn: 'Durga Puja',
    image: new URL('../Public/durgapuja.png', import.meta.url).href,
    description: 'Durga Puja is not just a festival—it\'s the soul of Dubrajpur. At DSA, it symbolizes unity, tradition, and spiritual celebration that resonates deeply with every heart in the region. For over a decade, our Puja has brought together people from all walks of life—children to seniors, artists to devotees. It\'s a shared emotion, where devotion meets creativity, and communities reconnect through culture, light, and joy. This celebration fosters inclusiveness, revives local traditions, and nurtures a sense of belonging. DSA\'s Durga Puja is where heritage lives on, and every visitor becomes part of a larger family.',
    descriptionBeyondBengal: 'DSA\'s Durga Puja extends its warmth beyond Bengal, connecting with devotees across India and the world. Through cultural exchange programs, live streaming of rituals, and collaborative celebrations, we bridge distances and bring the essence of Bengali tradition to diverse communities. Our Puja has welcomed guests from different states and countries, creating a melting pot of cultures united by devotion to Maa Durga. This outreach strengthens bonds, promotes cultural understanding, and showcases Bengal\'s rich heritage on a broader canvas.',
    imagePosition: 'left',
    hasPujoSwitch: true
  },
  {
    id: 2,
    title: 'বসন্ত বৈঠক',
    titleEn: 'Basanta Baithak',
    image: new URL('../Public/Christmas.jpeg', import.meta.url).href,
    description: 'Alongside our grand Durga Puja, DSA proudly hosts "Basanta Baithak" – a vibrant celebration of spring inspired by Bengal\'s Basanta Utsab. This annual cultural gathering features soulful Rabindra Sangeet, folk and classical dance, poetry recitations, and colorful traditional attire. Set against a backdrop of music, flowers, and joy, the event brings together people of all ages in a spirit of unity and cultural pride. Basanta Baithak reflects our deep-rooted love for art, nature, and heritage – a refreshing, joyous start to the season of colors.',
    imagePosition: 'right'
  },
  {
    id: 3,
    title: 'পবিত্র ঈদ',
    titleEn: ' Eid',
    image: new URL('../Public/eid.jpg', import.meta.url).href,
    description: 'Adding vibrant hues to the skies and hearts, DSA\'s annual kite festival "Bho-Katta" is a celebration of joy, competition, and childhood nostalgia. Held beside our grand Durga Puja celebrations, this 2024 edition saw an explosion of colorful kites, cheerful shouts, and community spirit. Participants of all ages gathered to relive the age-old tradition of kite flying and thread-spinning duels, echoing "Bho-Katta!" through the sky. It\'s more than just an event—it\'s a reminder of our roots, our joy, and our unity. Let the skies speak the language of freedom!',
    imagePosition: 'left'
  },
  {
    id: 4,
    title: 'হুল উৎসব',
    titleEn: 'Hool utsob',
    image: new URL('../Public/hul.jpg', import.meta.url).href,
    description: 'Every year, DSA proudly commemorates India\'s Independence Day with patriotic fervor and community spirit. The day begins with a flag-hoisting ceremony, followed by cultural programs that include patriotic songs, dances, and speeches. It\'s a day to honor our nation\'s heroes and instill a sense of pride and unity among all members of the community, especially the younger generation.',
    imagePosition: 'right'
  },
  {
    id: 5,
    title: 'কালীপূজা ও দিওয়ালি',
    titleEn: 'Kali pujo and diwali',
    image: new URL('../Public/dwali.jpeg', import.meta.url).href,
    description: 'Our annual cricket tournament is one of the most awaited sporting events in Dubrajpur. Teams from across the region compete for the prestigious DSA trophy, showcasing exceptional talent and sportsmanship. The tournament fosters a spirit of healthy competition and brings the community together to cheer for their favorite teams, making it a thrilling spectacle for all.',
    imagePosition: 'left'
  },
  {
    id: 6,
    title: 'জগদ্ধাত্রী পূজা',
    titleEn: 'Jagadhatri pujo',
    image: new URL('../Public/jagaddhartri.jpg', import.meta.url).href,
    description: 'Fueling the local passion for the beautiful game, the DSA Football Tournament is a major highlight of our sports calendar. It provides a platform for local clubs and young athletes to display their skills and compete at a high level. The event draws large crowds, creating an electric atmosphere of excitement and unity, celebrating the love for football that runs deep in our community.',
    imagePosition: 'right'
  },
  {
    id: 7,
    title: 'নববর্ষ',
    titleEn: 'Nababarsho',
    image: new URL('../Public/.jpeg', import.meta.url).href,
    description: 'Our annual cricket tournament is one of the most awaited sporting events in Dubrajpur. Teams from across the region compete for the prestigious DSA trophy, showcasing exceptional talent and sportsmanship. The tournament fosters a spirit of healthy competition and brings the community together to cheer for their favorite teams, making it a thrilling spectacle for all.',
    imagePosition: 'left'
  },
  {
    id: 8,
    title: '9. রথযাত্রা',
    titleEn: 'Rath yatra',
    image: new URL('../Public/.jpg', import.meta.url).href,
    description: 'Fueling the local passion for the beautiful game, the DSA Football Tournament is a major highlight of our sports calendar. It provides a platform for local clubs and young athletes to display their skills and compete at a high level. The event draws large crowds, creating an electric atmosphere of excitement and unity, celebrating the love for football that runs deep in our community.',
    imagePosition: 'right'
  },
  {
    id: 9,
    title: 'কালীপূজা ও দিওয়ালি',
    titleEn: 'Kali pujo and diwali',
    image: new URL('../Public/.jpeg', import.meta.url).href,
    description: 'Our annual cricket tournament is one of the most awaited sporting events in Dubrajpur. Teams from across the region compete for the prestigious DSA trophy, showcasing exceptional talent and sportsmanship. The tournament fosters a spirit of healthy competition and brings the community together to cheer for their favorite teams, making it a thrilling spectacle for all.',
    imagePosition: 'left'
  },
  { 
    id: 10,
    title: 'রবীন্দ্র জয়ন্তী',
    titleEn: 'Rabindra jayanti',
    image: new URL('../Public/.jpg', import.meta.url).href,
    description: 'Fueling the local passion for the beautiful game, the DSA Football Tournament is a major highlight of our sports calendar. It provides a platform for local clubs and young athletes to display their skills and compete at a high level. The event draws large crowds, creating an electric atmosphere of excitement and unity, celebrating the love for football that runs deep in our community.',
    imagePosition: 'right'
  },
  {
    id: 11,
    title: 'পৌষ সংক্রান্তি',
    titleEn: 'Poush sankranti',
    image: new URL('../Public/.jpeg', import.meta.url).href,
    description: 'Our annual cricket tournament is one of the most awaited sporting events in Dubrajpur. Teams from across the region compete for the prestigious DSA trophy, showcasing exceptional talent and sportsmanship. The tournament fosters a spirit of healthy competition and brings the community together to cheer for their favorite teams, making it a thrilling spectacle for all.',
    imagePosition: 'left'
  },
  {
    id: 12,
    title: 'সরস্বতী পূজা',
    titleEn: 'Saraswati pujo',
    image: new URL('../Public/.jpg', import.meta.url).href,
    description: 'Fueling the local passion for the beautiful game, the DSA Football Tournament is a major highlight of our sports calendar. It provides a platform for local clubs and young athletes to display their skills and compete at a high level. The event draws large crowds, creating an electric atmosphere of excitement and unity, celebrating the love for football that runs deep in our community.',
    imagePosition: 'right'
  },
  {
    id: 11,
    title: 'গুরু পূর্ণিমা',
    titleEn: 'Guru purnima',
    image: new URL('../Public/.jpeg', import.meta.url).href,
    description: 'Our annual cricket tournament is one of the most awaited sporting events in Dubrajpur. Teams from across the region compete for the prestigious DSA trophy, showcasing exceptional talent and sportsmanship. The tournament fosters a spirit of healthy competition and brings the community together to cheer for their favorite teams, making it a thrilling spectacle for all.',
    imagePosition: 'left'
  },
];

export default function Festivals() {
  const navigate = useNavigate();
  const [pujoView, setPujoView] = React.useState('bengal'); // 'bengal' or 'beyond'

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white pt-5">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            {/* <h1 className="text-5xl md:text-6xl font-bold text-sky-600 mb-4">
              Events
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Beyond our signature Durga Puja, DSA is a hub of year-round cultural and community engagement. Explore our other vibrant initiatives.
            </p> */}
          </div>

          {/* Events Layout */}
          <div className="space-y-16">
            {festivalsData.map((event, index) => (
              <div key={event.id} className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Image - Left position */}
                  {event.imagePosition === 'left' && (
                    <div className="order-1">
                      <div className="relative rounded-2xl overflow-hidden shadow-lg">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-80 object-cover"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className={event.imagePosition === 'left' ? 'order-2' : 'order-1'}>
                    <div className="space-y-4">
                      {/* Pujo Switch Button - Only for Durga Puja */}
                      {event.hasPujoSwitch && (
                        <div className="flex gap-2 mb-6">
                          <button
                            onClick={() => setPujoView('bengal')}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${
                              pujoView === 'bengal'
                                ? 'bg-sky-500 text-white shadow-lg'
                                : 'bg-white text-sky-500 border-2 border-sky-200 hover:border-sky-400'
                            }`}
                          >
                            Pujo in Bengal
                          </button>
                          <button
                            onClick={() => setPujoView('beyond')}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${
                              pujoView === 'beyond'
                                ? 'bg-sky-500 text-white shadow-lg'
                                : 'bg-white text-sky-500 border-2 border-sky-200 hover:border-sky-400'
                            }`}
                          >
                            Pujo beyond Bengal
                          </button>
                        </div>
                      )}
                      
                      <h3 className="text-3xl font-bold text-sky-600">{event.title}</h3>
                      <h4 className="text-xl font-semibold text-gray-700">{event.titleEn}</h4>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {event.hasPujoSwitch && pujoView === 'beyond' 
                          ? event.descriptionBeyondBengal 
                          : event.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Image - Right position */}
                  {event.imagePosition === 'right' && (
                    <div className="order-2">
                      <div className="relative rounded-2xl overflow-hidden shadow-lg">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-80 object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Spacing before footer */}
      <div className="py-32">
        <br></br>
        <br></br>
      </div>
    </div>
  );
}