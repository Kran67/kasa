'use client'

import { useState, useEffect, useRef } from 'react';
import arrowBottom from '@/app/assets/images/bottom_arrow.svg';
import Tag from '@/app/components/ui/Tag';
import Image from 'next/image';

/**
 * Interface pour les propriétés d'initialisation de l'élément collapse
 * 
 * @interface CollapseElementProps
 */
interface CollapseElementProps {
    title: string;
    content: string[];
}

export default function CollapseElement({ title, content }: CollapseElementProps) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (isOpen && ref.current) {
            setContentHeight((ref.current as HTMLElement).clientHeight);
        } else {
            setContentHeight(0);
        }
    }, [isOpen, content]);


    return (
        <div className="flex flex-col gap-15">
            <div className="flex cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <span className="flex-1 text-sm text-black">{title}</span>
                <Image src={arrowBottom} alt="Plier / déplier le contenu" className="transition-rotate duration-300 ease-out" style={{ rotate: isOpen ? "180deg" : "0deg" }} />
            </div>
            <div className="overflow-hidden transition-height duration-300 ease-out" style={{ height: isOpen ? contentHeight : 0 }}>
                <div ref={ref} className="grid gap-8 md:w-420 grid-cols-3" style={{ "gridTemplateRows": `repeat(${(content.length ?? 3) / 3}, 1fr)` }}>
                    {content.map((tag: string, index: number) => (
                        <Tag
                            key={index}
                            text={tag}
                            className="flex items-center justify-center md:whitespace-nowrap text-xs text-(--dark-grey) font-normal bg-(--light-grey) rounded-[5] py-8 px-8 text-center" />
                    ))}
                </div>
            </div>

            {/* <div
                style={{
                    height: isOpen ? contentHeight : 0,
                    overflow: 'hidden',
                    transition: 'height 0.3s ease',
                    padding: '0px 2px',
                }}
            >
                <div ref={ref} className='contenu'>
                    <span>{content}</span>
                </div>
            </div> */}
        </div>
    );
}