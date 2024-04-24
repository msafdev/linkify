import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Import your avatar here
import Avatar from "@/public/images/asset/avatar.jpg";

// Components
import DotPattern from "@/components/magicui/dot-pattern";
import { Button, DarkMode } from "@/components/ui/button";

// Datas
import { Links, Products, Socials } from "@/content";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 bg-accent animate">
      <section
        id="home"
        className="flex flex-col items-center w-full sm:max-w-sm h-full grow sm:border sm:rounded-2xl overflow-hidden px-6 py-6 gap-y-3 relative bg-background animate"
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
        <div className="flex w-full items-center justify-center gap-x-3 mb-4">
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

        <div className="flex w-full items-end justify-center gap-x-3 mb-4 flex-wrap">
          {Socials.map((social, index) => (
            <Link key={index} href={social.href}>
              <social.icon className="w-5 h-5 text-foreground animate"/>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-y-2 h-fit w-full p-2 rounded-xl border bg-popover/80 backdrop-blur-sm animate">
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
          <Button key={index} subtext={link.subtext} icon={<link.icon />}>
            {link.name}
          </Button>
        ))}

        {/* Item Card */}
        <div className="grid grid-cols-2 w-full gap-3">
          {Products.map((product, index) => (
            <div
              key={index}
              className={`w-full h-fit border bg-popover/80 backdrop-blur-sm rounded-xl p-2 gap-y-2 flex flex-col animate group cursor-pointer ${Products.length}`}
            >
              <div className="relative w-full h-auto aspect-square rounded-lg bg-accent overflow-hidden">
                <Image src={product.image} alt={product.name} fill />
                <div className="absolute inset-0 w-full h-full bg-transparent group-hover:bg-accent/60 z-10 animate" />
              </div>
              <div className="flex flex-col w-full">
                <h3 className="text-clamp-sm text-popover-foreground font-medium">
                  {product.name}
                </h3>
                <p className="text-clamp-xs text-muted-foreground">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
