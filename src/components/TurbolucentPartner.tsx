import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, CheckCircle2, Mail, ArrowRight, X, Send } from "lucide-react";

export default function TurbolucentPartner() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Web3 Integration");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    // Simulate API Submission
    setFormSubmitted(true);
    setTimeout(() => {
      // Clear fields after success simulation
      setName("");
      setEmail("");
      setSubject("Web3 Integration");
      setMessage("");
    }, 1000);
  };

  const capabilities = [
    "Decentralized Web3 Audits",
    "Autonomous Agentic AI Models",
    "E-Commerce Automation Rails",
    "Cross-Sector System Bridges",
  ];

  return (
    <section
      id="turbolucent"
      className="py-24 bg-gradient-to-t from-black via-solana-dark to-solana-card/40 border-t border-gray-900 relative"
    >
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-solana-purple/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-gray-900 to-solana-dark border border-solana-purple/20 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-solana-purple/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-solana-purple/10 border border-solana-purple/30 text-xs text-solana-purple rounded-full font-semibold font-mono">
                Integration & Technical Partner
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-sans">
                Turbolucent Technology Support
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                As the systems architect and integration lead, Turbolucent designs the technical backbone powering the{" "}
                <strong className="text-white font-semibold">Wan Network</strong>. We combine state-of-the-art blockchain deployment pipelines, e-commerce automation, and Agentic AI solutions to guarantee structural functionality.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-3">
                    <span className="text-solana-purple shrink-0">
                      <CheckCircle2 size={16} />
                    </span>
                    <span className="text-sm text-gray-300 font-light">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card / CTA */}
            <div className="lg:col-span-5 bg-[#161B26] border border-gray-800 rounded-xl p-6 text-center shadow-xl relative">
              <div className="w-10 h-10 rounded bg-gradient-to-tr from-[#9945FF] to-[#14F195] flex items-center justify-center text-black text-xs font-bold mx-auto mb-4">
                TL
              </div>
              <h4 className="text-xs font-bold text-white mb-1 uppercase tracking-wider font-sans">Partnering with Turbolucent</h4>
              <p className="text-[10px] text-gray-400 mt-2 max-w-xs mx-auto mb-6 leading-relaxed font-light">
                Providing systematic, engineering-grade web3, AI, and automation architecture for forward-facing startups.
              </p>
              
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setModalOpen(true);
                  }}
                  className="w-full py-2.5 rounded bg-gradient-to-r from-[#9945FF] to-indigo-600 text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-indigo-500/15 cursor-pointer flex items-center justify-center gap-1.5 transition duration-200 hover:opacity-95"
                >
                  <Mail size={12} />
                  <span>Get Tech Support</span>
                </button>
                <a
                  href="mailto:support@turbolucent.com"
                  className="text-[10px] text-gray-500 hover:text-gray-300 transition font-mono mt-1"
                >
                  support@turbolucent.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Form Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#161B26] border border-gray-800 w-full max-w-lg rounded-xl overflow-hidden shadow-2xl relative z-10 p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition p-1 cursor-pointer"
              >
                <X size={16} />
              </button>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Contact Technical Support</h3>
                    <p className="text-[10px] text-gray-400 mt-1 font-light">
                      Submit an engineering-grade inquiry to the Turbolucent systems architecture team.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="relative">
                      <label className="text-[9px] font-bold text-gray-500 absolute top-2.5 left-3.5 tracking-wider uppercase font-mono">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg pt-6 pb-2 px-3.5 text-xs text-white focus:outline-none focus:border-[#9945FF] focus:ring-1 focus:ring-[#9945FF]/10 transition font-sans"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="relative">
                      <label className="text-[9px] font-bold text-gray-500 absolute top-2.5 left-3.5 tracking-wider uppercase font-mono">
                        YOUR EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg pt-6 pb-2 px-3.5 text-xs text-white focus:outline-none focus:border-[#9945FF] focus:ring-1 focus:ring-[#9945FF]/10 transition font-sans"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="relative">
                      <label className="text-[9px] font-bold text-gray-500 absolute top-2.5 left-3.5 tracking-wider uppercase font-mono">
                        INQUIRY TOPIC
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg pt-6 pb-2 px-3.5 text-xs text-gray-300 focus:outline-none focus:border-[#9945FF] focus:ring-1 focus:ring-[#9945FF]/10 transition font-sans appearance-none"
                      >
                        <option>Web3 & Smart Contracts</option>
                        <option>Autonomous AI Agents</option>
                        <option>E-Commerce Automation Rails</option>
                        <option>Strategic Auditing Services</option>
                      </select>
                    </div>

                    <div className="relative">
                      <label className="text-[9px] font-bold text-gray-500 absolute top-2.5 left-3.5 tracking-wider uppercase font-mono">
                        TECHNICAL REQUIREMENTS
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg pt-7 pb-2 px-3.5 text-xs text-white focus:outline-none focus:border-[#9945FF] focus:ring-1 focus:ring-[#9945FF]/10 transition font-sans resize-none"
                        placeholder="Briefly explain your startup's technical requirements..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-2.5 rounded bg-gradient-to-r from-[#9945FF] to-indigo-600 text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-indigo-500/10 cursor-pointer flex items-center justify-center gap-1.5 transition hover:opacity-95"
                  >
                    <Send size={12} />
                    <span>Send Engineering Inquiry</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 bg-solana-green/10 border border-solana-green/20 text-solana-green flex items-center justify-center rounded-full mx-auto text-xl">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Inquiry Submitted</h4>
                    <p className="text-[10px] text-gray-400 max-w-xs mx-auto font-light leading-relaxed">
                      Thank you for contacting Turbolucent. An architect specializing in{" "}
                      <strong className="text-white">{subject}</strong> will analyze your submission and follow up at{" "}
                      <strong className="text-white">{email}</strong> shortly.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="mt-4 px-4 py-2 rounded bg-gray-900 border border-gray-800 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition cursor-pointer"
                  >
                    Close Dialog
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
