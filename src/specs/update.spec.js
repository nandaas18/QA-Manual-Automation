import expect from "../libs/expect.js";
import {
  update_required_schema,
  Update_with_additional_data,
} from "../schemas/update.schema.js";
import { update_single_post, update_all_post } from "../apis/update.api.js";

describe("/users/<ID> - Update Post", function () {
  it("Update the post with the specified value only", async function () {
    const data = {
      name: "morpheus",
      job: "zion resident",
    };
    const res = await update_single_post(2, data);
    expect(res.data).to.be.jsonSchema(update_required_schema);
  });

  it("Create a post with all required and additional data", async function () {
    const data = {
      id: 7,
      name: "morpheus",
      job: "manager",
      hobby: "traveling",
    };
    const res = await update_single_post(4, data);
    expect(res.data).to.be.jsonSchema(Update_with_additional_data);
  });

  it("Update post with an empty Id", async function () {
    const data = {
      id: 0,
      name: "morpheus",
      job: "chef",
    };
    try {
      const res = await update_single_post(3, data);
    } catch (err) {
      expect(err?.response?.status).to.equal(400);
    }
  });

  it("Update post with non existent Id", async function () {
    const data = {
      id: 9999999999,
      name: "djoko",
      job: "lecturer",
    };
    try {
      const res = await update_single_post(6, data);
    } catch (err) {
      expect(err?.response?.status).to.equal(400);
    }
  });

  it("Update post with invalid userId", async function () {
    const data = {
      id: "bandung",
      name: "djoko",
      job: "lecturer",
    };
    try {
      const res = await update_single_post(7, data);
    } catch (err) {
      expect(err?.response?.status).to.equal(400);
    }
  });
});
