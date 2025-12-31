// context/FavoritesProvider.tsx
"use client"

import { ReactNode, useEffect, useState } from "react"
import { FavoritesContext } from "./FavoritesContext"
import { Property } from "@/app/interfaces/property"

const STORAGE_KEY = "favorite_properties"

export function FavoritesProvider({ children }: { children: ReactNode }) {
    const [favorites, setFavorites] = useState<Property[]>([])

    // Charger depuis le localStorage (client only)
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
            setFavorites(JSON.parse(stored))
        }
    }, [])

    // Sauvegarder à chaque changement
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    }, [favorites])

    const addFavorite = (property: Property) => {
        setFavorites((prev) =>
            prev.some((p) => p.id === property.id) ? prev : [...prev, property]
        )
    }

    const removeFavorite = (id: string) => {
        setFavorites((prev) => prev.filter((p) => p.id !== id))
    }

    const toggleFavorite = (property: Property) => {
        setFavorites((prev) =>
            prev.some((p) => p.id === property.id)
                ? prev.filter((p) => p.id !== property.id)
                : [...prev, property]
        )
    }

    const isFavorite = (id: string) => {
        return favorites.some((p) => p.id === id)
    }

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                addFavorite,
                removeFavorite,
                toggleFavorite,
                isFavorite,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}
