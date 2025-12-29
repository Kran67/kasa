'use client'

import { LogoSizes, HeaderMenuItems, IconButtonImages } from "@/app/enums/enums";
import { useState } from "react";
import Logo from "@/app/components/ui/Logo";
import MenuItem from "@/app/components/ui/MenuItem";
import Link from "@/app/components/ui/Link";
import IconButton from "@/app/components/ui/IconButton";
import Button from "@/app/components/ui/Button";

interface HeaderProps {
    activeMenu: HeaderMenuItems;
}

export default function Header({ activeMenu }: HeaderProps) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <header className="flex w-full md:w-782 h-85 md:h-56 rounded-[10px] bg-(--white) py-8 px-100 items-center justify-between">
            <Logo size={LogoSizes.Small} className="flex md:hidden" />
            <MenuItem
                text="Accueil"
                isActive={activeMenu === HeaderMenuItems.Home}
                url="/"
                className="hidden md:flex text-sm cursor-pointer hover:text-(--main-red) hover:font-bold" />
            <MenuItem
                text="À propos"
                isActive={activeMenu === HeaderMenuItems.About}
                url="/about"
                className="hidden md:flex text-sm cursor-pointer hover:text-(--main-red) hover:font-bold" />
            <Logo size={LogoSizes.Large} className="hidden md:flex" />
            <div className="flex gap-28 hidden md:flex">
                <Link text="+Ajouter un logement" className="hidden md:flex text-sm text-(--main-red)" />
                <div className="flex gap-8 items-center text-(--main-red)">
                    <IconButton
                        icon={IconButtonImages.Heart}
                        url="/favorites"
                        className="cursor-pointer fill-current"
                        imgWidth={10}
                        imgHeight={9}
                        svgStroke="#99331A" />
                    <div className="w-0 h-5 border-l-1 border-solid border-(--main-red)"></div>
                    <IconButton
                        icon={IconButtonImages.Message}
                        url="/messenging"
                        className="cursor-pointer"
                        imgWidth={10}
                        imgHeight={8}
                        svgStroke="#99331A" />
                </div>
            </div>
            <IconButton icon={IconButtonImages.Menu} className="md:hidden" imgWidth={0} imgHeight={0} onClick={() => setIsMenuVisible(!isMenuVisible)} />
            <div className={"z-1 " + (isMenuVisible ? "" : "hidden")}>
                <Link text="Accueil" url="/" className="" />
                <Link text="À propos" url="/about" className="" />
                <Link text="Messagerie" url="/messenging" className="" />
                <Link text="Favoris" url="/favorites" className="" />
                <Button text="Ajouter un logement" className="" />
            </div>
        </header >
    );
}
