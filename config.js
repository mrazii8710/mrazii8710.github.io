// ==================================================================
// ⚙️ MASTER SETTINGS
// ==================================================================

// 1. CENTER DETAILS
const centerInfo = {
    name: "Indian Islahi Center",
    location: "Khobar, Saudi Arabia",
    // Exact coordinates extracted from your Google Maps link
    mapEmbedUrl: "https://maps.google.com/maps?q=26.2869996,50.1996285&t=&z=17&ie=UTF8&iwloc=&output=embed"
};

// 2. WEEKLY PROGRAMS (Edit this list to change the Home screen schedule)
// Icons: 🕌 (Jumuah), 📖 (Quran), 🎓 (Class), 🌙 (Evening), 🤝 (Meeting)
const programsList = [
    { day: "Friday",  time: "12:30 PM", title: "Jumu'ah Khutbah", icon: "🕌" },
    { day: "Friday",  time: "08:00 PM", title: "Quran Tafseer",   icon: "📖" },
    { day: "Tuesday", time: "04:30 PM", title: "Ladies Halqa",    icon: "🧕" },
    { day: "Thursday",time: "09:00 PM", title: "Youth Meet",      icon: "🤝" }
];

// 3. EXAM WEEKS CONFIGURATION
// To add a new result, create a file in 'data/' folder and add a line here.
const examConfig = [
    {
        id: "week_1",
        label: "Week 1: Basic Tajweed (Oct 20)",
        file: "data/week_1.json", // Ensure this file exists
        published: true
    },
    {
        id: "week_2",
        label: "Week 2: Hifz Surah Al-Mulk (Oct 27)",
        file: "data/week_2.json",
        published: true
    },
    {
        id: "week_3",
        label: "Week 3: Seerah Quiz (Nov 03)",
        file: "data/week_3.json",
        published: false // Set to 'true' when you upload the result file
    }
];
