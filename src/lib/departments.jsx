// import { v4 as uuidv4 } from "uuid";

// const generateShortId = () => {
//     return uuidv4().split("-")[0].slice(0, 4); // Generate a short unique ID
// };

const departments = [
    {
        serial: 1,
        id: "SD001",
        name: "Software Development",
        totalMembers: 25,
        createdAt: "10 Jan, 2023",
        lastEdited: "05 Mar, 2024",
        description: "Responsible for building and maintaining software applications.",
        manager: "Alice Johnson",
        accessLevel: "Admin",
        permissions: ["create", "read", "update", "delete", "deploy"],
    },
    {
        serial: 2,
        id: "QA001",
        name: "Quality Assurance",
        totalMembers: 15,
        createdAt: "15 Feb, 2023",
        lastEdited: "12 Feb, 2024",
        description: "Ensures the software meets quality standards before deployment.",
        manager: "Robert Smith",
        accessLevel: "Editor",
        permissions: ["read", "update", "test"],
    },
    {
        serial: 3,
        id: "IT001",
        name: "IT Support",
        totalMembers: 10,
        createdAt: "20 Mar, 2023",
        lastEdited: "01 Mar, 2024",
        description: "Handles technical issues, network security, and system maintenance.",
        manager: "David Lee",
        accessLevel: "Moderator",
        permissions: ["read", "update", "reset_password", "manage_access"],
    },
    {
        serial: 4,
        id: "PM001",
        name: "Product Management",
        totalMembers: 12,
        createdAt: "05 Apr, 2023",
        lastEdited: "28 Feb, 2024",
        description: "Manages product strategy, roadmap, and feature prioritization.",
        manager: "Sophia Davis",
        accessLevel: "Editor",
        permissions: ["create", "read", "update"],
    },
    {
        serial: 5,
        id: "HR001",
        name: "Human Resources",
        totalMembers: 8,
        createdAt: "10 May, 2023",
        lastEdited: "15 Jan, 2024",
        description: "Manages employee relations, recruitment, and company policies.",
        manager: "Emma Wilson",
        accessLevel: "Moderator",
        permissions: ["read", "update", "manage_users"],
    }
];


export default departments;
