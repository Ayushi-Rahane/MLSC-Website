import ImagineCupImage from "../assets/imagine_cup_banner.png";
export const events = [
  {
    id: 1,
    type: "Student Startup Competition",
    date: "Jan, 2026",
    title: "2026 Imagine Cup Competition",
    time: "2:00 PM - 5:00 PM",
    location: "Online",
    overview:
      "Imagine Cup is Microsoft’s springboard for student founders who seek to build commercially viable solutions using Microsoft’s cloud and AI platforms. To compete, a submission must use at least two Microsoft AI services. Submissions must include: completed responses to the application form, a pitch deck with an MVP demo video, and a video recording of the team’s pitch.",
    description:
      "Imagine Cup is Microsoft’s global student startup competition where students turn bold ideas into real-world solutions using AI and cloud technologies.",
    image: ImagineCupImage,
    ongoing: true,
    steps: [
      {
        title: "MVP Round",
        date: "Sep 30, 2025 - Jan 9, 2026",
        desc: "Build a functional version of your solution demonstrating customer validation and market fit."
      },
      {
        title: "Semifinals Round",
        date: "Feb 10, 2026 - Apr 7, 2026",
        desc: "Top teams will participate in a 5-week training program and technical review, culminating in a live pitch."
      },
      {
        title: "World Championship",
        date: "April - May 2026",
        desc: "Three Scale teams will compete for the grand prize and mentorship with Satya Nadella."
      }
    ],
    rulesLink: "/assets/IC26 Official Rules and Regulations Dec 2025.pdf"
  },
  {
    id: 2,
    type: "Workshop",
    date: "Jan 25, 2025",
    title: "Azure Cloud Workshop",
    time: "2:00 PM - 5:00 PM",
    location: "Tech Lab, Building A",
    description:
      "Hands-on workshop covering Azure fundamentals, cloud architecture, and deployment strategies",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    ongoing: false,
  }
];
