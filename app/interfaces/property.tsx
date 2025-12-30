import { PropertyHost } from "./propertyHost";

interface Count {
    tasks: number
}

export interface Property {
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
}

export interface PropertiesResponse {
    success: boolean;
    message: string;
    data: {
        properties: Property[];
    };
}