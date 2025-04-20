"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ImageUpload from "../shared/ImageUpload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import listingValidationSchema from "./validation/listingValidation";
import { useUser } from "@/context/UserContext";
// import useAxios from "@/hooks/globalAxiosURL";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { IListing } from "@/types/listing";
import useAxios from "@/hooks/globalAxiosURL";

export default function UpdateProductForm({ listing }: { listing: IListing }) {
  const form = useForm({
    resolver: zodResolver(listingValidationSchema),
    defaultValues: {
      title: listing?.title || "",
      description: listing?.description || "",
      price: listing?.price || undefined,
      condition: listing?.condition || "",
    },
  });
  const {
    formState: { isSubmitting },
    reset,
  } = form;
  const axios = useAxios();
  const { user } = useUser();
  const [images, setImages] = useState<File[] | []>([]);
  const [previewImages, setPreviewImages] = useState<string[] | []>([]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const modifiedData = {
        ...data,
        price: Number(data.price),
        userId: user?.id,
      };

      // console.log(modifiedData);
      const formData = new FormData();
      formData.append("data", JSON.stringify(modifiedData));

      images.forEach((image) => {
        formData.append("file", image as File);
      });

      const { data: response } = await axios.put(
        `/listings/${listing._id}`,
        formData
      );
      // const response = await updateListing(formData, listing._id);
      console.log(response);
      if (response.status === 201) {
        toast.success(response.message);
        reset();
        setImages([]);
        setPreviewImages([]);
      }
    } catch (error) {
      // if(error.){

      // }
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 max-w-xl mx-auto border rounded-md p-5"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Title"
                  {...field}
                  value={field.value || ""}
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Description"
                  {...field}
                  value={field.value || ""}
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Price"
                  {...field}
                  value={`${field.value}` || ""}
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="condition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Condition</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Condition" />
                  </SelectTrigger>
                  <SelectContent className="w-1/3">
                    <SelectItem value="Used">Used</SelectItem>
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="Refurbished">Refurbished</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <Label className="mb-2">Images</Label>
          <ImageUpload
            previewImages={previewImages}
            setPreviewImages={setPreviewImages}
            setImages={setImages}
          />
        </div>

        <Button
          disabled={isSubmitting}
          type="submit"
          className="w-full cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Updating product info...
            </>
          ) : (
            "Update Product Info"
          )}
        </Button>
      </form>
    </Form>
  );
}
