// À cause de l'événement onClick
'use client'

import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { IconButtonImages } from "@/app/enums/enums";
import IconButton from "@/app/components/ui/IconButton";
import { Property } from "@/app/interfaces/property";
import { favoritesService } from "@/app/services/favoritesService";

/**
 * Interface pour des paramétres pour l'affichage des détails d'une proriété
 * 
 * @interface PropsPC
 */
interface PropsPC {
    property: Property;
}

/**
 * Affiche la carte d'une propriété
 * 
 * @function PropertyCard
 * @param {property} PropsPC
 * @param {Property} PropsPC.property - Les données de la proriété
 */
export default function PropertyCard({ property }: PropsPC) {
    const router: AppRouterInstance = useRouter();
    const { toggleFavorite, isFavorite } = favoritesService();

    // au clique sur les détails, redirection vers la page de la propriété
    const handleClick: () => void = () => {
        router.push(`/property/${property.id}`);
    };

    // détermine si la propriété fait partie des favoris
    const favorite = isFavorite(property.id);

    return (
        <div className="flex flex-col rounded-[10px] bg-(--white) w-full md:w-355 relative">
            <IconButton
                icon={IconButtonImages.Heart}
                imgWidth={16}
                imgHeight={16}
                className={"w-32 h-32 absolute right-16 top-16 " + (favorite ? "bg-(--main-red)" : "bg-(--light-grey)") + " z-1 rounded-[5px] flex items-center justify-center"}
                svgFill={favorite ? "#FFF" : "#FFF"}
                svgBgFill={favorite ? "#E0C2BA" : "#565656"}
                svgStroke="#FFF"
                onClick={() => toggleFavorite(property)}
                title={favorite ? "Enlever des favoris" : "Ajouter aux favoris"}
            />
            <div className="relative h-376 overflow-hidden rounded-t-[10px]">
                <img src={property.cover} alt="Image de la propriété" className="absolute -left-104 max-w-564 h-376" width={1240} height={827} />
            </div>
            <div className="flex flex-col justify-between pt-16 px-24 pb-24 h-176 cursor-pointer" onClick={() => handleClick()}>
                <div className="flex flex-col gap-8">
                    <span className="text-lg text-(--black)">{property.title}</span>
                    <span className="text-sm text-(--dark-grey) font-normal">{property.location}</span>
                </div>
                <div className="flex gap-6 items-center">
                    <span className="text-lg text-(--black) font-medium">{property.price_per_night}€</span>
                    <span className="text-sm text-(--dark-grey) font-normal">par nuit</span>
                </div>
            </div>
        </div>
    );
}