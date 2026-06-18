import { Project, Education, Achievement, SkillCategory } from './types.ts';

export const personalInfo = {
  name: "Vignesh Pillai",
  email: "vigneshpillai220@gmail.com",
  phone: "+91 72194 39555",
  location: "Bengaluru, Karnataka, India",
  linkedin: "https://www.linkedin.com/in/vignesh-pillai-520446271/",
  github: "https://github.com/VigneshPillai-lgtm",
  portfolio: "#"
};

export const summary = "Pre-final year BCA (IoT) student at Kristu Jayanti University with hands-on experience in multi-protocol IoT systems using ESP32, having integrated MQTT, HTTPS, Bluetooth, and RFID concurrently in a single project. Demonstrated initiative through two inter-college competition wins. Seeking an IoT or Embedded Systems internship to apply hardware-software integration skills to real-world product development.";

export const education: Education[] = [
  {
    degree: "BCA — Internet of Things (IoT)",
    institution: "Kristu Jayanti University (Deemed), Bengaluru, Karnataka",
    period: "2024 – 2027",
    details: "Current CGPA: Pursuing"
  },
  {
    degree: "PUC / Higher Secondary (Science)",
    institution: "Deeksha PU College, Kengeri",
    period: "2022 – 2024",
    details: "Aggregate: 495 / 600"
  },
  {
    degree: "SSLC / Class 10 (CBSE)",
    institution: "Sheth Vidya Mandir English High School",
    period: "2022",
    details: "Aggregate: 392 / 500"
  }
];

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["C", "C++", "Python", "Java", "JavaScript (Node.js)", "HTML/CSS"]
  },
  {
    title: "Embedded & Hardware",
    skills: ["ESP32", "Arduino", "Raspberry Pi", "RFID modules", "Bluetooth (HC-05/BLE)", "DHT11", "MQ-4", "MQ-135", "Ultrasonic sensors"]
  },
  {
    title: "Protocols & Networking",
    skills: ["MQTT", "HTTPS", "Bluetooth", "RFID", "TCP/IP", "HTTP/REST", "Wi-Fi"]
  },
  {
    title: "Tools & Platforms",
    skills: ["VS Code", "GitHub", "Docker", "Wireshark", "Figma", "Neon PostgreSQL"]
  },
  {
    title: "Concepts",
    skills: ["IoT System Design", "Multi-protocol Integration", "Real-time Sensor Processing", "Data Structures", "OOP"]
  }
];

export const projects: Project[] = [
  {
    title: "Skyfall Website",
    tech: ["JavaScript", "HTML5", "CSS3", "Vercel"],
    description: [
      "Developed a responsive and interactive frontend website deployed globally via Vercel.",
      "Implemented modern aesthetic UI patterns with smooth interactions and accessibility considerations.",
      "Optimized digital assets and architectural layout for fast loading speeds and robust cross-device compatibility."
    ],
    github: "https://github.com/VigneshPillai-lgtm/skyfall-website",
    link: "https://skyfall-website-two.vercel.app"
  },
  {
    title: "Skills Copilot Codespaces",
    tech: ["Markdown", "GitHub Codespaces", "GitHub Copilot"],
    description: [
      "A clone repository utilized to practice and demonstrate proficiency with GitHub Copilot within Codespaces.",
      "Showcased hands-on experience evaluating AI-driven code suggestions and auto-completion.",
      "Emphasized modern workflow integration utilizing cloud-based development environments."
    ],
    github: "https://github.com/VigneshPillai-lgtm/skills-copilot-codespaces-vscode"
  },
  {
    title: "Quest — Outdoor Activity App",
    tech: ["Node.js", "HTML/CSS", "JavaScript", "PostgreSQL"],
    description: [
      "Built a location-based outdoor quest application to encourage exploration.",
      "Implemented real-time GPS tracking and a user leaderboard for gamified experiences.",
      "Designed a REST API backend with Node.js and served the responsive frontend seamlessly.",
      "Prototyped UI/UX in Figma before implementation to ensure a user-friendly mobile experience."
    ],
    github: "https://github.com/VigneshPillai-lgtm/quest_app",
    link: "https://skyfall-fawn.vercel.app/landing.html"
  },
  {
    title: "Soundbox Firmware",
    tech: ["C++", "Embedded Systems", "Hardware Integration"],
    description: [
      "Developed a custom firmware for a Soundbox device, optimizing hardware-level audio processing and system performance.",
      "Implemented embedded algorithms and resource management strategies suitable for memory-constrained environments.",
      "Engineered reliable peripheral communications and device controls using modern C++ design patterns."
    ],
    github: "https://github.com/VigneshPillai-lgtm/soundbox-firmware-main"
  }
];

export const achievements: Achievement[] = [
  {
    title: "1st Place — InnoPitch",
    event: "Inter-Collegiate Fest, Kristu Jayanti University",
  },
  {
    title: "1st Place — Innovation Mela",
    event: "Inter-Collegiate Fest, CMR University & NASSCOM Foundation",
  }
];

export const certifications: string[] = [
  "NPTEL IoT Fundamentals",
  "Cisco Introduction to IoT",
  "Arduino Fundamentals"
];
