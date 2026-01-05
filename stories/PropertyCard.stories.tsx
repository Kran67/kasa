import type { Meta, StoryObj } from '@storybook/react';
import PropertyCard from "@/app/components/data/PropertyCard";
import { FavoritesProvider } from "@/app/contexts/FavoritesProvider";

/**
 * Le composant Footer permet d'afficher un pied de page
 */
const meta = {
    title: 'Components/PropertyCard',
    component: PropertyCard,
    decorators: [
        (Story) => (
            <FavoritesProvider>
                <Story />
            </FavoritesProvider>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PropertyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * PropertyCard
 */
export const propertyCard: Story = {
    args: {
        property: {
            id: "0979876d",
            slug: "appartement-de-standing-10e",
            title: "Appartement de Standing - 10e",
            description: "Ce loft entièrement rénové, et équipé de meubles de luxe saura vous séduire. Idéalement situé dans le 10ème arrondissement, vous déplacer dans Paris sera un véritable jeu d'enfant.",
            cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg",
            location: "Ile de France - Paris 10e",
            price_per_night: 133,
            rating_avg: 5,
            ratings_count: 0,
            host: {
                id: 0,
                name: "",
                picture: ""
            },
            pictures: [],
            equipments: [],
            tags: []
        }
    }
};
