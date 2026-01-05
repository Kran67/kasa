import type { Meta, StoryObj } from '@storybook/react';
import CollapseElement from '@/app/components/ui/CollapseElement';

/**
 * Le composant Button permet d'afficher un bouton interactif avec
 * différentes configurations (navigation, fonction onClick, disabled, etc.)
 */
const meta = {
    title: 'Components/CollapseElement',
    component: CollapseElement,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: "text",
            description: ""
        },
        content: {
            control: "object",
            description: ""
        }
    },
} satisfies Meta<typeof CollapseElement>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * CollapseElement
 */
export const collapseElement: Story = {
    args: {
        title: 'CollapseElement',
        content: ["Élément 1", "Élément 2", "Élément 3"]
    },
};

/**
 * CollapseElement ouvert
 */
export const OpenedCollapseElement: Story = {
    args: {
        title: 'CollapseElement ouvert',
        content: ["Élément 1", "Élément 2", "Élément 3"],
        opened: true
    },
};