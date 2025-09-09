// Import a reusable Avatar component that accepts src, alt, and size
import Avatar from "@/components/Avatar";

// Page component that teaches passing props
export default function PropsPage() {
  return (
    <section className="space-y-8">
      {/* Page header */}
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Props</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-2">Read-only inputs to components.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-gray-900/40">
          <h2 className="font-semibold mb-3">Example</h2>
          <div className="flex items-center gap-4 rounded-lg border border-slate-200 dark:border-gray-800 p-4">
            {/* Avatar with explicit size via prop */}
            <Avatar src="https://i.imgur.com/6dkR2W7.jpeg" alt="Ada" size={72} />
            <div>
              <div className="font-medium">Ada Lovelace</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Default size when omitted:</div>
              <div className="mt-2">
                {/* Avatar using default size */}
                <Avatar src="https://i.imgur.com/lICfvbD.jpg" alt="Aklilu" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-gray-900/40">
          <h2 className="font-semibold mb-3">Key points</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Props flow from parent to child; they are immutable in the child.</li>
            <li>Destructure in parameters and provide defaults.</li>
          </ul>
        </div>
      </div>

      <div className="text-sm">
        <a className="text-blue-600 hover:underline" href="https://react.dev/learn/your-first-component" target="_blank" rel="noreferrer">React: Your first component</a>
      </div>
    </section>
  );
}


