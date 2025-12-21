import AchievementImg1 from "../assets/achievement1.png";
export const achievements = [
  {
    id: crypto.randomUUID(),
    title: "MLSC Chapter Launch – CCEW",
    date: "January 2025",
    short: "Official launch of the Microsoft Learn Student Chapter at Cummins College of Engineering for Women, Pune.",
    details: `
      The Microsoft Learn Student Chapter (MLSC) was officially launched at MKSSS Cummins College of Engineering for Women, Pune, under the Department of Computer Engineering.

      The inauguration featured a welcome address by Dr. Sunita Jahirabadkar Ma’am (HoD), followed by an inspiring session by Bhushan Gawale Sir (Microsoft MVP) on the importance of participating in global tech communities.

      The ceremony included a traditional Deep Prajwalan and a tech-powered launch moment symbolizing the beginning of our innovation journey.

      We also heard from our Founder & President, Vaishnavi Ahire, and introduced our Faculty Coordinator, Sakshi Mandke Ma’am, along with the Core Establishment Team:
      Eesha Kamath, Aarya Patil, Aarya Kulkarni, and Karishma Chidgopkar.

      The chapter aims to foster innovation, enhance technical skills, and represent MLSC CCEW on Microsoft’s global platforms.
          ` ,
    image:AchievementImg1,
    side: "left",
  },
  {
    id: crypto.randomUUID(),
    title: "Tech Conference 2024",
    date: "October 2024",
    short: "Hosted our annual tech conference with 500+ attendees",
    details:
      "Organized a large-scale conference featuring industry speakers, workshops, and networking sessions focused on cloud and AI technologies.",
    image: "https://plus.unsplash.com/premium_photo-1683120968693-9af51578770e?q=80&w=1563&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    side: "right",
  },
  {
    id: crypto.randomUUID(),
    title: "Cloud Workshop Series",
    date: "September 2024",
    short: "Completed 8-week intensive Azure workshop series",
    details:
      "Conducted hands-on cloud workshops covering Azure fundamentals, DevOps, and deployment strategies.",
    image: "https://images.unsplash.com/photo-1623652554515-91c833e3080e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    side: "left",
  },
];
