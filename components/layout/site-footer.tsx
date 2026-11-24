import { profile } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="flex flex-col gap-2 py-8 text-[13px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href={`mailto:${profile.email}`} className="hover:text-foreground">
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
