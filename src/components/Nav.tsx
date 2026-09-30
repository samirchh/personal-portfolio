import Link from "next/link";
import { nav } from "@/data/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-board items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="#home"
          className="whitespace-nowrap font-display text-lg font-semibold tracking-tight text-ink"
        >
          Sameer<span className="hidden sm:inline"> Chhetri</span>
        </Link>
        <nav className="flex gap-4 sm:gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm text-graphite transition-colors hover:text-ink sm:text-[15px]"
            >
              {item.label}
              {/* redline underline: an annotation mark, drawn on hover */}
              <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-redline transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
