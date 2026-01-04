import type { Meta, StoryObj } from '@storybook/react';
import Input from '@/app/components/ui/Input';
import { InputTypes } from '@/app/enums/enums';

/**
 * Le composant Input permet d'afficher un champ de saisie avec
 * différentes configurations (label, type, placeHolder, etc.)
 */
const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'text',
            description: 'Nom du champ de saisie'
        },
        label: {
            control: 'text',
            description: 'Label à afficher au dessus du champ de saisie'
        },
        type: {
            control: 'select',
            options: Object.values(InputTypes),
            description: 'Type de champ de saisie'
        },
        value: {
            control: 'text',
            description: 'Valeur à afficher dans le champ de saisie'
        },
        placeHolder: {
            control: 'text',
            description: 'Aide à afficher dans le champ de saisie'
        },
        required: {
            control: 'boolean',
            description: 'Indique si le champ de saisie est obligatoire ou non'
        },
        width: {
            control: 'number',
            description: 'Longueur du champ de saisie'
        },
        onChange: {
            control: 'text',
            description: 'Évenement lors du changement dans le champ de saisie'
        },
        hasError: {
            control: 'boolean',
            description: 'Indique si le champ de saisie a une erreur'
        },
        autoComplete: {
            control: 'text',
            description: "Indique si le champ de saisie doit avoir l'auto complétion"
        },
        maxLength: {
            control: 'number',
            description: 'Nombre de caractères maximum dans le champ de saisie'
        },
        className: {
            control: 'text',
            description: 'Classes CSS personnalisées limitées au contour'
        },
        showLabel: {
            control: 'boolean',
            description: 'Indique si le le label du champ de saisie est visible ou non'
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
const cssClass: string = "bg-(--light-grey) py-5 px-5";

/**
 * Input Simple
 */
export const Simple: Story = {
    args: {
        name: 'inupt',
        label: 'Input Simple',
        className: cssClass
    },
};

/**
 * Input WithoutLabel
 */
export const WithoutLabel: Story = {
    args: {
        name: 'inupt',
        label: 'label',
        showLabel: false,
        className: cssClass
    },
};

/**
 * Input PasswordType
 */
export const PasswordType: Story = {
    args: {
        name: 'inupt',
        label: 'Password',
        type: InputTypes.Password,
        className: cssClass,
        value: 'password'
    },
};

/**
 * Input DateType
 */
export const DateType: Story = {
    args: {
        name: 'inupt',
        label: 'Date',
        type: InputTypes.Date,
        className: cssClass
    },
};

/**
 * Input WithPlaceholder
 */
export const WithPlaceholder: Story = {
    args: {
        name: 'inupt',
        label: 'Avec placeholder',
        className: cssClass,
        placeHolder: "Veuillez saisir votre nom"
    },
};

/**
 * Input WithError
 */
export const WithError: Story = {
    args: {
        name: 'inupt',
        label: 'Avec une erreur',
        className: cssClass,
        hasError: true
    },
};

/**
 * Input Required
 */
export const Required: Story = {
    args: {
        name: 'inupt',
        label: 'Requis',
        className: cssClass,
        required: true
    },
};