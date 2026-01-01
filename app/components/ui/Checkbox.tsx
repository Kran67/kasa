'use client'

import { useState } from "react";

/**
 * Interface pour les propriétés d'initialisation de la Checkbox
 * 
 * @interface CheckboxProps
 */
interface CheckboxProps {
    id: string;
    text?: string;
    disabled?: boolean;
    className?: string;
    url?: string
    checked?: boolean;
    required?: boolean;
}

/**
 * Affiche d'un case à cocher
 * 
 * @function Checkbox
 * @param { id, text, disabled, className, checked = false, required = false } CheckboxProps - Les proriétés de la Checkbox
 * @param {string} CheckboxProps.id - Identifiant de la checkbox
 * @param {string?} CheckboxProps.text - Texte à afficher
 * @param {boolean?} CheckboxProps.disabled - Statut du bouton actif ou non actif
 * @param {string?} CheckboxProps.className - Classes css du bouton
 * @param {checked?} CheckboxProps.checked - Détermine si la checkbox doit être cochée ou non
 * @param {required?} CheckboxProps.required - Indique si la checkbox est obligatoire ou non
 */
export default function Checkbox({ id, text, disabled, className, checked = false, required = false }: CheckboxProps) {
    const [isChecked, setIsChecked] = useState(checked);

    const handleClick = (e: any) => {
        const checkbox = (e.target as HTMLElement).querySelector("input") as HTMLInputElement;
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