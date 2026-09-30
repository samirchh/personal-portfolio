export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-board border-t border-hairline px-6 py-20 md:px-10 md:py-28"
    >
      <div className="grid gap-10 md:grid-cols-12">
        <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:col-span-4 md:text-5xl">
          {title}
        </h2>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}
