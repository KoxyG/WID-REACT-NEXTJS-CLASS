import "@/styles/globals.css";
import Link from "next/link";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-black text-slate-800 dark:text-slate-100">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-gray-900/70 border-b border-slate-200 dark:border-gray-800">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-xl">React Teaching Lab</Link>
          <div className="flex gap-3 text-sm">
            <Link className="hover:text-blue-600" href="/components">Components</Link>
            <Link className="hover:text-blue-600" href="/jsx">JSX</Link>
            <Link className="hover:text-blue-600" href="/props">Props</Link>
            <Link className="hover:text-blue-600" href="/state">State</Link>
            <Link className="hover:text-blue-600" href="/events">Events</Link>
            <Link className="hover:text-blue-600" href="/demo">Demo</Link>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">{children}</main>
      <footer className="border-t border-slate-200 dark:border-gray-800 py-6 text-center text-sm text-slate-500">
        Built with Next.js + Tailwind
      </footer>
    </div>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
