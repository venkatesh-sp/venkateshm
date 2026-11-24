// Refreshes data/github-stats.json from the GitHub GraphQL API before each build.
// Needs GITHUB_TOKEN (read access) in the environment; without it the committed snapshot is kept.
// GITHUB_LOGIN selects the account (defaults to the portfolio owner).
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outFile = join(root, "data", "github-stats.json");
const login = process.env.GITHUB_LOGIN ?? "venkatesh-sp";
const token = process.env.GITHUB_TOKEN;

if (!token) {
  console.log("GITHUB_TOKEN not set: keeping the committed GitHub stats snapshot.");
  process.exit(0);
}

const query = `query ($login: String!) {
  user(login: $login) {
    login
    contributionsCollection {
      totalCommitContributions
      totalPullRequestContributions
      totalPullRequestReviewContributions
      totalIssueContributions
      totalRepositoryContributions
    }
  }
}`;

try {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json", "User-Agent": "portfolio-build" },
    body: JSON.stringify({ query, variables: { login } }),
  });
  const body = await response.json();
  const user = body?.data?.user;
  if (!user) throw new Error(body?.errors?.[0]?.message ?? `HTTP ${response.status}`);

  const c = user.contributionsCollection;
  const stats = {
    login: user.login,
    window: "last 12 months",
    fetchedAt: new Date().toISOString().slice(0, 10),
    commits: c.totalCommitContributions,
    pullRequests: c.totalPullRequestContributions,
    reviews: c.totalPullRequestReviewContributions,
    issues: c.totalIssueContributions,
    repositories: c.totalRepositoryContributions,
  };
  writeFileSync(outFile, `${JSON.stringify(stats, null, 2)}\n`);
  console.log(`GitHub stats refreshed for ${login}.`);
} catch (error) {
  // Never fail the build over optional stats; the snapshot stays in place.
  console.warn(`GitHub stats not refreshed (${error.message}). Using the committed snapshot.`);
}
