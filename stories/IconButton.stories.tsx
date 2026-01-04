import type { Meta, StoryObj } from '@storybook/react';
import IconButton, { IconButtonProps } from '@/app/components/ui/IconButton';
import { IconButtonImages } from '@/app/enums/enums';
import React from 'react';
/**
 * Le composant IconButton permet d'afficher un bouton interactif avec
 * différentes configurations (navigation, fonction onClick, disabled, etc.)
 */
const meta = {
    title: 'Components/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: 'select',
            options: Object.values(IconButtonImages),
            description: 'Icone à afficher dans le bouton',
        },
        className: {
            control: 'text',
            description: 'Classes CSS personnalisées',
        },
        onClick: {
            control: 'text',
            description: 'Fonction à exécuter au clic (sous forme de string)',
        },
        url: {
            control: 'text',
            description: 'URL de redirection au clic',
        },
        imgWidth: {
            constol: 'number',
            description: "Largeur de l'icône",
            defaultValue: 11
        },
        imgHeight: {
            constol: 'number',
            description: "Hauteur de l'icône",
            defaultValue: 9
        },
        text: {
            control: 'text',
            description: 'Text à afficher dans le bouton',
        },
        svgFill: {
            control: 'color',
            description: 'Couleur de remplissage de la forme svg',
        },
        svgBgFill: {
            control: 'color',
            description: "Couleur de remplissage de la forme d'arrière plan svg",
        },
        svgStroke: {
            control: 'color',
            description: 'Couleur du trait de la forme svg',
        },
        title: {
            control: 'text',
            description: "Text de la bulle d'information",
        },
        disabled: {
            control: 'boolean',
            description: 'Désactive le bouton',
        },
    },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;
const cssClass: string = 'text-sm text-(--dark-grey) bg-(--light-grey) py-8 px-16 rounded-[10px] flex items-center justify-center';

/**
 * Bouton Simple icône par défaut
 */
export const SimpleWidthDefaultIcon: Story = {
    args: {
        text: 'Bouton Simple',
        className: cssClass,
    },
};

/**
 * Bouton avec une icône de taille différente et couleur personnalisées
 */
export const SimpleWidthIconSize: Story = {
    args: {
        text: 'Bouton icône grande taille et couleur personnalisées',
        icon: IconButtonImages.Heart,
        imgWidth: 40,
        imgHeight: 40,
        svgBgFill: 'red',
        className: `${cssClass} w-300 whitespace-break-spaces!`,
    },
};

/**
 * Bouton sans texte
 */
export const SimpleWithoutText: Story = {
    args: {
        className: `${cssClass} py-16 border border-solid border-(--dark-grey)`,
    },
};

/**
 * Bouton désactivé
 */
export const Disabled: Story = {
    args: {
        text: 'Bouton désactivé',
        disabled: true,
        className: cssClass,
    },
};

/**
 * Bouton avec navigation
 */
export const WithNavigation: Story = {
    args: {
        text: 'Aller à la page suivante',
        url: '/next-page',
        className: cssClass,
    },
    parameters: {
        docs: {
            description: {
                story: 'Bouton qui redirige vers une URL spécifique au clic',
            },
        },
    },
};

/**
 * Bouton avec fonction onClick personnalisée
 */
export const WithClickFunction: Story = {
    args: {
        text: 'Afficher une alerte',
        onClick: () => { alert("Bouton cliqué!") },
        className: cssClass,
    },
    parameters: {
        docs: {
            description: {
                story: 'Bouton qui exécute une fonction JavaScript au clic',
            },
        },
    },
};

/**
 * Bouton avec une bulle d'information
 */
export const ButtonWithTitle: Story = {
    args: {
        text: "Affiche d'une bulle d'information",
        title: "Des informations",
        className: cssClass,
    },
};

/**
 * toutes les icônes
 */
export const AllIcons: Story = {
    render: () =>
        <div className='flex gap-5'>
            <IconButton icon={IconButtonImages.Cross} className='w-32 h-32 bg-(--light-grey) rounded-[5px] flex items-center justify-center' />
            <IconButton icon={IconButtonImages.Heart} className='w-32 h-32 bg-(--light-grey) rounded-[5px] flex items-center justify-center' />
            <IconButton icon={IconButtonImages.LeftArrow} className='w-32 h-32 bg-(--light-grey) rounded-[5px] flex items-center justify-center' />
            <IconButton icon={IconButtonImages.Location} className='w-32 h-32 bg-(--light-grey) rounded-[5px] flex items-center justify-center' />
            <IconButton icon={IconButtonImages.Logout} className='w-32 h-32 bg-(--light-grey) rounded-[5px] flex items-center justify-center' svgFill='transparent' />
            <IconButton icon={IconButtonImages.Menu} className='w-32 h-32 bg-(--light-grey) rounded-[5px] flex items-center justify-center' />
            <IconButton icon={IconButtonImages.Message} className='w-32 h-32 bg-(--light-grey) rounded-[5px] flex items-center justify-center' />
            <IconButton icon={IconButtonImages.Plus} className='w-32 h-32 bg-(--light-grey) rounded-[5px] flex items-center justify-center' />
            <IconButton icon={IconButtonImages.Star} className='w-32 h-32 bg-(--light-grey) rounded-[5px] flex items-center justify-center' />
            <IconButton icon={IconButtonImages.TopArrow} className='w-32 h-32 bg-(--light-grey) rounded-[5px] flex items-center justify-center' />
            <IconButton icon={IconButtonImages.Trash} className='w-32 h-32 bg-(--light-grey) rounded-[5px] flex items-center justify-center' />
        </div>
};
