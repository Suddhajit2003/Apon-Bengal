import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Vision() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sky-600 hover:text-sky-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-lg">ফিরে যান</span>
          </button>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-8xl">👁️</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-sky-600">
              আমাদের দৃষ্টিভঙ্গি
            </h1>
            <p className="text-2xl text-gray-600">
              Our Vision
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-12 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                আমাদের দৃষ্টিভঙ্গি
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                একটি ডিজিটাল পশ্চিমবঙ্গ গড়ে তোলা যেখানে প্রতিটি নাগরিক ঘরে বসে সহজেই সরকারি সেবা পাবেন। আমরা স্বপ্ন দেখি এমন একটি রাজ্যের যেখানে প্রযুক্তি ও সেবা একসাথে মিলিত হয়ে জনগণের জীবনযাত্রার মান উন্নত করে।
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                আমাদের দৃষ্টিভঙ্গি হল এমন একটি পশ্চিমবঙ্গ তৈরি করা যেখানে প্রযুক্তি এবং উদ্ভাবন সবার জীবনকে সহজ করে তোলে। আমরা চাই প্রতিটি নাগরিক ডিজিটাল সেবার মাধ্যমে তাদের প্রয়োজনীয় সব সেবা সহজেই পেতে পারে।
              </p>
            </div>

            {/* Key Points */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">ডিজিটাল পশ্চিমবঙ্গ</h3>
                <p className="text-lg">
                  সম্পূর্ণ ডিজিটাল রাজ্য গড়ে তোলা যেখানে সব সেবা অনলাইনে পাওয়া যাবে।
                </p>
              </div>

              <div className="bg-gradient-to-br from-sky-500 to-sky-700 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">সহজ প্রবেশাধিকার</h3>
                <p className="text-lg">
                  প্রতিটি নাগরিক ঘরে বসে সহজেই সরকারি সেবা পাবেন, কোনো ঝামেলা ছাড়াই।
                </p>
              </div>

              <div className="bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">উন্নত জীবনযাত্রা</h3>
                <p className="text-lg">
                  প্রযুক্তির মাধ্যমে নাগরিকদের জীবনযাত্রার মান উন্নত করা।
                </p>
              </div>

              <div className="bg-gradient-to-br from-sky-500 to-sky-700 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">স্মার্ট সমাধান</h3>
                <p className="text-lg">
                  আধুনিক প্রযুক্তি ব্যবহার করে স্মার্ট সমাধান প্রদান করা।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

