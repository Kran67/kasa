import { useEffect, useState } from "react";
import type { Property } from "@/app/interfaces/property";

export function useProperties() {
    const [properties, setProperties] = useState<Property[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    async function refresh() {
        setLoading(true);
        try {
            const res: Response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties`, {
                method: "GET",
                cache: "no-store",
                headers: { 'Content-Type': 'application/json', }
            });

            if (!res.ok) {
                setProperties(null);
                setError(true);
                return;
            }

            const data = await res.json();

            setProperties(data);
        } catch (err) {
            console.error("Erreur fetch properties:", err);
            setProperties(null);
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

    return { properties, loading, refresh, error };
}