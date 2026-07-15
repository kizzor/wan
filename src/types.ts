export interface NavItem {
  label: string;
  href: string;
  isSpecial?: boolean;
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tagline?: string;
  link?: string;
  linkText?: string;
  themeColor: string; // e.g., 'orange', 'blue', 'purple'
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
  colorClass: string;
  iconName: string;
}

export interface StakingTier {
  days: number;
  apy: number;
  label: string;
}
