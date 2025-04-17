"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface ImageUploadProps {
  images: string[];
  onChange: (urls: string[]) => void;
}

export default function ImageUpload({ images, onChange }: ImageUploadProps) {
  const [previewImages, setPreviewImages] = useState(images || []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const fileURL = URL.createObjectURL(files[i]);
      newImages.push(fileURL);
    }

    const updatedImages = [...previewImages, ...newImages];
    setPreviewImages(updatedImages);
    onChange(updatedImages);
  };

  return (
    <div className="space-y-2">
      <Input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <div className="flex gap-2 flex-wrap">
        {previewImages.map((src, index) => (
          <Image
            key={index}
            src={src}
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
