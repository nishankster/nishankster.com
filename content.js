/* ==========================================================================
   nishankster.com — ALL SITE CONTENT LIVES HERE
   --------------------------------------------------------------------------
   This is the only file you need to edit to change text, links, projects,
   writing, photos or your "now" list. The design lives in index.html.

   Quick rules (see README.md for more):
   • Keep text inside "double quotes". Need a quote mark inside? Use ’ or “ ”.
   • Every item in a list ends with a comma, like the examples below.
   • Wrap a word in *asterisks* to make it italic and coloured.
   • Save, commit on GitHub, and the site updates in a minute or two.
   ========================================================================== */

window.SITE = {

  /* ---------- Basics ---------- */
  name: "Nishank Jain",
  initials: "NJ",                       // shown in the red seal
  location: "Atlanta, GA",

  /* ---------- Top of the page ---------- */
  hero: {
    greeting: "hello, I’m Nishank",
    headline: "I make money move *in real time*, then go for a long run.",
    intro: "I work on real-time payments, the rails that move money in seconds, here in Atlanta. I’m also into specs, AI-assisted teams, photography, and learning quantum computing one stubborn qubit at a time.",
    sideNote: "slow down · notice things",  // the small vertical line of text
  },

  /* ---------- About ---------- */
  about: {
    title: "Fifteen years in the *quiet plumbing* of finance.",
    paragraphs: [
      "Payments is the part of finance nobody thinks about until it breaks, and I’ve spent my whole career in it. These days I lead payments engineering, working on the kind of rails people use without a second thought.",
      "What really gets me going is how good teams work: clear specs, short feedback loops, and tools that take the toil out of engineering. That’s why I built SPECTRA and keep pushing on AI-assisted development.",
      "Off the clock you’ll find me leading a Saturday long run for the Atlanta Track Club, behind a camera, or deep in a quantum computing paper I only half understand (for now).",
    ],
    facts: [
      ["based in", "Atlanta, GA"],
      ["day job", "payments engineering"],
      ["weekends", "ATC run lead"],
      ["schooling", "MBA, UGA Terry"],
      ["fuel", "matcha, coffee & miles"],
    ],
  },

  /* ---------- Work ----------
     featured: true makes a card wide and dark. Tags are optional. */
  work: [
    {
      label: "the day job",
      title: "Payments Technology",
      text: "The rails that move money in seconds instead of days, and the engineering it takes to make them feel effortless.",
      tags: ["Zelle","real-time", "resilient", "always on"],
      featured: true,
    },
    {
      label: "a framework",
      title: "SPECTRA",
      text: "AI-governed, spec-driven delivery with a four-level inheritance model, from core principles down to app playbooks. Works in any domain.",
    },
    {
      label: "big, quiet moves",
      title: "Migrations at scale",
      text: "Moving big, critical systems without anyone noticing. If it works, nobody knows it happened.",
    },
    {
      label: "changing how we build",
      title: "AI-native engineering",
      text: "Taking AI coding tools like Claude Code and GitLab Duo from “should we try this?” to everyday practice.",
    },
    {
      label: "work in progress",
      title: "A payment ontology",
      text: "A deep map of how Zelle, RTP, FedNow and ACH actually work and connect. Coming to Medium soon.",
    },
    {
      label: "nerding out",
      title: "Quantum, one qubit at a time",
      text: "A fully automated daily digest I built to teach myself quantum computing, from superposition to surface codes.",
    },
    {
      label: "thinking about",
      title: "Post-quantum readiness",
      text: "Where payments meet quantum: crypto-agility, and what to do before “harvest now, decrypt later” gets real.",
    },
  ],

  /* ---------- Writing ----------
     When a post is live, replace "coming soon" with a date and add its url. */
  writing: [
    { date: "coming soon", title: "The U.S. payment rails, mapped", text: "A practical ontology of Zelle, RTP, FedNow and ACH, and how they fit together.", url: "" },
    { date: "coming soon", title: "SPECTRA: governing AI with specs", text: "How a four-level framework keeps AI-assisted delivery fast without losing control.", url: "" },
    { date: "coming soon", title: "Quantum for busy engineers", text: "What I’ve learned teaching myself quantum computing with zero physics background.", url: "" },
  ],

  /* ---------- Running ---------- */
  running: {
    text: "Run lead with the Atlanta Track Club. Three-plus runs a week, a long one every Saturday, and the Peachtree Road Race on the calendar.",
    stats: [
      ["3+", "runs a week"],
      ["Sat", "long run day"],
      ["ATC", "run lead"],
    ],
  },

  /* ---------- Photos ----------
     Upload images into the "photos" folder on GitHub, then put the file name
     in src, e.g. "photos/piedmont-park.jpg". Leave src "" to show a placeholder. */
  photos: [
    { src: "waves.jpg", caption: "waves" },
    { src: "", caption: "blue morning" },
    { src: "", caption: "trail day" },
    { src: "", caption: "city light" },
    { src: "", caption: "monsoon green" },
    { src: "", caption: "dusk" },
  ],

  /* ---------- Rocky ---------- */
  rocky: {
    title: "Rocky, head of security",
    text: "Three walks a day, firm opinions about beef treats, and the real reason I’m up early. Reviews my code by sleeping on the keyboard.",
  },

  /* ---------- Now ----------
     done: true shows a ticked box. Update this every month or two. */
  now: {
    updated: "Oct 2026",
    items: [
      { text: "map the U.S. payment rails, properly" },
      { text: "roll SPECTRA out to more teams" },
      { text: "set up this website", done: true },
      { text: "finally understand quantum circuits" },
      { text: "90-day reset: more strength, more miles" },
    ],
  },

  /* ---------- Contact ---------- */
  contact: {
    headline: "Let’s *talk shop*.",
    text: "Payments, AI in engineering, Atlanta running routes, or a quantum paper worth reading. My inbox is open.",
    email: "hello@nishankster.com",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/nishankjain" },
      { label: "Medium", url: "https://medium.com/" },
    ],
  },
};
