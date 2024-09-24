import { Inter } from "next/font/google";
import "./globals.css";
import clsx from 'clsx';
import FireFliesBackground from "@/components/fire-flies-background";
import Sound from '@/components/sound';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Next.js Portfolio Created with Three.js and Tailwind CSS | %s | Andres",
    default:
      "Next.js Portfolio Created with Three.js and Tailwind CSS by Andres",
  },
  description:
    "A unique creative portfolio designed by Andres with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal"></div>
      </body>
    </html>
  );
}
