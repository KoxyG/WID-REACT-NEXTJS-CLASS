export default function JSXPage() {
  const user = { name: "Ada Lovelace", role: "Pioneer" };
  const tools = ["Components", "JSX", "Props", "State", "Events"];
  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">JSX</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-2">Write HTML-like markup in JavaScript.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-gray-900/40">
          <h2 className="font-semibold mb-3">Example</h2>
          <div className="space-y-3">
            <div className="rounded-lg border border-slate-200 dark:border-gray-800 p-4">
              <div className="text-lg font-medium">{user.name}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Role: {user.role}</div>
            </div>
            <ul className="rounded-lg border border-slate-200 dark:border-gray-800 p-4 list-disc pl-5">
              {tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-gray-900/40">
          <h2 className="font-semibold mb-3">Key points</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Use <code>className</code> instead of <code>class</code>.</li>
            <li>Attributes are camelCased: <code>onClick</code>, <code>htmlFor</code>.</li>
            <li>Wrap multi-line returns in parentheses.</li>
          </ul>
          <div className="mt-4 text-sm">
            <a className="text-blue-600 hover:underline" href="https://react.dev/learn/writing-markup-with-jsx" target="_blank" rel="noreferrer">React: Writing markup with JSX</a>
          </div>
        </div>
      </div>
    </section>
  );
}


