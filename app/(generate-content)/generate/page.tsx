"use client";

import { useState } from "react";

import { Separator } from "@/components/ui/separator";
import SocialForm from "@/components/ui/form/social-form";
import BlogForm from "@/components/ui/form/blog-form";
import LinkForm from "@/components/ui/form/link-form";
import ProductForm from "@/components/ui/form/product-form";

const Page = () => {
  const [selected, setSelected] = useState("social");
  return (
    <main className="w-full h-auto grow flex justify-center p-6 md:p-[4%] lg:p-[8%]">
      <section id="content-generate" className="w-full flex flex-col max-w-sm">
        <div className="flex flex-col w-full">
          <div className="space-y-1">
            <h4 className="text-lg font-medium leading-none">
              Generate Your Content
            </h4>
            <p className="text-base text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <button
              onClick={() => setSelected("social")}
              className={`${
                selected === "social"
                  ? "text-accent-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Socials
            </button>
            <Separator orientation="vertical" />
            <button
              onClick={() => setSelected("link")}
              className={`${
                selected === "link"
                  ? "text-accent-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Links
            </button>
            <Separator orientation="vertical" />
            <button
              onClick={() => setSelected("product")}
              className={`${
                selected === "product"
                  ? "text-accent-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Products
            </button>
            <Separator orientation="vertical" />
            <button
              onClick={() => setSelected("blog")}
              className={`${
                selected === "blog"
                  ? "text-accent-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Blogs
            </button>
          </div>
        </div>
        {selected === "social" ? (
          <SocialForm />
        ) : selected === "link" ? (
          <LinkForm />
        ) : selected === "product" ? (
          <ProductForm />
        ) : selected === "blog" ? (
          <BlogForm />
        ) : null}
      </section>
    </main>
  );
};
export default Page;
