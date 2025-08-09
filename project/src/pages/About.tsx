import React, { useState } from 'react';
import { Users, Award, Target, Globe, Mail, FileText } from 'lucide-react';
import TypewriterText from '../components/TypewriterText';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pioneering research in bacterial extraction and application to solve real-world problems.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Developing environmentally responsible solutions that benefit both people and planet.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working with partners across academia, industry, and government to maximize impact.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in research methodology and scientific integrity.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Scientific Officer',
      image: 'https://images.pexels.com/photos/3760259/pexels-photo-3760259.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading microbiologist with 15 years of experience in soil bacterial ecology and biotechnology applications.'
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'Director of Research',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in agricultural biotechnology and sustainable farming practices with over 20 publications.'
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'Lead Biotechnologist',
      image: 'https://images.pexels.com/photos/3760266/pexels-photo-3760266.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specialist in industrial applications of bacteria with focus on environmental sustainability.'
    },
    {
      name: 'Dr. James Thompson',
      role: 'Medical Research Director',
      image: 'https://images.pexels.com/photos/3760269/pexels-photo-3760269.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Clinical researcher investigating therapeutic applications of soil-derived bacteria.'
    }
  ];

  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [documentForm, setDocumentForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    requestDetails: ''
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

  const faqs = [
    {
      question: "What makes our research unique?",
      answer: "Our research focuses on extracting beneficial bacteria from pristine soil environments, using cutting-edge biotechnology to develop sustainable solutions."
    },
    {
      question: "How do we ensure quality?",
      answer: "We maintain the highest standards of scientific rigor and environmental responsibility in all our research and development processes."
    },
    {
      question: "What industries do we serve?",
      answer: "Our research has applications across agriculture, industrial biotechnology, environmental remediation, and human health sectors."
    },
    {
      question: "How can I get involved?",
      answer: "We welcome collaborations with researchers, industry partners, and institutions. Contact us to discuss potential partnerships."
    }
  ];

  return (
    <div className="pt-32 px-4">
      {/* First Section - Two Columns */}
      <section className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Typewriter Text and Image */}
          <div>
            <h1 className="text-4xl font-bold mb-8">
              <TypewriterText 
                words={["Innovation", "Discovery", "Excellence", "Progress"]} 
                prefix="Advancing " 
                suffix=" Through Science"
              />
            </h1>
            <div className="mt-8">
              <img 
                src="https://images.pexels.com/photos/3735745/pexels-photo-3735745.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Scientific Research"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          {/* Right Column - Subheading, Description, and FAQs */}
          <div>
            <h2 className="text-3xl font-bold mb-6">About Our Research</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At BlueWave Zone, we're pioneering the next generation of microbial solutions. 
              Our team of dedicated scientists is unlocking the potential of soil bacteria to 
              address global challenges in agriculture, industry, and healthcare.
            </p>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-l-4 border-teal-500 pl-4 py-2">
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <p className="text-gray-600 mt-1">{faq.answer}</p>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Comment or Message</label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={(e) => handleInputChange(e, 'contact')}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
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

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                     style={{ backgroundColor: 'var(--color-teal)', color: 'white' }}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-teal-200"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-teal-700 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At BlueWave Zone, we believe that the microscopic world holds the key to solving some 
                of humanity's greatest challenges. Our mission is to unlock the potential of soil bacteria 
                to create sustainable solutions that benefit agriculture, industry, and human health.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Through rigorous scientific research and innovative biotechnology, we extract and 
                characterize beneficial bacteria from pristine soil environments. Our work focuses on 
                understanding the complex relationships between bacteria and their hosts, developing 
                practical applications that can be scaled for real-world impact.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to advancing scientific knowledge while maintaining the highest 
                standards of environmental responsibility and ethical research practices.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3735745/pexels-photo-3735745.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Laboratory research"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                     style={{ backgroundColor: 'var(--color-teal)', color: 'white' }}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Research Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                     style={{ backgroundColor: 'var(--color-teal)' + '20' }}>
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Agriculture</h3>
                <p className="text-gray-600">
                  Developing bioinoculants that enhance crop productivity, improve soil health, 
                  and reduce the need for chemical fertilizers.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                     style={{ backgroundColor: 'var(--color-brown)' + '20' }}>
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Industry</h3>
                <p className="text-gray-600">
                  Creating bacterial solutions for bioremediation, waste treatment, and 
                  sustainable manufacturing processes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                     style={{ backgroundColor: 'var(--color-deep-blue)' + '20' }}>
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Medicine</h3>
                <p className="text-gray-600">
                  Investigating therapeutic bacteria for gut health, immune support, 
                  and novel treatment approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Location</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              BlueWave Zone is located in Atlantis, Western Cape, South Africa, where we have 
              access to diverse soil environments and a rich ecosystem for bacterial research. 
              Our facility combines state-of-the-art laboratory equipment with field research 
              capabilities.
            </p>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Address:</strong> 14 Neil Hare Road, Atlantis, Western Cape, South Africa</p>
                <p><strong>Email:</strong> hello@bluewavezone.co.za</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;