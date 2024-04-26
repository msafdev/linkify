"use client";

import { FC, useEffect, useState } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Modal } from "../modal";

import { TbTrash } from "react-icons/tb";

interface Link {
  name: string;
  url: string;
  subtext: string;
  icon: string;
}

const LinkForm: FC = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);

  const handleRemoveRow = (index: number) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);

    setLinks(updatedLinks);
    sessionStorage.setItem("links", JSON.stringify(updatedLinks));
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
    const name = formData.get("name") as string;
    const url = formData.get("url") as string;
    const subtext = formData.get("subtext") as string;

    setLinks([
      ...links,
      { name, url, subtext, icon: "Input icons here, use react-icons/tb" },
    ]);

    sessionStorage.setItem(
      "links",
      JSON.stringify([
        ...links,
        { name, url, subtext, icon: "Input icons here, use react-icons/tb" },
      ])
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
    const storedLinks = JSON.parse(sessionStorage.getItem("links") || "[]");
    setLinks(storedLinks);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col gap-y-3 pt-6 h-full">
        {links.length > 0 ? (
          links.map((link, index: number) => (
            <div
              className="flex items-center gap-x-3 pl-3 pr-2 bg-accent h-12 py-2 rounded-md border"
              key={index}
            >
              <div className="flex flex-col">
                <p className="font-medium leading-none text-sm max-w-60 overflow-hidden text-ellipsis inline-block">
                  {link.name}
                </p>
                <p className="text-xs font-normal text-muted-foreground line-clamp-1 max-w-60 overflow-hidden text-ellipsis inline-block">
                  {link.url}
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
          <code className="text-foreground text-center">No links added</code>
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
          header="Add links"
          description="Add content to your page by filling out the form below."
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="name" className="">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Example"
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
              <Label htmlFor="subtext" className="">
                Subtext
              </Label>
              <Input
                type="text"
                id="subtext"
                name="subtext"
                placeholder="This is an example link"
                className=""
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 h-10 px-2 border border-foreground rounded-md bg-primary text-primary-foreground font-medium"
            >
              Add Link
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
                `const Socials: SocialProps[] = [
                            ${links
                              .map(
                                ({ name, url, icon, subtext }) => `  {
                                name: "${name}",
                                url: "${url}",
                                subtext: "${subtext}",
                                icon: "${icon}"
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
            {`const Socials: SocialProps[] = [
${links
  .map(
    ({ name, url, icon, subtext }) => `  {
    name: "${name}",
    url: "${url}",
    subtext: "${subtext}",
    icon: "${icon}"
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

export default LinkForm;
