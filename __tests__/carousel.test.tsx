import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Property from "@/app/property/[slug]/property";
import { lodgingService } from "@/app/services/lodgingService";

/* -------------------------------------------------------------------------- */
/*                                    MOCKS                                   */
/* -------------------------------------------------------------------------- */

// next/navigation (redirect)
vi.mock("next/navigation", () => ({
    redirect: vi.fn(),

    useRouter: () => ({
        push: vi.fn(),
        replace: vi.fn(),
        back: vi.fn(),
        forward: vi.fn(),
        refresh: vi.fn(),
        prefetch: vi.fn(),
    }),

    usePathname: () => "/",
    useParams: () => ({}),
}));

// next/image
vi.mock("next/image", () => ({
    default: (props: any) => <img {...props} />,
}));

// lodgingService
vi.mock("@/app/services/lodgingService", () => ({
    lodgingService: vi.fn(),
}));

// Carousel (on expose imageIndex pour le tester)
vi.mock("@/app/components/data/Carousel", () => ({
    default: ({ imageIndex, closeCarousel }: any) => (
        <div data-testid="carousel">
            <span data-testid="carousel-index">{imageIndex}</span>
            <button onClick={closeCarousel}>Fermer</button>
        </div>
    ),
}));

vi.mock("@/app/contexts/userContext", () => ({
    useUser: () => ({
        user: null,
        isAuthenticated: false,
    }),
}));

/* -------------------------------------------------------------------------- */
/*                               DONNÉES MOCKÉES                               */
/* -------------------------------------------------------------------------- */

const mockLodging = {
    title: "Super appartement",
    description: "Un logement incroyable",
    location: "Paris",
    pictures: [
        "/img1.jpg",
        "/img2.jpg",
        "/img3.jpg",
        "/img4.jpg",
    ],
    host: {
        name: "Jean Dupont",
        picture: "/host.jpg",
    },
    rating_avg: 4.5,
    equipments: ["Wifi"],
    tags: ["Appartement"],
};

/* -------------------------------------------------------------------------- */
/*                                   TESTS                                    */
/* -------------------------------------------------------------------------- */

describe("Property – Carousel", () => {
    beforeEach(() => {
        vi.clearAllMocks();

        (lodgingService as any).mockReturnValue({
            lodging: mockLodging,
            error: null,
        });
    });

    it("n'affiche pas le carousel par défaut", () => {
        render(<Property slug="slug-test" />);

        expect(
            screen.queryByTestId("carousel")
        ).not.toBeInTheDocument();
    });

    it("ouvre le carousel quand on clique sur la première image (index 0)", async () => {
        const user = userEvent.setup();

        render(<Property slug="slug-test" />);

        await user.click(
            screen.getByTestId("property-image-1")
        );

        expect(
            screen.getByTestId("carousel")
        ).toBeInTheDocument();

        expect(
            screen.getByTestId("carousel-index")
        ).toHaveTextContent("0");
    });

    it("ouvre le carousel avec l’index correct quand on clique sur une autre image", async () => {
        const user = userEvent.setup();

        render(<Property slug="slug-test" />);

        await user.click(
            screen.getByTestId("property-image-3")
        );

        expect(
            screen.getByTestId("carousel-index")
        ).toHaveTextContent("2");
    });

    it("met à jour l’index si on ferme puis rouvre le carousel avec une autre image", async () => {
        const user = userEvent.setup();

        render(<Property slug="slug-test" />);

        // clic sur image 1 → index 0
        await user.click(
            screen.getByTestId("property-image-1")
        );

        expect(
            screen.getByTestId("carousel-index")
        ).toHaveTextContent("0");

        // fermer le carousel
        await user.click(
            screen.getByText("Fermer")
        );

        expect(
            screen.queryByTestId("carousel")
        ).not.toBeInTheDocument();

        // clic sur image 4 → index 3
        await user.click(
            screen.getByTestId("property-image-4")
        );

        expect(
            screen.getByTestId("carousel-index")
        ).toHaveTextContent("3");
    });
});
