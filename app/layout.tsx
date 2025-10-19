import type { Metadata } from "next";
import "./globals.css";
import AppShell from "./component/AppShell";

export const metadata: Metadata = {
  title: "My Next App",
  description: "Learning Next.js + Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
