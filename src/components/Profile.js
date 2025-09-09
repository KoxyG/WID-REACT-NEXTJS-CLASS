export default function Profile({ name, avatar }) {
  return (
    <div className="flex items-center gap-3">
      <img className="size-10 rounded-full" src={avatar} alt={name} />
      <div className="font-medium">{name}</div>
    </div>
  );
}


