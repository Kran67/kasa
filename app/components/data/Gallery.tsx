import { getProperties } from "@/app/api/api";
import { Property } from "@/app/interfaces/property";
import { Metadata } from "next";
import PropertyCard from "./PropertyCard";

export async function generateMetadata(): Promise<Metadata> {
    // on va chercher les propriétés
    let properties: Property[] | any = await getProperties();

    const metaData = properties.map((property: Property) => {
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

export default async function Gallery() {
    // on va chercher les propriétés
    let properties: Property[] | any = await getProperties();
    // si aucune propriété n'a pas été trouvée, on donne un tableau vide
    if (properties.error) {
        properties = []
    }

    return (
        <section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(await generateMetadata()).replace(/</g, '\\u003c'),
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
