// Import Profile to render a simple list of people
import Profile from "@/components/Profile";

// A small gallery composed of Profile components
export default function Gallery() {
  return (
    <div className="space-y-3">
      {/* Section title */}
      <h3 className="font-medium">Amazing scientists</h3>
      {/* Profiles list */}
      <div className="space-y-2">
        <Profile name="Katherine Johnson" avatar="https://i.imgur.com/MK3eW3Am.jpg" />
        <Profile name="Aklilu Lemma" avatar="https://i.imgur.com/lICfvbD.jpg" />
        <Profile name="Ada Lovelace" avatar="https://i.imgur.com/6dkR2W7.jpeg" />
      </div>
    </div>
  );
}


