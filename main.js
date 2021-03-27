const github = require("@actions/github");
async function createReviewComment(token, owner, repo, pull_number, body) {
  const octokit = github.getOctokit(token);

  return octokit.pulls
    .createReview({
      owner: owner,
      repo: repo,
      pull_number,
      body: body,
      event: "COMMENT",
    })
    .catch((error) => {
      console.log("Thrown from octokit: ", error);
    });
}

// run(); // main entry point

module.exports = {
  createReviewComment: createReviewComment,
};
