'use client'

import { Property } from "@/app/interfaces/property";
import PropertyCard from "@/app/components/data/PropertyCard";
import { favoritesService } from "@/app/services/favoritesService";
import { propertiesService } from "@/app/services/propertiesService";

/**
 * Ajout les métadata à la page
 * 
 * @function generateMetadata
 * @param { Property[] } properties - Une liste de proriétés
 * @returns { Promise<Metadata> } Les méta data à ajouter 
 * 
*/
export function generateMetadata(properties: Property[]): any {
    const metaData = properties?.map((property: Property) => {
        return {
            '@type': `http://kasa.com/Property/${property.id}`,
            title: property.title,
            description: property.description,
            openGraph: {
                '@type': property.cover,
                images: [property.cover],
            },
        }
    });
    return metaData;
}

/**
 * Interface pour les propriétés d'initialisation de la Gallery
 * 
 * @interface GalleryProps
 */
interface GalleryProps {
    onlyFav?: boolean;
}

/**
 * Affiche la Gallery d'image
 * 
 * @async
 * @function Gallery
 * @param { onlyFav } GalleryProps - Les proriétés de la gallery
 * @param {boolean?} CarouselProps.onlyFav - Indique si on affiche uniqument les favoris
 */
export default function Gallery({ onlyFav }: GalleryProps) {
    let properties: Property[] | any;
    //let properties: Property[] | any = [];
    if (onlyFav) {
        // on va chercher les favoris lié à l'utilisateur courant dans la session courante
        const { favorites } = favoritesService();
        properties = favorites;
    } else {
        // on va chercher les propriétés
        properties = propertiesService().properties;
    }
    // si aucune propriété n'a pas été trouvée, on donne un tableau vide
    if (properties?.error) {
        properties = []
    }

    return (
        <section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateMetadata(properties ?? [])).replace(/</g, '\\u003c'),
                }}
            />
            <div className="flex flex-wrap gap-24 w-full md:w-1113 px-16 md:p-0">
                {properties?.map((property: Property, index: number) => (
                    <PropertyCard key={index} property={property} />
                ))}
            </div>
        </section>
    )
}
