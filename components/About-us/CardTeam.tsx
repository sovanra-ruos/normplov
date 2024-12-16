'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Zap, Check } from 'lucide-react'
import Image from 'next/image'

export default function CardTeam() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      setIsVisible(true)
    }, [])
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <div className="relative max-w-2xl w-full">
      {/* Main circular container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Decorative arc */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-yellow-300 rounded-[100%] z-0"
        />

        {/* Main content container */}
        <div className="relative z-10 bg-white rounded-full p-8 shadow-xl aspect-square flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* AI Content Badge */}
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute left-0 top-1/4 -translate-x-1/2 bg-white rounded-full shadow-lg py-2 px-4 flex items-center gap-2"
                >
                  <span className="font-medium">AI Content</span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-yellow-400 rounded-full p-1"
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Automation Tools Badge */}
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute left-8 top-1/2 bg-pink-500 text-white rounded-full shadow-lg py-2 px-4 flex items-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  <span className="font-medium">Automation Tools</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Notification Popup */}
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="absolute right-0 top-1/4 translate-x-1/2 bg-white rounded-xl shadow-lg py-2 px-4 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">Big Sale, Today Only</span>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: 'spring', stiffness: 500, damping: 10 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs"
                  >
                    +
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Stats Badge */}
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="absolute right-8 bottom-1/4 bg-blue-500 text-white rounded-xl shadow-lg p-4"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                    className="text-2xl font-bold"
                  >
                    97%
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="text-sm"
                  >
                    best-in-class
                    <br />
                    delivery rate
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Center Image Placeholder */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
              className="absolute inset-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden"
            >
              <span className="text-gray-400">Image Placeholder</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'url(#goo)' }}>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.5, duration: 1.5, ease: 'easeInOut' }}
          d="M 100 100 Q 150 150 200 100"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Filter for smooth curves */}
      <svg width="0" height="0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  </div>
  )
}
