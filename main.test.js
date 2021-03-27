const { createReviewComment } = require("./main");
const nock = require("nock");
const GITHUB_API = "https://api.github.com";

test("create comment", async () => {
  const scope = nock(GITHUB_API)
    .post("/repos/foo/bar/pulls/1/reviews")
    .reply(200, '{ "body": "boo", "event": "COMMENT" }');
  await createReviewComment("xyz", "foo", "bar", "1", "boo");

  scope.done();
});
