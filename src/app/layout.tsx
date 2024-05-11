import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Random Agencia",
  description: "Random Agencia: Diseño y desarrollo de apps a medida",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: './assets/Logo-end.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: './assets/Logo-end.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: './assets/Logo-end.png',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} `}>
        {children}
      </body>
    </html>
  );
}
