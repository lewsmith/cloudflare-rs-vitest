import { SELF } from "cloudflare:test";
import { expect, test } from "vitest";

test("test request via SELF", async () => {
  // 👇 Error: Handler does not export a fetch() function.
  const resp = await SELF.fetch("https://fake.host");
  expect(await resp.text()).toBe("Hello Axum!");
});

