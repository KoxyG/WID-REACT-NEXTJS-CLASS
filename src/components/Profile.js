// Displays a small user profile with avatar and name
function Profile({ name, avatar }) {
  return (
    <div className="flex items-center gap-3">
      {/* Circular avatar image */}
      <img className="size-10 rounded-full" src={avatar} alt={name} />
      {/* Person's display name */}
      <div className="font-medium">{name}</div>
    </div>
  );
}
export default Profile;


