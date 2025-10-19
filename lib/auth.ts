import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(creds) {
        const email = creds?.email?.toString() ?? "";
        const password = creds?.password?.toString() ?? "";

        // Demo user (we’ll swap for DB later)
        if (email === "user@example.com" && password === "pass123") {
          return { id: "1", name: "Demo User", email };
        }
        return null;
      },
    }),
  ],
  pages: { signIn: "/signin" },
};
