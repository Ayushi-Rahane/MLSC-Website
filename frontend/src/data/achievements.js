import AchievementImg1 from "../assets/achievement1.png";
import ImagineCupImg from "../assets/imagine_cup_banner.png";
import blockcity from "../assets/blockcity_img.png";
export const achievements = [
  {
    id: 1,
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
    image: AchievementImg1,
    side: "left",
  },
  {
    id: 2,
    title: "Imagine Cup 2026",
    date: "January 2026",
    short: "Imagine Cup is Microsoft’s global student startup competition where students turn bold ideas into real-world solutions using AI and cloud technologies.",
    details:
      "Imagine Cup is Microsoft’s springboard for student founders who seek to build commercially viable solutions using Microsoft’s cloud and AI platforms. To compete, a submission must use at least two Microsoft AI services. Submissions must include: completed responses to the application form, a pitch deck with an MVP demo video, and a video recording of the team’s pitch.",
    image: ImagineCupImg,
    side: "right",
  },
  {
    id: 3,
    title: "Anvaya: The BlockCity Edition",
    date: "February 2026",
    short: "Anvaya is a flagship event of MLSC CCEW, where students get a chance to showcase their technical skills and innovative ideas.",
    details:
      "Anvaya is a flagship event of MLSC CCEW, where students get a chance to showcase their technical skills and innovative ideas. It builds the legacy of 'Anvaya' for future years (when we might actually have multiple events) while keeping the focus entirely on the BlockCity theme for this year.  ",
    image: blockcity,
    side: "left",
  },
];
