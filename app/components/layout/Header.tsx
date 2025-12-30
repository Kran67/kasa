'use client'

import { LogoSizes, HeaderMenuItems, IconButtonImages } from "@/app/enums/enums";
import { useState } from "react";
import Logo from "@/app/components/ui/Logo";
import MenuItem from "@/app/components/ui/MenuItem";
import Link from "@/app/components/ui/Link";
import IconButton from "@/app/components/ui/IconButton";
import Button from "@/app/components/ui/Button";

interface HeaderProps {
    activeMenu?: HeaderMenuItems;
}

export default function Header({ activeMenu }: HeaderProps) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <header
            className="flex w-full md:w-782 h-85 md:h-56 rounded-[10px] bg-(--white) md:py-8 md:px-100 items-center justify-between font-normal p-16">
            <Logo size={LogoSizes.Small} className="flex md:hidden" />
            <MenuItem
                text="Accueil"
                isActive={activeMenu === HeaderMenuItems.Home}
                url="/"
                className="hidden md:flex text-sm cursor-pointer hover:text-(--main-red) hover:font-bold w-51" />
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
            <IconButton
                icon={isMenuVisible ? IconButtonImages.Cross : IconButtonImages.Menu}
                className="md:hidden mr-11 mb-6"
                imgWidth={isMenuVisible ? 25 : 28}
                imgHeight={isMenuVisible ? 25 : 20}
                svgFill={isMenuVisible ? "#0D0D0D" : "#565656"}
                onClick={() => setIsMenuVisible(!isMenuVisible)} />
            <div
                className={`flex flex-col gap-28 absolute top-85 left-0 right-0 bottom-0 pt-28 px-16 z-1 bg-(--white) items-start ` +
                    (isMenuVisible ? "" : "hidden")}>
                <Link text="Accueil" url="/" className="text-2xl hover:text-(--main-red) hover:font-bold" />
                <hr className="w-full h-1 border-(--light-grey)" />
                <Link text="À propos" url="/about" className="text-2xl hover:text-(--main-red) hover:font-bold" />
                <hr className="w-full h-1 border-(--light-grey)" />
                <Link text="Messagerie" url="/messenging" className="text-2xl hover:text-(--main-red) hover:font-bold" />
                <hr className="w-full h-1 border-(--light-grey)" />
                <Link text="Favoris" url="/favorites" className="text-2xl hover:text-(--main-red) hover:font-bold" />
                <hr className="w-full h-1 border-(--light-grey)" />
                <Button text="Ajouter un logement" className="flex items-center bg-(--main-red) rounded-[10] p-8 px-32 text-(--white)" />
            </div>
        </header >
    );
}
