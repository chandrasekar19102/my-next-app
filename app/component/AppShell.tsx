"use client";
import { SessionProvider } from "next-auth/react";
import UserInfo from "./UserInfo";
import Link from "next/link";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <header className="sticky top-0 z-10 border-b backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
          <div className="font-semibold">Next Learn</div>
          <ul className="flex gap-4 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
          <UserInfo />
        </nav>
      </header>
      <main className="mx-auto max-w-5xl p-6">{children}</main>
      <footer className="mt-10 border-t bg-white">
        <div className="mx-auto max-w-5xl p-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Next Learn
        </div>
      </footer>
    </SessionProvider>
  );
}
