const server = require("../app/app");
const request = require("supertest");

afterEach(() => {
  server.close();
});

describe("routes: notifications", () => {
  test("should respond as expected", async () => {
    const response = await request(server).get("/api/notifications");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
  });
});