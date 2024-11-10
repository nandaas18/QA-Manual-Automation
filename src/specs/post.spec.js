import expect from "../libs/expect.js";
import { post_single_post, post_all_post } from "../apis/post.api.js";
import {
  create_id_schema,
  create_required_schema,
} from "../schemas/post.schema.js";

describe("/users/<ID> - Create Post", function () {
  it("Create post with only required value", async function () {
    const data = {
      name: "morpheus",
      job: "leader",
    };
    const res = await post_all_post(data);
    expect(res.data).to.be.jsonSchema(create_required_schema);
  });

  it("Create post with property Id", async function () {
    const data = {
      id: 22,
      name: "morpheus",
      job: "leader",
    };
    const res = await post_all_post(data);
    expect(res.data).to.be.jsonSchema(create_id_schema);
  });

  it("Create post with an empty Id", async function () {
    const data = {
      id: 0,
      name: "morpheus",
      job: "leader",
    };
    try {
      const res = await post_all_post(data);
    } catch (err) {
      expect(err?.response?.status).to.equal(400);
    }
  });

  it("Create post with non existent Id", async function () {
    const data = {
      id: 9999999,
      name: "morpheus",
      job: "leader",
    };
    try {
      const res = await post_all_post(data);
    } catch (err) {
      expect(err?.response?.status).to.equal(400);
    }
  });
});
