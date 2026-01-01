export const teamData = [
    {
        id: "codesphere",
        domainName: "CodeSphere",
        description: "Building project-oriented solutions and representing the chapter in technical challenges.",
        color: "from-[#00ff41] to-[#008f11]", // Matrix Green
        icon: "Code",
        lead: {
            name: "CodeSphere Lead",
            role: "Domain Lead",
            classDept: "TY Comp",
            linkedin: "#",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=CodeSphereLead"
        },
        subTeams: [
            {
                id: "tech-strategists",
                name: "Tech Strategists",
                description: "Public face of the chapter in coding competitions and technical challenges.",
                members: [
                    { name: "Sofia Shahapure", role: "Tech Strategist", classDept: "TY Comp", linkedin: "#" },
                    { name: "Aishwari Bakshi", role: "Tech Strategist", classDept: "TY Comp", linkedin: "#" },
                    { name: "Disha Patil", role: "Tech Strategist", classDept: "TY Comp", linkedin: "#" },
                    { name: "Mitwa Gami", role: "Tech Strategist", classDept: "TY Comp", linkedin: "#" }
                ]
            }
        ]
    },
    {
        id: "skillsphere",
        domainName: "SkillSphere",
        description: "Managing talent, community engagement, and internal technology initiatives.",
        color: "from-[#00a4ef] to-[#0078d4]", // Microsoft Blue
        icon: "Brain",
        lead: {
            name: "SkillSphere Lead",
            role: "Domain Lead",
            classDept: "TY Comp",
            linkedin: "#",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=SkillSphereLead"
        },
        subTeams: [
            {
                id: "talent-tech",
                name: "Talent & Tech",
                description: "Internal tech team ensuring long-term capability building.",
                lead: {
                    name: "Karishma Chidgopkar",
                    role: "Talent & Tech Lead",
                    classDept: "TY Comp",
                    linkedin: "#",
                    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karish"
                },
                subDivisions: [
                    {
                        name: "Web3",
                        color: "border-[#f25022]",
                        members: [
                            { name: "Dnyaneshwari Khatke", role: "Web3 Developer", classDept: "SY IT", linkedin: "#" },
                            { name: "Aditi Shivapurkar", role: "Web3 Developer", classDept: "SY IT", linkedin: "#" },
                            { name: "Riya Khare", role: "Web3 Developer", classDept: "SY IT", linkedin: "#" }
                        ]
                    },
                    {
                        name: "Web Dev",
                        color: "border-[#7fba00]",
                        members: [
                            { name: "Ayushi Rahane", role: "Web Developer", classDept: "SY Comp", linkedin: "#" },
                            { name: "Srushti Sondawale", role: "Web Developer", classDept: "SY Comp", linkedin: "#" },
                            { name: "Prisha Parikh", role: "Web Developer", classDept: "SY Comp", linkedin: "#" }
                        ]
                    },
                    {
                        name: "AIML",
                        color: "border-[#ffb900]",
                        members: [
                            { name: "Shriya Jaripatke", role: "AIML Engineer", classDept: "SY Comp", linkedin: "#" },
                            { name: "Sanjana Kulkarni", role: "AIML Engineer", classDept: "SY Comp", linkedin: "#" },
                            { name: "Sakshi Kale", role: "AIML Engineer", classDept: "SY Comp", linkedin: "#" },
                            { name: "Tanmayi Kulkarni", role: "AIML Engineer", classDept: "SY Comp", linkedin: "#" },
                            { name: "Sahisha Chipade", role: "AIML Engineer", classDept: "SY Comp", linkedin: "#" }
                        ]
                    }
                ]
            },
            {
                id: "community",
                name: "Community",
                description: "Events, Creative Design, and Partnerships.",
                lead: {
                    name: "Community Lead",
                    role: "Community Lead",
                    classDept: "TY Comp",
                    linkedin: "#",
                    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=CommunityLead"
                },
                subDivisions: [
                    {
                        name: "Events",
                        members: [
                            { name: "Bhakti Dharmadhikari", role: "Event Architect", classDept: "TY Comp", linkedin: "#" },
                            { name: "Ira Ketkar", role: "Event Architect", classDept: "TY Comp", linkedin: "#" },
                            { name: "Mrunal Deore", role: "Event Architect", classDept: "TY Comp", linkedin: "#" },
                            { name: "Tanuja Chavan", role: "Event Architect", classDept: "TY Comp", linkedin: "#" }
                        ]
                    },
                    {
                        name: "Creative Design & SM",
                        members: [
                            { name: "Hindavi Bhosale", role: "Creative Architect", classDept: "TY IT", linkedin: "#" },
                            { name: "Mayoori Kulkarni", role: "Creative Architect", classDept: "TY IT", linkedin: "#" },
                            { name: "Shraddha Bhujbal", role: "Creative Architect", classDept: "TY IT", linkedin: "#" },
                            { name: "Suhani Patil", role: "Creative Architect", classDept: "TY IT", linkedin: "#" }
                        ]
                    },
                    {
                        name: "PR & Marketing",
                        members: [
                            { name: "Swarali Rake", role: "Partnership Strategist", classDept: "TY EnTC", linkedin: "#" },
                            { name: "Chinmayee Chaple", role: "Partnership Strategist", classDept: "TY EnTC", linkedin: "#" },
                            { name: "Mukta Deshpande", role: "Partnership Strategist", classDept: "TY EnTC", linkedin: "#" }
                        ]
                    },
                    {
                        name: "Content",
                        members: [
                            { name: "Varda Kachroo", role: "Content Architect", classDept: "SY Comp", linkedin: "#" },
                            { name: "Prachi Gagnani", role: "Content Architect", classDept: "SY Comp", linkedin: "#" },
                            { name: "Rucha Walvekar", role: "Content Architect", classDept: "SY Comp", linkedin: "#" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "assetsphere",
        domainName: "AssetSphere",
        description: "Ensuring financial sustainability and resource allocation.",
        color: "from-[#ffb900] to-[#d83b01]", // MS Yellow/Orange
        icon: "Coins",
        lead: {
            name: "AssetSphere Lead",
            role: "Domain Lead",
            classDept: "TY Comp",
            linkedin: "#",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=AssetSphereLead"
        },
        subTeams: [
            {
                id: "finance",
                name: "Finance",
                description: "Budgeting, accounts, and financial planning.",
                lead: {
                    name: "Finance Lead",
                    role: "Finance Lead",
                    classDept: "TY Comp",
                    linkedin: "#",
                    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=FinanceLead"
                },
                members: [
                    { name: "Arya Dixit", role: "Ledger Architect", classDept: "TY Comp", linkedin: "#" },
                    { name: "Shubhashree Shinde", role: "Ledger Architect", classDept: "TY Comp", linkedin: "#" },
                    { name: "Radha Shukla", role: "Ledger Architect", classDept: "TY Comp", linkedin: "#" },
                    { name: "Veena Shastri", role: "Ledger Architect", classDept: "TY Comp", linkedin: "#" }
                ]
            }
        ]
    }
];

export const mlscHead = {
    name: "Vaishnavi Ahire",
    role: "MLSC Head",
    classDept: "TY Comp",
    linkedin: "#",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rani",
    quote: "Leading the charge towards innovation."
};
