import { cache } from "react";

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