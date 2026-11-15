# agent-dispatcher-test

A tiny TypeScript monorepo to test the agent-platform dispatcher's
breaking-change check. Three packages:

- `packages/core`: the `User` type and `formatUser`
- `packages/web`: the page header, uses `formatUser`
- `packages/api`: the user API response, uses `User.email`

The branch `rename-format-user` changes `core` without updating its users,
so a PR from it contains two breaking changes.
