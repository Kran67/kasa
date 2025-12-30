import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { HeaderMenuItems } from "@/app/enums/enums";
import Button from "@/app/components/ui/Button";

export default function NotFound() {
    return (
        <main className="flex flex-col gap-40 w-full items-center pt-40 px-140 h-screen justify-between">
            <Header activeMenu={HeaderMenuItems.None} />
            <div className="flex flex-col gap-40 w-342">
                <div className="flex flex-col items-center">
                    <span className="text-[100px] text-(--main-red) font-black">404</span>
                    <span className="text-sm text-(--black) text-center">Il semble que la page que vous cherchez ait pris des vacances… ou n’ait jamais existé.</span>
                </div>
                <div className="flex flex-col gap-14 items-center">
                    <Button text="Accueil" className="flex justify-center bg-(--main-red) rounded-[10] p-8 px-32 text-(--white) w-200" />
                    <Button text="Logements" className="flex justify-center bg-(--main-red) rounded-[10] p-8 px-32 text-(--white) w-200" />
                </div>
            </div>
            <Footer />
        </main>
    )
}