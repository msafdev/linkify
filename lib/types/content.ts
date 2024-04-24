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
  image: string;
  link: string;
  tags: string[];
}
