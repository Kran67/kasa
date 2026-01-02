import { cache } from "react";
import { cookies } from "next/headers";

/**
 * Récupère la liste des propriétés
 * 
 * @async
 * @function getProperties
 * @returns {Promise<any>} - Une liste de propriétés ou un objet { error: string }
 */
export const getProperties = cache(async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties`, {
        method: "GET",
        cache: "no-store",
        headers: { 'Content-Type': 'application/json', }
    });
    return await data.json();
});

/**
 * Récupère les informations d'une propriété
 *
 * @async
 * @function getLodging
 * @param {string} id - Identifiant de la propriété
 * @returns {Promise<any>} - Une propriétés ou un objet { error: string }
 */
export const getLodging = cache(async (id: string) => {
    const data: Response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties/${id}`, {
        method: "GET",
        cache: "no-store",
        headers: { 'Content-Type': 'application/json', }
    });
    return await data.json();
});

/**
 * Récupère les informations de l'utilisateur connecté)
 *
 * @async
 * @function getProfile
 * @param {string} id - Identifiant de la propriété
 * @returns {Promise<any>} - Une propriétés ou un objet { error: string }
 */
export const getProfile = cache(async (id: string) => {
    const cookieStore = await cookies();
    const token: string | undefined = cookieStore.get("token")?.value;

    if (!token) return null;

    try {
        const data: Response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            cache: "no-store",
        });
        return await data.json();
    } catch (err) {
        console.error("Erreur lors de la récupération du profil :", err);
        return null;
    }
});