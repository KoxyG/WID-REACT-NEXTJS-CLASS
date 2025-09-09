import Profile from "@/components/Profile";

export default function Gallery() {
  return (
    <div className="space-y-3">
      <h3 className="font-medium">Amazing scientists</h3>
      <div className="space-y-2">
        <Profile name="Katherine Johnson" avatar="https://i.imgur.com/MK3eW3Am.jpg" />
        <Profile name="Aklilu Lemma" avatar="https://i.imgur.com/lICfvbD.jpg" />
        <Profile name="Ada Lovelace" avatar="https://i.imgur.com/6dkR2W7.jpeg" />
      </div>
    </div>
  );
}


