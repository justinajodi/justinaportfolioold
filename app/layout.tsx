import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/providers/theme-provider";
import { ModeToggle } from "@/components/theme-switch";
import { Spotlight } from "@/components/ui/spot";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Justina Jodi",
  description: "Justina Jodi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className}`}
      >
         
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <ActiveSectionContextProvider>
      
          <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-10"
        fill="white"
      />
            <Header />
            <div className="absolute top-0 right-0 mt-8 mr-8"><ModeToggle></ModeToggle></div>

            {children}
            <Footer />

            <Toaster position="top-right" />

          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
