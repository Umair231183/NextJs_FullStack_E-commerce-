import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";



export const metadata: Metadata = {
  title: { 
    template: "%s - Wallcart online store",
    default: "Wallcart online store",
  },
  description: "Wallcart online store, Your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
     <html lang="en">
      <body
        className={" font-poppins antialiased "}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
   </ClerkProvider>
  );
}
