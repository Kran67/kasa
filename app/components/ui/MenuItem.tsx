'use client'

import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface MenuItemProps {
    text: string;
    isActive?: boolean;
    url: string;
    className?: string;
}

export default function MenuItem({ text, isActive = false, url, className }: MenuItemProps) {
    const router: AppRouterInstance = useRouter();

    const handleClick: () => void = () => {
        router.push(url);
    };

    return (
        <button className={(isActive ? "text-(--main-red) font-bold " : "") + className} onClick={handleClick} role="button">{text}</button>
    );
}