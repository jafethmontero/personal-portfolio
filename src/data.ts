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
    name: "Alma Tour - Tour Operator Website",
    description: {
      en: "Booking-focused website for a Costa Rican tour operator, featuring curated tour packages and an inquiry flow. Built with Astro and Tailwind CSS.",
      es: "Sitio web enfocado en reservas para un operador turístico costarricense, con paquetes de tours curados y un flujo de consultas. Construido con Astro y Tailwind CSS.",
    },
    href: "https://alma-tour.com",
    imageSrc: "/images/project6.webp",
  },
  {
    name: "Corcovado Explorers - Tour Operator Website",
    description: {
      en: "Adventure tour website specializing in guided expeditions through Corcovado National Park. Built with Astro and Tailwind CSS.",
      es: "Sitio web de tours de aventura especializado en expediciones guiadas por el Parque Nacional Corcovado. Construido con Astro y Tailwind CSS.",
    },
    href: "https://corcovadoexplorers.com",
    imageSrc: "/images/project5.webp",
  },
  {
    name: "Osa Nature Seeker - Tour Operator Website",
    description: {
      en: "Wildlife and nature tour website for the Osa Peninsula, highlighting biodiversity experiences and eco-friendly tours. Built with Astro and Tailwind CSS.",
      es: "Sitio web de tours de naturaleza y vida silvestre para la Península de Osa, destacando experiencias de biodiversidad y tours ecológicos. Construido con Astro y Tailwind CSS.",
    },
    href: "https://osanatureseeker.com",
    imageSrc: "/images/project4.webp",
  },
  {
    name: "kyona Group - Corporate Website",
    description: {
      en: "A corporate website for a group of companies in Costa Rica, showcasing their services and projects. Build with Next.js and Tailwind CSS for styling.",
      es: "Un sitio web corporativo para un grupo de empresas en Costa Rica, mostrando sus servicios y proyectos. Construido con Next.js y Tailwind CSS para estilos.",
    },
    href: "https://kyonagroup.com",
    imageSrc: "/images/project3.webp",
  },
  {
    name: "Osa Aventura - Tour Operator Website",
    description: {
      en: "Adventure tour website for the Osa Peninsula offering zip-lining, kayaking, and jungle excursions. Built with WordPress and deployed to Hostinger.",
      es: "Sitio web de tours de aventura en la Península de Osa con tirolesas, kayak y excursiones a la selva. Construido con WordPress y desplegado en Hostinger.",
    },
    href: "https://osaaventura.com",
    imageSrc: "/images/project2.webp",
  },
  {
    name: "Corcovado Wild Tour - Tour operator website",
    description: {
      en: "Wildlife-focused tour website for Corcovado, featuring dynamic tour listings and real-time availability. Built with Astro, React for interactive content, and Tailwind CSS.",
      es: "Sitio web de tours de vida silvestre en Corcovado con listados dinámicos y disponibilidad en tiempo real. Construido con Astro, React para contenido interactivo y Tailwind CSS.",
    },
    href: "https://corcovadowildtour.com",
    imageSrc: "/images/project1.webp",
  },
];
