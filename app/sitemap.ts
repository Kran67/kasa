import { getProperties } from '@/app/api/api';
import { Lodging } from '@/app/interfaces/lodging';

export default async function sitemap(): Promise<{
    url: string;
    lastModified: Date;
    changeFrequency: string;
    priority: number;
}[]> {
    const properties: Lodging[] = await getProperties();
    const lodgings: {
        url: string;
        lastModified: Date;
        changeFrequency: string;
        priority: number;
    }[] = properties.map((lodging) => (
        {
            url: `https://kasa.com/property/${lodging.id}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        }
    ));

    return [
        {
            url: 'https://kasa.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://kasa.com/about',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://kasa.com/favorites',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://kasa.com/messenging',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        ...lodgings
    ]
}