import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { HeaderMenuItems } from "./enums/enums";

export default function Home() {
  return (
    <main className="flex flex-col gap-40 w-full items-center pt-40 px-140">
      <Header activeMenu={HeaderMenuItems.Home} />
      <Footer />
    </main>
  );
}
