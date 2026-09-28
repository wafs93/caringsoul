// ─────────────────────────────────────────────────────────────
// Edit this one file to update contact details, links and content.
// Anything marked TODO still needs confirming with the charity.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Caring Souls Foundation",
  shortName: "Caring Souls",
  charityNumber: "1208787",
  registeredDate: "24 June 2024",
  url: "https://caringsouls.org.uk",
  tagline: "Faith in Action. Care in the Community.",
  strapline: ["Empowering lives", "Creating opportunities", "Building brighter tomorrows"],
  description:
    "Caring Souls Foundation is a Christian charity serving communities throughout England with practical support, community outreach, mentoring, pastoral care and education.",

  email: "sunshoos@hotmail.com",
  phone: "07403 203506",
  address: {
    line1: "Mill Point",
    line2: "86 Abbey Road",
    town: "Barking",
    postcode: "IG11 7FU",
  },

  // Create free forms at https://formspree.io and paste the IDs (the part after /f/)
  // TODO: replace with real Formspree form IDs
  formspree: {
    contact: "YOUR_CONTACT_FORM_ID",
    volunteer: "YOUR_VOLUNTEER_FORM_ID",
  },

  // TODO: paste a Stripe Payment Link, PayPal, CAF or JustGiving page
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
  { href: "/governance/", label: "Governance" },
  { href: "/contact/", label: "Contact" },
];

// What we do — the charity's activities
export const programmes = [
  {
    slug: "practical-support",
    title: "Practical support",
    summary:
      "Sometimes people don’t need complicated solutions. They need someone to listen, offer guidance and help them find a way forward.",
    points: [
      "Practical assistance, advice and information",
      "Support for people facing hardship and homelessness",
      "Food and clothing where appropriate",
    ],
  },
  {
    slug: "children-and-young-people",
    title: "Children and young people",
    summary:
      "We believe every child and young person should have the opportunity to grow, learn and fulfil their potential.",
    points: [
      "Mentoring and encouragement",
      "Education and community support",
      "Helping young people access the support they need",
    ],
  },
  {
    slug: "disabilities",
    title: "Supporting people with disabilities",
    summary:
      "People with disabilities can face additional barriers when accessing support and opportunities. Our work aims to help remove them.",
    points: [
      "An inclusive approach to every activity we run",
      "Dignity, respect and compassion as standard",
      "Help accessing appropriate support",
    ],
  },
  {
    slug: "mentoring",
    title: "Mentoring and guidance",
    summary:
      "A listening ear and the right guidance can make a significant difference to someone facing difficult circumstances.",
    points: [
      "Encouragement and practical guidance",
      "Information and signposting",
      "Support through difficult seasons",
    ],
  },
  {
    slug: "wellbeing",
    title: "Wellbeing and pastoral support",
    summary:
      "Our work includes wellbeing support, counselling and pastoral care. Spiritual support is available on request, respecting the wishes of everyone we serve.",
    points: [
      "Wellbeing and pastoral care",
      "Counselling support",
      "Spiritual support on request",
    ],
  },
  {
    slug: "community-outreach",
    title: "Community outreach",
    summary:
      "Meaningful community work starts by understanding people’s needs and responding with compassion and practical action.",
    points: [
      "Food and clothing support",
      "Advice, information and community assistance",
      "Support for local churches and partner organisations",
    ],
  },
];

// Who we support — groups named on the Charity Commission record
export const beneficiaries = [
  {
    title: "Children and young people",
    text: "Encouragement, mentoring, education and practical support.",
  },
  {
    title: "People with disabilities",
    text: "Inclusion, dignity and access to appropriate support.",
  },
  {
    title: "The wider community",
    text: "Support for members of the public through charitable and community activities.",
  },
  {
    title: "Other charities and voluntary organisations",
    text: "Working alongside organisations that share compatible charitable aims.",
  },
];

// Our approach
export const approach = [
  { title: "Listen", text: "Understanding people’s circumstances and needs." },
  { title: "Support", text: "Providing practical assistance, advice and encouragement." },
  { title: "Connect", text: "Working with churches, charities and community partners." },
  { title: "Encourage", text: "Helping people find opportunities and move forward." },
  { title: "Serve", text: "Putting Christian faith into practical action." },
];

// Our mission — what we aim to do
export const missionPoints = [
  "Provide practical advice and support to Christian churches and their ministries",
  "Develop ministry and pastoral outreach programmes",
  "Share the Christian faith through appropriate evangelistic activities",
  "Develop and support musical worship and related community activities",
  "Provide pastoral care to local churches and the wider community",
  "Support activities that help prevent or relieve poverty",
  "Contribute to the advancement of education",
  "Support children, young people and vulnerable members of society",
  "Work alongside other charities and voluntary organisations",
  "Promote compassion, dignity and practical care within our communities",
];

export const trustees = [
  { name: "Sunday Shonde", role: "Chair", appointed: "21 February 2024" },
  { name: "Oluwinka Abayomi Adeniyi", role: "Trustee", appointed: "21 February 2024" },
  { name: "Olaide Ogun", role: "Trustee", appointed: "21 February 2024" },
];

export const policies = [
  "Safeguarding",
  "Bullying and harassment",
  "Complaints",
  "Financial reserves",
  "Internal financial controls",
  "Internal risk management",
  "Serious incident reporting",
  "Social media",
  "Trustee conflicts of interest",
  "Trustee expenses",
  "Charity funds",
  "Campaigns and political activity",
  "External speakers at charity events",
];

export const finances = {
  yearEnd: "31 March 2025",
  income: "£2,000",
  expenditure: "£2,850",
  returnReceived: "28 January 2026",
  volunteers: 10,
};
