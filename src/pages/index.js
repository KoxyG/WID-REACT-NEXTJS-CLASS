// Link enables client-side transitions between routes
import Link from "next/link";

// Cards define the landing page navigation tiles
const cards = [
  {
    title: "Components",
    href: "/components",
    desc: "Reusable UI building blocks that return JSX.",
  },
  { title: "JSX", href: "/jsx", desc: "Write HTML-like markup in JavaScript." },
  { title: "Props", href: "/props", desc: "Read-only inputs to components." },
  { title: "State", href: "/state", desc: "Component memory with setters." },
  { title: "Events", href: "/events", desc: "Handle user interactions." },
  { title: "Demo", href: "/demo", desc: "All topics working together." },
];

export default function Home() {
  return (
    <section className="space-y-8">
      {/* Title and intro */}
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">React Teaching Lab</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Learn components, JSX, props, state, and events with beautiful examples.
        </p>
      </header>

      {/* Grid of navigation cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group rounded-2xl border border-slate-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/40 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{c.title}</h2>
              <span className="text-slate-400 group-hover:text-sky-600">→</span>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{c.desc}</p>
          </Link>
        ))}
      </div>

      {/* Quick references */}
      <div className="text-sm text-slate-500">
        References: {" "}
        <a className="text-blue-600 hover:underline" href="https://react.dev/learn/your-first-component" target="_blank" rel="noreferrer">Your first component</a>
        {" · "}
        <a className="text-blue-600 hover:underline" href="https://react.dev/learn/writing-markup-with-jsx" target="_blank" rel="noreferrer">JSX</a>
        {" · "}
        <a className="text-blue-600 hover:underline" href="https://react.dev/learn/responding-to-events" target="_blank" rel="noreferrer">Events</a>
      </div>
    </section>
  );
}
