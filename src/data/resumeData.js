// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// text anywhere on the site — no need to touch component files.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Satyam Pandey",
  role: "Full Stack Developer",
  stack: "MERN Stack",
  location: "Surat, India",
  status: "Open to work",
  branch: "main",
  email: "satyam.p2310@gmail.com",
  phone: "+91 9409889507",
  linkedin: "https://www.linkedin.com/in/satyam-pandey-616902252",
  github: "https://github.com/Satyam2310771",
  // Replace this with your real photo. Drop the file in
  // /public/images/ and update the path below, e.g. "/images/profile.jpg"
  photo: "/images/profile-placeholder.svg",
};

export const about = `Enthusiastic and self-motivated BCA student with a strong foundation in Full Stack Web Development and a certified Full Stack Development course. Hands-on experience building responsive, user-friendly web applications with the MERN stack — from front-end design to back-end logic and database management. Strong problem-solving and teamwork skills, with a genuine passion for learning new technologies and shipping real projects. Currently looking for internship or entry-level Full Stack Developer opportunities.`;

export const skills = [
  {
    file: "frontend.js",
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "React.js", "Responsive Design"],
  },
  {
    file: "backend.js",
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    file: "database.js",
    category: "Database",
    items: ["MongoDB", "SQL"],
  },
  {
    file: "tools.js",
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    file: "concepts.js",
    category: "Concepts",
    items: ["CRUD Operations", "Authentication", "Version Control"],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    school: "Veer Narmad South Gujarat University, Surat, Gujarat",
    period: "2022 – 2025",
    detail: "GPA: 8.20 / 10.00 · DBMS, OOP, Web Development, Computer Networks, Full Stack Web Development",
  },
  {
    degree: "Senior Secondary (XII)",
    school: "Council of Secondary Education, Uttar Pradesh, Bhadohi",
    period: "2022",
    detail: "",
  },
];

export const certifications = [
  {
    title: "Full Stack Developer (MERN Stack) Certification",
    org: "Easyskill Academy, Surat",
    period: "2026",
    detail: "Comprehensive training in MongoDB, Express.js, React.js, Node.js, REST APIs, Git, GitHub and database management.",
  },
];

export const experience = [
  {
    role: "Full Stack Developer Trainee",
    org: "Easyskill Academy, Surat",
    period: "2026",
    points: [
      "Completed hands-on training in MERN Stack development — MongoDB, Express.js, React.js and Node.js.",
      "Built responsive, user-friendly web applications using HTML, CSS, JavaScript, Bootstrap and React.js.",
      "Worked with REST APIs, database integration, authentication and CRUD operations.",
      "Used Git and GitHub for version control and project collaboration.",
      "Strengthened front-end, back-end and database fundamentals through applied projects.",
    ],
  },
];

export const projects = [
  {
    name: "Weather Forecast Application",
    year: "2025",
    description:
      "A responsive weather app that fetches real-time forecasts from a third-party API based on user input — temperature, humidity, wind speed, and conditions, with graceful error handling for invalid locations.",
    tech: ["JavaScript", "Fetch API", "HTML5", "CSS3"],
    github: "https://github.com/Satyam2310771/MYWEATHERAPP",
    live: "",
    // Replace with a real screenshot. Drop the file in
    // /public/images/projects/ and update the path below.
    image: "/images/projects/weather-app-placeholder.svg",
  },
  // Add more projects here — copy the shape above and fill it in.
  // {
  //   name: "Project Name",
  //   year: "2026",
  //   description: "What it does and why it's interesting.",
  //   tech: ["React", "Node.js"],
  //   github: "https://github.com/yourname/repo",
  //   live: "https://your-live-demo.com",
  //   image: "/images/projects/your-screenshot.png",
  // },
];
