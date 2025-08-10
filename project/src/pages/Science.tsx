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
        question: "Challenges and Future Directions",
        answer: "Despite significant progress in the field, there are ongoing challenges. Future research focuses on fine-tuning bacterial strains to suit particular environments and creating stronger formulations for a range of uses. The extraction and use of beneficial bacteria from untouched soil mark a notable advance in agriculture, industry, and medicine. Thirty years of research and development have established a base for ongoing innovation in applying soil-sourced microbiota for diverse beneficial purposes.",
        image: "/images/sustainable-agriculture-plant-growth-3.jpg",
        alt: "Challenges and Future Directions"
      },
      {
        question: "Development and Improvements",
        answer: "The methodologies initially developed in Modena have undergone continual refinement. Advances in molecular biology and genomics have been particularly influential, allowing for more precise identification and modification of bacterial strains. Additionally, improvements in fermentation technology and bioreactor design have enhanced the mass production of these bacteria.",
        image: "/images/beneficial-bacteria-microscope-2.jpg",
        alt: "Development and Improvements"
      }
    ],
    // Second section - Beneficial Bacteria Overview
    [
      {
        question: "An Overview",
        answer: "Beneficial bacteria play a crucial role in agriculture, offering an array of advantages. These microorganisms can enhance nutrient uptake, promote plant growth, and confer disease resistance. Key genera such as Rhizobium, Azospirillum, and Bacillus have been at the forefront in facilitating nitrogen fixation, phytohormone production, and pathogen suppression respectively. Their role in promoting a balanced ecosystem, thereby enabling plants to thrive in various environmental conditions, is essential.",
        image: "/images/beneficial-bacteria-microscope-1.jpg",
        alt: "Beneficial Bacteria Overview"
      },
      {
        question: "Beneficial Bacteria in Agriculture",
        answer: "Our company is characterized by its commitment to environmentally friendly agricultural practices, focusing on biological over chemical solutions. Integrating beneficial bacteria into this paradigm offers a multifaceted approach to sustainable farming. This integration not only supports crop health and productivity but also aligns with organic farming principles, minimizes environmental impact, and fosters resilience against climate change.",
        image: "/images/organic-fertilizer-testing-lab.png",
        alt: "Agriculture Application"
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
            Beneficial Bacteria <span style={{ color: 'var(--color-teal)' }}>OUR Ongoing Quest</span>
          </motion.h1>
        </motion.div>
        
        <motion.div 
          className="flex justify-start gap-3 mt-0 -ml-4 mb-8"
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
              width: 302, 
              height: 4, 
              background: 'var(--color-teal)', 
              borderRadius: 2,
              transformOrigin: 'left center',
              marginLeft: 15,
            }} 
          />
          <motion.div 
            variants={underline}
            style={{ 
              width: 262, 
              height: 4, 
              background: 'var(--color-deep-blue)', 
              borderRadius: 2,
              transformOrigin: 'right center',
              marginRight: 3.5,
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
          <motion.div 
            className="text-2xl text-[#3A3A3A] mb-8 pb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: 1.4,
                duration: 0.6
              }
            }}
            style={{
              paddingBottom: '1.5rem'  // Adds 24px of padding at the bottom
            }}
          >
            The Science is a{' '}
            <TypewriterText 
              words={["next level", "innovative", "soil healing"]}
              prefix=""
              suffix=""
            />{' '}
            solution.
          </motion.div>
          
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
          Blue Wave Zone's methodology entails several key processes:
        </p>
        
        <div className="relative w-full flex flex-col md:flex-row h-[500px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
          {/* Sample 1 - Sampling and Isolation */}
          <div className="relative h-full flex-1 overflow-hidden transition-all duration-700 group">
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/soil-testing-laboratory.jpg" 
                alt="Soil testing and sampling"
                className="w-full h-full object-cover rounded-lg transform transition-all duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex items-center justify-center p-6 z-10">
              <div className="text-white text-left transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 p-6">
                <h3 className="text-2xl font-bold mb-4">Sampling and Isolation</h3>
                <p className="max-w-md">
                  Pure soil is sampled using sterile techniques to avoid contamination. The isolation of bacteria is achieved through selective culturing methods, tailored to enrich desired microbial species.
                </p>
              </div>
            </div>
          </div>

          {/* Sample 2 - Sequencing and Characterization */}
          <div className="relative h-full flex-1 overflow-hidden transition-all duration-700 group border-l-2 border-white">
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/beneficial-bacteria-research.jpg" 
                alt="Bacteria characterization"
                className="w-full h-full object-cover rounded-lg transform transition-all duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex items-center justify-center p-6 z-10">
              <div className="text-white text-left transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 p-6">
                <h3 className="text-2xl font-bold mb-4">Sequencing and Characterization</h3>
                <p className="max-w-md">
                  The isolated bacteria undergo various processes, enabling the identification of beneficial traits. These may include nitrogen fixation in plants, degradation of toxic compounds in industrial settings, or antimicrobial properties useful in medicine.
                </p>
              </div>
            </div>
          </div>

          {/* Sample 3 - Application Development */}
          <div className="relative h-full flex-1 overflow-hidden transition-all duration-700 group border-l-2 border-white">
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/sustainable-agriculture-plant-growth-2.jpg" 
                alt="Application development in agriculture"
                className="w-full h-full object-cover rounded-lg transform transition-all duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex items-center justify-center p-6 z-10">
              <div className="text-white text-left transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 p-6">
                <h3 className="text-2xl font-bold mb-4">Application Development</h3>
                <p className="max-w-md">
                  Based on the functional traits of the bacteria, specific applications are developed for our customers. In agriculture, this might involve biofertilizers or growth enhancers. Industrial applications can include bioremediation agents, while in medicine, the focus is on developing probiotics or novel antibiotics.
                </p>
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
        <section key={sectionIndex} className="py-16 bg-white">
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
                      className="w-full h-96 object-cover rounded-lg border-4 border-white"
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
              <div className="space-y-6 mb-8">
                <div className="text-2xl font-medium text-[#3A3A3A]">
                  The Industrial{' '}
                  <TypewriterText 
                    words={["innovation", "nurturing", "remediation"]} 
                    prefix="" 
                    suffix="" 
                  />
                  {' '}works.
                </div>
                <p className="text-2xl font-bold text-[#3A3A3A] mt-8">
                  Utilization of beneficial bacteria to bolster agricultural production
                </p>
              </div>
              <div className="rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <img 
                  src="/images/industrial-bacteria-application.jpg" 
                  alt="Industrial applications of beneficial bacteria"
                  className="w-full h-96 object-cover rounded-lg border-4 border-white"
                  style={{
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }}
                />
              </div>
            </div>

            {/* Right Column */}
            <div>
              <p className="text-lg text-[#3A3A3A] leading-relaxed mb-8">
                The extension of the Blue Wave Zone's biotechnological strategies to industrial processes, especially in the treatment of FOG pollution, marks a new era in industrial waste management. This paper outlines the beneficial role of specific bacteria in degrading complex organic compounds and improving the efficiency and sustainability of industrial and sewage treatment processes.
              </p>
              
              {/* FAQ Items */}
              <div className="space-y-6">
                <FAQItem 
                  question="The Role of Beneficial Bacteria in Industrial Waste Management"
                  answer="Beneficial bacteria, particularly those adept at breaking down organic compounds like fats, oils, and grease, offer a natural and effective solution for managing industrial waste. These microorganisms, such as species of Pseudomonas, Bacillus, and Lactobacillus, are capable of enzymatic degradation of complex FOG compounds, transforming them into simpler, non-polluting forms."
                />
                <FAQItem 
                  question="Application in Sewage Treatment Plants"
                  answer="In sewage treatment plants, the introduction of specific strains of beneficial bacteria from the Blue Wave Zone can significantly optimize the degradation process of organic waste. These bacteria accelerate the breakdown of FOG components, reducing sludge volume, minimizing foul odors, and enhancing overall treatment efficiency. Their ability to operate under varying environmental conditions makes them highly adaptable and efficient in wastewater management."
                />
                <FAQItem 
                  question="Industrial Processes and FOG Pollution Remediation"
                  answer="Industries dealing with high volumes of FOG can benefit substantially from adopting these biotechnological solutions. For example, in the food processing and dairy industries, where FOG waste is prevalent, the use of these beneficial bacteria can not only aid in waste treatment but also in maintaining pipeline and drainage systems, preventing blockages, and mitigating the risk of environmental contamination."
                />
                <FAQItem 
                  question="Future Directions"
                  answer="We are developing robust consortia of bacteria that can withstand varied industrial conditions, and creating sustainable, cost-effective deployment strategies. The application of beneficial bacteria from the Blue Wave Zone in industrial settings, particularly for FOG pollution remediation, opens up new pathways for sustainable industrial waste management. This approach not only aligns with environmental stewardship but also offers practical, efficient solutions for industries grappling with waste management challenges."
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