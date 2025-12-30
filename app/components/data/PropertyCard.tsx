'use client'

import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { IconButtonImages } from "@/app/enums/enums";
import IconButton from "../ui/IconButton";
import Image from "next/image";
import Property from "@/app/assets/images/porperty.png";

interface PropsPC {
    props: any; //Property;
}

export default function PropertyCard({ props }: PropsPC) {
    const router: AppRouterInstance = useRouter();

    const handleClick: (propertyId: string) => void = (propertyId: string) => {
        router.push(`/property/${propertyId}`);
    };

    return (
        <div className="flex flex-col rounded-[10px] bg-(--white) w-355 relative">
            <IconButton
                icon={IconButtonImages.Heart}
                imgWidth={16}
                imgHeight={16}
                className="w-32 h-32 absolute right-16 top-16 bg-(--light-grey)"
                svgFill="#565656" />
            <div className="relative h-376 overflow-hidden rounded-t-[10]">
                <Image src={Property} alt="Image de la propriété" className="absolute -left-104 max-w-564 h-376" />
            </div>
            <div className="flex flex-col justify-between pt-16 px-24 pb-24 h-176">
                <div className="flex flex-col gap-8">
                    <span className="text-lg text-(--black)">Appartement cosy</span>
                    <span className="text-sm text-(--dark-grey) font-normal">Ile de France - Paris 17e</span>
                </div>
                <div className="flex gap-6 items-center">
                    <span className="text-lg text-(--black) font-medium">100€</span>
                    <span className="text-sm text-(--dark-grey) font-normal">par nuit</span>
                </div>
            </div>
        </div>
    );
}