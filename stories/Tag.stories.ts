import type { Meta, StoryObj } from '@storybook/react';
import Tag from "@/app/components/ui/Tag";

/**
 * Le composant Tag permet d'afficher un flag avec
 * différentes configurations (text, className)
 */
const meta = {
    title: 'Components/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        text: {
            control: "text",
            description: "Texte à afficher"
        },
        className: {
            control: "text",
            description: "Classes CSS personnalisées"
        }
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;
const cssClass: string = "flex items-center justify-center text-xs text-(--dark-grey) font-normal bg-(--light-grey) rounded-[5px] py-8 px-8 text-center";

/**
 * Tag Simple
 */
export const Simple: Story = {
    args: {
        text: 'Un tag',
        className: cssClass
    },
};
