import { useEffect, useState } from "react";
import type { Property } from "@/app/interfaces/property";
import { propertiesMock } from "@/app/mocks/properties";

/**
 * Permet de récupèrer une propriété depuis la base de données
 * 
 * @function lodgingService
 * @param {string } id - Identifiant de la propriété
 * @returns { lodging: Property | any, loading: boolean, refresh: any, error: boolean }
 */
export function lodgingService(id: string): { lodging: Property | any, loading: boolean, refresh: any, error: boolean } {
    const [lodging, setLodging] = useState<Property | any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    // permet de rafaichir les données
    async function refresh() {
        setLoading(true);
        try {
            if (process.env.NEXT_PUBLIC_MOCK_MODE === "true") {
                setLodging(propertiesMock.find((p) => p.id === id));
            } else {
                const res: Response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties/${id}`, {
                    method: "GET",
                    cache: "no-store",
                    headers: { 'Content-Type': 'application/json', }
                });

                if (!res.ok) {
                    setLodging(null);
                    setError(true);
                    return;
                }

                const data = await res.json();

                setLodging(data);
            }
        } catch (err) {
            console.error("Erreur fetch property:", err);
            setLodging(null);
            setError(true);
        } finally {
            setLoading(false)
        }
    }

    // permet d'actualiser les données lors d'un changement
    useEffect(() => {
        let active: boolean = true;

        async function load() {
            await refresh();
            if (active) setLoading(false);
        }

        load();

        return () => {
            active = false;
        };
    }, []);

    return { lodging, loading, refresh, error };
}