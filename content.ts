// Type: TypeScript typesafe file.
import {
  ProductProps,
  LinkProps,
  SocialProps,
  BlogProps,
} from "./lib/types/content";

// Social Icons
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
} from "react-icons/tb";

// Link Icons
import {
  BiArrowToBottom,
  BiBadgeCheck,
  BiDollar,
  BiLayout,
} from "react-icons/bi";

// Purpose: Toggle shown content on the website.
const Toggle = {
  socials: true,
  bio: true,
  links: true,
  products: true,
  blogs: true,
};

// MAKE ALL FALSE ON PRODUCTION
const devMode = {
  template: true,
};

// Purpose: Contains your social media links.
// Customize: You can add more social links by copying the object and changing the values.
// Icons: I use react-icons/tb (Tabler Icons) for the icons here.
// Explore more icons here (https://react-icons.github.io/react-icons/)
const Socials: SocialProps[] = [
  {
    id: 1,
    name: "Github",
    href: "/",
    icon: TbBrandGithub,
  },
  {
    id: 2,
    name: "Instagram",
    href: "/",
    icon: TbBrandInstagram,
  },
  {
    id: 3,
    name: "Linkedin",
    href: "/",
    icon: TbBrandLinkedin,
  },
  {
    id: 4,
    name: "Twitter",
    href: "/",
    icon: TbBrandTwitter,
  },
];

// Purpose: Contains the links for the website.
// Customize: You can add more links by copying the object and changing the values.
// Icons: I used react-icons/bi (BoxIcons) for the icons here.
// Explore more icons here (https://react-icons.github.io/react-icons/)
const Links: LinkProps[] = [
  {
    id: 1,
    name: "Portfolio",
    href: "/",
    subtext: "All of my personal projects",
    icon: BiBadgeCheck,
  },
  {
    id: 2,
    name: "Minilinks",
    href: "/",
    subtext: "A minimal Linktree alternative",
    icon: BiLayout,
  },
  {
    id: 3,
    name: "Saweria",
    href: "/",
    subtext: "Support me on Saweria",
    icon: BiDollar,
  },
  {
    id: 4,
    name: "Installation",
    href: "/",
    subtext: "How to install this project",
    icon: BiArrowToBottom,
  },
];

// Purpose: Contains the values for the square cards on the website. Use to show ur products.
// Customize: You can add more products by copying the object and changing the values.
const Products: ProductProps[] = [
  {
    id: 1,
    name: "Product 1",
    price: 36,
    rate: 4.5,
    image: "https://ui.shadcn.com/placeholder.svg",
    link: "/",
    tags: ["tag-1", "tag-2"],
  },
  {
    id: 2,
    name: "Product 2",
    price: 18,
    rate: 3.5,
    image: "https://ui.shadcn.com/placeholder.svg",
    link: "/",
    tags: ["tag-3", "tag-4"],
  },
];

// Purpose: Contains the values for the rectangle cards on the website. Use to show ur blog posts.
// Customize: You can add more blogs by copying the object and changing the values.
const Blogs: BlogProps[] = [
  {
    id: 1,
    title: "Blog 1",
    description: "Lorem ipsum dolor sit amet.",
    image: "https://ui.shadcn.com/placeholder.svg",
    link: "/",
    tags: ["Personal"],
  },
  {
    id: 2,
    title: "Blog 2",
    description: "Lorem ipsum dolor sit amet.",
    image: "https://ui.shadcn.com/placeholder.svg",
    link: "/",
    tags: ["UI", "UX"],
  },
];

export { Links, Products, Socials, Blogs, Toggle, devMode };
