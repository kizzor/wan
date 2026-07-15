import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Coins, ShieldCheck, HelpCircle, ArrowRight, CircleCheck, Wallet } from "lucide-react";
import { stakingTiers } from "../data";

interface TokenomicsStakingProps {
  isConnected: boolean;
  walletAddress: string;
  onConnectToggle: () => void;
}

export default function TokenomicsStaking({
  isConnected,
  walletAddress,
  onConnectToggle,
}: TokenomicsStakingProps) {
  const [stakingAmount, setStakingAmount] = useState<number>(10000);
  const [activeDays, setActiveDays] = useState<number>(30);
  const [activeApy, setActiveApy] = useState<number>(5);
  const [showSimResult, setShowSimResult] = useState<boolean>(false);

  // Calculate yield reactively
  const calculatedYield = stakingAmount * (activeApy / 100) * (activeDays / 365);
  const totalReturn = stakingAmount + calculatedYield;

  const handleTierSelect = (days: number, apy: number) => {
    setActiveDays(days);
    setActiveApy(apy);
  };

  const formatNum = (num: number) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <section id="tokenomics" className="py-24 relative overflow-hidden bg-solana-dark">
      {/* Decorative Glows */}
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-solana-green/5 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-solana-purple/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Tokenomics Content (7 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-bold text-solana-green uppercase tracking-widest font-mono">
                The Mechanics
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight font-sans">
                Token Distribution Infrastructure
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                The WAN Network Token is deployed on Solana for transaction efficiency, high scalability, and ultra-low fees. The total supply is strictly fixed to establish scarcity while maintaining transparent flow controls.
              </p>
            </div>

            {/* Mechanics Grid */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-solana-card/50 border border-gray-800/80 flex items-start gap-4 hover:border-gray-700/60 transition">
                <span className="p-3 rounded-xl bg-gray-900/90 text-solana-green text-xl font-bold font-mono">
                  1B
                </span>
                <div>
                  <h4 className="font-bold text-white text-base font-sans">Fixed Supply Token</h4>
                  <p className="text-sm text-gray-400 mt-1 font-light">
                    1,000,000,000 WAN tokens minted. No inflationary overrides can be programmatically added.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-solana-card/50 border border-gray-800/80 flex items-start gap-4 hover:border-gray-700/60 transition">
                <span className="p-3 rounded-xl bg-gray-900/90 text-solana-purple">
                  <ShieldCheck size={24} />
                </span>
                <div>
                  <h4 className="font-bold text-white text-base font-sans">Liquidity Provisioning</h4>
                  <p className="text-sm text-gray-400 mt-1 font-light">
                    Initial liquidity pair to be listed on Raydium. Allocation locking schedules planned to safeguard token stability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Staking Calculator (6 Cols) */}
          <div id="staking" className="lg:col-span-6">
            <div className="bg-gradient-to-br from-gray-900 to-solana-card border border-gray-800 rounded-2xl p-6 sm:p-8 relative shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-solana-green/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white tracking-tight font-sans">Development Staking</h3>
                <p className="text-xs text-gray-400 mt-1 font-light">
                  Lock your tokens to support construction and digital automation workflows, earning relative yields on active lockups.
                </p>
              </div>
              
              <div className="space-y-4">
                {/* Input Area */}
                <div className="relative">
                  <label className="text-[9px] font-bold text-gray-500 absolute top-2.5 left-3.5 tracking-wider uppercase font-mono">
                    AMOUNT (WAN)
                  </label>
                  <input
                    type="number"
                    value={stakingAmount || ""}
                    onChange={(e) => setStakingAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                    min="100"
                    className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg pt-6 pb-2.5 px-3.5 text-white font-semibold text-sm focus:outline-none focus:border-solana-green focus:ring-1 focus:ring-solana-green/20 transition font-sans placeholder-gray-700"
                    placeholder="Enter WAN amount"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500 font-mono">
                    WAN
                  </span>
                </div>

                {/* Duration Picker */}
                <div>
                  <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2 font-mono">
                    SELECT DURATION
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {stakingTiers.map((tier) => {
                      const isSelected = activeDays === tier.days;
                      return (
                        <button
                          key={tier.days}
                          type="button"
                          onClick={() => handleTierSelect(tier.days, tier.apy)}
                          className={`p-2.5 rounded-lg border text-center flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? "border-solana-green bg-solana-green/5 text-solana-green"
                              : "border-gray-800 bg-gray-900/60 text-gray-400 opacity-50 hover:opacity-100 hover:border-gray-700"
                          }`}
                        >
                          <span className="text-[10px] font-bold">{tier.days}D</span>
                          <span className="text-[8px] text-gray-400 font-light mt-0.5">
                            {tier.apy}% APY
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Results Screen */}
                <div className="bg-[#0B0E14]/50 rounded-lg p-3.5 border border-gray-800/50 space-y-2">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-gray-500">Est. Yield</span>
                    <span className="font-bold text-solana-green font-mono">
                      +{formatNum(calculatedYield)} WAN
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] pt-2 border-t border-gray-800/40">
                    <span className="text-gray-500">Total Unlock</span>
                    <span className="font-bold text-white font-mono">
                      {formatNum(totalReturn)} WAN
                    </span>
                  </div>
                </div>

                {/* Wallet Info Check */}
                <div className="flex items-center justify-between text-[10px] text-gray-500 font-mono px-1">
                  <span className="flex items-center gap-1.5">
                    <Wallet size={12} className={isConnected ? "text-solana-green" : "text-gray-600"} />
                    {isConnected ? (
                      <span>Wallet Active: {walletAddress}</span>
                    ) : (
                      <span>No Wallet Connected</span>
                    )}
                  </span>
                  {!isConnected && (
                    <button
                      type="button"
                      onClick={onConnectToggle}
                      className="text-solana-purple hover:text-solana-green transition font-semibold cursor-pointer underline underline-offset-2"
                    >
                      Connect Wallet
                    </button>
                  )}
                </div>

                {/* Simulation trigger */}
                <button
                  type="button"
                  onClick={() => setShowSimResult(true)}
                  disabled={stakingAmount <= 0}
                  className="w-full py-3 rounded-lg bg-solana-green text-black font-extrabold text-xs uppercase tracking-widest shadow-lg shadow-solana-green/20 hover:opacity-90 disabled:opacity-40 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  Simulate Lockup
                </button>
              </div>

              {/* Simulation Receipt overlay */}
              <AnimatePresence>
                {showSimResult && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-solana-dark/95 rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-solana-green/30 z-20"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-solana-green font-semibold text-sm uppercase tracking-wider font-mono">
                          <CircleCheck size={18} />
                          <span>Simulation Validated</span>
                        </div>
                        <span className="text-[10px] bg-solana-green/10 text-solana-green px-2.5 py-1 rounded-full font-mono">
                          Phase 3 Preview
                        </span>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xl font-extrabold text-white tracking-tight">
                          Lockup Contract Receipt
                        </h4>
                        <p className="text-xs text-gray-400 font-light leading-relaxed">
                          This receipt demonstrates how your WAN tokens will be processed on-chain. When Phase 3 staking smart contracts deploy, these transactions will execute instantly on Solana.
                        </p>
                      </div>

                      <div className="space-y-2 pt-2">
                        <div className="flex justify-between items-center text-xs font-mono border-b border-gray-950 pb-2">
                          <span className="text-gray-500">Principal Amount:</span>
                          <span className="text-gray-300 font-bold">{formatNum(stakingAmount)} WAN</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-mono border-b border-gray-950 pb-2">
                          <span className="text-gray-500">Staking APY:</span>
                          <span className="text-solana-green font-bold">{activeApy}%</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-mono border-b border-gray-950 pb-2">
                          <span className="text-gray-500">Lockup Duration:</span>
                          <span className="text-gray-300 font-bold">{activeDays} Days</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-mono border-b border-gray-950 pb-2">
                          <span className="text-gray-500">Expected Yield:</span>
                          <span className="text-solana-green font-bold">+{formatNum(calculatedYield)} WAN</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-mono pt-2">
                          <span className="text-gray-500">Total Return:</span>
                          <span className="text-white font-bold">{formatNum(totalReturn)} WAN</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4">
                      {isConnected && (
                        <div className="text-[10px] text-gray-500 font-mono text-center">
                          Prepared for signature verification by address: {walletAddress}
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => setShowSimResult(false)}
                        className="w-full py-3 rounded-xl bg-gray-950 hover:bg-gray-900 border border-gray-800 text-xs font-semibold text-gray-300 hover:text-white transition cursor-pointer"
                      >
                        Adjust Simulation Parameters
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
