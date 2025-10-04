import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
        {/* Header (shared nav) */}
        <header className="sticky top-0 z-10 border-b backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
            <div className="font-semibold">Next Learn</div>
            <ul className="flex gap-4 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Page content container */}
        <main className="mx-auto max-w-5xl p-6">{children}</main>

        {/* Footer (shared) */}
        <footer className="mt-10 border-t bg-white">
          <div className="mx-auto max-w-5xl p-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Next Learn
          </div>
        </footer>
      </body>
    </html>
  );
}
