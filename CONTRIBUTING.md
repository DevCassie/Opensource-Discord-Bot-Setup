# Contributing to OpenSource Discord Bot Setup

Thank you for taking the time to contribute. Please read the [CODE of CONDUCT](CODE_OF_CONDUCT.md).
As a contributor, here are the guidelines we would like you to follow:

- [How to contribute](#how-to-contribute)
- [Commit Message Guidelines](#commit-message-guidelines)

---

## How to contribute
If you'd like to contribute, start by searching through the [issues](https://github.com/DevCassie/Opensource-Discord-Bot-Setup/issues) and [pull requests](https://github.com/DevCassie/Opensource-Discord-Bot-Setup/pulls) to see if someone already raised a similar idea or question.

If you don't see your idea listed, and you think it fits in this project, then do one of the following:
* **If your contribution is minor,** such as a typo fix, open a pull request.
* **If your contribution is major,** such as a new guide or feature, start by opening an issue first. That way, other people can weigh in on the discussion before you do any work.

## Commit Message Guidelines

In order to make git commit messages **easier to read** and faster to reason about, we follow some guidelines on most commits to keep the **format predictable**. Check [Conventional Commits specification](https://conventionalcommits.org) for more information about our guidelines.

**Examples**:

```
docs(changelog): update changelog to beta.5
docs: add API documentation to the bot
test(server): add cache tests to the movie resource
fix(web): add validation to phone input field
fix(web): remove avatar image from being required in form
fix(release): need to depend on latest rxjs and zone.js
```

### Commit Types

Must be one of the following:

- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)