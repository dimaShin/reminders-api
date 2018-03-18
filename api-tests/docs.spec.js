const server = require("../app/app");
const request = require("supertest");

afterEach(() => {
  server.close();
});

describe("routes: docs", () => {
  test("should respond as expected", async () => {
    const response = await request(server).get("/static/docs/index.html");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("text/html");
  });
});