// vitest.setup.ts
import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("next-client-cookies", () => ({
    useCookies: () => ({
        get: vi.fn(),
        set: vi.fn(),
        remove: vi.fn(),
    }),
}));
