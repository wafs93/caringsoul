// ─────────────────────────────────────────────────────────────
// Edit this one file to update contact details, links and forms.
// Anything marked TODO still needs real details from the charity.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Caring Souls Foundation",
  shortName: "Caring Souls",
  charityNumber: "1208787",
  url: "https://caringsouls.org.uk",
  tagline: ["Empowering lives", "Creating opportunities", "Building brighter tomorrows"],
  description:
    "Caring Souls Foundation is a Christian charity in England supporting churches, young people and families through pastoral care, worship, education and practical help.",

  // TODO: replace with the charity's real details
  email: "info@caringsouls.org.uk",
  phone: "+44 0000 000000",
  address: "England, United Kingdom",

  // Create a free form at https://formspree.io and paste its ID (the part after /f/)
  // TODO: replace with real Formspree form IDs
  formspree: {
    contact: "YOUR_CONTACT_FORM_ID",
    volunteer: "YOUR_VOLUNTEER_FORM_ID",
  },

  // TODO: paste a Stripe Payment Link, PayPal, or CAF/JustGiving page
  donateUrl: "",
  // TODO: add the charity bank account for transfers (leave blank to hide)
  bank: {
    accountName: "Caring Souls Foundation",
    sortCode: "",
    accountNumber: "",
    reference: "DONATION + your surname",
  },

  // TODO: add real profile URLs (leave blank to hide)
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },

  charityRegisterUrl:
    "https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/5237035",
};

export const nav = [
  { href: "/about/", label: "About us" },
  { href: "/what-we-do/", label: "What we do" },
  { href: "/get-involved/", label: "Get involved" },
  { href: "/contact/", label: "Contact" },
];

export const programmes = [
  {
    slug: "churches",
    title: "Support for local churches",
    summary:
      "Practical advice and hands-on help for churches growing their ministry, pastoral care and outreach.",
    points: [
      "Planning and setting up outreach programmes",
      "Guidance on pastoral care and volunteer teams",
      "Sharing resources between congregations",
    ],
  },
  {
    slug: "worship",
    title: "Worship and music events",
    summary:
      "Gatherings built around live worship music, open to churches and to anyone in the community who wants to come.",
    points: [
      "Community worship nights",
      "Developing worship leaders and musicians",
      "Events held alongside partner churches",
    ],
  },
  {
    slug: "pastoral",
    title: "Pastoral care",
    summary:
      "Someone to listen, pray and walk alongside people through hard seasons, with care that extends beyond church walls.",
    points: [
      "One-to-one listening and prayer",
      "Visits and check-ins for isolated people",
      "Signposting to specialist help",
    ],
  },
  {
    slug: "poverty",
    title: "Relief of poverty",
    summary:
      "Practical help for individuals and families facing hardship, offered as faith in action.",
    points: [
      "Food, clothing and essentials",
      "Help finding local support services",
      "Seasonal appeals for families in need",
    ],
  },
  {
    slug: "young-people",
    title: "Young people",
    summary:
      "Mentoring and activities that help children and young people grow in confidence and find their direction.",
    points: [
      "Mentoring and youth sessions",
      "Music, creative and leadership activities",
      "A safe place to belong",
    ],
  },
  {
    slug: "education",
    title: "Education and skills",
    summary:
      "Learning opportunities that open doors, from everyday life skills to training that supports work.",
    points: [
      "Workshops and short courses",
      "Digital and life skills",
      "Support for learners with disabilities",
    ],
  },
];
