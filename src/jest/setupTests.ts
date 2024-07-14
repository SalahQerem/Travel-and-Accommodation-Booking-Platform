import "@testing-library/jest-dom";
import { TextDecoder, TextEncoder } from "util";
import "whatwg-fetch";

// @ts-ignore
global.TextEncoder = TextEncoder;
// @ts-ignore
global.TextDecoder = TextDecoder;

// const server = setupServer(...handlers);

// beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
