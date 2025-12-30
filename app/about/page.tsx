import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { HeaderMenuItems } from "../enums/enums";
import Image from "next/image";
import AboutImg1 from "@/app/assets/images/about_first.png";
import AboutImg2 from "@/app/assets/images/about_last.png";

export default function AboutPage() {
    return (
        <main className="flex flex-col gap-40 w-full items-center md:pt-40 md:px-140">
            <Header activeMenu={HeaderMenuItems.About} />
            <div className="flex flex-col gap-51 md:gap-40 w-full md:w-1115 items-center px-16 md:pb-80 ">
                <div className="flex flex-col gap-8 text-center w-full md:w-742">
                    <span className="text-[32px] font-bold text-(--main-red)">À propos</span>
                    <span className="text-sm text-(--black)">
                        Chez Kasa, nous croyons que chaque voyage mérite un lieu unique où se sentir bien.<br /><br />
                        Depuis notre création, nous mettons en relation des voyageurs en quête d’authenticité avec des hôtes passionnés qui aiment partager leur région et leurs bonnes adresses.
                    </span>
                </div>
                <div className="w-full h-458 overflow-hidden rounded-[20px] relative">
                    <Image src={AboutImg1} className="absolute md:-top-95 md:left-0" alt="Image à propos" fill style={{ objectFit: "cover" }} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-16 w-full md:w-1115 px-16 md:px-0 pb-80 md:pb-0">
                <div className="flex flex-col md:flex-row gap-16 justify-center">
                    <div className="flex flex-col gap-16 justify-center">
                        <span className="text-lg font-bold text-(--main-red)">Notre mission est simple :</span>
                        <ol className="list-decimal leading-[40px] text-sm ml-18">
                            <li className="">Offrir une plateforme fiable et simple d’utilisation</li>
                            <li className="">Proposer des hébergements variés et de qualité</li>
                            <li className="">Favoriser des échanges humains et chaleureux entre hôtes et voyageurs</li>
                        </ol>
                        <span className="text-lg font-bold text-(--main-red) hidden md:inline">Que vous cherchiez un appartement cosy en centre-ville, une maison en bord de mer ou un chalet à la montagne, Kasa vous accompagne pour que chaque séjour devienne un souvenir inoubliable.</span>
                    </div>
                    <div className="md:min-w-494 min-h-458 overflow-hidden rounded-[20px] relative">
                        <Image src={AboutImg2} className="absolute" alt="Image à propos mission" fill style={{ objectFit: "cover" }} />
                    </div>
                    <span className="text-lg font-bold text-(--main-red) md:hidden">Que vous cherchiez un appartement cosy en centre-ville, une maison en bord de mer ou un chalet à la montagne, Kasa vous accompagne pour que chaque séjour devienne un souvenir inoubliable.</span>
                </div>
            </div>
            <Footer />
        </main>
    );
}
