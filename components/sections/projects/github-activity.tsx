import { GitCommitHorizontal, GitPullRequest, Eye, FolderGit2 } from "lucide-react";

import { CountUp } from "@/components/shared/motion/count-up";
import stats from "@/data/github-stats.json";

const items = [
  { label: "Commits", value: stats.commits, icon: GitCommitHorizontal },
  { label: "Pull requests", value: stats.pullRequests, icon: GitPullRequest },
  { label: "Code reviews", value: stats.reviews, icon: Eye },
  { label: "Repos contributed to", value: stats.repositories, icon: FolderGit2 },
];

/** GitHub contribution totals for the last 12 months. Numbers come from data/github-stats.json (refreshed at build). */
export function GithubActivity() {
  return (
    <div className="mb-8 rounded-2xl border border-border bg-card/85 p-5 backdrop-blur-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="m-0 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          GitHub activity
        </p>
        <a
          href={`https://github.com/${stats.login}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-semibold text-brand hover:underline"
        >
          @{stats.login} · {stats.window}
        </a>
      </div>
      <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
              <item.icon size={16} aria-hidden />
            </span>
            <div className="min-w-0">
              <dd className="m-0 text-[22px] font-semibold tabular-nums tracking-[-0.02em]">
                <CountUp value={String(item.value)} />
              </dd>
              <dt className="text-[12px] leading-snug text-muted-foreground">{item.label}</dt>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
