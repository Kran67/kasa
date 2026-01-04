import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/app/components/ui/Button';
import { ButtonTypes } from '@/app/enums/enums';

/**
 * Le composant Button permet d'afficher un bouton interactif avec
 * différentes configurations (navigation, fonction onClick, disabled, etc.)
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Texte à afficher dans le bouton',
    },
    disabled: {
      control: 'boolean',
      description: 'Désactive le bouton',
    },
    className: {
      control: 'text',
      description: 'Classes CSS personnalisées',
    },
    url: {
      control: 'text',
      description: 'URL de redirection au clic',
    },
    clickFunc: {
      control: 'text',
      description: 'Fonction à exécuter au clique (sous forme de string)',
    },
    buttonType: {
      control: 'select',
      options: Object.values(ButtonTypes),
      description: 'Type de bouton (button ou submit)',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Bouton Simple
 */
export const Simple: Story = {
  args: {
    text: 'Bouton Simple',
    className: 'text-sm text-(--white) bg-(--main-red) rounded-[10px] py-8 px-32',
    buttonType: ButtonTypes.Button,
  },
};

/**
 * Bouton désactivé
 */
export const Disabled: Story = {
  args: {
    text: 'Bouton désactivé',
    disabled: true,
    className: 'text-sm text-(--white) bg-(--main-red) rounded-[10px] py-8 px-32',
  },
};

/**
 * Bouton submit
 */
export const Submit: Story = {
  args: {
    text: 'Bouton de soumission',
    className: 'text-sm text-(--white) bg-(--main-red) rounded-[10px] py-8 px-32',
    buttonType: ButtonTypes.Submit,
  },
};

/**
 * Bouton avec navigation
 */
export const WithNavigation: Story = {
  args: {
    text: 'Aller à la page suivante',
    url: '/next-page',
    className: 'text-sm text-(--white) bg-(--main-red) rounded-[10px] py-8 px-32',
    buttonType: ButtonTypes.Button,
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
    clickFunc: 'alert("Bouton cliqué!")',
    className: 'text-sm text-(--white) bg-(--main-red) rounded-[10px] py-8 px-32',
    buttonType: ButtonTypes.Button,
  },
  parameters: {
    docs: {
      description: {
        story: 'Bouton qui exécute une fonction JavaScript au clic',
      },
    },
  },
};