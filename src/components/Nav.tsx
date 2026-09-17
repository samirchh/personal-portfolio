import Link from "next/link";
import { nav, profile } from "@/data/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link href="#home" className="font-mono text-sm text-text">
          {profile.name.toLowerCase().replace(/\s+/g, "-")}
        </Link>
        <nav className="flex gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              {item.label.toLowerCase()}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
