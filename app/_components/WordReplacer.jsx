"use client";

import React, { useState, useEffect } from 'react';

const WordReplacer = ({ words }) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(true);
  const [displayedWord, setDisplayedWord] = useState(words[0]);

  useEffect(() => {
    let interval;
    let charIndex = 0;

    const deleteChars = () => {
      if (charIndex > 0) {
        setDisplayedWord(prev => prev.slice(0, charIndex - 1));
        charIndex -= 1;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsDeleting(false);
        }, 500); // Pause before typing the next word
      }
    };

    const typeNextWord = () => {
      const nextWord = words[(index + 1) % words.length];
      if (charIndex < nextWord.length) {
        setDisplayedWord(prev => prev + nextWord[charIndex]);
        charIndex += 1;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsDeleting(true);
          setIndex((index + 1) % words.length);
        }, 500); // Pause before deleting the word
      }
    };

    if (isDeleting) {
      interval = setInterval(deleteChars, 100); // Speed of character deletion
    } else {
      interval = setInterval(typeNextWord, 150); // Speed of typing next word
    }

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isDeleting, displayedWord, index, words]);

  return (
    <div>
      <h1>{displayedWord}</h1>
    </div>
  );
};

export default WordReplacer;
