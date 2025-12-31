import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { HeaderMenuItems } from "@/app/enums/enums";
import HomeImage from "@/app/assets/images/home.jpg";
import Image from "next/image";
import Gallery from "@/app/components/data/Gallery";

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
