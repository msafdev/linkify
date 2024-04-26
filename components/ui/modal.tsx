"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card-modal";
import { RxCross2 } from "react-icons/rx";

export function Modal({
  onClose,
  header = "Add content",
  description,
  children,
}: {
  onClose: () => void;
  header?: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <Card className="w-full max-w-[350px] relative max-h-[60svh] overflow-y-auto">
      <CardHeader className="p-4">
        <CardTitle>{header}</CardTitle>
        <CardDescription>
          {description ? (
            description
          ) : (
            <span>
              Copy and paste this object into your{" "}
              <code className="inline px-1 bg-accent text-accent-foreground">
                content.ts
              </code>{" "}
              file.
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">{children}</CardContent>
      <CardFooter className="p-0">
        <button onClick={onClose} className="absolute top-3 right-3">
          <RxCross2 size={24} />
        </button>
      </CardFooter>
    </Card>
  );
}
