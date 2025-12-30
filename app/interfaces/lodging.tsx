import { PropertyHost } from "./propertyHost";

export interface Lodging {
    id: string;
    slug: string;
    title: string;
    description: string;
    cover: string;
    location: string;
    price_per_night: number;
    rating_avg: number;
    ratings_count: number;
    host: PropertyHost;
    pictures: string[];
    equipments: string[];
    tags: string[];
}