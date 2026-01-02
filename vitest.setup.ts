// vitest.setup.ts
import "@testing-library/jest-dom";
import { vi } from "vitest";

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

vi.mock("@/app/contexts/userContext", () => ({
    useUser: () => ({
        user: null,
        isAuthenticated: false,
    }),
}));

vi.mock("next-client-cookies", () => ({
    useCookies: () => ({
        get: vi.fn(),
        set: vi.fn(),
        remove: vi.fn(),
    }),
}));
