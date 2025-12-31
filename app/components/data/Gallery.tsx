'use client'

import { getProperties } from "@/app/api/api";
import { Property } from "@/app/interfaces/property";
import { Metadata } from "next";
import PropertyCard from "./PropertyCard";
import { useFavorites } from "@/app/hooks/useFavorites";
import { useProperties } from "@/app/hooks/useProperties";

//export async function generateMetadata(): Promise<Metadata> {
//    // on va chercher les propriétés
//    let properties: Property[] | any = await getProperties();
//
//    const metaData = properties.map((property: Property) => {
//        return {
//            '@type': `http://kasa.com/Property/${property.id}`,
//            title: property.title,
//            description: property.description,
//            openGraph: {
//                '@type': property.cover,
//                images: [property.cover],
//            },
//        }
//    });
//    return metaData;
//}

interface GalleryProps {
    onlyFav?: boolean;
}

export default function Gallery({ onlyFav }: GalleryProps) {
    let properties: Property[] | any;
    //let properties: Property[] | any = [];
    if (onlyFav) {
        // on va chercher les favoris
        //if (user) {
        //    // ans la base de données
        //    properties = await getUserFavorites();
        //} else {
        // dans le local storage
        const { favorites } = useFavorites();
        properties = favorites;
        //}
    } else {
        // on va chercher les propriétés
        properties = useProperties().properties;
    }
    // si aucune propriété n'a pas été trouvée, on donne un tableau vide
    if (properties?.error) {
        properties = []
    }

    return (
        <section>
            {/* <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(await generateMetadata()).replace(/</g, '\\u003c'),
                }}
            /> */}
            <div className="flex flex-wrap gap-24 w-full md:w-1113 px-16 md:p-0">
                {properties?.map((property: Property, index: number) => (
                    <PropertyCard key={index} property={property} />
                ))}
            </div>
        </section>
    )
}
