import app from "../src/app";
import request from "supertest";
import { userObject } from "../src/models";
import { urlPrefix } from "../__mocks__/variables";

test("should return an object containing my details", async () => {
  // console.log(res);
  const { response } = await request(app).get(`/localhost:4500`);
  expect(response.body.toJSON()).toEqual(userObject);
});
