import Header from "@/app/components/layout/header";
import { HeaderMenuItems } from "./enums/enums";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center">
      <Header activeMenu={HeaderMenuItems.Home} />
    </main>
  );
}
