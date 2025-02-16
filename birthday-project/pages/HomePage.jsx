import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Cake, PartyPopper, Star, Sparkles, Gift } from 'lucide-react';

const images = [
    'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2?w=800&h=600&fit=crop'
];

const HomePage = () => {
    const [isCakeClicked, setIsCakeClicked] = useState(false);
    const navigate = useNavigate();

    const floatingVariants = {
        animate: (i) => ({
            y: [0, -20, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0],
            rotate: [0, i % 2 === 0 ? 3 : -3, 0],
            transition: {
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut"
            }
        })
    };

    return (
        <div className="min-h-screen bg-pink-100">
            {/* Hero Section with Decorative Header */}
            <div className="relative h-screen overflow-hidden">
                {/* Background Image Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("images/birthday bg 5.jpg")',
                        filter: 'brightness(0.8)'
                    }}
                />

                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255,192,203,0.3) 0%, rgba(255,192,203,0.6) 100%)'
                    }}
                />

                {/* Decorative Elements */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: [0, Math.sin(i) * 40],
                            y: [0, Math.cos(i) * 40]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: i * 0.2
                        }}
                        className="absolute"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            zIndex: 2
                        }}
                    >
                        {i % 2 === 0 ? (
                            <Star className="text-yellow-300 w-8 h-8 drop-shadow-lg" />
                        ) : (
                            <Sparkles className="text-white w-8 h-8 drop-shadow-lg" />
                        )}
                    </motion.div>
                ))}

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center px-4"
                    >
                        <h1 className="text-7xl md:text-8xl font-bold mb-6 text-shadow-lg text-black">
                            Happy Birthday!
                        </h1>
                        <p className="text-2xl md:text-3xl mb-8 text-shadow text-black">
                            Let's make this day unforgettable! 🎉
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 z-10">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto text-pink-100 fill-current">
                        <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4">
                {/* Cake Section */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-center mb-16 mt-12 flex-grow flex justify-end items-end" // Adjusted to move the button to the bottom
                >
                    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
                        {/* Decorative Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 opacity-50" />

                        {/* Cake Content */}
                        <div className="relative z-10">
                            {/* Beautiful Cake Image */}
                            <motion.div
                                className="mb-8 relative"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Birthday Cake"
                                    className="w-64 h-64 mx-auto rounded-full shadow-xl object-cover"
                                />

                                {/* Animated Sparkles */}
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute"
                                        style={{
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`
                                        }}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.5, 1, 0.5]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.3
                                        }}
                                    >
                                        <Sparkles className="text-yellow-400 w-6 h-6" />
                                    </motion.div>
                                ))}
                            </motion.div>
                            {/* Action Buttons */}
                            <div className="space-y-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-pink-500 border-2 border-pink-500 px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-pink-50 transition-all w-full"
                                    onClick={() => navigate('/celebrate')}
                                >
                                    Celebrate! <PartyPopper className="inline ml-2" />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Image Gallery */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={floatingVariants}
                                animate="animate"
                                className={`
                                    relative rounded-xl overflow-hidden shadow-2xl transform
                                    ${index % 3 === 0 ? 'md:-mt-8' : ''}
                                    ${index % 3 === 1 ? 'md:mt-12' : ''}
                                    ${index % 3 === 2 ? 'md:-mt-4' : ''}
                                `}
                            >
                                <div className="relative group">
                                    <img
                                        src={image}
                                        alt={`Birthday celebration ${index + 1}`}
                                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all w-full mt-10"
                                    onClick={() => navigate('/wish')}
                                >
                                    Make a Birthday Wish <Gift className="inline ml-2" />
                                </motion.button>
                </div>
                
            </div>
        </div>
    );
};

export default HomePage;
