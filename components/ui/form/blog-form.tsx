"use client";

import { FC, useEffect, useState } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Modal } from "../modal";

import { TbTrash } from "react-icons/tb";

interface Blog {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
}

const BlogForm: FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);

  const handleRemoveRow = (index: number) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);

    setBlogs(updatedBlogs);
    sessionStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get("title") as string;
    const url = formData.get("url") as string;
    const image = formData.get("image") as string;
    const description = formData.get("description") as string;
    const tags = (formData.get("tags") as string)
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    setBlogs([...blogs, { title, description, url, image, tags }]);

    sessionStorage.setItem(
      "blogs",
      JSON.stringify([...blogs, { title, description, url, image, tags }])
    );

    setIsModalOpen(false);
    form.reset();
  };

  const openContent = () => {
    setIsContentOpen(true);
  };

  const closeContent = () => {
    setIsContentOpen(false);
  };

  useEffect(() => {
    const storedBlogs = JSON.parse(sessionStorage.getItem("blogs") || "[]");
    setBlogs(storedBlogs);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col gap-y-3 pt-6 h-full">
        {blogs.length > 0 ? (
          blogs.map((blog, index: number) => (
            <div
              className="flex items-center gap-x-3 pl-3 pr-2 bg-accent h-12 py-2 rounded-md border"
              key={index}
            >
              <div className="flex flex-col gap-y-1">
                <p className="font-medium leading-none text-sm max-w-60 overflow-hidden text-ellipsis inline-block">
                  {blog.title}
                </p>
                <p className="text-xs font-normal text-muted-foreground line-clamp-1 leading-none max-w-60 overflow-hidden text-ellipsis inline-block">
                  {blog.description}
                </p>
              </div>
              <button
                onClick={() => handleRemoveRow(index)}
                className="w-auto h-full bg-primary text-primary-foreground aspect-square flex items-center justify-center rounded-sm ml-auto"
              >
                <TbTrash size={16} />
              </button>
            </div>
          ))
        ) : (
          <code className="text-foreground text-center">No blogs added</code>
        )}
        <button
          onClick={openContent}
          className="w-full mt-auto h-10 px-2 border rounded-md bg-secondary text-secondary-foreground font-medium"
        >
          Generate
        </button>
        <button
          onClick={openModal}
          className="w-full h-10 px-2 border rounded-md bg-primary text-primary-foreground font-medium"
        >
          Add
        </button>
      </div>

      {/* Modal */}
      <div
        className={`${
          isModalOpen ? "block" : "hidden"
        } fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-background/40 backdrop-blur animate`}
      >
        <Modal
          onClose={closeModal}
          header="Add blogs"
          description="Add content to your page by filling out the form below."
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="title" className="">
                Title
              </Label>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Blog Example"
                className=""
                required
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="description" className="">
                Description
              </Label>
              <Input
                type="text"
                id="description"
                name="description"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                className=""
                required
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="url" className="">
                Url
              </Label>
              <Input
                type="text"
                id="url"
                name="url"
                placeholder="https://example.com"
                className=""
                required
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="image" className="">
                Image
              </Label>
              <Input
                type="text"
                id="image"
                name="image"
                placeholder="https://ui.shadcn.com/placeholder.svg"
                className=""
                required
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="tags" className="">
                Tags
              </Label>
              <Input
                type="text"
                id="tags"
                name="tags"
                placeholder="UI, UX (Use comma to separate tags)"
                className=""
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 h-10 px-2 border border-foreground rounded-md bg-primary text-primary-foreground font-medium"
            >
              Add Blog
            </button>
          </form>
        </Modal>
      </div>

      {/* Content */}
      <div
        className={`${
          isContentOpen ? "block" : "hidden"
        } fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-background/40 backdrop-blur animate`}
      >
        <Modal onClose={closeContent} header="Generate object">
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `const Blogs: BlogProps[] = [
                            ${blogs
                              .map(
                                ({
                                  title,
                                  url,
                                  image,
                                  description,
                                  tags,
                                }) => `  {
                                title: "${title}",
                                url: "${url}",
                                image: "${image}",
                                description: "${description}",
                                tags: [${tags
                                  .map((tag) => `"${tag}"`)
                                  .join(", ")}]
                              }`
                              )
                              .join(",\n")}
                            ]`
              );
            }}
            className="w-full h-10 px-2 border rounded-sm bg-primary text-primary-foreground font-medium mb-4 hover:bg-primary/80"
          >
            Copy object
          </button>
          <pre className="p-2 bg-accent h-52 shrink text-accent-foreground rounded-sm whitespace-pre-wrap overflow-y-auto">
            {`const Blogs: BlogProps[] = [
${blogs
  .map(
    ({ title, description, url, image, tags }) => `  {
    title: "${title}",
    url: "${url}",
    image: "${image}",
    description: "${description}",
    tags: [${tags.map((tag) => `"${tag}"`).join(", ")}]
  }`
  )
  .join(",\n")}
]`}
          </pre>
        </Modal>
      </div>
    </>
  );
};

export default BlogForm;
