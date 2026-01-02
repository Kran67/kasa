// vitest.setup.ts
import "@testing-library/jest-dom";
import { vi } from "vitest";

// next/navigation (redirect)
const mockPush = vi.fn();
vi.mock("next/navigation", () => ({
    redirect: mockPush,

    useRouter: () => ({
        push: mockPush,
        replace: mockPush,
        back: mockPush,
        forward: mockPush,
        refresh: mockPush,
        prefetch: mockPush,
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
        get: mockPush,
        set: mockPush,
        remove: mockPush,
    }),
}));
