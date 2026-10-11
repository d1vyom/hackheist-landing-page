export const event = {
  name: "HACKHEIST",
  tagline: "Build something worth breaking.",
  organizer: "GDG on Campus MIET",
  edition: "HackHeist 2026",
  venue: "MIET",
  time: "9:00 AM onwards",
  dateNotice: "Date to be announced",
  registrationHref: "#event-details",
  registrationNotice: "Registration link coming soon.",
} as const;

export const highlights: readonly { title: string; description: string }[] = [
  { title: "Hackathon", description: "Build and showcase your ideas" },
  { title: "Workshop", description: "Learn practical development skills" },
  { title: "Tech Session", description: "Learn from experienced developers" },
  {
    title: "Networking",
    description: "Connect with students and the developer community",
  },
];
