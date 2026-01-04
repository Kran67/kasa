import type { Meta, StoryObj } from '@storybook/react';
import MenuItem from "@/app/components/ui/MenuItem";

/**
 * Le composant MenuItem permet d'afficher un élement de menu avec
 * différentes configurations (, etc.)
 */
const meta = {
    title: 'Components/MenuItem',
    component: MenuItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        text: {
            control: "text",
            description: "Texte à afficher"
        },
        url: {
            control: "text",
            description: "URL de redirection au clic"
        },
        className: {
            control: "text",
            description: "Classes CSS personnalisées"
        }
    },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;
const cssClass: string = "text-sm cursor-pointer hover:text-(--main-red) hover:font-bold";

/**
 * MenuItem Simple
 */
export const Simple: Story = {
    args: {
        text: "Accueil",
        url: "/",
        className: cssClass
    },
};

/**
 * MenuItem Active
 */
export const Active: Story = {
    args: {
        text: "Accueil",
        url: "/",
        isActive: true,
        className: cssClass
    },
};