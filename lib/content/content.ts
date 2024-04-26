// Type: TypeScript typesafe file.
import {
  ProductProps,
  LinkProps,
  SocialProps,
  BlogProps,
  BioProps,
} from "../types/content";

// Social Icons (Remove if not needed, this can improve performance.)
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
} from "react-icons/tb";

// Link Icons (Remove if not needed, this can improve performance.)
import {
  BiArrowToBottom,
  BiBadgeCheck,
  BiDollar,
  BiLayout,
} from "react-icons/bi";

// Import your avatar here
import Avatar from "@/public/images/asset/avatar.jpg";

// Purpose: Toggle shown content on the website.
const Toggle = {
  socials: true,
  bio: true,
  links: true,
  products: false,
  blogs: false,
};

// MAKE ALL FALSE ON PRODUCTION
const devMode = {
  template: false,
};

// Purpose: Contains your bio information.
// Customize: You can change the values to your own.
// Avatar: Import your avatar at the top of the file or use a URL.
const Bio: BioProps = {
  name: "msafdev",
  title: "Software Engineer",
  description:
    "Creative Fullstack Developer Focusing on Next.js, Tailwind CSS and Supabase.",
  avatar: Avatar,
  url: "https://github.com/msafdev",
};

// Purpose: Contains your social media links.
// Customize: You can add more social links by copying the object and changing the values.
// Icons: I use react-icons/tb (Tabler Icons) for the icons here.
// Explore more icons here (https://react-icons.github.io/react-icons/)
const Socials: SocialProps[] = [
  {
    url: "https://github.com/msafdev",
    icon: TbBrandGithub,
  },
  {
    url: "https://instagram.com/msalman_af",
    icon: TbBrandInstagram,
  },
  {
    url: "https://linkedin.com/in/muhammadsalmoon",
    icon: TbBrandLinkedin,
  },
  {
    url: "https://twitter.com/msafdev",
    icon: TbBrandTwitter,
  },
];

// Purpose: Contains the links for the website.
// Customize: You can add more links by copying the object and changing the values.
// Icons: I used react-icons/bi (BoxIcons) for the icons here.
// Explore more icons here (https://react-icons.github.io/react-icons/)
const Links: LinkProps[] = [
  {
    name: "Portfolio",
    url: "https://msaf.tech",
    subtext: "All of my personal projects",
    icon: BiBadgeCheck,
  },
  {
    name: "Linkify",
    url: "https://github.com/msafdev/linkify",
    subtext: "A minimal Linktree alternative",
    icon: BiLayout,
  },
  {
    name: "Saweria",
    url: "https://saweria.co/msafdev",
    subtext: "Support me on Saweria",
    icon: BiDollar,
  },
  {
    name: "Playground",
    url: "https://msaf.tech/playground",
    subtext: "Where i test new things",
    icon: BiArrowToBottom,
  },
];

// Purpose: Contains the values for the square cards on the website. Use to show ur products.
// Customize: You can add more products by copying the object and changing the values.
const Products: ProductProps[] = [
  {
    name: "Product 1",
    price: 36,
    image: "https://ui.shadcn.com/placeholder.svg",
    url: "/",
  },
  {
    name: "Product 2",
    price: 18,
    image: "https://ui.shadcn.com/placeholder.svg",
    url: "/",
  },
];

// Purpose: Contains the values for the rectangle cards on the website. Use to show ur blog posts.
// Customize: You can add more blogs by copying the object and changing the values.
const Blogs: BlogProps[] = [
  {
    title: "Blog 1",
    description: "Lorem ipsum dolor sit amet.",
    image: "https://ui.shadcn.com/placeholder.svg",
    url: "/",
    tags: ["Personal"],
  },
  {
    title: "Blog 2",
    description: "Lorem ipsum dolor sit amet.",
    image: "https://ui.shadcn.com/placeholder.svg",
    url: "/",
    tags: ["UI", "UX"],
  },
];

export { Links, Products, Socials, Blogs, Toggle, devMode, Bio };
