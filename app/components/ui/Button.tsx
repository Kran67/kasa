'use client'

import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ButtonTypes } from "@/app/enums/enums";

interface ButtonProps {
    text?: string;
    disabled?: boolean;
    className?: string;
    url?: string
    onClick?: (e: any) => void;
    buttonType?: ButtonTypes;
}

export default function Button({ text, disabled, className, url, onClick, buttonType = ButtonTypes.Submit }: ButtonProps) {
    const router: AppRouterInstance = useRouter();

    const handleClick = (e: any) => {
        onClick?.(e);
        if (url) router.push(url);
    };

    return (
        <button
            className={className}
            disabled={disabled}
            type={buttonType}
            onClick={handleClick}
            role="button">
            {text}
        </button>
    );
}