function Sidebar() {
  const items = ["menu", "settings", "user", "chart", "bolt", "layers"];
  return (
    <aside className="sticky top-6 self-start h-full">
      <div className="flex flex-col gap-4 rounded-full bg-neutral-800/80 p-3 shadow-lg ring-1 ring-neutral-700 w-full">
        {items.map((k) => (
          <button
            key={k}
            aria-label={k}
            className="size-12 grid place-items-center rounded-full bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
          >
            <span className="text-xl">•</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
export default Sidebar;
