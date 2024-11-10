import expect from "../libs/expect.js";
import { delete_all_post, delete_single_post } from "../apis/delete.api.js";

describe("/users/<ID> - Delete Post", function () {
  it("Delete post on Id 2", async function () {
    const res = await delete_single_post(2);
    expect(res.status).to.equal(204);
  });

  it("Delete post on Id 9", async function () {
    const res = await delete_single_post(9);
    expect(res.status).to.equal(204);
  });

  it("Delete post on Id 12", async function () {
    const res = await delete_single_post(12);
    expect(res.status).to.equal(204);
  });

  it("Delete post on Id 2", async function () {
    const res = await delete_all_post();
    expect(res.status).to.equal(204);
  });
});
