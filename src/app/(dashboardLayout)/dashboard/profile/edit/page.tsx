"use client";

import ProfileForm from "@/components/modules/Profile/ProfileForm";
import { useUser } from "@/context/UserContext";

export default function EditProfilePage() {
  const { user, handleUser } = useUser();

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10">
      <div className="bg-white shadow-md rounded-lg p-6 border">
        <h1 className="text-xl font-semibold mb-4 text-center">Edit Profile</h1>
        <ProfileForm user={user!} handleUser={handleUser} />
      </div>
    </div>
  );
}
