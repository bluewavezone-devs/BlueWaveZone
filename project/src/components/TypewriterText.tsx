import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
  prefix: string;
  suffix: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ words, prefix, suffix }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span>
      {prefix}
      <span style={{ color: 'var(--color-teal)' }} className="typewriter">
        {currentText}
      </span>
      {suffix}
    </span>
  );
};

export default TypewriterText;