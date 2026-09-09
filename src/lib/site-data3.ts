export const siteConfig3 = {
  name: "Direct Tyre Solutions",
  phone: "07955 266 077",
  logo: "/direct-tyre-solutions-logo-wordmark.webp",
  logoWidth: 1047,
  logoHeight: 523,
};

export const navLinks3 = [
  { label: "Home", href: "/home-3" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#trust" },
  { label: "Areas We Cover", href: "#" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#" },
] as const;

export const heroChecklist3 = [
  "24/7 Emergency Call Outs",
  "We Come To You",
  "Fast 30–45 Min Response",
  "Card Payments Accepted",
] as const;

export const trustBar3 = [
  {
    icon: "shield",
    title: "Fully Insured",
    description: "For your peace of mind",
  },
  {
    icon: "user-check",
    title: "Certified Technicians",
    description: "Skilled & experienced experts",
  },
  {
    icon: "timer",
    title: "Fast Response",
    description: "30–45 Min average response",
  },
  {
    icon: "star",
    title: "Trusted Service",
    description: "5★ rated by our customers",
  },
] as const;

export const services3 = [
  {
    icon: "disc",
    title: "Mobile Tyre Fitting",
    description: "We come to you. Fast, efficient tyre fitting at your home, work or roadside.",
  },
  {
    icon: "wrench",
    title: "Puncture Repairs",
    description: "Quick, reliable puncture repairs to get you back on the road safely.",
  },
  {
    icon: "refresh",
    title: "Tyre Replacement",
    description: "Wide range of premium brands at competitive prices. Fitted on-site.",
  },
  {
    icon: "24-7",
    title: "Emergency Call Outs",
    description: "24/7 emergency tyre assistance when you need it most.",
  },
  {
    icon: "lock",
    title: "Locking Wheel Nut Removal",
    description: "Safe removal of locking wheel nuts without damage.",
  },
  {
    icon: "card",
    title: "Card Payments Accepted",
    description: "We accept all major cards for your convenience.",
  },
] as const;

export const testimonials3 = [
  {
    quote:
      "Brilliant service! Arrived within 30 minutes and had me back on the road in no time. Highly recommend.",
    name: "James T.",
  },
  {
    quote: "Professional, friendly and fairly priced. Saved me so much hassle. Will use again!",
    name: "Sarah L.",
  },
  {
    quote: "Came out late at night when I was stuck. Lifesaver! 5-star service all round.",
    name: "Mark R.",
  },
] as const;

export const footerLinks3 = {
  quickLinks: [
    { label: "Home", href: "/home-3" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#trust" },
    { label: "Reviews", href: "#reviews" },
  ],
  services: services3.map((s) => s.title),
};
