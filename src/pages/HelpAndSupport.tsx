import React, { useState } from 'react';
import { ArrowRight, User, Mail, Phone, MapPin, CreditCard, CheckCircle, Sparkles } from 'lucide-react';

export default function HelpAndSupport() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cardNo: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -left-40 w-96 h-96 bg-purple-300 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-blue-300 opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-12 pb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Premium Membership Portal</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Join the DSA Family
        </h1>
        <div className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Connect us Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue mb-4">
              Connect us
            </h2>
          </div>
          {/* Form Card with Glass Effect */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
            
            {/* Progress Bar */}
            <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600"></div>
            
            <div className="p-8 md:p-12">

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Two Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="relative">
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('fullName')}
                        onBlur={() => setFocusedField('')}
                        placeholder="Sourav Ganguly"
                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          focusedField === 'fullName' 
                            ? 'border-blue-500 bg-white shadow-lg shadow-blue-100' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        required
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        placeholder="sourav.g@example.com"
                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          focusedField === 'email' 
                            ? 'border-blue-500 bg-white shadow-lg shadow-blue-100' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField('')}
                      placeholder="+91 98765 43210"
                      className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                        focusedField === 'phone' 
                          ? 'border-blue-500 bg-white shadow-lg shadow-blue-100' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      required
                    />
                  </div>
                </div>

                {/* Apon Bangla Card No */}
                <div className="relative">
                  <label htmlFor="cardNo" className="block text-sm font-semibold text-gray-700 mb-2">
                    Apon Bangla Card No *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      id="cardNo"
                      name="cardNo"
                      value={formData.cardNo}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('cardNo')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Enter your Apon Bangla Card Number"
                      className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                        focusedField === 'cardNo' 
                          ? 'border-blue-500 bg-white shadow-lg shadow-blue-100' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      required
                    />
                  </div>
                </div>

                {/* Messages Box */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-6 text-gray-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Tell us how we can help you..."
                      rows={4}
                      className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none ${
                        focusedField === 'message' 
                          ? 'border-blue-500 bg-white shadow-lg shadow-blue-100' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    style={{ backgroundColor: '#2563eb' }}
                    className="group w-fit mx-auto hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl shadow-xl flex items-center justify-center gap-2 relative overflow-hidden"
                  >
                    <span className="relative z-10 text-lg">Submit</span>
                    <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
                </div>

              </form>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex items-center justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Secure & Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Instant Verification</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}