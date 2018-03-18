// require the Koa server
const server = require("../app/app");
// require supertest
const request = require("supertest");
// close the app after each test
afterEach(() => {
  server.close();
});
describe("routes: index", () => {
  test("should respond as expected", async () => {
  const response = await request(server).get("/api");
  expect(response.status).toEqual(200);
  expect(response.type).toEqual("application/json");
  expect(response.body.foo).toEqual("bar");
});
});