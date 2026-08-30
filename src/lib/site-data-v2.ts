export const siteConfigV2 = {
  name: "Rapid Response Tyres",
  brand: "RAPID RESPONSE",
  tagline: "24/7 Mobile Tyre Fitting",
  phone: "07955 266 077",
  email: "info@rapidresponsetyres.co.uk",
  serviceArea: "North West UK",
  areasCovered: "Oldham, Manchester, Stockport, Warrington, Bolton",
  logo: "/tyre-assist-red-logo.webp",
  logoWidth: 1767,
  logoHeight: 485,
};

export const heroImageV2 =
  "https://lh3.googleusercontent.com/aida/AEtjO1UNMRFx3w_ydWby-pgEq-2MdYouU6WYoNvHL1A9f9CqqY9sjmW4hNR7_fr0C3VVL1ItJ_tocrGL-x2E1ApHeFi19VxfBmThrzuTRGq0G0oD6XXE09bZTe8CNBM6r5Md-142E4ICy7tMRUPSvXsrbogGJ0KRiu-5aRjMVPTn_U8WLI2P4hZb7vVnaSEBFvf-jIQw6HLb6a_VUB0FXjavxYQayttJuAmUWh8YipNYpeCWyRJoTsqn-UeovzGr";

export const navLinksV2 = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Areas", href: "#" },
  { label: "Contact", href: "#contact" },
];

export const trustBrandsV2 = ["MICHELIN", "PIRELLI", "GOODYEAR", "CONTINENTAL", "DUNLOP"];

export const servicesV2 = [
  {
    icon: "tire-repair",
    title: "Mobile Tyre Fitting",
    description:
      "Home, work, or roadside. We bring the tyre shop to your driveway at your convenience.",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1XL8J3mgKLxaXy-OSapYL_u_ajtFLKe7YvKTA9ShXYg6SerB-ByoLgRNX9gx-fWXDFk0X0AuA53H-YaYAiC1RoJsmIuz-tAO72Ju1wetBUjAHEv5W0j8rnSJAWTRv3LSGd4xTxxbjNloG8J5wQFL3qP54f0pft7Gk3iHfxZPg9bQgkb7PilCcjcNSxQu2g31iTxC_iqJ48Wn1BnYCIfFaIw3tSrRCvXC6bD0d86szoIm7b-TuHG2yDrAhw",
  },
  {
    icon: "tune",
    title: "Wheel Balancing",
    description:
      "Computerised mobile wheel balancing to ensure a smooth ride and prevent uneven tyre wear.",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1WwLc6IfhjtpSOr-SNGDUyxtrb81kjvRBTCG-_SQcEO3tujXAQBSg0T1ZK0B0nXBFmYiqgS8Y7tcBYzDF4ttAM-T4niMAU4JQK3lr8KVU118Xgt8_UCXbsDrQy1HtldbaIHIZ_mTay11FyIPg1pkTBDPsZ1ZOhMDbPtTFH8swCgf335U1aAh3IcVaZLw1sdmIxyZ2Y3357mFYeOFWuGGAXDlm5OZyEJeKhSivzfjC7oaD9NX7n7hU3EMZo",
  },
  {
    icon: "healing",
    title: "Puncture Repairs",
    description:
      "Safe and reliable puncture repairs carried out to BSAU159 standards, saving you the cost of a new tyre.",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1Vtj0DYcvod_BWjj-R9CdzKBjg3-AmRZb3a2tEVVdCF9QYFVhFpv2ox0CmVlT1riU0x9d36xM4DtYurnYvDUcUQ3Qrp4l1V7QTce_A7R2ikhNYZECUSJhEiaeBCnwusp3xC9prAXUZJ-1UgkaPC0jSfDUxFS5fJHJXOCWZ8nNjjl424p99K0sb1leuOmyD6t8Us8Ag2iSdpUDsRsIG4J3Ecub97w-PVUPWXkDC1oHrdISS84anLf8ULlkI",
  },
  {
    icon: "lock-open",
    title: "Locking Nut Removal",
    description:
      "Lost your locking wheel nut key? Our expert technicians can safely remove locking nuts without damaging your alloys.",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1ULU7LD5RoxjwQFGZuxH19lCWlIUIy22ypWr3Wk2bkG8VvUbca9WXbXQBtN804ks1aYJMDepttLoenz1vYK0HERBFkMVqXA79_QltFjfLw0Sl9vRu9uX9xAndM8Q_MgKdcAkR0xZzjihK5S6vnGFASWsi4_TUGobcg7XUHRp0ta_PuZ5QspXgmm-W3bfVnFlNAupluaWkgxY7wNGqAU5qQf9B3e4ra-MA7fwZG1UxRQiF_R3zKfCR3QKGQL",
  },
] as const;

export const aboutStatsV2 = [
  { icon: "verified-user", title: "Fully Insured", description: "Peace of mind guaranteed." },
  { icon: "group", title: "Expert Team", description: "Years of industry experience." },
] as const;

export const howItWorksV2 = [
  {
    number: 1,
    icon: "phone-in-talk",
    title: "Contact Us",
    description: "Call or message us with your location and tyre size.",
    highlighted: true,
  },
  {
    number: 2,
    icon: "my-location",
    title: "We Dispatch",
    description: "Our nearest mobile unit is dispatched immediately to your location.",
    highlighted: false,
  },
  {
    number: 3,
    icon: "build",
    title: "Expert Fitting",
    description: "We securely fit and balance your new tyre on-site.",
    highlighted: false,
  },
  {
    number: 4,
    icon: "directions-car",
    title: "Back on Road",
    description: "Secure payment taken, and you're ready to drive away safely.",
    highlighted: true,
  },
] as const;

export const bentoItemsV2 = [
  {
    icon: "timer",
    title: "Fast Arrival Times",
    description: "We aim to be with you within 30-60 minutes, ensuring you're not left stranded.",
    size: "large",
    dark: false,
  },
  {
    icon: "schedule",
    title: "24/7 Availability",
    description: "Day or night, rain or shine, our expert team is ready to assist you anytime.",
    size: "medium",
    dark: true,
  },
  {
    icon: "payments",
    title: "Competitive Pricing",
    description: "No hidden fees, honest and upfront quotes every time.",
    size: "small",
    dark: false,
  },
  {
    icon: "build",
    title: "Expert Fitters",
    description: "Fully trained and insured professionals handling your vehicle.",
    size: "small",
    dark: false,
  },
  {
    icon: "credit-card",
    title: "Mobile Payment",
    description: "Pay securely on-site via card or cash once the job is done.",
    size: "small",
    dark: false,
  },
] as const;

export const faqsV2 = [
  {
    question: "How long does it take for you to arrive?",
    answer:
      "We aim to reach all our customers within 30 to 60 minutes of their initial call, depending on traffic and your exact location within our service area.",
  },
  {
    question: "Do you offer 24/7 service?",
    answer:
      "Yes, absolutely. Our mobile tyre fitting service operates 24 hours a day, 7 days a week, including bank holidays. Emergencies don't stick to business hours, and neither do we.",
  },
  {
    question: "Can you repair punctures on-site?",
    answer:
      "Yes, if the puncture is within the repairable zone (the central 3/4 of the tyre tread) and meets BSAU159 safety standards, our technicians can repair it on-site, saving you the cost of a replacement tyre.",
  },
  {
    question: "How do I pay for the service?",
    answer:
      "Our vans are equipped with secure mobile card readers, allowing you to pay by debit or credit card once the job is completed. We also accept cash.",
  },
] as const;

export const footerLinksV2 = {
  quickLinks: [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Areas Covered", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "24/7 Mobile Fitting", href: "#services" },
    { label: "Puncture Repairs", href: "#services" },
    { label: "Wheel Balancing", href: "#services" },
    { label: "Locking Nut Removal", href: "#services" },
  ],
};
