import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';


const stateEventsData = [
  {
    id: 1,
    title: 'স্বাধীনতা দিবস',
    titleEn: 'Independence Day',
    image: '/india.jpeg',
    description: 'Every year, DSA proudly commemorates India\'s Independence Day with patriotic fervor and community spirit. The day begins with a flag-hoisting ceremony, followed by cultural programs that include patriotic songs, dances, and speeches. It\'s a day to honor our nation\'s heroes and instill a sense of pride and unity among all members of the community, especially the younger generation. The celebration brings together people from all walks of life to remember the sacrifices made for our freedom and to renew our commitment to building a stronger, more united India.',
    imagePosition: 'left'
  },
  {
    id: 2,
    title: 'প্রজাতন্ত্র দিবস',
    titleEn: 'Republic Day',
    image: '/republic.png',
    description: 'Republic Day at DSA is celebrated with great enthusiasm to honor the adoption of the Indian Constitution. The day features a flag-hoisting ceremony, parade demonstrations, and cultural programs that showcase India\'s diversity and democratic values. Students and community members participate in patriotic performances, including songs, dances, and speeches that highlight the importance of constitutional rights and civic responsibilities. The event serves as a reminder of our democratic heritage and inspires citizens to uphold the principles of justice, liberty, equality, and fraternity enshrined in our Constitution.',
    imagePosition: 'right'
  },
  {
    id: 3,
    title: 'গান্ধী জয়ন্তী',
    titleEn: 'Gandhi Jayanti',
    image: '/gandhi.png',
    description: 'Gandhi Jayanti is observed at DSA with reverence and reflection, commemorating the birth anniversary of Mahatma Gandhi, the Father of the Nation. The day begins with prayer meetings and tributes to Gandhiji\'s philosophy of non-violence, truth, and social justice. Community members participate in cleanliness drives, social service activities, and discussions on Gandhian principles. Cultural programs feature patriotic songs, speeches on Gandhi\'s teachings, and skits depicting significant events from his life. The celebration emphasizes the relevance of Gandhi\'s ideals in contemporary society and encourages community members to practice peace, compassion, and self-reliance in their daily lives.',
    imagePosition: 'left'
  },
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
