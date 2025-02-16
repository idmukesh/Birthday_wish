import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Sparkles, Star, Cake, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const CelebrationPage = () => {
  useEffect(() => {
    // Start celebration effects immediately when page loads
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2020/celebration-horn-with-confetti.wav');
    audio.play().catch(() => {
      // Ignore audio play errors (some browsers block autoplay)
    });
  }, []);

  const confettiColors = [
    '#FF69B4', // Pink
    '#FFD700', // Gold
    '#FF6B6B', // Coral
    '#4CAF50', // Green
    '#64B5F6', // Blue
    '#BA68C8', // Purple
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 to-purple-600 overflow-hidden relative">
      {/* Continuous Confetti */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`confetti-${i}`}
          initial={{ 
            top: -20,
            left: `${Math.random() * 100}%`,
            scale: 0,
            rotate: 0
          }}
          animate={{
            top: '120%',
            scale: [0, 1, 0.5],
            rotate: Math.random() > 0.5 ? 360 : -360,
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "linear"
          }}
          className="absolute w-4 h-4"
          style={{
            background: confettiColors[Math.floor(Math.random() * confettiColors.length)],
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
          }}
        />
      ))}

      {/* Party Poppers */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`popper-${i}`}
          className="absolute"
          initial={{
            top: '50%',
            left: '50%',
            scale: 0,
            rotate: (i * 45) + 'deg',
          }}
          animate={{
            scale: [0, 1.5, 1],
            x: [0, Math.cos(i * Math.PI / 4) * 200],
            y: [0, Math.sin(i * Math.PI / 4) * 200],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.2,
          }}
        >
          <PartyPopper className="w-12 h-12 text-yellow-300" />
        </motion.div>
      ))}

      {/* Floating Stars and Sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          initial={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            scale: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          {i % 2 === 0 ? (
            <Star className="w-8 h-8 text-yellow-200" />
          ) : (
            <Sparkles className="w-8 h-8 text-white" />
          )}
        </motion.div>
      ))}

      {/* Central Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="text-center"
        >
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-8 text-shadow-lg">
            🎉 Hooray! 🎉
          </h1>
          <div className="flex gap-4 justify-center mb-12">
            <Cake className="w-16 h-16 text-white" />
            <Gift className="w-16 h-16 text-white" />
            <PartyPopper className="w-16 h-16 text-white" />
          </div>
          <p className="text-2xl md:text-4xl text-white mb-12 text-shadow">
            Let's make this celebration unforgettable!
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-pink-500 px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-pink-50 transition-all transform hover:scale-105"
          >
            Back to Party
          </Link>
        </motion.div>
      </div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
        </motion.div>
      </div>
    </div>
  );
};

export default CelebrationPage;