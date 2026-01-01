import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { FavoritesProvider } from "@/app/contexts/FavoritesProvider";
import { CookiesProvider } from 'next-client-cookies/server';

/**
 * Ajout de la police de caractère utilisée sur le site
 * 
 * @function Inter
 * @returns { NextFontWithVariable } - Les informations de la police
 */
const inter: NextFontWithVariable = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Ajout les métadata à la page
 * 
 * @function metadata
 * @returns { Metadata } - Les méta data à ajouter
 */
export const metadata: Metadata = {
  title: "Kasa",
  description: "Une entreprise de location d’appartements et de maisons entre particuliers.",
  generator: 'Next.js',
  applicationName: 'Kasa',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  creator: "Miguel LOPES",
};

/**
 * Affiche la mise en page globale du site
 * 
 * @function RootLayout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
      </head>
      <body className={`${inter.variable} antialiased items-center flex`}>
        <FavoritesProvider>
          <CookiesProvider>{children}</CookiesProvider>
        </FavoritesProvider>
        {/* <UserProvider initialUser={user}>
          <CookiesProvider>{children}</CookiesProvider>
        </UserProvider> */}
      </body>
    </html>
  );
}
