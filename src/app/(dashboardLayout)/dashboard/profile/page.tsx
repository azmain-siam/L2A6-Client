"use client";

import DashHeading from "@/components/ui/DashHeading";
import { useUser } from "@/context/UserContext";
import { Pen, User } from "lucide-react";
import Link from "next/link";

const ProfilePage = () => {
  const { user } = useUser();
  return (
    <div>
      <DashHeading>My Profile</DashHeading>
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white shadow-lg rounded-xl p-6 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-xl font-bold">{user?.name}</h1>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>

          <div className="border-t pt-4 space-y-2 text-sm text-gray-700">
            <div>
              <span className="font-medium">Phone:</span> {user?.phone}
            </div>
            <div>
              <span className="font-medium">Role:</span> {user?.role}
            </div>
          </div>

          <Link href="/dashboard/profile/edit">
            <button className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              <Pen /> Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
