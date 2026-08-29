export const siteConfig = {
  name: "Tyre Assist 24/7",
  tagline: "Mobile Tyre Fitting Excellence",
  phone: "0800 123 4567",
  email: "info@tyreassist247.co.uk",
  logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdlAGmUgc7LYfhvQYOTEnkeOGAmRhhc89_HcwWyNa88qXQkyEZ3XKi4xR0b_B_VbsJ939ZBgsWDqAZT39nGFiTRHUc4vkQoDUFthoP0YDDig0l6Y-qU-rfPdin4tlE6JxZDqYBAvX5AalkJI_W-OmFQV5mp3wMT4UXkAih2RouPJXk7o-DKuJZ8DJZnq_kYhGZCy0sJvxOYA282_DCUX-sWnj3cz7uTWWlp0Jd9eIeF2FMY5alqNJs",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Coverage", href: "#coverage" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
];

export const coverageAreas = [
  "LONDON",
  "MANCHESTER",
  "BIRMINGHAM",
  "LEEDS",
  "GLASGOW",
  "LIVERPOOL",
  "NEWCASTLE",
  "SHEFFIELD",
  "BRISTOL",
];

export const trustPoints = [
  {
    icon: "clock",
    title: "Rapid 30-60 Min Response",
    description:
      "Our fleet is strategically positioned to reach you fast, minimizing your downtime.",
  },
  {
    icon: "wrench",
    title: "Professional Technicians",
    description:
      "Fully trained, vetted, and equipped with state-of-the-art mobile fitting machinery.",
  },
  {
    icon: "tag",
    title: "Competitive Pricing",
    description:
      "Transparent quotes with no hidden call-out charges. Premium service at fair rates.",
  },
] as const;

export const services = [
  {
    icon: "siren",
    title: "Emergency Call-Out",
    description:
      "Stuck on the roadside? We dispatch our closest van immediately for rapid assistance.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4zekrV2NtxHtuheYWdEgVEpT6CNbjpFG1ZzLKt5aNiqu1lbGTssDuLufLcLDQ6_qDi3P2NAv8sq_X5R32i813aAmfumVKsu6MkUGjcAs44HtX16RP7qyJsEH4xjfWv3oE8dLmMByMPgNA64RR4fD80kNs6s_c7bxjeVpdt2TUNtiGbcr74tJRJxkZCLWfzktEom3BJ1L9Px8c8lSimxWJLDGptY9PAbw1lbxdCZ7aY_Mhoo8rauv2",
  },
  {
    icon: "house",
    title: "Home/Work Fitting",
    description:
      "Convenient pre-booked appointments. We fit your tyres while you work or relax at home.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBN8rCwMbgcwjFIqrbTQ13YwazsUxYhE-Rrv2BgeJAq9NzjnWH7WZFcp5pqcr5MwMP04G_UoyOD3dv8fQAK96CKNojQcgb9_tROrbyHRZxDXBc7PVBtTYZbaeieUNjDuS0t2WR5Bq1Gc6tO9yuEJ9jVpU1aDG1HXs8fUYVk-HKwTRMMhz9SQzPnCV0F_ELSMdECDECse6WzslxK7pxo2EVBgTLPjdmz3Pn75SwSkGDZI9g6VigBvinJ",
  },
  {
    icon: "wrench",
    title: "Puncture Repair",
    description:
      "Fast, safe puncture repairs to British Standards, saving you the cost of a new tyre.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNjgn9uZzXIbLGHrMdozMllY4-QQyzgtJbZ4hck1S2Qe01zRXBLvBlbYnegmZCUdTeSmnAANVcKNjMnghP9Il9sJzg2q-dxFwX6uTFUDSORlM4cbbkF5ZRNsPGaW9tm8-NjTbD7TKsP5T-hofuUolqwgxhGUcY35j-lxtkLFQZqd4UXKWuj6LhjAmuw0zvCA6OI5iHfYmMIHA2sFMgVbuICQLzaomHCzYB_0au6gv-WZ8Jmaj0k03z",
  },
  {
    icon: "battery-charging",
    title: "Battery Jumpstart",
    description:
      "Dead battery? We provide safe jumpstarts and battery replacement services on the spot.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNZ93cxL5IWaw852a2xaXShLqe6NIGB8Y1C_saFuxQ1RnjBYewLadcZmJtXz0isg6wD4AcypLe59vAv2m_gS_WBrfqGs0_9LjckfUz_vygjKcpudIoNmkpTUnNtoUKBornMhX7pwPTAEXBgG5YiZg867HPSylo6LyZ5FEBKPlwqFmk2GEOg0F-k9k9PTJzYtH44Iq8V_nd8UXmPK_FjTxZdbEmbB94ZthqQVYJnAB8gKlBM-5WFFr0",
  },
] as const;

export const howItWorksSteps = [
  {
    number: 1,
    title: "Book",
    description:
      "Call us or request a quote online with your tyre size and location.",
  },
  {
    number: 2,
    title: "We Arrive",
    description:
      "Our technician arrives swiftly with the right equipment for the job.",
  },
  {
    number: 3,
    title: "Back on the Road",
    description:
      "Your tyres are fitted, balanced, and you're ready to drive safely.",
  },
] as const;

export const brands = [
  "MICHELIN",
  "PIRELLI",
  "CONTINENTAL",
  "GOODYEAR",
  "DUNLOP",
  "BRIDGESTONE",
];

export const pricingPlans = [
  {
    name: "Standard Fix",
    subtitle: "For minor issues",
    price: "£65",
    featured: false,
    features: [
      { label: "Puncture Repair", included: true },
      { label: "Wheel Balancing", included: true },
      { label: "New Tyre Included", included: false },
    ],
    cta: "Book Now",
  },
  {
    name: "Premium Fit",
    subtitle: "Full replacement",
    price: "£120",
    featured: true,
    badge: "Most Popular",
    features: [
      { label: "New Premium Tyre", included: true },
      { label: "Mobile Fitting", included: true },
      { label: "Old Tyre Disposal", included: true },
    ],
    cta: "Get Quote",
  },
  {
    name: "Emergency Out-of-Hours",
    subtitle: "24/7 Priority Response",
    price: "£150",
    featured: false,
    features: [
      { label: "Priority Dispatch", included: true },
      { label: "Night/Weekend Service", included: true },
      { label: "Rapid Assistance", included: true },
    ],
    cta: "Call Emergency",
  },
] as const;

export const footerLinks = {
  services: [
    "Emergency Call-Out",
    "Mobile Fitting",
    "Puncture Repair",
    "Battery Services",
  ],
  legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};
