// Page component focusing on event handling patterns
import Newsletter from "@/components/Newsletter";
export default function EventsPage() {
  return (
    <section className="space-y-8">
      {/* Page header */}
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Events</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-2">Handle user actions like clicks, input, and submit.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Example column with a newsletter form */}
        <div className="rounded-xl border border-slate-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-gray-900/40">
          <h2 className="font-semibold mb-3">Example</h2>
          <div className="rounded-lg border border-slate-200 dark:border-gray-800 p-4">
            <Newsletter />
          </div>
        </div>

        {/* Key points and references */}
        <div className="rounded-xl border border-slate-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-gray-900/40">
          <h2 className="font-semibold mb-3">Key points</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Use camelCase event props like <code>onClick</code>, <code>onSubmit</code>.</li>
            <li>Pass a function as the handler, not the result of calling it.</li>
            <li>Use <code>event.preventDefault()</code> for forms.</li>
          </ul>
          <div className="mt-4 text-sm">
            <a className="text-blue-600 hover:underline" href="https://react.dev/learn/responding-to-events" target="_blank" rel="noreferrer">React: Responding to events</a>
            <span className="mx-2">·</span>
            <a className="text-blue-600 hover:underline" href="https://www.geeksforgeeks.org/reactjs/react-js-events/" target="_blank" rel="noreferrer">GfG: Events</a>
          </div>
        </div>
      </div>
    </section>
  );
}


