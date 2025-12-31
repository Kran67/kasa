import { createContext } from "react"
import { Property } from "@/app/interfaces/property"

export interface FavoritesContextType {
    favorites: Property[]
    addFavorite: (property: Property) => void
    removeFavorite: (id: string) => void
    toggleFavorite: (property: Property) => void
    isFavorite: (id: string) => boolean
}

export const FavoritesContext = createContext<FavoritesContextType | null>(null)
