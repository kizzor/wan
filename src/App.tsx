/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CircleCheck, Sparkles, AlertCircle } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import TokenomicsStaking from "./components/TokenomicsStaking";
import Roadmap from "./components/Roadmap";
import TurbolucentPartner from "./components/TurbolucentPartner";
import Footer from "./components/Footer";

export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "info">("success");

  const handleConnectToggle = () => {
    if (!isConnected) {
      // Simulate Connection
      setToastMessage("Simulating secure connection to Solana wallet...");
      setToastType("info");
      
      setTimeout(() => {
        setIsConnected(true);
        setWalletAddress("E8r1...9fNz");
        setToastMessage("Solana wallet successfully connected: E8r1...9fNz");
        setToastType("success");
      }, 1000);
    } else {
      // Disconnect
      setIsConnected(false);
      setWalletAddress("");
      setToastMessage("Solana wallet signature disconnected.");
      setToastType("info");
    }
  };

  // Auto-dismiss toast notifications after 4 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="bg-solana-dark text-gray-100 font-sans antialiased overflow-x-hidden min-h-screen">
      {/* Header section with wallet connection capability */}
      <Header
        isConnected={isConnected}
        walletAddress={walletAddress}
        onConnectToggle={handleConnectToggle}
      />

      {/* Main landing container layout */}
      <main className="relative">
        <Hero />
        <Pillars />
        <TokenomicsStaking
          isConnected={isConnected}
          walletAddress={walletAddress}
          onConnectToggle={handleConnectToggle}
        />
        <Roadmap />
        <TurbolucentPartner />
      </main>

      {/* Corporate layout footer */}
      <Footer />

      {/* Elegant, dynamic notifications toast overlay */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none max-w-sm w-full px-4 sm:px-0">
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              className={`pointer-events-auto p-4 rounded-xl border shadow-xl flex items-start gap-3 backdrop-blur-md ${
                toastType === "success"
                  ? "bg-solana-card/95 border-solana-green/30 text-white"
                  : "bg-solana-card/95 border-solana-purple/30 text-white"
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {toastType === "success" ? (
                  <CircleCheck size={18} className="text-solana-green" />
                ) : (
                  <Sparkles size={18} className="text-solana-purple animate-pulse" />
                )}
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold font-mono tracking-wider uppercase text-gray-400">
                  {toastType === "success" ? "System Event" : "Active Simulation"}
                </p>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {toastMessage}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
