'use client'

import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface LinkProps {
    text: string;
    url?: string;
    className?: string;
    disabled?: boolean;
    onClick?(): void;
}

export default function Link({ text, url = "#", disabled = false, onClick, className }: LinkProps) {
    const router: AppRouterInstance = useRouter();

    const handleClick: () => void = () => {
        onClick?.();
        if (url) router.push(url);
    };

    return (
        <a href={url}
            className={className}
            onClick={handleClick}>
            {text}
        </a>
    );
}