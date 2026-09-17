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
    <section id={id} className="mx-auto max-w-content px-6 py-16">
      <div className="mb-8 flex items-center gap-3 border-b border-border pb-4">
        <span className="font-mono text-sm text-accent">$</span>
        <h2 className="font-mono text-lg text-text">{title}</h2>
      </div>
      {children}
    </section>
  );
}
