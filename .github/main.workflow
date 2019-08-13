workflow "Lint on Pull Request" {
  resolves = ["ESLint"]
  on = "pull_request"
}

action "ESLint" {
  uses = "hallee/eslint-action@master"
  secrets = ["GITHUB_TOKEN"]
}
