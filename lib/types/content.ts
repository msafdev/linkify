import { IconType } from "react-icons/lib";

export interface SocialProps {
  url: string;
  icon: IconType;
}

export interface LinkProps {
  name: string;
  url: string;
  subtext: string;
  icon: IconType;
}

export interface ProductProps {
  name: string;
  price: number;
  image: string;
  url: string;
}

export interface BlogProps {
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
}
