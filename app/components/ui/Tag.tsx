'use client'

interface TagProps {
    text: string;
    className?: string;
}

export default function Tag({ text, className }: TagProps) {
    return (
        <span className={className}>{text}</span>
    );
}