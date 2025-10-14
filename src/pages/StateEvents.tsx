import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const stateEventsData = [
  {
    id: 1,
    title: 'স্বাধীনতা দিবস',
    titleEn: 'Independence day',
    image: new URL('../Public/india.jpeg', import.meta.url).href,
    description: 'Every year, DSA proudly commemorates India\'s Independence Day with patriotic fervor and community spirit. The day begins with a flag-hoisting ceremony, followed by cultural programs that include patriotic songs, dances, and speeches. It\'s a day to honor our nation\'s heroes and instill a sense of pride and unity among all members of the community, especially the younger generation.',
    imagePosition: 'left'
  },
  {
    id: 2,
    title: 'প্রজাতন্ত্র দিবস',
    titleEn: 'Republic day',
    image: new URL('../Public/republic.png', import.meta.url).href,
    description: 'Our government functions are organized with utmost precision and respect for official protocols. These events serve as important platforms for policy announcements, public welfare initiatives, and community engagement. They bring together government officials, local representatives, and community members to discuss development plans and celebrate achievements.',
    imagePosition: 'right'
  },
  // {
  //   id: 3,
  //   title: 'রাজ্যিক পুরস্কার',
  //   titleEn: 'State Award',
  //   image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
  //   description: 'The State Awards ceremony is a prestigious event that recognizes and honors individuals who have made outstanding contributions to our society. These awards celebrate excellence in various fields including education, healthcare, social service, and cultural preservation. It\'s an inspiring occasion that motivates others to contribute meaningfully to community development.',
  //   imagePosition: 'left'
  // },
   {
    id: 3,
    title: 'গান্ধী জয়ন্তী',
    titleEn: 'Gandhi Jayanti',
    image: new URL('../Public/gandhi.png', import.meta.url).href,
    description: 'Our cultural events are vibrant celebrations that showcase the rich heritage of Bengal. These programs feature traditional music, dance, drama, and art exhibitions that preserve and promote our cultural identity. They provide a platform for local artists and performers to display their talents while educating the younger generation about their cultural roots.',
    imagePosition: 'left'
  },
  // {
  //   id: 5,
  //   title: 'শিক্ষা মেলা',
  //   titleEn: 'Education Fair',
  //   image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
  //   description: 'The Education Fair is a comprehensive platform that brings together students, parents, educators, and institutions. It features educational exhibitions, career counseling sessions, scholarship information, and interactive workshops. This event helps students make informed decisions about their academic and professional futures while promoting the importance of quality education.',
  //   imagePosition: 'left'
  // },
  // {
  //   id: 6,
  //   title: 'স্বাস্থ্য শিবির',
  //   titleEn: 'Health Camp',
  //   image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800',
  //   description: 'Our health camps provide essential medical services to the community, especially in rural areas where healthcare access is limited. These camps offer free health check-ups, medical consultations, vaccination programs, and health awareness sessions. They play a crucial role in promoting preventive healthcare and ensuring the well-being of our community members.',
  //   imagePosition: 'right'
  // }
];

export default function StateEvents() {
  const navigate = useNavigate();

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
            {stateEventsData.map((event, index) => (
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
                        {event.description}
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
