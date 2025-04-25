"use client";

import { useRouter } from "next/navigation";
import { IUser } from "@/types";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { updateUserInfo } from "@/services/AuthService";
import { toast } from "sonner";

export default function ProfileForm({
  user,
  handleUser,
}: {
  user: IUser;
  handleUser: () => Promise<void>;
}) {
  const form = useForm({
    defaultValues: {
      name: user?.name,
      phone: user?.phone,
    },
  });
  const router = useRouter();

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await updateUserInfo(data, user.id);

      if (res.success) {
        toast.success(res.message);
        handleUser();
        router.push("/dashboard/profile");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        className="pl-10"
                        placeholder="name@example.com"
                        {...field}
                        value={field.value || ""}
                      />
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        className="pl-10"
                        placeholder="name@example.com"
                        {...field}
                        value={field.value || ""}
                      />
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r cursor-pointer from-primary to-primary-second hover:from-primary/80 hover:to-primary-second/80 duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Update Profile"
            )}
          </Button>
        </CardFooter>
      </form>
    </Form>
  );
}
