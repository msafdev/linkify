import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Import your avatar here
import Avatar from "@/public/images/asset/avatar.jpg";

// Components
import DotPattern from "@/components/magicui/dot-pattern";
import { Button, DarkMode } from "@/components/ui/button";

// Datas
import { Blogs, Links, Products, Socials } from "@/content";
import { RectangleCard, SquareCard } from "@/components/ui/card";
import { RxStar, RxStarFilled } from "react-icons/rx";

export default function Home() {
  return (
    <main className="flex h-full max-h-screen flex-col items-center justify-between sm:p-24 bg-accent animate overflow-hidden">
      <section
        id="home"
        className="flex flex-col overflow-y-auto items-center w-full sm:max-w-sm h-full grow sm:border sm:rounded-2xl overflow-hidden px-6 py-6 gap-y-3 relative bg-background animate"
      >
        {/* Magic UI */}
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] animate"
          )}
        />

        {/* Dark */}
        <DarkMode />

        {/* Main UI */}
        <div className="flex w-full items-center justify-center gap-x-3 mb-4 z-10">
          <div className="w-16 h-auto aspect-square relative rounded-full overflow-hidden p-1 border bg-black">
            <Image
              src={Avatar}
              alt="Avatar Image"
              className="w-full h-full object-cover translate-y-1"
            />
          </div>
          <div className="flex w-fit justify-center flex-col">
            <h1 className="text-clamp font-medium text-foreground animate">
              msafdev
            </h1>
            <p className="text-clamp-sm text-muted-foreground animate">
              Frontend Developer
            </p>
          </div>
        </div>

        <div className="flex w-full items-end justify-center gap-x-3 mb-4 flex-wrap z-10">
          {Socials.map((social, index) => (
            <Link key={index} href={social.href}>
              <social.icon className="w-5 h-5 text-foreground animate" />
            </Link>
          ))}
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-y-2 h-fit w-full p-2 rounded-xl border bg-popover backdrop-blur-sm animate z-10">
          <p className="text-clamp-sm text-popover-foreground w-fit animate">
            Creative Fullstack Developer Focusing on Next.js, Tailwind CSS and
            Supabase.
          </p>
          <button className="bg-primary text-primary-foreground border w-full py-2 rounded-lg hover:bg-primary/90 font-medium text-clamp-sm animate">
            Let's Connect
          </button>
        </div>

        {/* Social Links */}
        {Links.map((link, index) => (
          <Button key={index} subtext={link.subtext} icon={<link.icon size={20}/>}>
            {link.name}
          </Button>
        ))}

        {/* Product Square */}
        <div className="grid grid-cols-2 w-full gap-3 z-10">
          {Products.map((product, index) => (
            <SquareCard key={index} product={product} />
          ))}
        </div>

        {/* Blog Card */}
        {Blogs.map((blog, index) => (
          <RectangleCard key={index} blog={blog} />
        ))}
      </section>
    </main>
  );
}
