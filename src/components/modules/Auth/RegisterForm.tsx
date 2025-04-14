import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Facebook, Github, Loader2, Mail } from "lucide-react";
import Link from "next/link";

const RegisterForm = ({
  handleSignup,
  showPassword,
  setShowPassword,
  isLoading,
}: {
  handleSignup: (e: React.FormEvent) => void;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}) => {
  return (
    <form onSubmit={handleSignup}>
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl text-center">
          Create an account
        </CardTitle>
        <CardDescription className="text-center">
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
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
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" placeholder="John" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" placeholder="Doe" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email-signup">Email</Label>
          <div className="relative">
            <Input
              id="email-signup"
              type="email"
              placeholder="name@example.com"
              className="pl-10"
              required
            />
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password-signup">Password</Label>
          <div className="relative">
            <Input
              id="password-signup"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
              <span className="sr-only">
                {showPassword ? "Hide password" : "Show password"}
              </span>
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            required
          />
          <Label htmlFor="terms" className="text-sm font-normal">
            I agree to the{" "}
            <Link href="#" className="text-primary hover:underline">
              terms of service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-primary hover:underline">
              privacy policy
            </Link>
          </Label>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          className="w-full rounded-full bg-gradient-to-r from-primary to-primary-second hover:from-primary/90 hover:to-primary-second/90 transition-all"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating account...
            </>
          ) : (
            "Create account"
          )}
        </Button>
      </CardFooter>
    </form>
  );
};

export default RegisterForm;
