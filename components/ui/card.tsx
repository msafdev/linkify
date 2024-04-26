import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { BlogProps, ProductProps } from "@/lib/types/content";

const SquareCard = ({
  product,
  className = "",
}: {
  product: ProductProps;
  className?: string;
}) => {
  return (
    <Link
      href={product.url}
      target="_blank"
      className={cn(
        "w-full h-fit border bg-popover backdrop-blur-sm rounded-xl p-2 gap-y-2 flex flex-col animate group cursor-pointer",
        className
      )}
    >
      <div className="relative w-full h-auto aspect-square rounded-lg bg-accent overflow-hidden">
        <Image src={product.image} alt={product.name} fill />
        <div className="absolute inset-0 w-full h-full bg-transparent group-hover:bg-accent/60 z-10 animate" />
      </div>
      <div className="flex flex-col w-full">
        <h3 className="text-clamp text-popover-foreground font-medium">
          {product.name}
        </h3>
        <p className="text-clamp-sm text-muted-foreground">${product.price}</p>
      </div>
    </Link>
  );
};

const RectangleCard = ({
  blog,
  className = "",
}: {
  blog: BlogProps;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 w-full gap-3 z-10 bg-popover rounded-xl p-3 border group animate cursor-pointer",
        className
      )}
    >
      <div className="relative w-full h-auto aspect-square rounded-lg bg-accent overflow-hidden">
        <Image src={blog.image} alt={blog.title} fill />
        <div className="absolute inset-0 w-full h-full bg-transparent group-hover:bg-accent/60 z-10 animate" />
      </div>
      <div className="w-full h-auto aspect-square flex flex-col">
        <p className="text-clamp text-popover-foreground font-medium">
          {blog.title}
        </p>
        <div className="flex flex-col h-auto grow gap-y-2">
          <p className="text-muted-foreground text-clamp-sm mb-auto line-clamp-3">
            {blog.description}
          </p>
          <div className="flex items-center gap-x-1">
            {blog.tags.map((tag, index) => (
              <p
                key={index}
                className="text-muted-foreground text-clamp-sm leading-none "
              >
                {tag}
                {index < blog.tags.length - 1 ? ", " : ""}
              </p>
            ))}
          </div>
          <Link
            href={blog.url}
            target="_blank"
            className="text-foreground w-fullfont-medium underline text-clamp-sm animate"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
export { SquareCard, RectangleCard };
