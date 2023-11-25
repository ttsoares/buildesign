import Nav from "@/components/Nav";

import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const IBM = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "BuilDesign",
  description: "From Figma to deploy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen w-screen relative overflow-x-hidden">
      <body
        className={`${IBM.className} bg-slate-300 h-[calc(100%-6%)] w-full`}
      >
        <Nav />
        {children}
        <div className="w-full h-14 bottom-0 left-0 sticky">
          <Footer />
        </div>
      </body>
    </html>
  );
}
