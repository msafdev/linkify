"use client";

import { FC, useEffect, useState } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Modal } from "../modal";

import { TbTrash } from "react-icons/tb";

interface Social {
  url: string;
  icon: string;
}

const SocialForm: FC = () => {
  const [socials, setSocials] = useState<Social[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);

  const handleRemoveRow = (index: number) => {
    const updatedSocials = [...socials];
    updatedSocials.splice(index, 1);

    setSocials(updatedSocials);
    sessionStorage.setItem("socials", JSON.stringify(updatedSocials));
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
    const url = formData.get("url") as string;

    setSocials([
      ...socials,
      { url, icon: "Input icons here, use react-icons/tb" },
    ]);

    sessionStorage.setItem(
      "socials",
      JSON.stringify([
        ...socials,
        { url, icon: "Input icons here, use react-icons/tb" },
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
    const storedSocials = JSON.parse(sessionStorage.getItem("socials") || "[]");
    setSocials(storedSocials);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col gap-y-3 pt-6 h-full">
        {socials.length > 0 ? (
          socials.map((social, index: number) => (
            <div
              className="flex items-center gap-x-3 pl-3 pr-2 bg-accent h-12 py-2 rounded-md border"
              key={index}
            >
              <p className="font-medium leading-none text-sm max-w-60 overflow-hidden text-ellipsis inline-block">
                {social.url}
              </p>
              <button
                onClick={() => handleRemoveRow(index)}
                className="w-auto h-full bg-primary text-primary-foreground aspect-square flex items-center justify-center rounded-sm ml-auto"
              >
                <TbTrash size={16} />
              </button>
            </div>
          ))
        ) : (
          <code className="text-foreground text-center">No socials added</code>
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
          header="Add socials"
          description="Add content to your page by filling out the form below."
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="url" className="">
                Href
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
            <button
              type="submit"
              className="w-full mt-2 h-10 px-2 border border-foreground rounded-md bg-primary text-primary-foreground font-medium"
            >
              Add Social
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
                            ${socials
                              .map(
                                ({ url, icon }) => `  {
                                url: "${url}",
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
${socials
  .map(
    ({ url, icon }) => `  {
    url: "${url}",
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

export default SocialForm;
