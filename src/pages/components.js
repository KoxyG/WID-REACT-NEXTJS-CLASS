import Gallery from "@/components/Gallery";

export default function ComponentsPage() {
  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Components</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-2">Reusable UI building blocks that return JSX.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-gray-900/40">
          <h2 className="font-semibold mb-3">Example</h2>
          <div className="rounded-lg border border-slate-200 dark:border-gray-800 p-4">
            <Gallery />
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-gray-900/40">
          <h2 className="font-semibold mb-3">Key points</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Names must start with a capital letter.</li>
            <li>Define components at the top level, not nested.</li>
            <li>Compose components together.</li>
          </ul>
          <div className="mt-4 text-sm">
            <a className="text-blue-600 hover:underline" href="https://react.dev/learn/your-first-component" target="_blank" rel="noreferrer">React: Your first component</a>
            <span className="mx-2">·</span>
            <a className="text-blue-600 hover:underline" href="https://www.geeksforgeeks.org/reactjs/reactjs-components/" target="_blank" rel="noreferrer">GfG: Components</a>
          </div>
        </div>
      </div>
    </section>
  );
}


