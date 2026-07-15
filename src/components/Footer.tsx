import { Coins } from "lucide-react";
import { navItems } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900/60 py-16 text-gray-500 text-xs relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-solana-purple/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-gray-900 pb-10 mb-10">
          
          {/* Logo Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-[#9945FF] to-[#14F195] flex items-center justify-center font-bold text-black text-xs">
              WN
            </div>
            <span className="text-lg font-bold text-white tracking-tight font-sans">
              WAN NETWORK
            </span>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#14F195] transition duration-150"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Dynamic Disclaimers and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-gray-400 font-light">
              &copy; {year} Wan Network. All rights reserved. Managed in partnership with Turbolucent.
            </p>
            <p className="text-gray-600 font-light max-w-2xl text-[10px] leading-relaxed">
              Disclaimer: Dynamic digital assets, decentralized staking protocols, and construction integrations carry inherent risk. Please perform thorough verification and consult certified financial advisory before staking or making transfers.
            </p>
          </div>
          <div className="flex items-center gap-2 text-gray-600 font-mono text-[10px] shrink-0">
            <Coins size={12} />
            <span>SOLANA NETWORK MAINNET PREVIEW</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
