'use client'

import { LogoSizes, HeaderMenuItems, IconButtonImages } from "@/app/enums/enums";
import { useState } from "react";
import Logo from "@/app/components/ui/Logo";
import MenuItem from "@/app/components/ui/MenuItem";
import Link from "@/app/components/ui/Link";
import IconButton from "@/app/components/ui/IconButton";
import Button from "@/app/components/ui/Button";
import { prepareBodyToShowModal } from "@/app/lib/utils";

interface HeaderProps {
    activeMenu?: HeaderMenuItems;
    isMobileView?: boolean;
    menuVisible?: boolean;
}

export default function HeaderForStorybook({ activeMenu, isMobileView, menuVisible = false }: HeaderProps) {
    const [isMenuVisible, setIsMenuVisible] = useState(menuVisible);

    // Mock user et cookies pour Storybook
    const user = { id: '1', name: 'Test User' };
    //const cookies = { get: () => null, set: () => { }, remove: () => { } };

    const handleLogout = () => {
        //cookies.remove("token");
        //cookies.remove("userId");
        // clear();
    }

    return (
        <header
            className={"flex w-full rounded-[10px] bg-(--white) items-center justify-between font-normal " + (!isMobileView ? "min-w-782 h-56 py-8 px-100" : "min-w-320 h-85 p-16")}>
            <Logo size={LogoSizes.Small} className={"flex " + (!isMobileView ? "hidden" : "")} />
            <MenuItem
                text="Accueil"
                isActive={activeMenu === HeaderMenuItems.Home}
                url="/"
                className={(isMobileView ? "hidden" : "flex") + " text-sm cursor-pointer hover:text-(--main-red) hover:font-bold w-51"} />
            <MenuItem
                text="À propos"
                isActive={activeMenu === HeaderMenuItems.About}
                url="/about"
                className={(isMobileView ? "hidden" : "flex") + " text-sm cursor-pointer hover:text-(--main-red) hover:font-bold w-62"} />
            <Logo size={LogoSizes.Large} className={(isMobileView ? "hidden" : "flex")} />
            <div className={(isMobileView ? "hidden" : "flex") + " gap-28"}>
                <Link text="+Ajouter un logement" className="hidden md:flex text-sm" isActive={true} />
                <div className="flex gap-8 items-center text-(--main-red)">
                    <IconButton
                        icon={IconButtonImages.Heart}
                        url="/favorites"
                        className="cursor-pointer fill-current"
                        imgWidth={10}
                        imgHeight={9}
                        svgStroke="#99331A"
                        svgBgFill={activeMenu === HeaderMenuItems.Favorites ? "#99331A" : "transparent"}
                        title="Voir mes favoris" />
                    <div className="w-0 h-5 border-l-1 border-solid border-(--main-red)"></div>
                    <IconButton
                        icon={IconButtonImages.Message}
                        url="/messenging"
                        className="cursor-pointer"
                        imgWidth={10}
                        imgHeight={8}
                        svgStroke="#99331A"
                        svgBgFill={activeMenu === HeaderMenuItems.Messaging ? "#99331A" : "transparent"}
                        svgFill={activeMenu === HeaderMenuItems.Messaging ? "#99331A" : "transparent"}
                        title="Voir mes messages" />
                    {user && <div className="w-0 h-5 border-l-1 border-solid border-(--main-red)"></div>}
                    {user && <IconButton
                        icon={IconButtonImages.Logout}
                        url="/"
                        className="cursor-pointer"
                        imgWidth={12}
                        imgHeight={12}
                        svgStroke="#99331A"
                        svgFill="transparent"
                        onClick={() => handleLogout()}
                        title="Se déconnecter" />}
                </div>
            </div>
            <IconButton
                icon={isMenuVisible ? IconButtonImages.Cross : IconButtonImages.Menu}
                className={(isMobileView ? "flex" : "hidden") + " mr-11 mb-6"}
                imgWidth={isMenuVisible ? 25 : 28}
                imgHeight={isMenuVisible ? 25 : 20}
                svgFill={isMenuVisible ? "#0D0D0D" : "#565656"}
                onClick={() => {
                    setIsMenuVisible(!isMenuVisible);
                    prepareBodyToShowModal(isMenuVisible ? "" : "hidden");
                }} />
            <div
                className={`flex flex-col gap-28 absolute top-85 left-0 right-0 h-full pt-28 px-16 z-2 bg-(--white) items-start ` +
                    (isMenuVisible ? "" : "hidden")}>
                <Link
                    text="Accueil"
                    url="/"
                    className="text-2xl hover:text-(--main-red) hover:font-bold w-full"
                    isActive={activeMenu === HeaderMenuItems.Home}
                />
                <hr className="w-full h-1 border-(--light-grey)" />
                <Link
                    text="À propos"
                    url="/about"
                    className="text-2xl hover:text-(--main-red) hover:font-bold w-full"
                    isActive={activeMenu === HeaderMenuItems.About}
                />
                <hr className="w-full h-1 border-(--light-grey)" />
                <Link
                    text="Messagerie"
                    url="/messenging"
                    className="text-2xl hover:text-(--main-red) hover:font-bold w-full"
                    isActive={activeMenu === HeaderMenuItems.Messaging}
                />
                <hr className="w-full h-1 border-(--light-grey)" />
                <Link
                    text="Favoris"
                    url="/favorites"
                    className="text-2xl hover:text-(--main-red) hover:font-bold w-full"
                    isActive={activeMenu === HeaderMenuItems.Favorites}
                />
                <hr className="w-full h-1 border-(--light-grey)" />
                <Button
                    text="Ajouter un logement"
                    className="flex items-center bg-(--main-red) rounded-[10px] p-8 px-32 text-(--white) w-full content-center" />
            </div>
        </header>
    );
}