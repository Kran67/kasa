'use client'

import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import IconButton from "@/app/components/ui/IconButton";
import { IconButtonImages } from "@/app/enums/enums";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import { redirect, RedirectType } from 'next/navigation'
import CollapseElement from "@/app/components/ui/CollapseElement";
import { useEffect, useState } from "react";
import { lodgingService } from "@/app/services/lodgingService";
import Carousel from "@/app/components/data/Carousel";
import { createPortal } from "react-dom";
import { prepareBodyToShowModal } from "@/app/lib/utils";

/**
 * Interface pour les propriétés d'initialisation d'une propriété
 * 
 * @interface PropertyProps
 */
interface PropertyProps {
    slug: string;
}

/**
 * Affiche les détails d'une propriété
 * 
 * @async
 * @function Property
 * @param { string } slug - Identifiant de la propriété
 */
export default function Property({ slug }: PropertyProps) {
    // on va chercher la propriété
    const { lodging, error } = lodgingService(slug);
    // si le propriété n'a pas été trouvée, on redirige vers la page 404
    if (lodging?.error || error) {
        redirect("/404", RedirectType.push);
    }

    const [viewCarousel, setViewCarousel] = useState(false);
    const [carouselImageIndex, setCarouselImageIndex] = useState(0);

    const viewCarouselAndActiveImage = (viewCarousel: boolean, index: number) => {
        setViewCarousel(viewCarousel);
        setCarouselImageIndex(index);
    }

    useEffect(() => {
        prepareBodyToShowModal(viewCarousel ? "hidden" : "");
    }, [viewCarousel]);

    return (
        <main className="flex flex-col gap-10 md:gap-85 w-full items-center md:pt-40 md:px-140 relative">
            {viewCarousel &&
                createPortal(
                    <Carousel images={lodging?.pictures} imageIndex={carouselImageIndex} closeCarousel={() => setViewCarousel(false)} onIndexChange={setCarouselImageIndex} />,
                    document.body
                )}
            <Header />
            <div className="flex flex-col w-full gap-10 md:gap-24 md:w-970 px-16 pb-80 md:px-0 md:pb-0">
                <div className="md:flex md:flex-row md:gap-10 w-full md:py-16 md:px-7 border-b-0 md:border-b-1 border-solid border-b-(--light-grey)">
                    <IconButton
                        icon={IconButtonImages.LeftArrow}
                        imgWidth={8}
                        imgHeight={6}
                        text="Retour aux annonces"
                        url="/"
                        className="text-sm text-(--dark-grey) gap-5 bg-(--light-grey) rounded-[10] py-8 px-16 w-189" />
                </div>
                <div className="flex flex-col md:flex-row gap-10 w-full md:flex-wrap">
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="rounded-[10] w-358 md:w-303 h-357 overflow-hidden">
                            {lodging?.pictures[0] && <Image
                                data-testid="property-image-1"
                                src={lodging?.pictures[0]}
                                alt="Image de la propriété n°1"
                                className="h-357 w-635 md:w-535 max-w-1240 cursor-pointer"
                                width={1240}
                                height={827}
                                onClick={() => viewCarouselAndActiveImage(true, 0)} />}
                        </div>
                        <div className="flex h-109 md:flex-col gap-10">
                            <div className="flex flex-1 gap-10">
                                <div className="rounded-[10] w-83 md:w-146 h-109 md:h-174 overflow-hidden relative">
                                    {lodging?.pictures[1] && <Image
                                        data-testid="property-image-2"
                                        src={lodging?.pictures[1]}
                                        alt="Image de la propriété n°2"
                                        className="cursor-pointer"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        onClick={() => viewCarouselAndActiveImage(true, 1)} />}
                                </div>
                                <div className="rounded-[10] w-83 md:w-146 md:h-174 overflow-hidden relative">
                                    {lodging?.pictures[2] && <Image
                                        data-testid="property-image-3"
                                        src={lodging?.pictures[2]}
                                        alt="Image de la propriété n°3"
                                        className="cursor-pointer"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        onClick={() => viewCarouselAndActiveImage(true, 2)} />}
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="rounded-[10] w-83 md:w-146 md:h-174 overflow-hidden relative">
                                    {lodging?.pictures[3] && <Image
                                        data-testid="property-image-4"
                                        src={lodging?.pictures[3]}
                                        alt="Image de la propriété n°4"
                                        className="cursor-pointer"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        onClick={() => viewCarouselAndActiveImage(true, 3)} />}
                                </div>
                                <div className="rounded-[10] w-83 md:w-146 md:h-174 overflow-hidden relative">
                                    {lodging?.pictures[4] && <Image
                                        data-testid="property-image-5"
                                        src={lodging?.pictures[4]}
                                        alt="Image de la propriété n°5"
                                        className="cursor-pointer"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        onClick={() => viewCarouselAndActiveImage(true, 4)} />}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-345 gap-8 md:h-281 border border-solid border-(--light-grey) rounded-[10] p-24 bg-(--white) order-1 md:order-0">
                        <span className="text-base text-black">Votre hôte</span>
                        <div className="flex gap-18 pt-16 pb-16 items-center">
                            <div className="rounded-[10] w-81 h-82 overflow-hidden relative">
                                {lodging?.host.picture && <Image src={lodging?.host.picture} alt="Image de l'hôte" fill style={{ objectFit: "cover" }} />}
                            </div>
                            <span className="text-base text-black font-normal">{lodging?.host.name}</span>
                            <IconButton
                                icon={IconButtonImages.Star}
                                imgWidth={16}
                                imgHeight={17}
                                text={lodging?.rating_avg.toFixed()}
                                className="gap-4 rounded-[10] p-8 bg-(--light-grey) text-base text-black font-normal cursor-default!" />
                        </div>
                        <Button clickFunc="alert('Lancer un appel téléphonique')" text="Contacter l’hôte" className="text-sm text-(--white) bg-(--main-red) rounded-[10] py-8 px-32" />
                        <Button url="/messenging" text="Envoyer un message" className="text-sm text-(--white) bg-(--main-red) rounded-[10] py-8 px-32" />
                    </div>
                    <div className="flex flex-col gap-40 md:w-616 bg-(--white) rounded-[10] border boder-solid border-(--light-grey) p-24 order-0 md:order-1">
                        <div className="flex flex-col gap-32">
                            <div className="flex flex-col gap-16">
                                <span className="text-2xl text-black">{lodging?.title}</span>
                                <IconButton
                                    icon={IconButtonImages.Location}
                                    imgWidth={10}
                                    imgHeight={12}
                                    text={lodging?.location}
                                    className="gap-14 text-sm text-(--dark-grey) font-normal cursor-default!" />
                            </div>
                            <span className="text-sm text-black font-normal">{lodging?.description}</span>
                        </div>
                        <CollapseElement title="Équipements" content={lodging?.equipments} />
                        <CollapseElement title="Catégorie" content={lodging?.tags} />
                    </div>
                </div>
            </div>
            <Footer />
        </main >
    );
}
