import image1 from '../../assets/popup.PNG';
import image2 from '../../assets/hero.PNG';
import image3 from '../../assets/porsche-ss1.PNG';
import image4 from '../../assets/crav-burger-ss2.PNG';
import meshComputeImg from '../../assets/meshcompute-ai.PNG';
import dominosImg from '../../assets/dominos-food-app.PNG';
import certAiImg from '../../assets/fullstack-ai-cert.svg';
import blogImg from '../../assets/live-web-tracker-blog.PNG';
import blogImg2 from '../../assets/NUB.png';

export const PORTFOLIO_DATA = {
  hero: {
    name: "Auritro Dey Kirty",
    role: "Computer Science Undergraduate & Full-Stack Developer",
    description: "Passionate about scalable distributed backend systems, modern full-stack web applications, and solving complex algorithmic challenges.",
    resumeLink: `${import.meta.env.BASE_URL}Auritro_Dey_Kirty_Resume.pdf?v=20261107`,
    socials: {
      github: "https://github.com/AuritroDeyKirty07",
      linkedin: "https://www.linkedin.com/in/auritro-dey-kirty",
      email: "deykirtyauritro@gmail.com",
      leetcode: "https://leetcode.com/u/AuritroDeyKirty/"
    }
  },
  about: {
    summary: "Computer Science Undergraduate and a Full-Stack Developer with strong foundations in Data Structures & Algorithms (469+ problems solved, 1529 LeetCode contest rating) and modern web technologies including React, Node.js, and Express. Experienced in building real-time, API-driven, and AI-integrated applications with authentication, role-based access control (RBAC), and robust database modelling through deployment. Seeking a Software Development Engineer or Full-Stack internship to build scalable, production-ready systems.",
    whoAmI: "I am a dedicated software engineering student with a deep passion for writing clean, efficient, and scalable code. Ever since I wrote my first 'Hello World', I have been fascinated by the endless possibilities of technology. I love diving deep into complex algorithmic problems on LeetCode and building comprehensive full-stack and distributed applications from scratch.",
    hobbies: "When I am not coding, you will find me participating in hackathons (like hackCBS 9.0 where my team finished Top 10 out of 130 teams), exploring new AI integrations and system architectures, contributing to open-source, and staying active in developer communities.",
    education: [
      {
        id: 1,
        institution: "Bhagwan Parshuram Institute of Technology, GGSIPU",
        location: "Delhi, India",
        degree: "B.Tech in Computer Science & Engineering",
        duration: "July 2024 – Present",
        grade: "CGPA: 8.255/10 (4th Semester SGPA: 8.500)",
        details: "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, Computer Networks"
      },
      {
        id: 2,
        institution: "Mayo International School",
        location: "Delhi, India",
        degree: "Senior Secondary (Class XII – Science)",
        duration: "Apr 2023 – May 2024",
        grade: "Grade: 84%"
      }
    ]
  },
  skills: {
    "Languages": [
      { name: "C++", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 85 },
      { name: "C", level: 75 }
    ],
    "Frontend": [
      { name: "React.js", level: 90 },
      { name: "React Router", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "ShadCN UI", level: 85 },
      { name: "React Hook Form & Zod", level: 80 },
      { name: "Zustand", level: 80 },
      { name: "Leaflet.js", level: 80 }
    ],
    "Backend": [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "JWT Authentication", level: 90 },
      { name: "Socket.IO", level: 50 }
    ],
    "Databases": [
      { name: "MongoDB", level: 85 },
      { name: "Mongoose ODM", level: 85 },
      { name: "Firebase (Auth, Firestore)", level: 85 }
    ],
    "AI Integration": [
      { name: "Google Gemini API", level: 85 },
      { name: "Hugging Face", level: 75 }
    ],
    "Tools & Platforms": [
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Vercel", level: 85 },
      { name: "Axios", level: 90 },
      { name: "OAuth", level: 80 }
    ],
    "Core Concepts": [
      { name: "Data Structures & Algorithms", level: 90 },
      { name: "Object-Oriented Programming (OOP)", level: 90 },
      { name: "MVC Pattern", level: 85 },
      { name: "Database Management Systems (DBMS)", level: 90 },
      { name: "Operating Systems", level: 90 },
      { name: "Computer Networks", level: 80 }
    ]
  },
  projects: [
    {
      id: 1,
      title: "MeshCompute AI – Distributed Computing Platform",
      description: "Co-built a fault-tolerant distributed computing platform at hackCBS 9.0 (Top 10 out of 130 teams). A coordinator splits jobs into tasks, schedules them across worker agents by free capacity and CPU load, and aggregates results via Node.js worker threads. Engineered fault tolerance with heartbeat-based failure detection, automatic task retries, worker identity checks, and integrated Gemini API for natural-language job compilation with a real-time React dashboard.",
      image: meshComputeImg,
      tags: ["Node.js", "Express", "Socket.IO", "React", "MongoDB", "Gemini API", "Distributed Systems"],
      github: "https://github.com/AuritroDeyKirty07/hackCBS9.0",
      live: null,
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Full-Stack Food Ordering & Operations Platform",
      description: "A Domino's-inspired full-stack MERN platform simulating restaurant operations and e-commerce workflows. Designed and implemented the Role-Based Access Control (RBAC) module and JWT authentication middleware in a cross-functional team to protect administrative routes and role-specific APIs. Built Express.js and MongoDB REST APIs for user management and order workflows, integrating them with the React frontend for real-time interaction.",
      image: dominosImg,
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "RBAC", "REST APIs"],
      github: "https://github.com/AuritroDeyKirty07/dominos-web-app",
      live: "https://dominos-web-app-live.vercel.app",
      category: "Full Stack"
    },
    {
      id: 3,
      title: "Live Web Tracker Platform",
      description: "A real-time, room-based location-sharing web application supporting concurrent users across private, isolated sessions with live distance tracking, speed monitoring, and an SOS emergency alert feature. Implemented secure Google OAuth via Firebase Auth and synced live user coordinates across clients using Firestore listeners with automatic marker cleanup on disconnect. Integrated the Geoapify API for reverse geocoding.",
      image: image1,
      tags: ["JavaScript", "Firebase Auth", "Firestore", "Leaflet.js", "Geolocation API"],
      github: "https://github.com/AuritroDeyKirty07/live-web-tracker-app",
      live: "https://live-web-tracker-app.vercel.app",
      category: "Full Stack"
    },
    {
      id: 4,
      title: "Pokémon Battle Simulator & Stat Analyser",
      description: "An interactive turn-based battle simulator with dynamic HP tracking, type-matchup logic, and Gemini API-driven stat analysis for strategic decision-making. Integrated RESTful PokeAPI to retrieve live stats and sprite assets, with optimized DOM updates and CSS animations.",
      image: image2,
      tags: ["JavaScript", "PokeAPI", "Gemini API", "CSS3"],
      github: "https://github.com/AuritroDeyKirty07/pokemon-battle-simulator",
      live: "https://auritrodeykirty07.github.io/pokemon-battle-simulator/",
      category: "Frontend"
    },
    {
      id: 5,
      title: "Porsche Landing Page",
      description: "A fully responsive landing page with mobile-first design and smooth CSS animations. Implemented immersive micro-animations, video integrations, and modern UI/UX principles to deliver a premium user experience without relying on external CSS frameworks.",
      image: image3,
      tags: ["HTML5", "CSS3", "Vanilla JS"],
      github: "https://github.com/AuritroDeyKirty07/porsche-website-frontend",
      live: "https://porsche-website-frontend.vercel.app/",
      category: "Frontend"
    },
    {
      id: 6,
      title: "Crav Burger UI",
      description: "A visually appealing burger restaurant frontend interface demonstrating modern styling and layout capabilities with custom CSS animations and responsive design.",
      image: image4,
      tags: ["HTML5", "CSS3", "Vanilla JS"],
      github: "https://github.com/AuritroDeyKirty07/crav-burger-frontend",
      live: "https://auritrodeykirty07.github.io/crav-burger-frontend/",
      category: "Frontend"
    }
  ],
  certifications: [
    {
      id: 1,
      title: "Full Stack Development with AI certification",
      issuer: "Brain Mentors, New Delhi",
      date: "July 2026",
      isImage: true,
      image: certAiImg
    },
    {
      id: 2,
      title: "HackerRank SQL (Intermediate)",
      issuer: "HackerRank",
      date: "June 2024",
      link: "https://www.hackerrank.com/certificates/8523cb60baa7"
    },
    {
      id: 3,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "April 2026",
      link: "https://www.freecodecamp.org/certification/auritrodeykirty07/responsive-web-design-v9"
    }
  ],
  blog: [
    {
      id: 1,
      title: "How I built a room-based live location tracker with Google Authentication, real-time synchronization, and interactive maps.",
      summary: "Exploring the design decisions, system architecture, and engineering challenges behind a real-time location sharing platform.",
      date: "July 19, 2026",
      readTime: "6 min read",
      tags: ["React", "Performance", "Web Dev"],
      image: blogImg,
      link: "https://medium.com/@deykirtyauritro/how-i-built-a-room-based-live-location-tracker-with-google-authentication-real-time-9145631c5002"
    },
    {
      id: 2,
      title: "I tried NUB: The new Node.js toolkit that wants to replace npm, npx, tsx, pnpm, and nvm",
      summary: "Exploring NUB, an all-in-one Node.js toolkit designed to streamline development by replacing multiple package managers and execution tools.",
      date: "August 3, 2026",
      readTime: "4 min read",
      tags: ["Node.js", "Tools", "Web Dev"],
      image: blogImg2,
      link: "http://medium.com/@deykirtyauritro/i-tried-nub-the-new-node-js-toolkit-that-wants-to-replace-npm-npx-tsx-pnpm-and-nvm-0a93dbd90ffb?postPublishedType=initial"
    }
  ]
};
