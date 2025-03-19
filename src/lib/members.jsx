
const members = [
    {
        id: 1,
        name: "Alice Johnson",
        image: "https://randomuser.me/api/portraits/women/19.jpg",
        socials: { twitter: "#", github: "#", website: "#" },
        projects: [
            { title: "Project Alpha", description: "AI-powered analytics tool." },
            { title: "Project Beta", description: "E-commerce platform." }
        ],
        email: "test@gmil.com",
        bio: "Expert in AI and leading software development projects.",
        location: "Bangalore",
        skills: ["Java", "Python"],
        accessLevel: "Admin",
        permissions: ["create", "read", "update", "delete", "deploy"],
        department: "Software Development"
    },
    {
        id: 2,
        name: "Bob Smith",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
        socials: { twitter: "#", github: "#", website: "#" },
        projects: [
            { title: "Portfolio Website", description: "Personal portfolio site." },
            { title: "Weather App", description: "Weather forecasting app." }
        ],
        email: "test@gmil.com",
        bio: "Detail-oriented QA specialist ensuring software quality.",
        location: "Bangalore",
        skills: ["Java", "Python"],
        accessLevel: "Editor",
        permissions: ["read", "update", "test"],
        department: "Quality Assurance"
    },
    {
        id: 3,
        name: "Claire Mac",
        image: "https://randomuser.me/api/portraits/women/26.jpg",
        socials: { twitter: "#", github: "#", website: "#" },
        email: "test@gmil.com",
        bio: "System specialist managing IT infrastructure and security.",
        location: "Bangalore",
        skills: ["Java", "Python"],
        accessLevel: "Moderator",
        permissions: ["read", "update", "reset_password", "manage_access"],
        department: "IT Support"
    },
    // {
    //     id: 4,
    //     name: "Lisa Johnson",
    //     image: "https://randomuser.me/api/portraits/women/11.jpg",
    //     socials: { twitter: "#", github: "#", website: "#" },
    //     projects: [
    //         { title: "Social Media App", description: "A social network for travelers." },
    //         { title: "Blog CMS", description: "A custom content management system." }
    //     ],
    //     email: "test@gmil.com",
    //     bio: "Passionate about AI",
    //     location: "Banglore",
    //     skills: ["Java", "Python"]
    // },
    // {
    //     id: 5,
    //     name: "Harry Miller",
    //     image: "https://randomuser.me/api/portraits/men/22.jpg",
    //     socials: { twitter: "#", github: "#", website: "#" },
    //     email: "test@gmil.com",
    //     bio: "Passionate about AI",
    //     location: "Banglore",
    //     skills: ["Java", "Python"]
        // projects: [
        //     { title: "Social Media App", description: "A social network for travelers." },
        //     { title: "Blog CMS", description: "A custom content management system." }
        // ]
    // },
    // {
    //     id: 6,
    //     name: "Raj Koothrappali",
    //     image: "https://randomuser.me/api/portraits/men/4.jpg",
    //     socials: { twitter: "#", github: "#", website: "#" },
    //     projects: [
    //         { title: "Social Media App", description: "A social network for travelers." },
    //         { title: "Blog CMS", description: "A custom content management system." }
    //     ]
    // },
    // {
    //     id: 7,
    //     name: "Priya Raj",
    //     image: "https://randomuser.me/api/portraits/women/8.jpg",
    //     socials: { twitter: "#", github: "#", website: "#" },
    //     projects: [
    //         { title: "Social Media App", description: "A social network for travelers." },
    //         { title: "Blog CMS", description: "A custom content management system." }
    //     ]
    // },
    // {
    //     id: 8,
    //     name: "Abraham D'Souza",
    //     image: "https://randomuser.me/api/portraits/men/5.jpg",
    //     socials: { twitter: "#", github: "#", website: "#" },
    //     projects: [
    //         { title: "Social Media App", description: "A social network for travelers." },
    //         { title: "Blog CMS", description: "A custom content management system." }
    //     ]
    // },
    // {
    //     id: 9,
    //     name: "Chloe S.",
    //     image: "https://randomuser.me/api/portraits/women/6.jpg",
    //     socials: { twitter: "#", github: "#", website: "#" },
    //     projects: [
    //         { title: "Social Media App", description: "A social network for travelers." },
    //         { title: "Blog CMS", description: "A custom content management system." }
    //     ]
    // }
];

export default members;