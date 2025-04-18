"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { ImageUpIcon } from "lucide-react";

interface ImageUploadProps {
  images: File[] | [];
  setImages: Dispatch<SetStateAction<[] | File[]>>;
}

export default function ImageUpload({ setImages }: ImageUploadProps) {
  const [previewImages, setPreviewImages] = useState<string[] | []>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files![0];
    if (!files) return;

    const fileURL = URL.createObjectURL(files);

    setImages((prev) => [...prev, files]);

    setPreviewImages((prev) => [...prev, fileURL]);
  };

  return (
    <div className="space-y-2">
      <Input
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleImageChange}
        id="image-uploader"
      />
      <Label
        htmlFor="image-uploader"
        className="w-full h-36 border-2 rounded-lg border-dashed flex flex-col justify-center text-base cursor-pointer hover:bg-primary-foreground"
      >
        <ImageUpIcon className="!size-10" />
        <div>
          <span>Drag and drop</span>
          <span className="text-primary"> or browse</span>{" "}
          <span>to upload</span>
        </div>
      </Label>
      <div className="flex gap-2 flex-wrap">
        {previewImages.map((preview, index) => (
          <Image
            key={index}
            src={preview}
            alt={`Preview ${index}`}
            width={500}
            height={500}
            className="h-20 w-20 rounded object-cover border"
          />
        ))}
      </div>
    </div>
  );
}
