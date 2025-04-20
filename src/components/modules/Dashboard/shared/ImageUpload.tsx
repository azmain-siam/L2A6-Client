"use client";

import { Dispatch, SetStateAction } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { ImageUpIcon, X } from "lucide-react";

interface ImageUploadProps {
  // images: File[] | [];
  setImages: Dispatch<SetStateAction<[] | File[]>>;
  previewImages: string[] | [];
  setPreviewImages: Dispatch<SetStateAction<[] | string[]>>;
}

export default function ImageUpload({
  setImages,
  previewImages,
  setPreviewImages,
}: ImageUploadProps) {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files![0];
    if (!files) return;

    const fileURL = URL.createObjectURL(files);

    setImages((prev) => [...prev, files]);

    setPreviewImages((prev) => [...prev, fileURL]);
  };

  const handleRemove = (index: number) => {
    setImages((prev) => prev.filter((_, idx) => idx !== index));
    setPreviewImages((prev) => prev.filter((_, idx) => idx !== index));
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
          <div key={index} className="relative">
            <Image
              src={preview}
              alt={`Preview ${index}`}
              width={500}
              height={500}
              className="h-24 w-24 rounded object-cover border"
            />

            <button
              onClick={() => handleRemove(index)}
              className="size-6 rounded-full bg-primary flex justify-center items-center absolute right-0 top-0 cursor-pointer"
            >
              <X className="!size-5 text-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
