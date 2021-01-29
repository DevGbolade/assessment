import request from "supertest";
import app from "../src/app";

describe("app module", () => {
  test("Should return app module", async () => {
    expect(app).toBeDefined();
  });
});

/**
 * Test for 404
 */
describe("GET/POST for unavailable routes", () => {
  test("it should return 404 for unavailable routes", async () => {
    const response = await request(app).get("/invalid-route");
    expect(response.status).toBe(404);
    expect(response).toHaveProperty("error");
  });
});
