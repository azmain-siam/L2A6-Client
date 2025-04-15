"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "@/components/modules/Auth/LoginForm";
import RegisterForm from "@/components/modules/Auth/RegisterForm";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1500);
  };

  // const handleSignup = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   // Simulate signup process
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     router.push("/dashboard");
  //   }, 1500);
  // };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-16rem)] py-12 relative mx-auto">
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5"></div>

      <div className="w-full max-w-md mx-auto relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30"></div>
        <Card className="w-full relative bg-background/95 backdrop-blur-sm shadow-xl border-0">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4 rounded-t-lg bg-muted/50">
              <TabsTrigger
                value="login"
                className="rounded-tl-lg data-[state=active]:bg-background/80"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="rounded-tr-lg data-[state=active]:bg-background/80"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <LoginForm
                handleLogin={handleLogin}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                isLoading={isLoading}
              />
            </TabsContent>

            <TabsContent value="signup">
              <RegisterForm
                // handleSignup={handleSignup}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                isLoading={isLoading}
              />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
