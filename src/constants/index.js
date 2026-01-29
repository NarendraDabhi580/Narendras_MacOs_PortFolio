const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
    imgLight: "/icons/wifiWhite.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
    imgLight: "/icons/searchWhite.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
    imgLight: "/icons/userWhite.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
    imgLight: "/icons/modeWhite.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Jan 15, 2026",
    title:
      "Building Scalable React Applications: Advanced State Management with Redux Toolkit and Context API",
    image: "/images/blog1.png",
    link: "#",
  },
  {
    id: 2,
    date: "Dec 28, 2025",
    title:
      "Performance Optimization in React: Lazy Loading, Code Splitting, and Best Practices",
    image: "/images/blog2.png",
    link: "#",
  },
  {
    id: 3,
    date: "Nov 20, 2025",
    title:
      "Mastering Material-UI and Tailwind CSS: Creating Responsive, Cross-Browser Compatible UIs",
    image: "/images/blog3.png",
    link: "#",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Redux Toolkit", "React Router", "React Query"],
  },
  {
    category: "UI Libraries",
    items: ["Material-UI (MUI)", "Tailwind CSS", "Responsive Design"],
  },
  {
    category: "Backend & APIs",
    items: ["REST API Integration", "Node.js (Familiar)", "Next.js (Familiar)"],
  },
  {
    category: "Performance",
    items: ["Lazy Loading", "Code Splitting", "Performance Optimization"],
  },
  {
    category: "Dev Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Chrome DevTools",
      "npm",
      "Yarn",
      "Agile/Scrum",
    ],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/NarendraDabhi580?tab=repositories",
  },
  {
    id: 2,
    text: "Naukri.com",
    icon: "/icons/naukri.svg",
    bg: "#4bcb63",
    link: "https://www.naukri.com/mnjuser/profile",
  },
  {
    id: 3,
    text: "Best Project",
    icon: "/icons/project.svg",
    bg: "#ff866b",
    link: "https://todomastermanage.netlify.app/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/narendra-dabhi/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/narendra1.jpeg",
    name: "Narendra - Professional",
  },
  {
    id: 2,
    img: "/images/narendra2.jpeg",
    name: "Narendra - Casual",
  },
  {
    id: 3,
    img: "/images/narendra3.jpeg",
    name: "Narendra - Conference",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Banking Admin Panel System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Banking Admin Panel.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Architected and maintained comprehensive banking admin panels and internal software serving 100+ back-office staff handling critical financial operations.",
            "Built with React.js, TypeScript, and Material-UI, the system features complex state management using Hooks, Context API, and Reducers for optimal performance.",
            "Implemented robust REST API integration with advanced error handling and loading states to ensure seamless frontend-backend communication.",
            "Developed sophisticated form validation logic for financial transactions and business workflows, ensuring data integrity and compliance with banking standards.",
          ],
        },
        {
          id: 4,
          name: "admin-panel.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "React Component Library",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Component Library.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Enhanced company's component library by developing 15+ reusable React components, improving development speed by 30% and ensuring UI consistency across all applications.",
            "Created highly modular components with proper prop validation, TypeScript support, and comprehensive documentation for team-wide adoption.",
            "Implemented responsive UI components using Material-UI ensuring cross-browser compatibility and mobile-first design principles.",
            "Focused on performance optimization through code splitting, lazy loading, and efficient rendering strategies to maintain fast load times.",
          ],
        },
        {
          id: 4,
          name: "components.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "State Management & Performance",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Performance Optimization.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Implemented complex state management solutions using Hooks, Context API, and Reducers to optimize application performance and maintainability.",
            "Solved critical state management and performance issues in production environments, ensuring smooth user experience for banking operations.",
            "Delivered sprint features consistently on time with high code quality standards, participating actively in Agile ceremonies and cross-functional collaboration.",
            "Worked closely with backend engineers, QA testers, and designers to deliver high-quality releases that meet business requirements and user needs.",
          ],
        },
        {
          id: 4,
          name: "performance.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/narendra1.jpeg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/narendra2.jpeg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/narendra3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/narendra3.jpeg",
      description: [
        "Hey! I'm Narendra Dabhi 👋, a Frontend Web Developer with 3+ years of production experience building scalable, high-performance web applications.",
        "I specialize in React.js, TypeScript, and modern JavaScript—currently working as an Associate Software Engineer at Bankai Informatics, where I architect banking admin panels and enterprise software.",
        "I'm passionate about code quality, performance optimization, and creating responsive UIs with Material-UI and Tailwind CSS that work seamlessly across all devices.",
        "When I'm not optimizing React components or implementing complex state management, you'll find me collaborating in Agile environments and delivering sprint features with high code quality standards �",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
