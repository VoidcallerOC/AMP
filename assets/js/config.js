// AMP Fitness Pittsburgh — verified public-site content
// Forge foundation: config-driven, zero-build static architecture.

const BUSINESS = {
  name: "AMP Fitness",
  shortName: "AMP",
  tagline: "We train together. We give back together.",
  trade: "Boutique HIIT & strength gym",
  demo: false,
  phone: "+1 (412) 930-4363",
  phoneHref: "+14129304363",
  email: "info@ampfitnesspgh.com",
  address: "5992 Steubenville Pike, McKees Rocks, PA 15136",
  mapsQuery: "5992 Steubenville Pike, McKees Rocks, PA 15136",
  serviceAreaShort: "Pittsburgh, Pennsylvania",
  social: {
    instagram: "https://www.instagram.com/ampfitnesspgh/",
    facebook: "https://www.facebook.com/ampfitnesspgh",
  },
};

const CTA = {
  primary: {
    label: "Book Your First Class",
    href: "https://www.mindbodyonline.com/explore/locations/amp-fitness-ce977bbf?utm_source=website&utm_medium=hero&utm_campaign=book",
  },
  secondary: { label: "Call AMP" },
};

const HERO = {
  eyebrow: BUSINESS.serviceAreaShort,
  title: "Show up.<br /><em>Push hard.</em>",
  lede: "Boutique HIIT and strength coaching in Pittsburgh. Expert-led 60-minute classes built for every fitness level — and a community that gives back.",
  emergency: "3 classes for $30 · New members only",
  badges: ["All levels welcome", "60 min coached classes", "$16,000+ donated"],
};

const TRUST_ITEMS = [
  { strong: "$16,000+ donated", label: "to Pittsburgh charities" },
  { strong: "All levels welcome", label: "start where you are" },
  { strong: "7 days a week", label: "morning to evening" },
  { strong: "60 min", label: "coached classes" },
];

const SERVICES = [
  { name: "HIIT", description: "Alternating bursts of all-out effort with short recovery periods. Push your limits, build endurance, and make every rep count.", icon: "service", cta: "https://www.mindbodyonline.com/explore/locations/amp-fitness-ce977bbf?utm_source=website&utm_medium=class&utm_campaign=book" },
  { name: "MAX", description: "Strength-focused sessions built around maximum repetitions. Challenge your muscles and track progress week after week.", icon: "offerings", cta: "https://www.mindbodyonline.com/explore/locations/amp-fitness-ce977bbf?utm_source=website&utm_medium=class&utm_campaign=book" },
  { name: "Round Robin", description: "Move through exercises back-to-back, rest, then repeat. A smart, efficient way to build strength and stamina.", icon: "community", cta: "https://www.mindbodyonline.com/explore/locations/amp-fitness-ce977bbf?utm_source=website&utm_medium=class&utm_campaign=book" },
  { name: "AMRAP", description: "Race the clock to complete as many rounds as possible. A true test of grit, conditioning, and mental toughness.", icon: "service", cta: "https://www.mindbodyonline.com/explore/locations/amp-fitness-ce977bbf?utm_source=website&utm_medium=class&utm_campaign=book" },
];

const WHY_US = {
  lead: "AMP was built on a simple belief: fitness is better with community, and community is stronger when it gives back.",
  points: [
    { title: "Coached from start to finish", body: "Every class is 60 minutes with expert coaching — not a workout you have to figure out alone." },
    { title: "Come as you are", body: "All fitness levels are welcome. Scale the workout to your body, your pace, and your goals." },
    { title: "A reason beyond the workout", body: "Every membership helps fund charitable causes across Pittsburgh. Train together, give back together." },
    { title: "Make showing up easier", body: "Classes run seven days a week, with simple booking through MindBody and formats for every kind of training day." },
  ],
};

const SERVICE_AREA = {
  statement: "Your Pittsburgh-area home base for coached HIIT, strength, and a community that keeps showing up.",
  region: "McKees Rocks · Pittsburgh, PA",
  cities: ["HIIT", "MAX", "Round Robin", "AMRAP", "EMOM", "Yoga", "Party"],
};

const PROJECTS = [
  { title: "The class floor", service: "60-minute coached sessions", location: "AMP Fitness", description: "A full-body, high-energy training environment designed to keep you moving with purpose.", image: "/assets/img/hero/amp-gym-floor.jpg", placeholder: false },
  { title: "Find your format", service: "HIIT · MAX · Round Robin · AMRAP", location: "All levels welcome", description: "Choose the class that matches your goals, then let the coach take it from there.", image: "/assets/img/content/amp-class.jpg", placeholder: false },
  { title: "Community in motion", service: "Train together. Give back together.", location: "Pittsburgh charities", description: "$16,000+ donated and counting — because a stronger community is part of the workout.", image: "/assets/img/content/amp-equipment.jpg", placeholder: false },
];

const TESTIMONIALS = [
  { quote: "Amazing gym with a very welcoming atmosphere! The trainers are kind, helpful and super supportive!", name: "Katie G.", meta: "March 2026 · Google review" },
  { quote: "AMP PITTSBURGH has changed my life in so many ways! Until you experience the vibe, you will not know!", name: "Vince S.", meta: "February 2026 · Google review" },
  { quote: "The workouts are challenging, but there is also an emphasis on listening to your own body so you never feel pressured to over-extend.", name: "Kyle P.", meta: "April 2025 · Google review" },
];

const FORM = {
  services: ["HIIT", "MAX", "Round Robin", "AMRAP", "Pricing", "Something else"],
  timing: ["I want to book a first class", "I have a question about classes", "I want to learn about pricing", "Just saying hello"],
};

const HOURS = [
  { day: "Sunday", label: "8:00 AM – 11:00 AM" },
  { day: "Monday", label: "5:30 AM – 7:00 PM" },
  { day: "Tuesday", label: "5:30 AM – 7:00 PM" },
  { day: "Wednesday", label: "5:30 AM – 7:00 PM" },
  { day: "Thursday", label: "5:30 AM – 7:00 PM" },
  { day: "Friday", label: "5:30 AM – 7:00 PM" },
  { day: "Saturday", label: "7:00 AM – 12:00 PM" },
];
