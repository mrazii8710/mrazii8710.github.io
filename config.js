// ==================================================================
// ⚙️ MASTER SETTINGS
// Manage Programs, Weeks, and Map Location here.
// ==================================================================

// 1. WEEKLY EXAM RESULTS
const examConfig = [
    {
        id: "week_4",
        label: "Week 4: QHLC WEEKLY EXAM - AN-NAML(54-66)",
        file: "data/week_4.json",
        published: true
    },
    {
        id: "week_5",
        label: "Week 5: QHLC WEEKLY EXAM - AN-NAML(67-82)",
        file: "data/week_5.json",
        published: false
    }
];

// 2. WEEKLY PROGRAMS LIST (Displayed on Home Tab)
const programsList = [
    { title: "Friday Class", time: "Fri 1:00 PM", icon: "📖" },
    { title: "Youth Meet", time: "Thu 9:00 PM",  icon: "🤝" } // Add/Remove lines as needed
];

// 3. CENTER INFORMATION
const centerInfo = {
    name: "Indian Islahi Center",
    locationName: "Khobar Indian Islahi Centre",
    // Coordinates from your Google Maps link (26.2870044, 50.1970536)
    mapUrl: "https://maps.google.com/maps?q=26.2869996,50.1996285&t=&z=15&ie=UTF8&iwloc=&output=embed"
};
