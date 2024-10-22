import localFont from "next/font/local";
import "./globals.css";
import "./M600globals.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "CST",
  description: "Create by CST Students",
};

import Nav from "./components/Nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable}antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}