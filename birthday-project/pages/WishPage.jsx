import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const WishPage = () => {
  // Butterfly animation variants
  const butterflyVariants = {
    animate: (i) => ({
      x: [0, Math.sin(i * Math.PI) * 100, -Math.sin(i * Math.PI) * 100, 0], // Use Math.PI for better range control
      y: [0, Math.cos(i * Math.PI) * 100, -Math.cos(i * Math.PI) * 100, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    }),
  };

  // Typing animation for each letter
  const typingVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: 'auto',
      transition: {
        duration: 0.05,
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const paragraphText = [
    'May', ' ', 'your', ' ', 'day', ' ', 'be', ' ', 'filled', ' ', 'with', ' ', 'joy', ',', ' ',
    'laughter', ',', ' ', 'and', ' ', 'all', ' ', 'the', ' ', 'love', ' ', 'in', ' ', 'the', ' ',
    'world!', ' ', 'Here\'s', ' ', 'to', ' ', 'another', ' ', 'amazing', ' ', 'year', ' ', 'of', ' ',
    'making', ' ', 'beautiful', ' ', 'memories!', ' ', '🎂', '✨'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
      {/* Animated Butterflies */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={butterflyVariants}
          animate="animate"
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          <Heart className="text-pink-400 w-8 h-8" />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl p-12 shadow-2xl mx-4 text-center relative"
        style={{ width: '80vw' }} // Increased div width to 80vw
      >
        <Sparkles className="absolute top-4 right-4 text-yellow-400 w-8 h-8" />

        {/* Animated Heading */}
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-5xl md:text-7xl font-bold text-pink-600 mb-8" // Increased font size
          style={{ fontFamily: 'cursive' }}
        >
          {/* Typing animation for heading */}
          <motion.div
            variants={typingVariants}
            initial="hidden"
            animate="visible"
          >
            {['H', 'a', 'p', 'p', 'y', ' ', 'B', 'i', 'r', 't', 'h', 'd', 'a', 'y', '!', ' ', '🎉'].map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed" // Increased font size
        >
          {/* Typing animation for paragraph */}
          <motion.div
            variants={typingVariants}
            initial="hidden"
            animate="visible"
          >
            {paragraphText.map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: 'spring' }}
        >
          <Link
            to="/"
            className="inline-block bg-pink-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-pink-600 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WishPage;
