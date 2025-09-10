export interface Experience {
  title: string;
  description: {
    en: string;
    es: string;
  };
  date: string;
  href: string;
  skills: string[];
  companyName: string;
}

export const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    description: {
      en: "Mav Digital is a Costa Rican digital solutions company where I lead the frontend development of various projects, ensuring high-quality and efficient web applications.",
      es: "Mav Digital es una empresa costarricense de soluciones digitales donde lidero el desarrollo frontend de varios proyectos, asegurando aplicaciones web de alta calidad y eficiencia.",
    },
    date: "Jul 2025 (Freelance)",
    href: "https://mav-digital.com",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Squelize",
      "PostgreSQL",
      "Express",
    ],
    companyName: "Mav Digital",
  },
  {
    title: "Sr. Frontend Web Developer",
    description: {
      en: "Steering innovation in the realm of digital solutions, I proudly contribute my skills as a Sr. Frontend Web Developer at gexp software, an esteemed Costa Rican enterprise based in Perez Zeledon, San Jose.",
      es: "Dirigiendo la innovación en el ámbito de las soluciones digitales, contribuyo con orgullo mis habilidades como Desarrollador Web Frontend Sr. en gexp software, una empresa costarricense de renombre con sede en Pérez Zeledón, San José.",
    },
    date: "Nov 2022 - Jun 2025",
    href: "https://gexpsoftware.com",
    skills: ["React", "JavaScript", "TypeScript", "Cypress.io"],
    companyName: "gexp software",
  },
  {
    title: "Jr. Frontend Web Developer",
    description: {
      en: "At Hermosa Software, a pioneering Costa Rican web development company, I immersed myself in the world of web applications, playing a pivotal role as a Jr. React developer.",
      es: "En Hermosa Software, una empresa costarricense pionera en desarrollo web, me sumergí en el mundo de las aplicaciones web, desempeñando un papel fundamental como desarrollador Jr. de React.",
    },
    date: "Nov 2021 - Nov 2022",
    href: "https://hermosasoftware.io",
    skills: ["JavaScript", "HTML", "CSS", "Redux", "React", "TypeScript"],
    companyName: "Hermosa software",
  },
  {
    title: "Quality Assurance Specialist",
    description: {
      en: "As a dedicated Manual Quality Assurance Engineer at Hermosa Software, I contributed significantly to the development of a responsive web application specializing in hotel and event space bookings for Groups360.",
      es: "Como Ingeniero de Aseguramiento de Calidad Manual en Hermosa Software, contribuí significativamente al desarrollo de una aplicación web receptiva especializada en reservas de hoteles y espacios para eventos para Groups360.",
    },
    date: "Set 2021 - Set 2022",
    href: "https://hermosasoftware.io",
    skills: ["Quality Assurance", "Manual Testing", "DevTools"],
    companyName: "Hermosa software",
  },
];

export interface Project {
  name: string;
  description: {
    en: string;
    es: string;
  };
  href: string;
  imageSrc?: string;
}

export const projects: Project[] = [
  {
    name: "Osa Aventura - Tour Operator Website",
    description: {
      en: "A website for a tour operator in Costa Rica, showcasing their tours and services. Build with Wordpress and deployed to Hostinger.",
      es: "Un sitio web para un operador turístico en Costa Rica, mostrando sus tours y servicios. Construido con Wordpress y desplegado en Hostinger.",
    },
    href: "https://osaaventura.com",
    imageSrc: "/images/project4.webp",
  },
  {
    name: "Corcovado Wild Tour - Tour operator website",
    description: {
      en: "A website for a tour operator in Costa Rica, showcasing their tours and services. Build with Astro, React for dinamic content and Tailwind CSS for styling.",
      es: "Un sitio web para un operador turístico en Costa Rica, mostrando sus tours y servicios. Construido con Astro, React para contenido dinámico y Tailwind CSS para estilos.",
    },
    href: "https://corcovadowildtour.com",
    imageSrc: "/images/project1.webp",
  },
  {
    name: "Full Stack recipe website",
    description: {
      en: "Developed a full stack recipe website with user authentication and CRUD operations using React, Node.js, and MongoDB.",
      es: "Desarrollé un sitio web de recetas full stack con autenticación de usuario y operaciones CRUD utilizando React, Node.js y MongoDB.",
    },
    href: "https://github.com/jafethmontero/Full-Stack-App",
    imageSrc: "/images/project2.webp",
  },
  {
    name: "React native Todo app",
    description: {
      en: "Developed a todo app using React Native with user authentication and CRUD operations using Firebase.",
      es: "Desarrollé una aplicación de tareas pendientes utilizando React Native con autenticación de usuario y operaciones CRUD utilizando Firebase.",
    },
    href: "https://github.com/jafethmontero/TodoApp",
    imageSrc: "/images/project2.webp",
  },
];
