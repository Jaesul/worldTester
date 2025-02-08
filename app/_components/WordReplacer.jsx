"use client";

import React, { useState, useEffect } from 'react';

const WordReplacer = ({ words, classes="" }) => {
    const [displayedWord, setDisplayedWord] = useState(words[0]);
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(true);
    const [charIndex, setCharIndex] = useState(0);
  
    useEffect(() => {
      let interval;
  
      const deleteChars = () => {
        if (charIndex > 0) {
          setCharIndex(prev => prev - 1);
          setDisplayedWord(prev => prev.slice(0, charIndex - 1));
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsDeleting(false); // Start typing next word after deletion is complete
          }, 500);
        }
      };
  
      const typeNextWord = () => {
        const nextWord = words[(index + 1) % words.length];
        if (charIndex < nextWord.length) {
          setCharIndex(prev => prev + 1);
          setDisplayedWord(nextWord.slice(0, charIndex + 1));
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsDeleting(true);
            setIndex((index + 1) % words.length); // Move to next word
          }, 500); // Pause before starting the deletion of the next word
        }
      };
  
      if (isDeleting) {
        interval = setInterval(deleteChars, 60); // Speed of character deletion
      } else {
        interval = setInterval(typeNextWord, 60); // Speed of typing next word
      }
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, [isDeleting, charIndex, index, words]);
  
    return (
        <span className={classes}>{displayedWord}.</span>
    );
  };
  
  export default WordReplacer;
