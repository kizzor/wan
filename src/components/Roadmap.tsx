import { motion } from "motion/react";
import { ShieldCheck, Coins, Lock, Cpu, CheckCircle } from "lucide-react";
import { roadmapPhases } from "../data";

// Icon mapping helper
const iconMap: Record<string, any> = {
  ShieldCheck: ShieldCheck,
  Coins: Coins,
  Lock: Lock,
  Cpu: Cpu,
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-solana-card/10 border-t border-gray-900 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-solana-purple/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-solana-purple uppercase tracking-widest font-mono"
          >
            The Timeline
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-5 tracking-tight font-sans"
          >
            Strategic Execution Roadmap
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed font-light"
          >
            Our structured progression to bridge real-world business mechanics onto the decentralized ledger.
          </motion.p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative border-l border-gray-850 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-8">
          {roadmapPhases.map((item, index) => {
            
            // Map phase-specific accent styling
            const accentMap: Record<string, { dot: string; text: string }> = {
              "Phase 1": { 
                dot: "bg-[#9945FF] ring-[#9945FF]/10", 
                text: "text-[#9945FF]"
              },
              "Phase 2": { 
                dot: "bg-[#14F195] ring-[#14F195]/10", 
                text: "text-[#14F195]"
              },
              "Phase 3": { 
                dot: "bg-[#9945FF] ring-[#9945FF]/10", 
                text: "text-indigo-400"
              },
              "Phase 4": { 
                dot: "bg-[#14F195] ring-[#14F195]/10", 
                text: "text-teal-400"
              },
            };

            const styles = accentMap[item.phase] || accentMap["Phase 1"];

            return (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative group"
              >
                {/* Timeline node dot */}
                <div 
                  className={`absolute -left-[30px] sm:-left-[46px] top-2.5 w-2 h-2 rounded-full ring-4 transition duration-300 group-hover:scale-125 z-10 ${styles.dot}`}
                ></div>

                {/* Card Container */}
                <div className="bg-[#161B26] border border-gray-800 rounded-xl p-5 hover:border-gray-700/60 transition duration-300 shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-widest font-mono ${styles.text}`}>
                      {item.phase}
                    </span>
                    <span className="flex items-center gap-1.5 text-[9px] text-gray-500 font-mono uppercase tracking-wider">
                      <CheckCircle size={9} className="text-gray-600" />
                      Planned
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1.5 uppercase tracking-wider font-sans">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-gray-400 leading-normal font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
