import { IconType } from "react-icons/lib";

export interface SocialProps {
  id: number;
  name: string;
  href: string;
  icon: IconType;
}

export interface LinkProps {
  id: number;
  name: string;
  href: string;
  subtext: string;
  icon: IconType;
}

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  rate: number;
  image: string;
  link: string;
  tags: string[];
}

export interface BlogProps {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}
