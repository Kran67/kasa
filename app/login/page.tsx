import type { Metadata } from "next";
import Login from "@/app/login/login";

/**
 * Ajout les métadata à la page
 * 
 * @function metadata
 * @returns { Metadata } - Les méta data à ajouter
 */
export function generateMetadata(): Metadata {
  return {
    title: "Kasa - Se connecter",
    description: "Se connecter au site kasa"
  }
}

/**
 * Affiche la page de connexion
 * 
 * @function LoginPage
 */
export default function LoginPage() {
  return <Login />;
}
