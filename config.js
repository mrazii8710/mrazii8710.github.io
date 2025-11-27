// ==================================================================
// ⚙️ MASTER SETTINGS
// ==================================================================

// 1. CENTER DETAILS
const centerInfo = {
    name: "Indian Islahi Center",
    location: "Khobar, Saudi Arabia",
    // Exact coordinates extracted from your Google Maps link
    //mapEmbedUrl: "https://maps.google.com/maps?q=26.2869996,50.1996285&t=&z=17&ie=UTF8&iwloc=&output=embed"
};

// 2. WEEKLY PROGRAMS (Edit this list to change the Home screen schedule)
// Icons: 🕌 (Jumuah), 📖 (Quran), 🎓 (Class), 🌙 (Evening), 🤝 (Meeting)
const programsList = [
    { day: "Friday",  time: "1:00 PM", title: "Friday Weekly Class", icon: "🕌" },
    { day: "Thursday",time: "After Isha Prayer", title: "Youth Executive Meet", icon: "🤝" }
];

// 3. EXAM WEEKS CONFIGURATION
// To add a new result, create a file in 'data/' folder and add a line here.
const examConfig = [
    {
        id: "week_4",
        label: "Week 4: QHLC WEEKLY EXAM - AN-NAML(54-66)",
        file: "data/week_4.json", // Ensure this file exists
        published: true
    },
    {
        id: "week_5",
        label: "Week 5: QHLC WEEKLY EXAM - AN-NAML(67-82)",
        file: "data/week_5.json",
        published: false // Set to 'true' when you upload the result file
    }
];
