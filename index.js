const core = require("@actions/core");
const github = require("@actions/github");
const { createReviewComment } = require("./main");

try {
  // inputs
  const token = core.getInput("token");
  const annotationUrl = core.getInput("annotation-url");

  // pull request details
  const { payload } = github.context;

  const { pull_request, repository, number: pull_number } = payload;
  const pull_name = pull_request["head"]["ref"];
  const {
    full_name: repo_pathname,
    owner: repo_owner,
    name: repo_name,
  } = repository;
  const owner_name = repo_owner["login"];

  // build annotation text
  const pull_request_path = `${repo_pathname}/tree/${pull_name}`;
  const annotation_body = `${annotationUrl}${pull_request_path}`;

  createReviewComment(
    token,
    owner_name,
    repo_name,
    pull_number,
    annotation_body
  );
} catch (error) {
  core.setFailed(error.message);
}
