import { LogoSizes } from "@/app/enums/enums";
import Image from "next/image";
import Logo from "@/app/assets/images/logo.svg";
import LogoSmall from "@/app/assets/images/logo_small.svg";

/**
 * Interface pour les propriétés d'initialisation du logo
 * 
 * @interface LogoProps
 */
interface LogoProps {
    size?: LogoSizes;
    className?: string;
}

/**
 * Affiche d'un lien
 * 
 * @function LogoPage
 * @param { size = LogoSizes.Large, className } LogoProps - Les proriétés d'un lien
 * @param {LogoSizes?} LogoProps.size - Taille du logo
 * @param {string?} LogoProps.className - Classes css du logo
 */
export default function LogoPage({ size = LogoSizes.Large, className }: LogoProps) {
    return (
        <Image
            className={className}
            src={size === LogoSizes.Large ? Logo : LogoSmall}
            alt="Image du logo"
            width={size === LogoSizes.Large ? 114 : 46}
            height={size === LogoSizes.Large ? 40 : 53} />
    );
}