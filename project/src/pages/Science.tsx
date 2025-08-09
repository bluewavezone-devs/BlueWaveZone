import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import TypewriterText from '../components/TypewriterText';

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const underline: Variants = {
  hidden: { scaleX: 0 },
  show: { 
    scaleX: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 25,
    },
  },
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 border-b border-gray-200 pb-4 transition-all duration-300 hover:bg-gray-50 rounded-lg px-4 -mx-4">
      <button 
        className="flex justify-between items-center w-full text-left text-lg font-semibold text-[#3A3A3A] focus:outline-none py-3"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="pr-4">{question}</span>
        <span className={`transform transition-transform duration-300 text-[var(--color-teal)] ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{
          transitionProperty: 'max-height, opacity',
          willChange: 'max-height, opacity'
        }}
      >
        <div className="pt-1 pb-4 text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
};

const Science: React.FC = () => {
  const faqData = [
    // First section - two columns with one FAQ each
    [
      {
        question: "What makes Blue Wave Zone's bacterial strains unique?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder",
        alt: "Placeholder"
      },
      {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        image: "https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder",
        alt: "Placeholder"
      }
    ],
    // Second section - two columns with one FAQ each
    [
      {
        question: "Ut enim ad minim veniam, quis nostrud?",
        answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder",
        alt: "Placeholder"
      },
      {
        question: "Sed ut perspiciatis unde omnis iste natus?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        image: "https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder",
        alt: "Placeholder"
      }
    ],
    // Third section - two columns with one FAQ each
    [
      {
        question: "Duis aute irure dolor in reprehenderit?",
        answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        image: "https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder",
        alt: "Placeholder"
      },
      {
        question: "Nemo enim ipsam voluptatem quia voluptas?",
        answer: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        image: "https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder",
        alt: "Placeholder"
      },
      {
        question: "What role do your bacterial solutions play in environmental remediation?",
        answer: "Our specialized bacterial strains are used in bioremediation to break down pollutants, clean contaminated sites, and restore ecosystems. They can degrade oil spills, heavy metals, and other hazardous substances, offering an eco-friendly alternative to traditional cleanup methods.",
        image: "https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder",
        alt: "Placeholder"
      },
      {
        question: "What can Blue Wave Zone's bacterial solutions do for sustainable agriculture?",
        answer: "Our bacterial solutions enhance soil health, improve plant growth, and reduce the need for chemical fertilizers and pesticides. They help create more sustainable agricultural systems by promoting natural processes, increasing crop yields, and reducing environmental impact.",
        image: "https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder",
        alt: "Placeholder"
      }
    ]
  ];
  return (
    <div>
      <motion.section
        className="flex flex-col items-center justify-center text-center min-h-[60vh] pt-[196px] pb-4 bg-white overflow-hidden"
        style={{ fontFamily: 'var(--font-heading)' }}
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div variants={item} className="relative">
          <motion.h1
            style={{
              color: 'var(--color-brown)',
              fontFamily: 'Playfair Display, serif',
              fontSize: 52,
              fontWeight: 500,
              textTransform: 'uppercase',
              lineHeight: '48px',
              margin: '10px 0',
              letterSpacing: 1,
              textAlign: 'center',
              position: 'relative',
              display: 'inline-block',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            Beneficial Bacteria <span style={{ color: 'var(--color-teal)' }}>OUR</span> Ongoing Quest
          </motion.h1>
        </motion.div>
        
        <motion.div 
          className="flex justify-center gap-3 mt-2 mb-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                delayChildren: 0.4,
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            variants={underline}
            style={{ 
              width: 300, 
              height: 6, 
              background: 'var(--color-teal)', 
              borderRadius: 3,
              transformOrigin: 'left center',
            }} 
          />
          <motion.div 
            variants={underline}
            style={{ 
              width: 300, 
              height: 6, 
              background: 'var(--color-deep-blue)', 
              borderRadius: 3,
              transformOrigin: 'right center',
            }} 
          />
        </motion.div>
        <motion.p
          className="max-w-3xl mx-auto"
          style={{
            boxSizing: 'border-box',
            color: 'rgb(85, 61, 54)',
            display: 'block',
            fontFamily: '"Playfair Display", sans-serif',
            fontSize: '28px',
            fontStyle: 'normal',
            fontWeight: 500,
            height: '90px',
            letterSpacing: '-1px',
            lineHeight: '30px',
            marginBlockEnd: '44.8px',
            marginBlockStart: '0px',
            marginBottom: '44.8px',
            maxWidth: '42rem',
            width: '100%'
          }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { 
              opacity: 1, 
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: 0.6
              }
            }
          }}
        >
          Pioneering Future Frontiers: Microbial Innovations
        </motion.p>
      </motion.section>
    
    {/* Text Section */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <hr className="border-t border-[#3A3A3A] my-8" />
        
        <div className="text-center mb-8">
          <div className="text-2xl text-[#3A3A3A] mb-4">
            The Science <TypewriterText words={["is a next"]} prefix="" suffix="" /> solution.
          </div>
          
          <h2 className="text-3xl font-bold text-[#3A3A3A] mb-6">
            Extracting Beneficial Bacteria from Pure Soil
          </h2>
          
          <p className="text-lg text-[#3A3A3A] leading-relaxed">
            Welcome to Blue Wave Zone, a trailblazer in microbiology and biotechnology, expertly dedicated to harnessing the power of beneficial bacteria from untouched soil. Our journey, rooted in Modena, Italy over thirty years ago, is marked by groundbreaking methods and achievements in applying these microorganisms across agricultural, industrial, and medical sectors. At Blue Wave Zone, we stand at the forefront of microbial biotechnology, specializing in the isolation of unique bacterial strains from pristine soils, guided by a profound understanding of microbial ecology. Our work delves into the essential roles these organisms play in diverse ecological and physiological frameworks, showcasing our commitment to innovative research and development.
          </p>
        </div>
        
        <hr className="border-t border-[#3A3A3A] my-8" />
      </div>
    </section>

    {/* Methodology Section */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-[#3A3A3A] mb-12">Methodology</h2>
        <p className="text-center text-lg text-[#3A3A3A] mb-12 max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        <div className="relative w-full flex flex-col md:flex-row h-[500px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
          {/* Sample 1 */}
          <div className="relative h-full flex-1 overflow-hidden transition-all duration-700 group">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder" 
                alt="Placeholder"
                className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-105 rounded-lg shadow-xl border-4 border-white"
                style={{
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex items-center justify-center p-6 z-10">
              <div className="text-white text-center transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-4">Lorem Ipsum</h3>
                <p className="max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>

          {/* Sample 2 */}
          <div className="relative h-full flex-1 overflow-hidden transition-all duration-700 group border-l-2 border-white">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder" 
                alt="Placeholder"
                className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-105 rounded-lg shadow-xl border-4 border-white"
                style={{
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex items-center justify-center p-6 z-10">
              <div className="text-white text-center transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-4">Dolor Sit Amet</h3>
                <p className="max-w-md">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>

          {/* Sample 3 */}
          <div className="relative h-full flex-1 overflow-hidden transition-all duration-700 group border-l-2 border-white">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder" 
                alt="Placeholder"
                className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-105 rounded-lg shadow-xl border-4 border-white"
                style={{
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex items-center justify-center p-6 z-10">
              <div className="text-white text-center transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-4">Consectetur Adipiscing</h3>
                <p className="max-w-md">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Horizontal Line */}
      <div className="container mx-auto px-4 max-w-4xl">
        <hr className="border-t border-[#3A3A3A] my-16" />
      </div>

      {/* FAQ Sections */}
      {faqData.map((section, sectionIndex) => (
        <section key={sectionIndex} className={`py-16 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4 max-w-6xl">
            {sectionIndex > 0 && (
              <h2 className="text-3xl font-bold text-center text-[#3A3A3A] mb-12">
                {sectionIndex === 1 ? 'Research & Development' : 'Applications & Impact'}
              </h2>
            )}
            
            <div className={`grid grid-cols-1 ${section.length > 1 ? 'md:grid-cols-2' : 'max-w-4xl mx-auto'} gap-12`}>
              {section.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <div className="mb-8">
                    <FAQItem 
                      question={item.question}
                      answer={item.answer || ""}
                    />
                  </div>
                  
                  {/* Image below FAQ */}
                  <div className="mt-8 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <img 
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-96 object-cover border-4 border-white"
                      style={{
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      
      {/* New Two-Column Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <div className="text-2xl text-[#3A3A3A] mb-4">
                <TypewriterText words={["Innovation in Action"]} prefix="" suffix="" />
              </div>
              <h3 className="text-2xl font-bold text-[#3A3A3A] mb-6">
                Utilization of beneficial bacteria to bolster agricultural production
              </h3>
              <div className="rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <img 
                  src="https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder" 
                  alt="Beneficial bacteria in agriculture"
                  className="w-full h-96 object-cover border-4 border-white"
                  style={{
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }}
                />
              </div>
            </div>

            {/* Right Column */}
            <div>
              <p className="text-lg text-[#3A3A3A] leading-relaxed mb-8">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
              
              {/* FAQ Items */}
              <div className="space-y-6">
                <FAQItem 
                  question="At vero eos et accusamus et iusto odio dignissimos?"
                  answer="Ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
                />
                <FAQItem 
                  question="Similique sunt in culpa qui officia deserunt mollitia?"
                  answer="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."
                />
                <FAQItem 
                  question="Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus?"
                  answer="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Science;