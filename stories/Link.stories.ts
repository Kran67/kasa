import type { Meta, StoryObj } from '@storybook/react';
import Link from "@/app/components/ui/Link";

/**
 * Le composant Link permet d'afficher un lien hypertexte avec
 * différentes configurations (, etc.)
 */
const meta = {
    title: 'Components/Link',
    component: Link,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        text: {
            control: "text",
            description: "Texte du lien"
        },
        url: {
            control: "text",
            description: "URL de redirection au clic"
        },
        className: {
            control: "text",
            description: "Classes CSS personnalisées"
        },
        onClick: {
            control: "text",
            description: "Fonction à exécuter au clique"
        },

    },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;
const cssClass: string = "text-2xl hover:text-(--main-red) hover:font-bold";

/**
 * Link Simple
 */
export const Simple: Story = {
    args: {
        text: 'Accueil',
        className: cssClass
    },
};


/**
 * Link Active
 */
export const Active: Story = {
    args: {
        text: 'Accueil',
        isActive: true,
        className: cssClass
    },
};
