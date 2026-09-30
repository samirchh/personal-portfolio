const highlights = [
  { label: "Build", value: "React · Next.js · Django" },
  { label: "Test", value: "Playwright · Postman · OWASP ZAP" },
  { label: "Load", value: "k6" },
];

export default function SkillHighlight() {
  return (
    <aside
      aria-label="Skills highlight"
      className="w-full max-w-[380px] bg-frame p-6 shadow-[0_1px_0_rgba(18,24,43,0.06)]"
    >
      <p className="text-sm text-graphite">Skills in practice</p>
      <h2 className="mt-2 font-display text-xl font-semibold leading-snug tracking-tight text-ink">
        Build, test, deliver.
      </h2>

      <dl className="mt-5 space-y-3 border-t border-hairline pt-4 text-[15px]">
        {highlights.map(({ label, value }) => (
          <div key={label} className="flex gap-3">
            <dt className="w-14 shrink-0 text-graphite">{label}</dt>
            <dd className="text-ink">{value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}