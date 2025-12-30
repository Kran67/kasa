'use client'

import { MouseEvent, useState } from "react";

interface CheckboxProps {
    id: string;
    text?: string;
    disabled?: boolean;
    className?: string;
    url?: string
    checked?: boolean;
    required?: boolean;
}

export default function Checkbox({ id, text, disabled, className, checked = false, required = false }: CheckboxProps) {
    const [isChecked, setIsChecked] = useState(checked);

    const handleClick = (e: any) => {
        const checkbox = (e.target as HTMLElement).querySelector("input") as HTMLInputElement;
        console.log(checkbox.checked);
        setIsChecked(!checkbox.checked);
    }

    return (
        <div className="flex checkbox-container" onClick={(e) => handleClick(e)}>
            <input id={id} type="checkbox" className="mr-5" required={required} disabled={disabled} checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
            <span className="checkmark rounded-[2px] pointer-events-none"></span>
            <label htmlFor={id} className={"cursor-pointer  pointer-events-none " + className}>{text}</label>
        </div>
    );
}