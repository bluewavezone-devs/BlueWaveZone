import React from 'react';
import { motion, Variants } from 'framer-motion';
import TypewriterText from './TypewriterText';

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

const HeroSection: React.FC = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center text-center min-h-[60vh] pt-32 pb-16 bg-white overflow-hidden"
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
          MICROBIAL <span style={{ color: 'var(--color-teal)' }}>FRONTIER</span>
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
        Extracting bacteria from Pure Soil to use as powerful tools for Agriculture,
        industry, and health.
      </motion.p>
      <motion.div 
        className="mt-8 mb-16"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { 
            opacity: 1, 
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 15,
              delay: 0.8
            }
          }
        }}
      >
        <motion.button
          className="px-10 py-4 text-lg rounded border-2 border-[var(--color-brown)] text-[var(--color-brown)] font-semibold hover:bg-[var(--color-brown)] hover:text-white transition-all duration-300 transform hover:scale-105"
          style={{ fontFamily: 'var(--font-body)', minWidth: '220px' }}
          whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
          whileTap={{ scale: 0.98 }}
        >
          Explore Our Science
        </motion.button>
      </motion.div>
      <motion.div 
        className="w-full"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              delay: 1.2
            }
          }
        }}
      >
        <motion.hr 
          className="w-full max-w-4xl border-t border-[var(--color-brown)] my-8 mx-auto"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: 1, 
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
        />
        <div className="flex justify-center w-full">
          <motion.span
            className="text-lg"
            style={{ 
              color: 'var(--color-brown)', 
              fontFamily: 'var(--font-body)',
              display: 'inline-block'
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: 1.4,
                duration: 0.6
              }
            }}
          >
            The Science{' '}
            <TypewriterText
              words={["Is A Next Le"]}
              prefix=""
              suffix=""
            />{' '}
            Solution
          </motion.span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
