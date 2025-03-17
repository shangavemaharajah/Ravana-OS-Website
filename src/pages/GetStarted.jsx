import React, { useState } from 'react';

const GetStarted = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    employeeCount: '',
    industry: '',
    country: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    consent: false
  });

  const industries = [
    'Technology',
    'Healthcare',
    'Financial Services',
    'Manufacturing',
    'Retail',
    'Education',
    'Hospitality',
    'Real Estate',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-neutral-300 mb-2">Business Name*</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="employeeCount" className="block text-sm font-medium text-neutral-300 mb-2">Number of Employees*</label>
              <select
                id="employeeCount"
                name="employeeCount"
                value={formData.employeeCount}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              >
                <option value="">Select range</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
              </select>
            </div>
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-neutral-300 mb-2">Industry*</label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              >
                <option value="">Select industry</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-neutral-300 mb-2">Country*</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-neutral-300 mb-2">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-neutral-300 mb-2">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Business Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">Contact Number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700">
              <h3 className="text-xl font-semibold text-white mb-4">Review Your Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-neutral-400">Business Details</p>
                  <p className="text-white">{formData.businessName}</p>
                  <p className="text-white">{formData.employeeCount} employees</p>
                  <p className="text-white">{formData.industry}</p>
                  <p className="text-white">{formData.country}</p>
                </div>
                <div>
                  <p className="text-neutral-400">Personal Details</p>
                  <p className="text-white">{formData.firstName} {formData.lastName}</p>
                  <p className="text-white">{formData.email}</p>
                  <p className="text-white">{formData.phone}</p>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
              <label htmlFor="consent" className="text-sm text-neutral-300">
                I consent to RavanaOS collecting and using my information for communication purposes. 
                I understand that I can opt-out at any time.*
              </label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="page-transition bg-neutral-900 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]" />
        </div>
        <div className="container relative py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="animate-fade-in text-4xl sm:text-5xl lg:text-display-large mb-6 sm:mb-8 text-white leading-tight">
              Get Started with RavanaOS
            </h1>
            <p className="animate-slide-up text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
              Join the future of intelligent business computing. Complete the form below to begin your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= item ? 'bg-purple-600 text-white' : 'bg-neutral-700 text-neutral-400'
                  }`}>
                    {item}
                  </div>
                  {item < 3 && (
                    <div className={`w-24 h-1 ${
                      step > item ? 'bg-purple-600' : 'bg-neutral-700'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-neutral-800/50 rounded-xl p-8 backdrop-blur-sm border border-neutral-700">
              {renderStep()}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 bg-neutral-700 rounded-lg text-white font-semibold hover:bg-neutral-600 transition-colors"
                  >
                    Previous
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity ml-auto"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity ml-auto"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;