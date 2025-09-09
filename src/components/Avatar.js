export default function Avatar({ src, alt, name, size = 40 }) {
  return (
    <div className="flex items-center gap-3">
      <img
        className="rounded-full border border-slate-200 dark:border-gray-800"
        src={src}
        alt={alt}
        width={size}
        height={size}
        style={{ width: size, height: size }}
      />
      {name ? <div className="font-medium">{name}</div> : null}
    </div>
  );
}


