import { describe, expect, test } from "vitest";
import { getAPIKey } from "./auth";

const headers = {
  "authorization": "ApiKey abc123",
};

const headersWithWrongPrefix = {
  "authorization": "Bearer abc123"
};
const headersEmpty = {
    "authorization": ""
};
const noAuthorizationHeaders = {}

describe("getAPIKey", () => {
  test("Api key is defined", () => {
    expect(getAPIKey(headers)).toBeDefined();
  });

  test("ApiKey is returned", () => {
    expect(getAPIKey(headers)).toEqual("abc123");
  });
  test("Api key doesn't start with ApiKey string", () => {
    expect(getAPIKey(headersWithWrongPrefix)).toBeNull()
  });
  test("empty headers", () => {
    expect(getAPIKey(headersEmpty)).toBeNull()
  });
  test("No authorization headers", () => {
    expect(getAPIKey(noAuthorizationHeaders)).toBeNull()
  })
});