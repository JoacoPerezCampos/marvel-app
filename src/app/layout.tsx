import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Marvel Heroes App",
  description: "Marvel heroes complete library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
