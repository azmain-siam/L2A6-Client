// For App Router — app/dashboard/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import Link from "next/link";

export default function Dashboard() {
  const { user } = useUser();
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-green-600">
            Welcome, {user?.name}!
          </h1>
          <p className="text-muted-foreground">
            Your personal dashboard overview.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <p>
                <strong>Name:</strong> {user?.name}
              </p>
              <p>
                <strong>Email:</strong> {user?.email}
              </p>
            </CardContent>
          </Card>

          {/* Listings Card */}
          {/* <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Your Listed Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-black">Used iPhone 12</p>
                <p>Price: $450</p>
                <Separator className="my-2" />
              </div>
              <div>
                <p className="font-medium text-black">Mountain Bike</p>
                <p>Price: $300</p>
              </div>
            </CardContent>
          </Card> */}
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-4 pt-4">
          <Link href={"/dashboard/add-listing"}>
            <Button variant="default" className="cursor-pointer">
              Add Item for sell
            </Button>
          </Link>
          <Link href={"/dashboard/profile/edit"}>
            <Button variant="outline" className="cursor-pointer">
              Edit Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
