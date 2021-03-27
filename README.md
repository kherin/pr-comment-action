# Review App Action

This action adds a new comment to a newly-created pull request when it is created for the firs time.

### Type:

`JavaScript` `Action`

### `annotation-url`

The URL of the review app which is linked to the code branch of the newly-created pull request

## Purpose

### Integration with CodeSanbox

You can easily import a new pull request for an Angular/React/Vue project to CodeSanbox

> An easy way to import a repo to CodeSandbox via URL is with GitHubBox.com. Append 'box' to your github.com URL in between 'hub' and '.com' and it will redirect to CodeSandbox. [CodeSanbox Documentation](https://codesandbox.io/docs/importing)

## Example usage

uses: actions/pr-comment-action@v1
with:
annotation-url: 'https://location-of-demo-app.com'
