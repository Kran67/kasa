import { useEffect, useState } from "react";
import type { Lodging } from "@/app/interfaces/lodging";

export function useLodging(id: string) {
    const [lodging, setLodging] = useState<Lodging | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    async function refresh() {
        setLoading(true);
        try {
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
        } catch (err) {
            console.error("Erreur fetch property:", err);
            setLodging(null);
            setError(true);
        } finally {
            setLoading(false)
        }
    }

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
