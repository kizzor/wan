import { motion } from "motion/react";
import { Cpu, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-solana-dark">
      {/* Abstract Background Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-solana-purple/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-solana-green/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900/50 border border-gray-800 text-[10px] text-gray-400 uppercase tracking-widest font-mono mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#14F195] animate-pulse"></span>
          <span>POWERED BY SOLANA & AGENTIC AI</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-white leading-none mb-4 tracking-tighter max-w-3xl mx-auto font-sans"
        >
          Bridging Physical Assets &{" "}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195]">
            Digital Automation.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm text-gray-400 leading-relaxed max-w-lg mx-auto mb-10 font-light"
        >
          Wan Network unites established real-world construction, high-scale digital marketing, and intelligent web3 systems into a unified global development ecosystem.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto sm:max-w-none"
        >
          <a
            href="#staking"
            className="w-full sm:w-auto px-6 py-2.5 rounded bg-gradient-to-r from-[#9945FF] to-indigo-600 text-white text-xs font-bold shadow-lg shadow-indigo-500/20 uppercase tracking-widest transition duration-300 hover:opacity-95"
          >
            Explore Staking
          </a>
          <a
            href="#pillars"
            className="w-full sm:w-auto px-6 py-2.5 rounded bg-solana-card/85 border border-gray-800 text-gray-400 text-xs font-bold uppercase tracking-widest transition duration-300 hover:text-white"
          >
            Discover Ecosystem
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20 pt-8 border-t border-gray-800"
        >
          <div className="text-center">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest font-mono">Total Supply</p>
            <p className="text-xl font-bold text-white tracking-tighter mt-1">1,000,000,000 WAN</p>
          </div>
          <div className="text-center border-l border-gray-800/80 pl-4">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest font-mono">Network Protocol</p>
            <p className="text-xl font-bold text-white tracking-tighter mt-1">SOLANA</p>
          </div>
          <div className="text-center border-l border-gray-800/80 pl-4">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest font-mono">Target Listing</p>
            <p className="text-xl font-bold text-white tracking-tighter mt-1">RAYDIUM DEX</p>
          </div>
          <div className="text-center border-l border-gray-800/80 pl-4">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest font-mono">Sectors</p>
            <p className="text-xl font-bold text-white tracking-tighter mt-1">3 UNIFIED SECTORS</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
