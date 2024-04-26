"use client";

import { FC, useEffect, useState } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Modal } from "../modal";

import { TbTrash } from "react-icons/tb";

interface Product {
  name: string;
  link: string;
  image: string;
  price: number;
}

const ProductForm: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);

  const handleRemoveRow = (index: number) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);

    setProducts(updatedProducts);
    sessionStorage.setItem("products", JSON.stringify(updatedProducts));
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
    const link = formData.get("link") as string;
    const image = formData.get("image") as string;
    const price = formData.get("price") as unknown as number;

    setProducts([...products, { name, link, image, price }]);

    sessionStorage.setItem(
      "products",
      JSON.stringify([...products, { name, link, image, price }])
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
    const storedProducts = JSON.parse(
      sessionStorage.getItem("products") || "[]"
    );
    setProducts(storedProducts);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col gap-y-3 pt-6 h-full">
        {products.length > 0 ? (
          products.map((product, index: number) => (
            <div
              className="flex items-center gap-x-3 pl-3 pr-2 bg-accent h-12 py-2 rounded-md border"
              key={index}
            >
              <div className="flex flex-col gap-y-1">
                <p className="font-medium leading-none text-sm max-w-60 overflow-hidden text-ellipsis inline-block">
                  {product.name}
                </p>
                <p className="text-xs font-normal text-muted-foreground line-clamp-1 leading-none max-w-60 overflow-hidden text-ellipsis inline-block">
                  {product.price}
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
          <code className="text-foreground text-center">No products added</code>
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
          header="Add products"
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
                placeholder="Product name"
                className=""
                required
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="link" className="">
                Url
              </Label>
              <Input
                type="text"
                id="link"
                name="link"
                placeholder="https://example.com/cart"
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
              <Label htmlFor="price" className="">
                Price
              </Label>
              <Input
                type="number"
                id="price"
                name="price"
                placeholder="100"
                className=""
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 h-10 px-2 border border-foreground rounded-md bg-primary text-primary-foreground font-medium"
            >
              Add Product
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
                `const Products: ProductProps[] = [
                            ${products
                              .map(
                                ({ name, link, image, price }) => `  {
                                name: "${name}",
                                url: "${link}",
                                image: "${image}",
                                price: ${price}
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
            {`const Products: ProductProps[] = [
${products
  .map(
    ({ name, link, image, price }) => `  {
    name: "${name}",
    url: "${link}",
    image: "${image}",
    price: ${price}
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

export default ProductForm;
