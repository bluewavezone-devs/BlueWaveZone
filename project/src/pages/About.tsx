import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';

const About: React.FC = () => {

  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: 'Leave your comment or document request in the box below.'
  });

  const [documentForm, setDocumentForm] = useState({
    firstName: '',
    lastName: '',
    email: 'admin@bluewavezone.co.za',
    requestDetails: 'Leave your comment or document request in the box below.'
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', contactForm);
  };

  const handleDocumentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Document request submitted:', documentForm);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, form: string) => {
    const { name, value } = e.target;
    if (form === 'contact') {
      setContactForm(prev => ({ ...prev, [name]: value }));
    } else {
      setDocumentForm(prev => ({ ...prev, [name]: value }));
    }
  };

  // Define FAQ type
  type FAQ = {
    question: string;
    answer: string;
    isOpen?: boolean;
  };

  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: "What makes our research unique?",
      answer: "Our research focuses on extracting beneficial bacteria from pristine soil environments, using cutting-edge biotechnology to develop sustainable solutions.",
      isOpen: false
    },
    {
      question: "How do we ensure quality?",
      answer: "We maintain the highest standards of scientific rigor and environmental responsibility in all our research and development processes.",
      isOpen: false
    },
    {
      question: "What industries do we serve?",
      answer: "Our research has applications across agriculture, industrial biotechnology, environmental remediation, and human health sectors.",
      isOpen: false
    },
    {
      question: "How can I get involved?",
      answer: "We welcome collaborations with researchers, industry partners, and institutions. Contact us to discuss potential partnerships.",
      isOpen: false
    }
  ]);

  return (
    <div className="pt-32 px-4">
      {/* First Section - Two Columns */}
      <section className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Animated Heading and Image */}
          <div>
            <motion.h1 
              className="text-5xl font-bold mb-8 text-[var(--color-brown)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
            >
              About Us
            </motion.h1>
            <div className="mt-8">
              <img 
                src="/images/soil-research-analysis.jpg"
                alt="Soil research and analysis"
                className="w-full h-auto max-h-[300px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          {/* Right Column - FAQ Section */}
          <div>
            <motion.h2 
              className="text-3xl font-bold mb-4 text-[var(--color-brown)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.2
                }
              }}
            >
              Our Purpose
            </motion.h2>
            <p className="text-lg text-gray-700 mb-6">
              Blue Wave Zone is committed to extract beneficial bacteria from the rhizosphere of pure soil to foster innovative practices in agriculture, drive sustainability in industry, and facilitate breakthroughs in medical sciences.
            </p>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
                  <button 
                    className="flex justify-between items-center w-full text-left p-4 focus:outline-none"
                    onClick={() => {
                      const updatedFaqs = [...faqs];
                      updatedFaqs[index] = { ...faq, isOpen: !faq.isOpen };
                      setFaqs(updatedFaqs);
                    }}
                    aria-expanded={faq.isOpen}
                  >
                    <span className="font-medium text-gray-800">{faq.question}</span>
                    <span className={`transform transition-transform duration-300 text-teal-600 ${faq.isOpen ? 'rotate-180' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${faq.isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    style={{
                      transitionProperty: 'max-height, opacity',
                      willChange: 'max-height, opacity'
                    }}
                  >
                    <div className="px-4 pb-4 pt-1 text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Us Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Mail className="h-6 w-6 text-teal-600 mr-2" />
                <h2 className="text-2xl font-bold">Contact Us</h2>
              </div>
              <form onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={contactForm.firstName}
                      onChange={(e) => handleInputChange(e, 'contact')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={contactForm.lastName}
                      onChange={(e) => handleInputChange(e, 'contact')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange(e, 'contact')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Comment or Document Request *</label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={(e) => handleInputChange(e, 'contact')}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors duration-200"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Document Request Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <FileText className="h-6 w-6 text-teal-600 mr-2" />
                <h2 className="text-2xl font-bold">Document Request</h2>
              </div>
              <form onSubmit={handleDocumentSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={documentForm.firstName}
                      onChange={(e) => handleInputChange(e, 'document')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={documentForm.lastName}
                      onChange={(e) => handleInputChange(e, 'document')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={documentForm.email}
                    onChange={(e) => handleInputChange(e, 'document')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Please supply us with the sector in which you are involved plus the reason for requesting specific certification, in the box below *
                  </label>
                  <textarea
                    name="requestDetails"
                    value={documentForm.requestDetails}
                    onChange={(e) => handleInputChange(e, 'document')}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;