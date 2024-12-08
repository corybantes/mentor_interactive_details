import type { Metadata } from "next";
import { spaceGrotesk } from "../../public/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interactive Card Details",
  description: "Interactive Card Details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
