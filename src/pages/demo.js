// Import shared components to compose the integrated demo
import Avatar from "@/components/Avatar";
import LikeButton from "@/components/LikeButton";
import CommentBox from "@/components/CommentBox";

// Page that integrates components, props, state, and events
export default function DemoPage() {
  return (
    <section className="space-y-8">
      {/* Page header */}
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Integrated Demo</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-2">Components + JSX + Props + State + Events</p>
      </header>

      {/* Demo card combining multiple concepts */}
      <article className="rounded-2xl border border-slate-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/40 space-y-5">
        {/* Header area with an avatar and like button */}
        <div className="flex items-center justify-between">
          <Avatar name="Ada Lovelace" src="https://i.imgur.com/6dkR2W7.jpeg" alt="Ada" />
          <LikeButton initial={3} label="Applaud" />
        </div>
        {/* Content title and description */}
        <h2 className="text-xl font-semibold">Learning React</h2>
        <p className="text-slate-700 dark:text-slate-300">Build UIs with components, JSX, props, state, and events.</p>
        {/* Comments section with controlled input and list */}
        <CommentBox />
      </article>
    </section>
  );
}


