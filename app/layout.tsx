import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

const inter: NextFontWithVariable = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kasa",
  description: "Une entreprise de location d’appartements et de maisons entre particuliers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.variable} antialiased items-center flex`}>
        {children}
        {/* <UserProvider initialUser={user}>
          <CookiesProvider>{children}</CookiesProvider>
        </UserProvider> */}
      </body>
    </html>
  );
}
