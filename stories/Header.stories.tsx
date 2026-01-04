import type { Meta, StoryObj } from '@storybook/react';
import HeaderForStorybook from "@/app/components/layout/HeaderForStorybook";
import { HeaderMenuItems } from '@/app/enums/enums';

/**
 * Le composant Header permet d'afficher une entête de page
 */
const meta = {
    title: 'Components/HeaderForStorybook',
    component: HeaderForStorybook,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        activeMenu: {
            control: "select",
            options: Object.values(HeaderMenuItems),
            description: "Le menu actif"
        }
    },
    tags: ['autodocs'],
} satisfies Meta<typeof HeaderForStorybook>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Header
 */
export const header: Story = {
    args: {
        activeMenu: HeaderMenuItems.Home
    },
};

/**
 * Mobile header
 */
export const mobileHeader: Story = {
    args: {
        activeMenu: HeaderMenuItems.Home,
        isMobileView: true
    },
};

/**
 * Mobile header with opened menu
 */
export const mobileHeaderMenuOpened: Story = {
    args: {
        activeMenu: HeaderMenuItems.Home,
        isMobileView: true,
        menuVisible: true
    },
    decorators: [
        (Story) => (
            <div style={{ height: '800px' }}>
                <Story />
            </div>
        ),
    ],
};
