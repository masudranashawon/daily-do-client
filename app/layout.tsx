import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.scss";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { initialState } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily Do",
  description:
    "Daily Do is your ultimate todo app to stay organized and productive. Easily manage your daily tasks and track your progress effortlessly. ",
};

export default function RootLayout({
  children,
  initialState: any,
}: {
  children: React.ReactNode;
  initialState: typeof initialState;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthContextProvider initialState={initialState}>
          <Navbar />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
