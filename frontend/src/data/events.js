import ImagineCupImage from "../assets/imagine_cup_banner.png";
import BlockCityImage from "../assets/blockcity_img.png";

export const events = [
  {
    id: 1,
    type: "Gamified Web3 Hackathon",
    date: "2026",
    title: "Anvaya: The BlockCity Edition",
    time: "8:00 AM - 6:00 PM",
    location: "On-Campus",
    overview:
      "Anvaya: The BlockCity Edition is a one-day immersive gamified Web3 experience where participants collaboratively build and explore a digital city powered by blockchain technology. The event blends strategy, creativity, and technology into a structured challenge environment. Participants progress through 5 interactive rooms — each focused on a core Web3 concept — earning points, unlocking code snippets, and ultimately competing in a final integration showdown to build a working decentralised application (dApp). No prior blockchain experience required — beginners and advanced builders compete side by side.",
    description:
      "A gamified, modular Web3 hackathon where participants explore 5 interactive rooms, earn code snippet rewards, and integrate everything into a working dApp. Build smart contracts, mint tokens, issue NFT badges, create DAOs, and connect it all with a Web3 frontend.",
    image: BlockCityImage,
    ongoing: true,
    steps: [
      {
        title: "Phase 0 — City Orientation",
        date: "45–60 min",
        desc: "Welcome assembly, blockchain fundamentals, wallet setup (MetaMask + testnet), role card distribution, and City Map poster reveal."
      },
      {
        title: "Room 1 — The City Law Foundry",
        date: "45–60 min",
        desc: "Learn smart contract basics with Solidity in Remix IDE. Build CityLaw.sol — understand state variables, functions, modifiers, events, and deploy to testnet."
      },
      {
        title: "Room 2 — The City Treasury Mint",
        date: "45–60 min",
        desc: "Create ERC-20 tokens using OpenZeppelin. Mint CityTokens, transfer between wallets, and explore decimals, access control, and token economics."
      },
      {
        title: "Room 3 — The Citizen Identity Bureau",
        date: "45–60 min",
        desc: "Mint NFT badges using ERC-721. Upload metadata to IPFS, customise your BlockCity citizen identity with unique DNA Badge traits."
      },
      {
        title: "Room 4 — The City Council Chamber",
        date: "45–60 min",
        desc: "Build a DAO voting system. Create proposals, cast on-chain votes, implement double-vote prevention, quorum logic, and execute governance decisions."
      },
      {
        title: "Room 5 — The City Control Center",
        date: "45–60 min",
        desc: "Build a Web3 frontend using HTML + Ethers.js + MetaMask. Connect wallets, read/write contract data, and handle live blockchain transactions."
      },
      {
        title: "Final Showdown — BlockCity Hub",
        date: "90–120 min",
        desc: "Integrate all 5 room code snippets into one working dApp — the BlockCity Hub. Teams compete on functionality, strategy, creativity, and execution."
      }
    ],
  },
  {
    id: 2,
    type: "Student Startup Competition",
    date: "Jan, 2026",
    title: "2026 Imagine Cup Competition",
    time: "2:00 PM - 5:00 PM",
    location: "Online",
    overview:
      "Imagine Cup is Microsoft's springboard for student founders who seek to build commercially viable solutions using Microsoft's cloud and AI platforms. To compete, a submission must use at least two Microsoft AI services. Submissions must include: completed responses to the application form, a pitch deck with an MVP demo video, and a video recording of the team's pitch.",
    description:
      "Imagine Cup is Microsoft's global student startup competition where students turn bold ideas into real-world solutions using AI and cloud technologies.",
    image: ImagineCupImage,
    ongoing: false,
    past: true,
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
    rulesLink: "/assets/IC26 Official Rules and Regulations Dec 2025.pdf",
    registerLink: "https://imaginecup.microsoft.com"
  }
];
