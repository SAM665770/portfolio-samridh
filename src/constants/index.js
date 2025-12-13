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
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
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
    canOpen: false,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: false,
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
    canOpen: false,
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/SAM665770",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/samridh-palleda-048a312ba/",
  },
];

export { navLinks, navIcons, dockApps, techStack, socials };

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
      name: "Chatigo Real-Time Chat Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Chatigo Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Chatigo is a real-time chat application that connects people with instant messaging and a beautiful dark-themed interface.",
            "Built with React 19, Socket.IO, and MongoDB, it features live messaging, online status indicators, image sharing, and customizable sound effects.",
            "The app includes JWT authentication, optimistic UI updates, and security features like rate limiting and bot protection.",
            "It's designed with a mobile-first approach using TailwindCSS and daisyUI, delivering a smooth and engaging user experience.",
          ],
        },
        {
          id: 2,
          name: "chatigo.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://chatigo-rskmo.sevalla.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "chatigo.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/chatigo.jpg",
        },
        {
          id: 5,
          name: "github-repo-link.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/SAM665770/chatigo",
          position: "top-45 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "WanderLust Travel Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-32 right-20",
      windowPosition: "top-[22vh] left-4",
      children: [
        {
          id: 1,
          name: "Wanderlust Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Wanderlust is a full-stack travel platform where users can discover and book unique accommodations worldwide.",
            "Built with Node.js, Express, and MongoDB, it features user authentication, listing management, and review systems.",
            "The platform includes interactive maps, image uploads via Cloudinary, and responsive design for seamless travel planning.",
            "Think Airbnb meets adventure—connecting travelers with extraordinary places to stay and experiences to remember.",
          ],
        },
        {
          id: 2,
          name: "wanderlust.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://wanderlust-x8g4.onrender.com/listings",
          position: "top-10 left-30",
        },
        {
          id: 4,
          name: "wanderlust.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/wanderlust.png",
        },
        {
          id: 5,
          name: "github-repo-link.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/SAM665770/WanderLust",
          position: "top-40 left-5",
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
      position: "top-5 left-5",
      imageUrl: "/images/samridh.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-15 right-22",
      imageUrl: "/images/yuva_kaushal.jpg",
    },
    {
      id: 3,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/samridh.png",
      description: [
        "Hey! I'm Samridh 👋, a full-stack developer who loves crafting web applications that are both powerful and delightfully smooth to use.",
        "I specialize in React, Node.js, and MongoDB—building everything from real-time chat apps to travel platforms that connect people and places.",
        "I focus on writing clean code, seamless UX, and creating applications that solve real problems (without breaking in production 🤞).",
        "When I'm not coding, you'll find me debugging at 2AM with way too much coffee, convincing myself I need another VS Code extension, or building yet another side project because 'this one will definitely be different' 😅",
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
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
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
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
