import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="bg-neutral-900 text-white">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center mt-10">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-m font-medium text-neutral-300 mb-2 ml-2 text-left">
                Name
              </label>
              <input
                id="name"
                className={`w-full px-4 py-3  bg-neutral-700/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                  errors.name ? 'border-red-500' : ''
                }`}
                placeholder="Your name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-m font-medium text-neutral-300 mb-2 ml-2 text-left">
                Email
              </label>
              <input
                id="email"
                className={`w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="john@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-m font-medium text-neutral-300 mb-2 ml-2 text-left">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className={`w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none ${
                  errors.message ? 'border-red-500' : ''
                }`}
                placeholder="Your message here..."
                {...register('message', { required: 'Message is required' })}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900/20 to-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-neutral-800/50 rounded-xl backdrop-blur-sm border border-neutral-700">
              <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
              <p className="text-purple-400">contact@ravanaos.com</p>
            </div>
            <div className="p-6 bg-neutral-800/50 rounded-xl backdrop-blur-sm border border-neutral-700">
              <h3 className="text-xl font-bold mb-2 text-white">Location</h3>
              <p className="text-purple-400">Colombo, Sri Lanka</p>
            </div>
            <div className="p-6 bg-neutral-800/50 rounded-xl backdrop-blur-sm border border-neutral-700">
              <h3 className="text-xl font-bold mb-2 text-white">Social</h3>
              <p className="text-purple-400">@RavanaOS</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
