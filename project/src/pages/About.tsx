import React from 'react';
import { Users, Award, Target, Globe } from 'lucide-react';

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

  return (
    <>
      <div className="pt-32">
      <div className="w-full border-t border-gray-200 mb-2"></div>
      <div className="text-center text-lg font-serif text-gray-800 mb-8">
        Our Mission <span className="text-teal-600">Is AN Inspired</span> Vision
      </div>

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
    </>
  );
};

export default About;