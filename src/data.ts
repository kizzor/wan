import { NavItem, PillarItem, RoadmapPhase, StakingTier } from "./types";

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "The Pillars", href: "#pillars" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Staking", href: "#staking" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Turbolucent", href: "#turbolucent", isSpecial: true },
];

export const pillarItems: PillarItem[] = [
  {
    id: "wan-construction",
    title: "Wan Construction",
    description: "An established structural engineering and urban construction firm based in Singapore. By anchoring digital governance with reliable real-world assets, we bring concrete utility and a foundation of security to the network.",
    iconName: "HardHat",
    link: "https://wanconstruction.com.sg/",
    linkText: "Visit Site",
    themeColor: "orange",
    tagline: "Singapore HQ",
  },
  {
    id: "way-force-digital",
    title: "Way Force Digital",
    description: "A Singaporean digital marketing agency focused on web optimization, strategic user acquisition, and target global distribution. This business ensures the token ecosystem maintains robust visibility across borderlines.",
    iconName: "LineChart",
    link: "https://wayforcedigital.com.sg/",
    linkText: "Visit Site",
    themeColor: "blue",
    tagline: "Marketing",
  },
  {
    id: "turbolucent-pillar",
    title: "Turbolucent",
    description: "The technological architect of the ecosystem. Turbolucent designs and builds our automation channels, agentic AI protocols, blockchain contracts, and e-commerce layers.",
    iconName: "Cpu",
    link: "#turbolucent",
    linkText: "View Tech Partner",
    themeColor: "purple",
    tagline: "Tech Partner",
  },
];

export const roadmapPhases: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "Foundation & Smart Auditing",
    description: "Design and deploy the core 1 Billion WAN token smart contract on Solana. Complete security auditing profiles to verify compliance parameters and secure development structures.",
    colorClass: "border-solana-purple text-solana-purple",
    iconName: "ShieldCheck",
  },
  {
    phase: "Phase 2",
    title: "Raydium DEX Pool Activation",
    description: "Listing the WAN network token on Raydium. Initialize deep liquid pairings (SOL/WAN) with transparent structural reserve metrics to foster network growth and accessibility.",
    colorClass: "border-solana-green text-solana-green",
    iconName: "Coins",
  },
  {
    phase: "Phase 3",
    title: "Staking Contracts & Yield Systems",
    description: "Launch the dedicated decentralized staking portals. Integrate automated lockup channels. The locked tokens aid operational liquidity, while users receive proportional yields directly over time.",
    colorClass: "border-indigo-500 text-indigo-500",
    iconName: "Lock",
  },
  {
    phase: "Phase 4",
    title: "Industrial Automation & Scaled Integration",
    description: "Synchronize physical infrastructure systems and automation logic (Agentic AI architectures by Turbolucent) to drive long-term systemic token utilization.",
    colorClass: "border-teal-400 text-teal-400",
    iconName: "Cpu",
  },
];

export const stakingTiers: StakingTier[] = [
  { days: 30, apy: 5, label: "30 Days" },
  { days: 90, apy: 8, label: "90 Days" },
  { days: 180, apy: 12, label: "180 Days" },
  { days: 360, apy: 18, label: "360 Days" },
];
