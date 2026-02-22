import eeshaKamathImg from "../assets/team_photos/eesha_kamath.jpg";
import sofiaShahapureImg from "../assets/team_photos/sofia_shahapure.jpg";
import aishwariBakshiImg from "../assets/team_photos/aishwari_bakshi.jpg";
import dishaPatilImg from "../assets/team_photos/disha_patil.jpg";
import dnyaneshwariKhatkeImg from "../assets/team_photos/dnyaneshwari_khatke.jpg";
import aditiShivapurkarImg from "../assets/team_photos/aditi_shivapurkar.jpg";
import ayushiRahaneImg from "../assets/team_photos/ayushi_rahane.jpg";
import shriyaJaripatkeImg from "../assets/team_photos/shriya_jaripatke.jpg";
import sanjanaKulkarniImg from "../assets/team_photos/sanjana_kulkarni.jpg";
import sakshiKaleImg from "../assets/team_photos/sakshi_kale.jpg";
import tanmayiKulkarniImg from "../assets/team_photos/tanmayi_kulkarni.jpg";
import sahishaChipadeImg from "../assets/team_photos/sahisha_chipade.jpg";
import iraKetkarImg from "../assets/team_photos/ira_ketkar.jpg";
import mrunalDeoreImg from "../assets/team_photos/mrunal_deore.jpg";
import hindaviBhosaleImg from "../assets/team_photos/hindavi_bhosale.jpg";
import suhaniPatilImg from "../assets/team_photos/suhani_patil.jpg";
import swaraliRakeImg from "../assets/team_photos/swarali_rake.jpg";
import chinmayeeChapleImg from "../assets/team_photos/chinmayee_chaple.jpg";
import muktaDeshpandeImg from "../assets/team_photos/mukta_deshpande.jpg";
import vardaKachrooImg from "../assets/team_photos/varda_kachroo.jpg";
import prachiGagnaniImg from "../assets/team_photos/prachi_gagnani.jpg";
import ruchaWalvekarImg from "../assets/team_photos/rucha_walvekar.jpg";
import shubhashreeShindeImg from "../assets/team_photos/shubhashree_shinde.jpg";
import radhaShuklaImg from "../assets/team_photos/radha_shukla.jpg";
import veenaShastriImg from "../assets/team_photos/veena_shastri.jpg";

export const teamData = [
    {
        id: "codesphere",
        domainName: "CodeSphere",
        description: "Building project-oriented solutions and representing the chapter in technical challenges.",
        color: "from-[#00ff41] to-[#008f11]", // Matrix Green
        icon: "Code",
        lead: {
            name: "Eesha Kamath",
            role: "Domain Lead",
            classDept: "TY Comp",
            linkedin: "#",
            image: eeshaKamathImg
        },
        subTeams: [
            {
                id: "tech-strategists",
                name: "Tech Strategists",
                description: "Public face of the chapter in coding competitions and technical challenges.",
                members: [
                    { name: "Sofia Shahapure", role: "Tech Strategist", classDept: "TY Comp", linkedin: "#", image: sofiaShahapureImg },
                    { name: "Aishwari Bakshi", role: "Tech Strategist", classDept: "TY Comp", linkedin: "#", image: aishwariBakshiImg },
                    { name: "Disha Patil", role: "Tech Strategist", classDept: "TY Comp", linkedin: "#", image: dishaPatilImg },
                    { name: "Mitwa Gami", role: "Tech Strategist", classDept: "TY Comp", linkedin: "#" }
                ]
            }
        ]
    },
    {
        id: "talentsphere",
        domainName: "TalentSphere",
        description: "Managing talent, website and internal technology initiatives.",
        color: "from-[#00a4ef] to-[#0078d4]",
        icon: "Brain",
        lead: {
            name: "Karishma Chidgopkar",
            role: "Talent & Tech Lead",
            classDept: "TY Comp",
            linkedin: "#",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karish"
        },
        subTeams: [
            {
                id: "talent-tech",
                name: "Talent & Tech",
                subDivisions: [
                    {
                        name: "Web3",
                        color: "border-[#f25022]",
                        members: [
                            { name: "Dnyaneshwari Khatke", role: "Web3 Architect", classDept: "SY IT", linkedin: "#", image: dnyaneshwariKhatkeImg },
                            { name: "Aditi Shivapurkar", role: "Web3 Architect", classDept: "SY IT", linkedin: "#", image: aditiShivapurkarImg },
                            { name: "Riya Khare", role: "Web3 Architect", classDept: "SY IT", linkedin: "#" }
                        ]
                    },
                    {
                        name: "Web Dev",
                        color: "border-[#7fba00]",
                        members: [
                            { name: "Ayushi Rahane", role: "Web Dev Architect", classDept: "SY Comp", linkedin: "#", image: ayushiRahaneImg },
                            { name: "Srushti Sondawale", role: "Web Dev Architect", classDept: "SY Comp", linkedin: "#" },
                            { name: "Prisha Parikh", role: "Web Dev Architect", classDept: "SY Comp", linkedin: "#" }
                        ]
                    },
                    {
                        name: "AIML",
                        color: "border-[#ffb900]",
                        members: [
                            { name: "Shriya Jaripatke", role: "AIML Architect", classDept: "SY Comp", linkedin: "#", image: shriyaJaripatkeImg },
                            { name: "Sanjana Kulkarni", role: "AIML Architect", classDept: "SY Comp", linkedin: "#", image: sanjanaKulkarniImg },
                            { name: "Sakshi Kale", role: "AIML Architect", classDept: "SY Comp", linkedin: "#", image: sakshiKaleImg },
                            { name: "Tanmayi Kulkarni", role: "AIML Architect", classDept: "SY Comp", linkedin: "#", image: tanmayiKulkarniImg },
                            { name: "Sahisha Chipade", role: "AIML Architect", classDept: "SY Comp", linkedin: "#", image: sahishaChipadeImg }
                        ]
                    }
                ]
            }
        ],
    },

    {
        id: "skillsphere",
        domainName: "SkillSphere",
        description: "Managing talent, community engagement, and internal technology initiatives.",
        color: "from-[#00a4ef] to-[#0078d4]", // Microsoft Blue
        icon: "Brain",
        lead: {
            name: "Aarya Kulkarni",
            role: "Domain Lead",
            classDept: "TY Comp",
            linkedin: "#",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=SkillSphereLead"
        },
        subTeams: [

            {
                id: "community",
                name: "Community",
                description: "Events, Creative Design, and Partnerships.",
                /* lead: {
                     name: "Community Lead",
                     role: "Community Lead",
                     classDept: "TY Comp",
                     linkedin: "#",
                     image: "https://api.dicebear.com/7.x/avataaars/svg?seed=CommunityLead"
                 },*/
                subDivisions: [
                    {
                        name: "Events",
                        members: [
                            { name: "Bhakti Dharmadhikari", role: "Event Architect", classDept: "TY Comp", linkedin: "#" },
                            { name: "Ira Ketkar", role: "Event Architect", classDept: "TY Comp", linkedin: "#", image: iraKetkarImg },
                            { name: "Mrunal Deore", role: "Event Architect", classDept: "TY Comp", linkedin: "#", image: mrunalDeoreImg },
                            { name: "Tanuja Chavan", role: "Event Architect", classDept: "TY Comp", linkedin: "#" }
                        ]
                    },
                    {
                        name: "Creative Design & SM",
                        members: [
                            { name: "Hindavi Bhosale", role: "Creative Architect", classDept: "TY IT", linkedin: "#", image: hindaviBhosaleImg },
                            { name: "Mayoori Kulkarni", role: "Creative Architect", classDept: "TY IT", linkedin: "#" },
                            { name: "Shraddha Bhujbal", role: "Creative Architect", classDept: "TY IT", linkedin: "#" },
                            { name: "Suhani Patil", role: "Creative Architect", classDept: "TY IT", linkedin: "#", image: suhaniPatilImg }
                        ]
                    },
                    {
                        name: "PR & Marketing",
                        members: [
                            { name: "Swarali Rake", role: "Partnership Strategist", classDept: "TY EnTC", linkedin: "#", image: swaraliRakeImg },
                            { name: "Chinmayee Chaple", role: "Partnership Strategist", classDept: "TY EnTC", linkedin: "#", image: chinmayeeChapleImg },
                            { name: "Mukta Deshpande", role: "Partnership Strategist", classDept: "TY EnTC", linkedin: "#", image: muktaDeshpandeImg }
                        ]
                    },
                    {
                        name: "Content",
                        members: [
                            { name: "Varda Kachroo", role: "Content Architect", classDept: "SY Comp", linkedin: "#", image: vardaKachrooImg },
                            { name: "Prachi Gagnani", role: "Content Architect", classDept: "SY Comp", linkedin: "#", image: prachiGagnaniImg },
                            { name: "Rucha Walvekar", role: "Content Architect", classDept: "SY Comp", linkedin: "#", image: ruchaWalvekarImg }
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
            name: "Aarya Patil",
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
                /* lead: {
                     name: "Finance Lead",
                     role: "Finance Lead",
                     classDept: "TY Comp",
                     linkedin: "#",
                     image: "https://api.dicebear.com/7.x/avataaars/svg?seed=FinanceLead"
                 },*/
                members: [
                    { name: "Arya Dixit", role: "Ledger Architect", classDept: "TY Comp", linkedin: "#" },
                    { name: "Shubhashree Shinde", role: "Ledger Architect", classDept: "TY Comp", linkedin: "#", image: shubhashreeShindeImg },
                    { name: "Radha Shukla", role: "Ledger Architect", classDept: "TY Comp", linkedin: "#", image: radhaShuklaImg },
                    { name: "Veena Shastri", role: "Ledger Architect", classDept: "TY Comp", linkedin: "#", image: veenaShastriImg }
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
