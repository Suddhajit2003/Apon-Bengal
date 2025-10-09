import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Target, Sparkles, Globe2, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Vision() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Gradient Accent */}
      <section className="relative py-12 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-white to-blue-50/30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-gray-600 hover:text-sky-600 mb-12 transition-all duration-300"
          >
            <div className="p-2 rounded-full bg-gray-100 group-hover:bg-sky-100 transition-colors duration-300">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-base font-medium">ফিরে যান</span>
          </button>

          {/* Main Content Container */}
          <div className="max-w-6xl mx-auto">
            {/* Vision Icon Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-100 rounded-full">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span className="text-sm font-medium text-sky-700">Our Vision for Tomorrow</span>
              </div>
            </div>

            {/* Main Vision Card */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-500">
              {/* Accent Bar */}
              <div className="h-1.5 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600"></div>
              
              <div className="p-8 md:p-16">
                {/* Icon */}
                <div className="flex justify-center mb-8">
                  <div className="p-4 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl">
                    <Target className="w-12 h-12 text-sky-600" />
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent leading-tight">
                  Our Vision
                </h1>

                {/* Vision Statement */}
                <div className="max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed text-center font-normal">
                    An effective one stop communication portal enabling all{' '}
                    <span className="font-semibold text-sky-600">NRBs</span> to become a seamless extension of the community of{' '}
                    <span className="font-semibold text-sky-600">West Bengal</span> and participate in the development of West Bengal.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="group bg-gradient-to-br from-white to-sky-50/50 rounded-xl p-6 border border-gray-100 hover:border-sky-200 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sky-100 rounded-lg group-hover:bg-sky-200 transition-colors duration-300">
                    <Globe2 className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">One Stop Portal</h3>
                    <p className="text-sm text-gray-600">Unified platform for all communication</p>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Community Extension</h3>
                    <p className="text-sm text-gray-600">Seamless integration with NRBs</p>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-white to-sky-50/50 rounded-xl p-6 border border-gray-100 hover:border-sky-200 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sky-100 rounded-lg group-hover:bg-sky-200 transition-colors duration-300">
                    <Sparkles className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Development Focus</h3>
                    <p className="text-sm text-gray-600">Participate in regional growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
