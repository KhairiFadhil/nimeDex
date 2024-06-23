
import { Inter } from "next/font/google";
import Navigation from "../component/navbar";
import "../globals.css"
import Navbar from "../component/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full min-h-screen">
          <header className="navigator">
           <Navbar />
          </header>
        { children }
        </main>
      </body>
    </html>
  );
}
