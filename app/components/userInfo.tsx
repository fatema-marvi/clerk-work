// components/UserInfo.tsx (Client Component)
"use client";

import { useUser } from "@clerk/nextjs";

export default function UserInfo() {
  const { user } = useUser();

  return <div>Hello, {user?.firstName || "Guest"}</div>;
}
