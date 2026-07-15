import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Wallet, Menu, X } from "lucide-react";
import { navItems } from "../data";

interface HeaderProps {
  isConnected: boolean;
  walletAddress: string;
  onConnectToggle: () => void;
}

export default function Header({ isConnected, walletAddress, onConnectToggle }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B0E14]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-[#9945FF] to-[#14F195] flex items-center justify-center font-bold text-black text-xs">
            WN
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            WAN NETWORK
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-semibold uppercase tracking-widest">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition duration-200 ${
                item.isSpecial
                  ? "text-[#9945FF] hover:text-white"
                  : "text-gray-400 hover:text-[#14F195]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Wallet Connect CTA (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={onConnectToggle}
            className={`px-4 py-2 rounded font-bold text-xs shadow-lg uppercase tracking-widest transition duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-1.5 ${
              isConnected
                ? "bg-gradient-to-r from-[#14F195] to-teal-500 text-black shadow-[#14F195]/10"
                : "bg-gradient-to-r from-[#9945FF] to-indigo-600 text-white shadow-indigo-500/10"
            }`}
          >
            <Wallet size={12} />
            <span>{isConnected ? walletAddress : "Connect Wallet"}</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none p-1 cursor-pointer"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0B0E14] border-b border-gray-800 px-4 py-5 space-y-3 overflow-hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 border-b border-gray-900/60 last:border-b-0 text-xs font-semibold uppercase tracking-widest ${
                  item.isSpecial
                    ? "text-[#9945FF] hover:text-white"
                    : "text-gray-400 hover:text-[#14F195]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                onConnectToggle();
                setMobileOpen(false);
              }}
              className={`w-full mt-3 px-4 py-2.5 rounded font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 cursor-pointer transition ${
                isConnected
                  ? "bg-gradient-to-r from-[#14F195] to-teal-500 text-black"
                  : "bg-gradient-to-r from-[#9945FF] to-indigo-600 text-white"
              }`}
            >
              <Wallet size={12} />
              <span>{isConnected ? walletAddress : "Connect Wallet"}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
