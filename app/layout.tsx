import type { Metadata } from "next";
import { Nunito } from "next/font/google";

//Local imports
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import getCurrentUser from "./actions/getCurrentUser";
import ToasterProvider from "./providers/ToasterProvider";

//Modals
import RegisterModal from "@/components/Modals/RegisterModal";
import LoginModal from "@/components/Modals/LoginModal";
import RentModal from "@/components/Modals/RentModal";
import SearchModal from "@/components/Modals/SearchModal";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tapard",
  description: "Find the perfect suit for your next vacation",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <SearchModal />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
