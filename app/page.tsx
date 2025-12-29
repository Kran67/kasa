import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { HeaderMenuItems } from "./enums/enums";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center">
      <Header activeMenu={HeaderMenuItems.Home} />
      <Footer />
    </main>
  );
}
