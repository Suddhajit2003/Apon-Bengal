import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Mission() {
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
              {/* <span className="text-8xl">🎯</span> */}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-sky-600">
              আমাদের লক্ষ্য
            </h1>
            <p className="text-2xl text-gray-600">
              Our Mission
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-12 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                আমাদের প্রধান লক্ষ্য
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                পশ্চিমবঙ্গের প্রতিটি নাগরিকের জন্য সরকারি সেবা সহজ, দ্রুত এবং স্বচ্ছ করে তোলা। আমরা প্রযুক্তির মাধ্যমে সেবা প্রদানে বাধা দূর করে জনগণের সময় ও শ্রম সাশ্রয় করতে প্রতিশ্রুতিবদ্ধ।
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                আমরা বিশ্বাস করি যে প্রতিটি নাগরিকের সরকারি সেবা পাওয়ার অধিকার রয়েছে এবং এই সেবা হওয়া উচিত সহজ, দ্রুত এবং স্বচ্ছ। আমাদের লক্ষ্য হল ডিজিটাল প্রযুক্তি ব্যবহার করে এই সেবাগুলি সবার কাছে পৌঁছে দেওয়া।
              </p>
            </div>

            {/* Key Points */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">সহজ সেবা</h3>
                <p className="text-lg">
                  প্রতিটি সেবা সহজ এবং ব্যবহারকারী-বান্ধব করে তোলা যাতে সবাই সহজেই ব্যবহার করতে পারে।
                </p>
              </div>

              <div className="bg-gradient-to-br from-sky-500 to-sky-700 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">দ্রুত সেবা</h3>
                <p className="text-lg">
                  সময় বাঁচানো এবং দ্রুত সেবা প্রদান করা যাতে নাগরিকদের অপেক্ষা করতে না হয়।
                </p>
              </div>

              <div className="bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">স্বচ্ছ সেবা</h3>
                <p className="text-lg">
                  সম্পূর্ণ স্বচ্ছতার সাথে সেবা প্রদান করা যাতে নাগরিকরা সব তথ্য জানতে পারে।
                </p>
              </div>

              <div className="bg-gradient-to-br from-sky-500 to-sky-700 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">সবার জন্য সেবা</h3>
                <p className="text-lg">
                  প্রতিটি নাগরিকের কাছে সেবা পৌঁছে দেওয়া, কোনো বৈষম্য ছাড়াই।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

