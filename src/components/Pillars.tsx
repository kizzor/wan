import { motion } from "motion/react";
import { HardHat, LineChart, Cpu, ArrowUpRight } from "lucide-react";
import { pillarItems } from "../data";

// Helper to map icon names to Lucide icons
const iconMap: Record<string, any> = {
  HardHat: HardHat,
  LineChart: LineChart,
  Cpu: Cpu,
};

export default function Pillars() {
  return (
    <section id="pillars" className="py-24 bg-solana-card/30 border-y border-gray-900 relative">
      <div className="absolute top-0 right-10 w-72 h-72 bg-solana-purple/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-solana-green uppercase tracking-widest font-mono"
          >
            The Ecosystem Core
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-5 tracking-tight font-sans"
          >
            Three Pillars. One Network.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed font-light"
          >
            We integrate tangible physical operations and high-velocity digital structures to establish trust and generate sustainable value for our global participants.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillarItems.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Cpu;
            
            // Generate tailwind hover accent colors
            const borderAccentMap: Record<string, string> = {
              orange: "hover:border-orange-500/30 hover:shadow-orange-500/5",
              blue: "hover:border-blue-500/30 hover:shadow-blue-500/5",
              purple: "hover:border-solana-purple/30 hover:shadow-solana-purple/5",
            };

            const iconBgMap: Record<string, string> = {
              orange: "bg-orange-500/10 border-orange-500/20 text-orange-400",
              blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
              purple: "bg-[#9945FF]/10 border-[#9945FF]/20 text-[#9945FF]",
            };

            const textAccentMap: Record<string, string> = {
              orange: "text-orange-400",
              blue: "text-blue-400",
              purple: "text-[#9945FF]",
            };

            const hoverAccent = borderAccentMap[item.themeColor] || borderAccentMap.purple;
            const iconStyle = iconBgMap[item.themeColor] || iconBgMap.purple;
            const textAccent = textAccentMap[item.themeColor] || textAccentMap.purple;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#161B26] border border-gray-800 rounded-xl p-5 transition-all duration-300 flex flex-col justify-between shadow-xl ${hoverAccent}`}
              >
                <div>
                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center mb-4 ${iconStyle}`}>
                    <IconComponent size={16} />
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1 uppercase tracking-wider font-sans">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-3 border-t border-gray-800/80 flex items-center justify-between">
                  <span className={`text-[9px] font-bold uppercase tracking-wider ${textAccent}`}>
                    {item.tagline || "Ecosystem Pillar"}
                  </span>
                  <a
                    href={item.link}
                    target={item.link?.startsWith("http") ? "_blank" : undefined}
                    rel={item.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[10px] text-gray-400 hover:text-white inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
