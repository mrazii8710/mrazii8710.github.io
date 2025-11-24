// ==================================================================
// ⚙️ MASTER SETTINGS
// Manage Programs, Weeks, and Map Location here.
// ==================================================================

// 1. WEEKLY EXAM RESULTS
const examConfig = [
    {
        id: "week_1",
        label: "Week 1: Basic Tajweed (Oct 20)",
        file: "data/week_1.json",
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
        published: false
    }
];

// 2. WEEKLY PROGRAMS LIST (Displayed on Home Tab)
const programsList = [
    { title: "Friday Class", time: "Fri 1:00 PM", icon: "📖" },
    { title: "Quran Tafseer",   time: "Fri 8:00 PM",  icon: "📖" },
    { title: "Ladies Halqa",    time: "Tue 4:30 PM",  icon: "🧕" },
    { title: "Youth Meet",      time: "Thu 9:00 PM",  icon: "🤝" },
    { title: "Tajweed Class",   time: "Sat 7:00 PM",  icon: "🎓" } // Add/Remove lines as needed
];

// 3. CENTER INFORMATION
const centerInfo = {
    name: "Indian Islahi Center",
    locationName: "Khobar Indian Islahi Centre",
    // Coordinates from your Google Maps link (26.2870044, 50.1970536)
    mapUrl: "https://maps.google.com/maps?q=26.2869996,50.1996285&t=&z=15&ie=UTF8&iwloc=&output=embed"
};
