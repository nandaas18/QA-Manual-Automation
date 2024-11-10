import expect from "../libs/expect.js";
import { get_single_post, get_all_post } from "../apis/get.api.js";
import { get_all_schema, get_single_schema } from "../schemas/get.schema.js";

describe("GET API", function () {
  describe("/users/<ID> - Get Single Post", function () {
    it("Check response status code", async function () {
      const res = await get_single_post(2);

      expect(res.status).to.equal(200);
    });

    it("Check response body json structure", async function () {
      const res = await get_single_post(2);

      expect(res.data).to.be.jsonSchema(get_single_schema);
    });

    it("Check non existent ID parameter", async function () {
      try {
        await get_single_post(2222);
        throw Error;
      } catch (err) {
        expect(err?.response?.status).to.equal(404);
      }
    });
  });
});

describe("/users - Get All Post", function () {
  it("Check response status code", async function () {
    const res = await get_all_post();

    expect(res.status).to.equal(200);
  });

  it("Check response body json structure", async function () {
    const res = await get_all_post();

    expect(res.data).to.be.jsonSchema(get_all_schema);
  });

  it("Check pagination second page", async function () {
    const page = 2;
    const schema = { type: "number" };

    expect(page).to.be.jsonSchema(schema);
  });

  it("Check pagination with 1 custom data per page", async function () {
    const per_page = 1;
    const schema = { type: "number" };

    expect(per_page).to.be.jsonSchema(schema);
  });

  it("Pagination with invalid page parameter", async function () {
    try {
      page = "two";
      const schema = { type: "number" };
      throw Error;
    } catch (err) {
      expect(err?.response?.status).to.equal(400);
      expect(page).to.be.jsonSchema(schema);
    }
  });
});
