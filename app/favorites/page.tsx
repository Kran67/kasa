import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { HeaderMenuItems } from "@/app/enums/enums";
import Gallery from "@/app/components/data/Gallery";
import type { Metadata } from "next";

/**
 * Ajout les métadata à la page
 * 
 * @function metadata
 * @returns { Metadata } - Les méta data à ajouter
 */
export const metadata: Metadata = {
  title: "Kasa - Page des favoris",
};

/**
 * Affiche la page des favoris
 * 
 * @function FavoritesPage
 */
export default function FavoritesPage() {
  return (
    <main className="flex flex-col gap-51 md:gap-40 w-full items-center md:pt-40 md:px-140">
      <Header activeMenu={HeaderMenuItems.Favorites} />
      <Gallery onlyFav={true} />
      <Footer />
    </main>
  );
}
