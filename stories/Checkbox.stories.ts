import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '@/app/components/ui/Checkbox';

/**
 * Le composant Checkbox permet d'afficher une case à cocher interactif avec
 * différentes configurations (checked, required, disabled, etc.)
 */
const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        id: {
            control: 'text',
            description: 'Identifiant du champ input du composant',
        },
        text: {
            control: 'text',
            description: 'Texte à afficher à côté de la checkbox',
        },
        disabled: {
            control: 'boolean',
            description: 'Désactive la case à ccocher',
        },
        className: {
            control: 'text',
            description: 'Classes CSS personnalisées',
        },
        checked: {
            control: 'boolean',
            description: 'Pré coche la case',
        },
        required: {
            control: 'boolean',
            description: 'Ajoute une étoile pour indique que la case à cocher est obligatoire',
        }
    }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Checkbox Simple
 */
export const Simple: Story = {
    args: {
        text: 'Checkbox Simple',
        className: 'text-xs',
        id: 'checkbox-1',
    },
};

/**
 * Checkbox cochée
 */
export const Checked: Story = {
    args: {
        text: 'Checkbox cochée',
        className: 'text-xs',
        id: 'checkbox-2',
        checked: true
    },
};

/**
 * Checkbox requies
 */
export const Required: Story = {
    args: {
        text: 'Checkbox requise',
        className: 'text-xs',
        id: 'checkbox-2',
        required: true
    },
};
