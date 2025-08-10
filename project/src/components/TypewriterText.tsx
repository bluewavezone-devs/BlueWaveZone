import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  words: string[];
  prefix: string;
  suffix: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ words, prefix, suffix }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const [letterStates, setLetterStates] = useState<Array<{ char: string; id: number; isNew: boolean }>>([]);
  const [letterId, setLetterId] = useState(0);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        // When deleting, remove the last character with fade out animation
        if (letterStates.length > 0) {
          setLetterStates(prev => 
            prev.slice(0, -1).map(letter => ({ ...letter, isNew: false }))
          );
        }
        
        setCurrentText(word.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        // When adding, add new character with fade in animation
        const newChar = word[currentText.length];
        if (newChar) {
          setLetterStates(prev => [
            ...prev,
            { char: newChar, id: letterId, isNew: true }
          ]);
          setLetterId(prev => prev + 1);
          setCurrentText(word.substring(0, currentText.length + 1));
        }
        
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 80 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, letterStates, letterId]);

  return (
    <span className="inline-flex items-baseline overflow-hidden">
      {prefix}
      <span style={{ color: 'var(--color-teal)' }} className="inline-flex flex-row">
        {letterStates.map(({ char, id, isNew }) => (
          <motion.span
            key={id}
            initial={{ 
              opacity: 0, 
              y: isNew ? 20 : -20,
              display: 'inline-block'
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.3,
                ease: 'easeOut'
              }
            }}
            exit={{ 
              opacity: 0, 
              y: -20,
              position: 'absolute',
              transition: { 
                duration: 0.2,
                ease: 'easeIn'
              }
            }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
      {suffix}
    </span>
  );
};

export default TypewriterText;