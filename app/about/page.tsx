import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { HeaderMenuItems } from "../enums/enums";
import Image from "next/image";
import AboutImg1 from "@/app/assets/images/about_first.png";
import AboutImg2 from "@/app/assets/images/about_last.png";

export default function AboutPage() {
    return (
        <main className="flex flex-col gap-40 w-full items-center pt-40 px-140">
            <Header activeMenu={HeaderMenuItems.About} />
            <div className="flex flex-col gap-40 w-1115 items-center">
                <div className="flex flex-col gap-8 text-center w-742">
                    <span className="text-[32px] font-bold text-(--main-red)">À propos</span>
                    <span className="text-sm text-(--black)">
                        Chez Kasa, nous croyons que chaque voyage mérite un lieu unique où se sentir bien.<br /><br />
                        Depuis notre création, nous mettons en relation des voyageurs en quête d’authenticité avec des hôtes passionnés qui aiment partager leur région et leurs bonnes adresses.
                    </span>
                </div>
                <div className="w-full h-458 overflow-hidden rounded-[20px] relative">
                    <Image src={AboutImg1} className="absolute -top-95" alt="Image à propos" width={1152} height={648} />
                </div>
            </div>
            <div className="flex gap-16 w-1115">
                <div className="flex flex-col gap-16 justify-center">
                    <span className="text-lg font-bold text-(--main-red)">Notre mission est simple :</span>
                    <ol className="list-decimal leading-[40px] text-sm ml-18">
                        <li className="">Offrir une plateforme fiable et simple d’utilisation</li>
                        <li className="">Proposer des hébergements variés et de qualité</li>
                        <li className="">Favoriser des échanges humains et chaleureux entre hôtes et voyageurs</li>
                    </ol>
                    <span className="text-lg font-bold text-(--main-red)">Que vous cherchiez un appartement cosy en centre-ville, une maison en bord de mer ou un chalet à la montagne, Kasa vous accompagne pour que chaque séjour devienne un souvenir inoubliable.</span>
                </div>
                <div className="min-w-494 min-h-458 overflow-hidden rounded-[20px]">
                    <Image src={AboutImg2} className="" alt="Image à propos mission" />
                </div>

            </div>
            <Footer />
        </main>
    );
}
