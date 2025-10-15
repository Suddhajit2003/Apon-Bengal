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
    title: 'বসন্ত উৎসব',
    titleEn: 'Basanta Utsab',
    image: new URL('../Public/Holi.png', import.meta.url).href,
    description: 'Alongside our grand Durga Puja, DSA proudly hosts "Basanta Baithak" – a vibrant celebration of spring inspired by Bengal\'s Basanta Utsab. This annual cultural gathering features soulful Rabindra Sangeet, folk and classical dance, poetry recitations, and colorful traditional attire. Set against a backdrop of music, flowers, and joy, the event brings together people of all ages in a spirit of unity and cultural pride. Basanta Baithak reflects our deep-rooted love for art, nature, and heritage – a refreshing, joyous start to the season of colors.',
    imagePosition: 'right'
  },
  {
    id: 3,
    title: 'পবিত্র ঈদ',
    titleEn: 'Eid',
    image: new URL('../Public/eid.jpg', import.meta.url).href,
    description: 'DSA celebrates Eid with the entire community, embracing the spirit of brotherhood, compassion, and gratitude. The day brings together people of all faiths to share in the joy of this sacred festival. Special prayers, cultural programs, and community feasts mark the occasion, reinforcing the values of unity, charity, and peaceful coexistence that lie at the heart of our diverse community.',
    imagePosition: 'left'
  },
  {
    id: 4,
    title: 'হুল উৎসব',
    titleEn: 'Hool Utsob',
    image: new URL('../Public/hul.jpg', import.meta.url).href,
    description: 'Adding vibrant hues to the skies and hearts, DSA\'s annual kite festival "Bho-Katta" is a celebration of joy, competition, and childhood nostalgia. Held alongside our grand Durga Puja celebrations, this event sees an explosion of colorful kites, cheerful shouts, and community spirit. Participants of all ages gather to relive the age-old tradition of kite flying and thread-spinning duels, echoing "Bho-Katta!" through the sky. It\'s more than just an event—it\'s a reminder of our roots, our joy, and our unity.',
    imagePosition: 'right'
  },
  {
    id: 5,
    title: 'কালীপূজা ও দীপাবলি',
    titleEn: 'Kali Puja and Diwali',
    image: new URL('../Public/dwali.jpeg', import.meta.url).href,
    description: 'The twin festivals of Kali Puja and Diwali illuminate DSA with divine light and spiritual energy. Devotees gather to worship Goddess Kali with traditional rituals, while the community celebrates Diwali—the festival of lights—with diyas, rangoli, fireworks, and sweets. These celebrations symbolize the victory of light over darkness and good over evil, bringing hope, prosperity, and joy to every household in our community.',
    imagePosition: 'left'
  },
  {
    id: 6,
    title: 'জগদ্ধাত্রী পূজা',
    titleEn: 'Jagadhatri Puja',
    image: new URL('../Public/jagaddhartri.jpg', import.meta.url).href,
    description: 'Following the grandeur of Durga Puja, DSA celebrates Jagadhatri Puja with equal devotion and cultural enthusiasm. This festival honors Goddess Jagadhatri, the protector of the world, through elaborate rituals, artistic pandals, and cultural programs. The celebration maintains the festive spirit alive in Dubrajpur, showcasing our community\'s deep-rooted connection to Bengali traditions and goddess worship.',
    imagePosition: 'right'
  },
  {
    id: 7,
    title: 'নববর্ষ ও রাজ্যদিবস',
    titleEn: 'Nababarsho',
    image: new URL('../Public/n.png', import.meta.url).href,
    description: 'Pohela Boishakh, the Bengali New Year, is celebrated at DSA with immense joy and cultural pride. The day begins with traditional rituals, followed by vibrant cultural programs featuring Bengali music, dance, and drama. Traditional sweets and festive meals are shared among community members. It\'s a day to embrace new beginnings, honor our heritage, and strengthen the bonds that unite us as Bengalis.',
    imagePosition: 'left'
  },
  {
    id: 8,
    title: 'রথযাত্রা',
    titleEn: 'Rath Yatra',
    image: new URL('../Public/rath.png', import.meta.url).href,
    description: 'DSA observes the sacred Rath Yatra, commemorating Lord Jagannath\'s journey, with devotional fervor and community participation. The festival features processions, devotional songs, and traditional rituals that bring together devotees in a spirit of faith and unity. This ancient tradition connects our community to centuries of spiritual heritage and reinforces values of devotion and collective celebration.',
    imagePosition: 'right'
  },
  {
    id: 9,
    title: 'বড়োদিন',
    titleEn: 'Christmas',
    image: new URL('../Public/c.jpeg', import.meta.url).href,
    description: 'Christmas at DSA is a celebration of love, peace, and togetherness that transcends religious boundaries. The community comes together to decorate, sing carols, exchange gifts, and share festive meals. Special programs for children, cultural performances, and acts of charity mark this joyous occasion, reflecting the universal message of compassion and goodwill that Christmas represents.',
    imagePosition: 'left'
  },
  { 
    id: 10,
    title: 'রবীন্দ্র - নজরুল জয়ন্তী',
    titleEn: 'Rabindra - Nazrul Jayanti',
    image: new URL('../Public/rabindranath.jpeg', import.meta.url).href,
    description: 'Honoring the legacy of Rabindranath Tagore, DSA celebrates Rabindra Jayanti with cultural programs dedicated to the poet\'s timeless works. The day features performances of Rabindra Sangeet, recitations of his poetry, discussions on his philosophy, and theatrical adaptations of his plays. This celebration keeps Tagore\'s vision of humanity, art, and universal brotherhood alive in our community.',
    imagePosition: 'right'
  },
  {
    id: 11,
    title: 'পৌষ সংক্রান্তি',
    titleEn: 'Poush Sankranti',
    image: new URL('../Public/poushparbon.jpeg', import.meta.url).href,
    description: 'Poush Sankranti marks the harvest festival and the transition of the sun into Capricorn. DSA celebrates this auspicious day with traditional Bengali delicacies like pithe, payesh, and til-based sweets. Community feasts, cultural programs, and social gatherings reflect gratitude for the harvest and the warmth of togetherness during the winter season. It\'s a celebration of Bengali rural traditions and agricultural heritage.',
    imagePosition: 'left'
  },
  {
    id: 12,
    title: 'সরস্বতী পূজা',
    titleEn: 'Saraswati Puja',
    image: new URL('../Public/swarasatipuja.jpeg', import.meta.url).href,
    description: 'Dedicated to Goddess Saraswati, the deity of knowledge, music, and arts, this festival holds special significance for students and artists at DSA. The day features traditional worship, cultural programs showcasing music and dance, and blessings for academic success. Young students participate in their first writing ceremony (Hatekhori), marking the beginning of their educational journey. The celebration emphasizes the importance of learning, creativity, and wisdom.',
    imagePosition: 'right'
  },
  {
    id: 13,
    title: 'গুরু পূর্ণিমা',
    titleEn: 'Guru Purnima',
    image: new URL('../Public/g.png', import.meta.url).href,
    description: 'Guru Purnima at DSA is a day to honor teachers, mentors, and spiritual guides who illuminate our paths with knowledge and wisdom. Students express gratitude through cultural programs, speeches, and traditional ceremonies. The event reinforces the timeless guru-shishya tradition and celebrates the invaluable role of educators in shaping lives and society.',
    imagePosition: 'left'
  },
];


export default function Festivals() {
  const navigate = useNavigate();
  const [pujoView, setPujoView] = React.useState('bengal');


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
            {festivalsData.map((event) => (
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
                      <h3 className="text-3xl font-bold text-sky-600">{event.title}</h3>
                      <h4 className="text-xl font-semibold text-gray-700">{event.titleEn}</h4>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {event.hasPujoSwitch && pujoView === 'beyond' 
                          ? event.descriptionBeyondBengal 
                          : event.description}
                      </p>
                      
                      {/* Pujo Switch Button - Only for Durga Puja - Now after description */}
                      {event.hasPujoSwitch && (
                        <div className="flex gap-2 mt-6">
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
