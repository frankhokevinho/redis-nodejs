const app = require("../index");

const request = require("supertest");

test("GET /photos endpoint", async () => {
  const response = await request(app).get("/photos");
  expect(response.status).toBe(200);
  expect(response.body.length).toBeGreaterThan(0);
});
