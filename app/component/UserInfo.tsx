"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function UserInfo() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <button onClick={() => signIn()}>Sign In</button>;

  return (
    <div>
      <span>{session.user?.email}</span>
      <button onClick={() => signOut()} style={{ marginLeft: 8 }}>
        Sign Out
      </button>
    </div>
  );
}
