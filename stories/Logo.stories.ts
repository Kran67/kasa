import type { Meta, StoryObj } from '@storybook/react';
import Logo from "@/app/components/ui/Logo";
import { LogoSizes } from '@/app/enums/enums';

/**
 * Le composant Logo permet d'afficher un logo avec
 * différentes configurations (, etc.)
 */
const meta = {
    title: 'Components/Logo',
    component: Logo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: "select",
            options: Object.values(LogoSizes),
            description: "Taille du logo"
        },
        className: {
            control: "text",
            description: "Classes CSS personnalisées"
        },
    },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;
const cssClass: string = "";

/**
 * Simple
 */
export const Simple: Story = {
    args: {
        className: cssClass
    },
};

/**
 * Petite taille
 */
export const Little: Story = {
    args: {
        size: LogoSizes.Small,
        className: cssClass
    },
};
