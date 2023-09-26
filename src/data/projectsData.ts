import dremRentImage from "../assets/projects/dreamRent.png";
import shopCartImage from "../assets/projects/shopCart.png";
import moviesNowImage from "../assets/projects/moviesNow.png";
import OpenTable from "../assets/projects/openTable.png";
import modern from "../assets/projects/modern-projects.png";
import blackWarrior from "../assets/projects/blackWarrior.png";
import Grilli from "../assets/projects/Grilli.png";
import Brand from "../assets/projects/brand.png";

export interface Project {
  name: string;
  projectImage: string;
  Description: string;
  Technologies: string[];
  DemoLink: string;
  RepoLink: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const projects: Project[] = [
  {
    name: "DreamRent",
    projectImage: dremRentImage,
    Description: `real estate website, developed using Next.js, TypeScript, Tailwind CSS, and Firebase offers a comprehensive platform for managing your real estate needs. With features like secure authentication and data updating, you have full control over your listings. Additionally, you can easily 
 create posts and communicate with clients through Gmail or WhatsApp for efficient and effective client 
 interactions.`,
    Technologies: [
      "NextJs",
      "Typescript",
      "Tailwind",
      "Firebase",
      "React Swiper",
      "Redux",
    ],
    DemoLink: "https://dream-rent.vercel.app/",
    RepoLink: "https://github.com/omar1mohsen/dreamRent",
  },
  {
    name: "CartShop",
    projectImage: shopCartImage,
    Description: `e-commerce site, built with Next.js, TypeScript, Firebase, and Tailwind CSS, offers a 
    seamless shopping experience. With features like an easy-to-use shopping cart and the ability to 
    participate in auctions through Google or Facebook, customers can conveniently browse and purchase 
    products. We also provide home delivery services for a hassle-free shopping experience.`,
    Technologies: [
      "NextJs",
      "Typescript",
      "Tailwind",
      "Firebase",
      "Mui",
      "REStAPIs",
    ],
    DemoLink: "https://shop-cart-psi.vercel.app/",
    RepoLink: "https://github.com/omar1mohsen/shopCart",
  },
  {
    name: "MoviesNow",
    projectImage: moviesNowImage,
    Description: `MoviesNow project, built with React.js, JavaScript, Firebase, and REST API integration, 
    provides a seamless movie-watching experience. With responsive design and authentication 
    functionality, the platform is optimized for various devices and screen sizes. Users can enjoy watching 
    trailers and conveniently add movies to their favorites for personalized recommendations.`,
    Technologies: [
      "ReactJs",
      "JavaScript",
      "Tailwind",
      "Firebase",
      "Recoil",
      "Mui",
      "REStAPIs",
    ],
    DemoLink: "https://movies-now-om-4812a.web.app/",
    RepoLink: "https://github.com/omar1mohsen/movies-now",
  },
  {
    name: "OpenTable",
    projectImage: OpenTable,
    Description: `restaurant website, developed using Next.js, TailwindCSS, Supabase, Prisma, and MUI, 
    offers a visually appealing platform to showcase your restaurant and enable customers to make 
    reservations seamlessly. With a combination of modern design elements and robust backend 
    technologies, it provides an exceptional user experience for exploring menu options, learning about your 
    establishment, and reserving a table.`,
    Technologies: [
      "NextJs",
      "Typescript",
      "Tailwind",
      "Supabase",
      "Prisma",
      "Mui",
      " React-datepicker",
    ],
    DemoLink: "",
    RepoLink: "https://github.com/omar1mohsen/openTable",
  },
  {
    name: "Modern-projects",
    projectImage: modern,
    Description: `Our construction site is expertly built using ReactJS, Tailwind CSS, and JavaScript, resulting in a visually stunning and responsive experience across all screens. With ReactJS as the foundation, our site offers dynamic interactivity, while Tailwind CSS ensures a consistent and visually appealing design. JavaScript enhances functionality and responsiveness, making our site adaptable to various devices and screen sizes.`,
    Technologies: ["ReactJs", "Tailwind", "JavaScript"],
    DemoLink: "https://modern-projects.vercel.app/",
    RepoLink: "https://github.com/omar1mohsen/Modern-Projects",
  },
  {
    name: "Black-Warrior",
    projectImage: blackWarrior,
    Description: ` gaming site created using JavaScript, Bootstrap, PureCss, and AOS, offering a seamless 
    gaming experience across multiple devices and screen sizes. The combination of these technologies 
    ensures the site's responsiveness, visually appealing design, and smooth animations.`,
    Technologies: ["Html", "Css", "Bootstrap", "JavaScript", "AOS"],
    DemoLink: "https://omar1mohsen.github.io/Black-Warrior/",
    RepoLink: "https://github.com/omar1mohsen/Black-Warrior",
  },
  {
    name: "Grilli",
    projectImage: Grilli,
    Description: `Introducing a modern and responsive restaurant template crafted with pure HTML, CSS, and JavaScript. This visually appealing template adapts seamlessly to all screen sizes, ensuring a user-friendly experience for customers across devices.`,
    Technologies: ["Html", "Css", "Bootstrap", "JavaScript", "AOS"],
    DemoLink: "https://omar1mohsen.github.io/Gril/",
    RepoLink: "https://github.com/omar1mohsen/Gril",
  },
  {
    name: "Brand",
    projectImage: Brand,
    Description: `Introducing a sleek and modern e-commerce template crafted with pure HTML, CSS, and JS. This template is fully responsive, ensuring seamless adaptability across all screens for an optimal user experience.`,
    Technologies: ["Html", "Css", "Bootstrap", "JavaScript"],
    DemoLink: "https://brand-tau.vercel.app/",
    RepoLink: "https://github.com/omar1mohsen/brand",
  },
];

export default projects;
