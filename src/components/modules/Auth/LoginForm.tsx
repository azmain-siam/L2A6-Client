import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2, Mail } from "lucide-react";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { loginValidationSchema } from "./validation/loginValidation";
import { loginUser } from "@/services/AuthService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

const LoginForm = ({
  showPassword,
  setShowPassword,
}: {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const form = useForm({
    resolver: zodResolver(loginValidationSchema),
  });
  const { setIsLoading } = useUser();
  const router = useRouter();
  
  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);

      if (res.status === 200) {
        toast.success("Login successful");
        router.push("/");
        setIsLoading(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* <div className="grid grid-cols-3 gap-4">
          <Button variant="outline" className="w-full">
            <Facebook className="h-4 w-4 mr-2" />
            <span className="sr-only sm:not-sr-only sm:text-xs">Facebook</span>
          </Button>
          <Button variant="outline" className="w-full">
            <Github className="h-4 w-4 mr-2" />
            <span className="sr-only sm:not-sr-only sm:text-xs">GitHub</span>
          </Button>
          <Button variant="outline" className="w-full">
            <Mail className="h-4 w-4 mr-2" />
            <span className="sr-only sm:not-sr-only sm:text-xs">Google</span>
          </Button>
        </div> */}

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Continue with
              </span>
            </div>
          </div>

          <div className="space-y-2">
            {/* <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="text-xs text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div> */}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        className="pl-10"
                        placeholder="name@example.com"
                        {...field}
                        value={field.value || ""}
                      />
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                        value={field.value || ""}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute cursor-pointer right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="size-2" />
                        ) : (
                          <Eye className="size-2" />
                        )}
                        <span className="sr-only">
                          {showPassword ? "Hide password" : "Show password"}
                        </span>
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              // className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <Label htmlFor="remember" className="text-sm font-normal">
              Remember me
            </Label>
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
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>
        </CardFooter>
      </form>
    </Form>
  );
};

export default LoginForm;
