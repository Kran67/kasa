import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import Gallery from "@/app/components/data/Gallery";
import PropertyCard from "@/app/components/data/PropertyCard";
import { Property } from "@/app/interfaces/property";
import { FavoritesContext, FavoritesContextType } from "@/app/contexts/FavoritesContext";

/* -------------------------------------------------------------------------- */
/*                                    MOCKS                                   */
/* -------------------------------------------------------------------------- */

// Mock localStorage
const localStorageMock = (() => {
    let store: Record<string, string> = {};

    return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => {
            store[key] = value.toString();
        },
        removeItem: (key: string) => {
            delete store[key];
        },
        clear: () => {
            store = {};
        },
    };
})();

Object.defineProperty(global, 'localStorage', {
    value: localStorageMock,
});

// Mock next/navigation
const mockPush = vi.fn();
vi.mock("next/navigation", () => ({
    useRouter: () => ({
        push: mockPush,
    }),
}));

// Mock IconButton
vi.mock("@/app/components/ui/IconButton", () => ({
    default: ({ onClick, className, title }: any) => (
        <button
            onClick={onClick}
            className={className}
            data-testid="icon-button"
            title={title}
        >
            {title}
        </button>
    ),
}));

// Mock propertiesService
vi.mock("@/app/services/propertiesService", () => ({
    propertiesService: vi.fn(),
}));

/* -------------------------------------------------------------------------- */
/*                               DONNÉES MOCKÉES                              */
/* -------------------------------------------------------------------------- */

const mockProperties: Property[] = [
    {
        id: "1",
        slug: "appartement-paris",
        title: "Appartement Paris",
        description: "Bel appartement",
        cover: "/cover1.jpg",
        location: "Paris",
        price_per_night: 100,
        rating_avg: 4.5,
        ratings_count: 10,
        host: { id: 1, name: "Jean", picture: "/host1.jpg" },
        pictures: ["/img1.jpg"],
        equipments: ["Wifi"],
        tags: ["Appartement"],
    },
    {
        id: "2",
        slug: "maison-lyon",
        title: "Maison Lyon",
        description: "Belle maison",
        cover: "/cover2.jpg",
        location: "Lyon",
        price_per_night: 150,
        rating_avg: 4.8,
        ratings_count: 15,
        host: { id: 2, name: "Marie", picture: "/host2.jpg" },
        pictures: ["/img2.jpg"],
        equipments: ["Piscine"],
        tags: ["Maison"],
    },
    {
        id: "3",
        slug: "studio-marseille",
        title: "Studio Marseille",
        description: "Petit studio",
        cover: "/cover3.jpg",
        location: "Marseille",
        price_per_night: 80,
        rating_avg: 4.0,
        ratings_count: 8,
        host: { id: 3, name: "Pierre", picture: "/host3.jpg" },
        pictures: ["/img3.jpg"],
        equipments: ["Wifi"],
        tags: ["Studio"],
    },
];

/* -------------------------------------------------------------------------- */
/*                      HELPER POUR WRAPPER AVEC CONTEXT                      */
/* -------------------------------------------------------------------------- */

interface ProviderWrapperProps {
    children: React.ReactNode;
    contextValue: FavoritesContextType;
}

const FavoritesProviderWrapper = ({ children, contextValue }: ProviderWrapperProps) => {
    return (
        <FavoritesContext.Provider value={contextValue}>
            {children}
        </FavoritesContext.Provider>
    );
};

/* -------------------------------------------------------------------------- */
/*                                   TESTS                                    */
/* -------------------------------------------------------------------------- */

describe("Page des Favoris - Gestion des favoris", () => {
    let mockFavorites: Property[];
    let mockAddFavorite: any;
    let mockRemoveFavorite: any;
    let mockToggleFavorite: any;
    let mockIsFavorite: any;

    beforeEach(() => {
        vi.clearAllMocks();
        mockPush.mockClear();
        localStorage.clear();

        // Initialiser les favoris vides
        mockFavorites = [];

        // Mock des fonctions du contexte
        mockAddFavorite = vi.fn((property: Property) => {
            mockFavorites = [...mockFavorites, property];
            localStorage.setItem('favorite_properties', JSON.stringify(mockFavorites));
        });

        mockRemoveFavorite = vi.fn((id: string) => {
            mockFavorites = mockFavorites.filter(f => f.id !== id);
            localStorage.setItem('favorite_properties', JSON.stringify(mockFavorites));
        });

        mockToggleFavorite = vi.fn((property: Property) => {
            const index = mockFavorites.findIndex(f => f.id === property.id);
            if (index > -1) {
                mockRemoveFavorite(property.id);
            } else {
                mockAddFavorite(property);
            }
        });

        mockIsFavorite = vi.fn((id: string) => {
            return mockFavorites.some(f => f.id === id);
        });
    });

    afterEach(() => {
        localStorage.clear();
    });

    // Test 1: La page ne contient pas de favoris
    it("affiche une page vide quand il n'y a pas de favoris", () => {
        const contextValue: FavoritesContextType = {
            favorites: [],
            addFavorite: mockAddFavorite,
            removeFavorite: mockRemoveFavorite,
            toggleFavorite: mockToggleFavorite,
            isFavorite: mockIsFavorite,
        };

        render(
            <FavoritesProviderWrapper contextValue={contextValue}>
                <Gallery onlyFav={true} />
            </FavoritesProviderWrapper>
        );

        // Vérifier qu'aucune propriété n'est affichée
        expect(screen.queryByText("Appartement Paris")).not.toBeInTheDocument();
        expect(screen.queryByText("Maison Lyon")).not.toBeInTheDocument();
        expect(screen.queryByText("Studio Marseille")).not.toBeInTheDocument();
    });

    // Test 2: La page contient des favoris
    it("affiche les favoris stockés", () => {
        mockFavorites = [mockProperties[0], mockProperties[1]];

        const contextValue: FavoritesContextType = {
            favorites: mockFavorites,
            addFavorite: mockAddFavorite,
            removeFavorite: mockRemoveFavorite,
            toggleFavorite: mockToggleFavorite,
            isFavorite: mockIsFavorite,
        };

        render(
            <FavoritesProviderWrapper contextValue={contextValue}>
                <Gallery onlyFav={true} />
            </FavoritesProviderWrapper>
        );

        // Vérifier que les titres des favoris sont affichés
        expect(screen.getByText("Appartement Paris")).toBeInTheDocument();
        expect(screen.getByText("Maison Lyon")).toBeInTheDocument();
        // Vérifier que le troisième n'est pas affiché
        expect(screen.queryByText("Studio Marseille")).not.toBeInTheDocument();
    });

    // Test 3: Ajouter une propriété aux favoris
    it("ajoute une propriété aux favoris au clic sur le bouton cœur", async () => {
        const user = userEvent.setup();

        const contextValue: FavoritesContextType = {
            favorites: [],
            addFavorite: mockAddFavorite,
            removeFavorite: mockRemoveFavorite,
            toggleFavorite: mockToggleFavorite,
            isFavorite: mockIsFavorite,
        };

        render(
            <FavoritesProviderWrapper contextValue={contextValue}>
                <PropertyCard property={mockProperties[0]} />
            </FavoritesProviderWrapper>
        );

        // Trouver le bouton cœur (IconButton avec title "Ajouter aux favoris")
        const heartButton = screen.getByTitle("Ajouter aux favoris");

        // Cliquer sur le bouton
        await user.click(heartButton);

        // Vérifier que toggleFavorite a été appelé avec la bonne propriété
        expect(mockToggleFavorite).toHaveBeenCalledTimes(1);
        expect(mockToggleFavorite).toHaveBeenCalledWith(mockProperties[0]);

        // Vérifier que addFavorite a été appelé
        expect(mockAddFavorite).toHaveBeenCalledTimes(1);
        expect(mockAddFavorite).toHaveBeenCalledWith(mockProperties[0]);
    });

    // Test 4: Enlever une propriété des favoris
    it("enlève une propriété des favoris au clic sur le bouton cœur", async () => {
        const user = userEvent.setup();

        // Initialiser avec la propriété déjà en favori
        mockFavorites = [mockProperties[0]];
        mockIsFavorite = vi.fn((id: string) => id === "1");

        const contextValue: FavoritesContextType = {
            favorites: mockFavorites,
            addFavorite: mockAddFavorite,
            removeFavorite: mockRemoveFavorite,
            toggleFavorite: mockToggleFavorite,
            isFavorite: mockIsFavorite,
        };

        render(
            <FavoritesProviderWrapper contextValue={contextValue}>
                <PropertyCard property={mockProperties[0]} />
            </FavoritesProviderWrapper>
        );

        // Trouver le bouton cœur (IconButton avec title "Enlever des favoris")
        const heartButton = screen.getByTitle("Enlever des favoris");

        // Cliquer sur le bouton
        await user.click(heartButton);

        // Vérifier que toggleFavorite a été appelé
        expect(mockToggleFavorite).toHaveBeenCalledTimes(1);
        expect(mockToggleFavorite).toHaveBeenCalledWith(mockProperties[0]);

        // Vérifier que removeFavorite a été appelé
        expect(mockRemoveFavorite).toHaveBeenCalledTimes(1);
        expect(mockRemoveFavorite).toHaveBeenCalledWith("1");
    });

    // Test 5: Clic sur la carte redirige vers la page de détail
    it("redirige vers la page de détail au clic sur la carte", async () => {
        const user = userEvent.setup();

        const contextValue: FavoritesContextType = {
            favorites: [],
            addFavorite: mockAddFavorite,
            removeFavorite: mockRemoveFavorite,
            toggleFavorite: mockToggleFavorite,
            isFavorite: mockIsFavorite,
        };

        render(
            <FavoritesProviderWrapper contextValue={contextValue}>
                <PropertyCard property={mockProperties[0]} />
            </FavoritesProviderWrapper>
        );

        // Trouver la partie cliquable de la carte (div avec onClick)
        const cardClickable = screen.getByText("Appartement Paris").closest("div");

        if (cardClickable) {
            await user.click(cardClickable);
        }

        // Vérifier que la navigation a été déclenchée
        expect(mockPush).toHaveBeenCalledTimes(1);
        expect(mockPush).toHaveBeenCalledWith("/property/1");
    });

    // Test 6: Vérifier que isFavorite retourne le bon état
    it("isFavorite retourne true pour une propriété en favoris", () => {
        mockFavorites = [mockProperties[0]];
        mockIsFavorite = vi.fn((id: string) => mockFavorites.some(f => f.id === id));

        const contextValue: FavoritesContextType = {
            favorites: mockFavorites,
            addFavorite: mockAddFavorite,
            removeFavorite: mockRemoveFavorite,
            toggleFavorite: mockToggleFavorite,
            isFavorite: mockIsFavorite,
        };

        render(
            <FavoritesProviderWrapper contextValue={contextValue}>
                <PropertyCard property={mockProperties[0]} />
            </FavoritesProviderWrapper>
        );

        // Vérifier que isFavorite a été appelé avec le bon id
        expect(mockIsFavorite).toHaveBeenCalledWith("1");

        // Vérifier que le bouton affiche "Enlever des favoris"
        expect(screen.getByTitle("Enlever des favoris")).toBeInTheDocument();
    });

    // Test 7: Vérifier que isFavorite retourne false pour une propriété non favorite
    it("isFavorite retourne false pour une propriété non favorite", () => {
        mockFavorites = [];
        mockIsFavorite = vi.fn((id: string) => mockFavorites.some(f => f.id === id));

        const contextValue: FavoritesContextType = {
            favorites: mockFavorites,
            addFavorite: mockAddFavorite,
            removeFavorite: mockRemoveFavorite,
            toggleFavorite: mockToggleFavorite,
            isFavorite: mockIsFavorite,
        };

        render(
            <FavoritesProviderWrapper contextValue={contextValue}>
                <PropertyCard property={mockProperties[0]} />
            </FavoritesProviderWrapper>
        );

        // Vérifier que isFavorite a été appelé avec le bon id
        expect(mockIsFavorite).toHaveBeenCalledWith("1");

        // Vérifier que le bouton affiche "Ajouter aux favoris"
        expect(screen.getByTitle("Ajouter aux favoris")).toBeInTheDocument();
    });
});