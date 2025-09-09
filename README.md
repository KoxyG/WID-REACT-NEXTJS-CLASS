## React Teaching Lab — Next.js + Tailwind

A beautiful, beginner-friendly lab for teaching core React concepts: components, JSX, props, state, and event handling. Built with Next.js (Pages Router) and Tailwind CSS, featuring interactive examples and an integrated demo.

### Tech stack
- Next.js 15 (Pages Router)
- React 19
- Tailwind CSS v4 with `@tailwindcss/postcss`

### Getting started
1) Install dependencies
```bash
npm install
```

2) Start the dev server
```bash
npm run dev
```

3) Open `http://localhost:3000`

### Project structure
```text
src/
  pages/
    _app.js          # wraps all pages with Navbar component
    _document.js     # html/head/body customization
    navbar.js        # navigation bar with links to all pages
    index.js         # landing with topic cards
    components.js    # Components topic page
    jsx.js           # JSX topic page
    props.js         # Props topic page
    state.js         # State topic page
    events.js        # Events topic page
    demo.js          # Integrated demo page
    api/hello.js     # example API route
  components/
    Avatar.js        # shared avatar (size prop supported)
    Profile.js       # small profile row
    Gallery.js       # list of profiles
    LikeButton.js    # internal counter button
    CommentBox.js    # controlled input + list
    Newsletter.js    # newsletter signup component
styles/
  globals.css        # Tailwind layer + theme tokens
```

### Navigation
The app uses a consistent navbar (`navbar.js`) that wraps all pages via `_app.js`. The navbar includes:
- **Home** — Landing page with topic cards
- **Components** — Components: composition and reuse
- **JSX** — JSX: expressions, attributes, lists
- **Props** — Props: inputs and defaults
- **State** — State: `useState` and updates
- **Events** — Events: controlled inputs and submit
- **Demo** — Integrated article with avatar, likes, comments

### Routes
- `/` — Landing page with cards linking to topics
- `/components` — Components: composition and reuse
- `/jsx` — JSX: expressions, attributes, lists
- `/props` — Props: inputs and defaults
- `/state` — State: `useState` and updates
- `/events` — Events: controlled inputs and submit
- `/demo` — Integrated article with avatar, likes, comments

### Tailwind CSS
- Tailwind is enabled via `@tailwindcss/postcss` in `postcss.config.mjs` and imported in `src/styles/globals.css`.
- Dark mode-friendly styles and subtle gradients used across pages.

### Scripts
```json
{
  "dev": "next dev --turbopack",
  "build": "next build --turbopack",
  "start": "next start"
}
```

### Learning references
- React — Your first component: `https://react.dev/learn/your-first-component`
- React — Writing markup with JSX: `https://react.dev/learn/writing-markup-with-jsx`
- React — Responding to events: `https://react.dev/learn/responding-to-events`
- React — Choosing the state structure: `https://react.dev/learn/choosing-the-state-structure`
- GeeksforGeeks — Components: `https://www.geeksforgeeks.org/reactjs/reactjs-components/`
- GeeksforGeeks — State: `https://www.geeksforgeeks.org/reactjs/reactjs-state/`
- GeeksforGeeks — Events: `https://www.geeksforgeeks.org/reactjs/react-js-events/`

### Notes
- File extensions: `.js` for React files (or `.jsx` if your team prefers). For TypeScript, use `.tsx` when JSX is present.
