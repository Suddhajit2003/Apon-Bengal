import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { HelpCircle, FileText, Clock, CreditCard, Shield, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqCategories = [
  {
    icon: FileText,
    category: 'সাধারণ প্রশ্ন',
    categoryEn: 'General Questions',
    color: 'from-sky-400 to-sky-600',
    faqs: [
      {
        question: 'আপন বাংলা কি?',
        questionEn: 'What is Apon Bangla?',
        answer: 'আপন বাংলা হল পশ্চিমবঙ্গ সরকারের একটি ডিজিটাল প্ল্যাটফর্ম যেখানে নাগরিকরা বিভিন্ন সরকারি সেবা সহজে এবং দ্রুত পেতে পারেন। এটি একটি একক জানালা সেবা যা সকল সরকারি সুবিধা এক জায়গায় প্রদান করে।'
      },
      {
        question: 'কিভাবে আপন বাংলায় নিবন্ধন করবো?',
        questionEn: 'How to register on Apon Bangla?',
        answer: 'আপন বাংলায় নিবন্ধন করতে হোমপেজে "নিবন্ধন করুন" বাটনে ক্লিক করুন। আপনার মোবাইল নম্বর, আধার কার্ড নম্বর এবং মৌলিক তথ্য প্রদান করুন। OTP যাচাইকরণের পর আপনার অ্যাকাউন্ট তৈরি হয়ে যাবে।'
      },
      {
        question: 'কোন কোন সেবা পাওয়া যায়?',
        questionEn: 'What services are available?',
        answer: '১৫০+ সরকারি সেবা পাওয়া যায় যেমন: জন্ম/মৃত্যু সনদ, রেশন কার্ড, সম্পত্তি নথি, শিক্ষা সেবা, স্বাস্থ্য সেবা, ব্যবসায়িক লাইসেন্স, ড্রাইভিং লাইসেন্স, বিদ্যুৎ সংযোগ এবং আরও অনেক কিছু।'
      }
    ]
  },
  {
    icon: CreditCard,
    category: 'পেমেন্ট সংক্রান্ত',
    categoryEn: 'Payment Related',
    color: 'from-sky-500 to-sky-700',
    faqs: [
      {
        question: 'কোন কোন পেমেন্ট পদ্ধতি গ্রহণ করা হয়?',
        questionEn: 'What payment methods are accepted?',
        answer: 'আমরা সকল প্রধান পেমেন্ট পদ্ধতি গ্রহণ করি: ডেবিট কার্ড, ক্রেডিট কার্ড, নেট ব্যাংকিং, UPI, ওয়ালেট (Paytm, PhonePe, Google Pay) এবং NEFT/RTGS।'
      },
      {
        question: 'পেমেন্ট নিরাপদ কি?',
        questionEn: 'Are payments secure?',
        answer: 'হ্যাঁ, সম্পূর্ণ নিরাপদ। আমরা 256-bit SSL এনক্রিপশন ব্যবহার করি এবং সকল লেনদেন RBI অনুমোদিত পেমেন্ট গেটওয়ের মাধ্যমে হয়। আপনার ব্যাংক তথ্য সম্পূর্ণ সুরক্ষিত থাকে।'
      },
      {
        question: 'পেমেন্ট ব্যর্থ হলে কি করবো?',
        questionEn: 'What to do if payment fails?',
        answer: 'পেমেন্ট ব্যর্থ হলে আপনার ব্যাংক অ্যাকাউন্ট থেকে টাকা কাটা হলে ৭-১০ কর্মদিবসের মধ্যে রিফান্ড হবে। অবিলম্বে সাহায্যের জন্য হেল্পলাইন নম্বরে যোগাযোগ করুন।'
      }
    ]
  },
  {
    icon: Clock,
    category: 'সেবা প্রক্রিয়াকরণ',
    categoryEn: 'Service Processing',
    color: 'from-sky-400 to-sky-600',
    faqs: [
      {
        question: 'সেবা পেতে কতদিন সময় লাগে?',
        questionEn: 'How long does it take to get services?',
        answer: 'সেবার ধরন অনুযায়ী সময় ভিন্ন হয়। সাধারণত ডিজিটাল সেবা তাৎক্ষণিক থেকে ৭ কর্মদিবসের মধ্যে প্রদান করা হয়। কিছু সেবা যেমন জন্ম সনদ ২৪ ঘন্টায়, রেশন কার্ড ১৫ দিনে পাওয়া যায়।'
      },
      {
        question: 'আবেদনের স্ট্যাটাস কিভাবে চেক করবো?',
        questionEn: 'How to check application status?',
        answer: 'লগইন করে "আমার আবেদন" সেকশনে যান। সেখানে আপনার সকল আবেদনের বর্তমান স্ট্যাটাস দেখতে পারবেন। এছাড়া আবেদন নম্বর দিয়ে "Track Application" অপশনে গিয়েও চেক করতে পারবেন।'
      },
      {
        question: 'ডকুমেন্ট আপলোড করার নিয়ম কি?',
        questionEn: 'What are the document upload rules?',
        answer: 'ডকুমেন্ট PDF বা JPG ফরম্যাটে হতে হবে। প্রতিটি ফাইল সর্বোচ্চ ২MB হতে পারে। ডকুমেন্ট স্পষ্ট এবং পাঠযোগ্য হতে হবে। রঙিন স্ক্যান বা ছবি গ্রহণযোগ্য।'
      }
    ]
  },
  {
    icon: Shield,
    category: 'নিরাপত্তা ও গোপনীয়তা',
    categoryEn: 'Security & Privacy',
    color: 'from-sky-500 to-sky-700',
    faqs: [
      {
        question: 'আমার তথ্য কি নিরাপদ?',
        questionEn: 'Is my data secure?',
        answer: 'হ্যাঁ, সম্পূর্ণ নিরাপদ। আমরা ব্যাংক-গ্রেড এনক্রিপশন ব্যবহার করি। আপনার ব্যক্তিগত তথ্য কখনো তৃতীয় পক্ষের সাথে শেয়ার করা হয় না। সরকারি নিয়ম অনুযায়ী ডেটা সংরক্ষণ করা হয়।'
      },
      {
        question: 'পাসওয়ার্ড ভুলে গেলে কি করবো?',
        questionEn: 'What to do if I forget my password?',
        answer: 'লগইন পেজে "পাসওয়ার্ড ভুলে গেছি" অপশনে ক্লিক করুন। রেজিস্টার্ড মোবাইল নম্বরে OTP পাঠানো হবে। OTP ভেরিফাই করে নতুন পাসওয়ার্ড সেট করুন।'
      }
    ]
  }
];

const quickContacts = [
  {
    icon: Phone,
    title: 'হেল্পলাইন',
    titleEn: 'Helpline',
    info: '1800-XXX-XXXX',
    subInfo: '24x7 Available'
  },
  {
    icon: HelpCircle,
    title: 'সহায়তা',
    titleEn: 'Support',
    info: 'support@aponbangla.gov.in',
    subInfo: 'Email Support'
  }
];

export default function FAQ() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-sky-50 to-white" id="faq">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-6xl">❓</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-sky-600">
            প্রায়শই জিজ্ঞাসিত প্রশ্ন
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Frequently Asked Questions (FAQ)
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {faqCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-sky-600">
                      {category.category}
                    </h3>
                    <p className="text-sm text-gray-600">{category.categoryEn}</p>
                  </div>
                </div>

                {/* Accordion */}
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`item-${categoryIndex}-${faqIndex}`}
                      className="bg-white rounded-xl border-2 border-sky-100 hover:border-sky-300 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                        <div className="flex-1">
                          <div className="text-lg text-gray-800 group-hover:text-sky-600 transition-colors mb-1">
                            {faq.question}
                          </div>
                          <div className="text-sm text-gray-500">
                            {faq.questionEn}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="pt-4 border-t border-sky-100">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}
        </div>

        {/* Quick Contact Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {quickContacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-sky-500 to-sky-700 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">{contact.title}</h3>
                    <p className="text-sm text-sky-100 mb-3">{contact.titleEn}</p>
                    <p className="text-lg mb-1">{contact.info}</p>
                    <p className="text-sm text-sky-100">{contact.subInfo}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border-2 border-sky-100">
            <h3 className="text-2xl text-sky-600 mb-4">
              এখনও প্রশ্ন আছে?
            </h3>
            <p className="text-gray-600 mb-6">
              আমাদের সাহায্য দল সর্বদা আপনার সেবায় প্রস্তুত
            </p>
            <button className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-3 rounded-xl hover:from-sky-600 hover:to-sky-700 transition-all transform hover:scale-105 shadow-lg">
              যোগাযোগ করুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
