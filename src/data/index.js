import image1 from '../../assets/popup.PNG'
import image2 from '../../assets/hero.PNG'
import image3 from '../../assets/porsche-ss1.PNG'
import image4 from '../../assets/crav-burger-ss2.PNG'
import blogImg from '../../assets/live-web-tracker-blog.PNG'

export const PORTFOLIO_DATA = {
  hero: {
    name: "Auritro Dey Kirty",
    role: "Computer Science Undergraduate",
    description: "Passionate about scalable backend systems, full-stack web development, and solving complex algorithmic challenges.",
    resumeLink: "../../assets/Auritro_Dey_Kirty_Resume.pdf",
    socials: {
      github: "https://github.com/AuritroDeyKirty07",
      linkedin: "https://www.linkedin.com/in/auritro-dey-kirty",
      email: "deykirtyauritro@gmail.com",
      leetcode: "https://leetcode.com/u/AuritroDeyKirty/"
    }
  },
  about: {
    summary: "Computer Science undergraduate with strong foundations in Data Structures & Algorithms (200+ LeetCode problems, 1446 contest rating) and full-stack web development. Experienced in building real-time web applications using React, Node.js, Firebase, and REST APIs. Seeking Software Development or Full-Stack Development internship opportunities.",
    whoAmI: "I am a dedicated software engineering student with a deep passion for writing clean, efficient, and scalable code. Ever since I wrote my first 'Hello World', I have been fascinated by the endless possibilities of technology. I love diving deep into complex algorithmic problems on LeetCode and building comprehensive full-stack applications from scratch.",
    hobbies: "When I am not coding, you will find me exploring new technologies, participating in hackathons, or reading up on system design and software architecture. I also enjoy contributing to open-source and staying active in the developer community.",
    education: [
      {
        id: 1,
        institution: "Guru Gobind Singh Indraprastha University",
        location: "Delhi, India",
        degree: "B.Tech in Computer Science & Engineering",
        duration: "July 2024 – Present",
        grade: "CGPA: 8.255/10 (4th Semester SGPA: 8.500)",
        details: "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Web Development, Database Management Systems"
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
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "SQL", level: 85 },
      { name: "C++", level: 80 },
      { name: "C", level: 65 },
      { name: "Java", level: 70 },
      { name: "Python", level: 75 }
    ],
    "Frontend": [
      { name: "React", level: 85 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "shadcn/ui", level: 80 },
      { name: "Leaflet.js", level: 70 }
    ],
    "Backend": [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 80 },
      { name: "REST APIs", level: 90 }
    ],
    "Databases": [
      { name: "MongoDB", level: 80 },
      { name: "Firebase Firestore", level: 85 }
    ],
    "Tools & Platforms": [
      { name: "Git & GitHub", level: 85 },
      { name: "Postman", level: 80 },
      { name: "Vercel", level: 85 },
      { name: "VS Code", level: 95 }
    ],
    "Core Concepts": [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Object-Oriented Programming", level: 90 },
      { name: "Operating Systems", level: 80 },
      { name: "DBMS", level: 85 },
      { name: "Computer Networks", level: 70 }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Live Web Tracker Platform",
      description: "A real-time, room-based location-sharing web application supporting concurrent users across private, isolated sessions with live distance tracking, speed monitoring, and an SOS emergency alert feature. Implemented secure Google OAuth authentication and managed persistent user sessions via Firebase Auth. Designed real-time synchronization using Firebase Firestore listeners.",
      image: image1,
      tags: ["JavaScript", "Firebase Auth", "Firestore", "Leaflet.js", "Geolocation API"],
      github: "https://github.com/AuritroDeyKirty07/live-web-tracker-app",
      live: "https://live-web-tracker-app.vercel.app",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Pokémon Battle Simulator",
      description: "An interactive, turn-based battle simulator with dynamic HP tracking, type-matchup logic, and real-time attack resolution. Integrated the RESTful PokeAPI via Fetch API to retrieve live Pokémon statistics and sprite assets. Leveraged Google's Gemini API to generate AI-powered Pokémon stat comparisons and battle insights.",
      image: image2,
      tags: ["JavaScript", "PokeAPI", "Gemini API", "CSS3"],
      github: "https://github.com/AuritroDeyKirty07/pokemon-battle-simulator",
      live: "https://auritrodeykirty07.github.io/pokemon-battle-simulator/",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Porsche Landing Page",
      description: "A fully responsive landing page with mobile-first design and smooth CSS animations. Implemented immersive micro-animations, video integrations, and modern UI/UX principles to deliver a premium user experience without relying on external CSS frameworks.",
      image: image3,
      tags: ["HTML5", "CSS3", "Vanilla JS"],
      github: "https://github.com/AuritroDeyKirty07/porsche-website-frontend",
      live: "https://porsche-website-frontend.vercel.app/",
      category: "Frontend"
    },
    {
      id: 4,
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
      title: "HackerRank SQL (Intermediate)",
      issuer: "HackerRank",
      date: "June 2024",
      link: "https://www.hackerrank.com/certificates/8523cb60baa7"
    },
    {
      id: 2,
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
    }
  ]
};
