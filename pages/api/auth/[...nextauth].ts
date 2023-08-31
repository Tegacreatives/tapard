import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from "@/app/libs/prismadb";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),

  //Configuration for athentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "text" },
      },

      async authorize(credentials) {
        //Checks if the user doesn't exist
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        //Finds the user where the email is thesame as the inputed email
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        //Checks if the login details are correct
        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid Credentials");
        }

        //Checks if the password is thesame as the encrypted password
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        
        //Checks if the password is wrong
        if (!isPasswordCorrect) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
