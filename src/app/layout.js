import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const roboto = Manrope({
  subsets: ["latin"],
});



export const metadata = {
  title: "StudyNook",
  description: "Created by SS Technology on behalf oh P-Hero",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${roboto.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <Navbar />
      <main>
      {children}
      </main>
      <Footer />
      </body>
    </html>
  );
}
