function Sidebar() {
  const items = ["menu", "settings", "user", "chart", "bolt", "layers"];
  return (
    <aside className="hidden max-w-18 md:flex flex-col justify-center max-h-min items-center pt-4 sticky top-14">
      <button className=" mb-4 size-12 grid place-items-center rounded-full bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors">
        <span className="text-xl">•</span>
      </button>
      <div className="flex flex-col gap-4 rounded-full  bg-neutral-900 p-3 shadow-lg ring-1 ring-transparent max-h-min">
        {items.map((k) => (
          <button
            key={k}
            aria-label={k}
            className="size-12 grid place-items-center rounded-full bg-neutral-800/80  text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
          >
            <span className="text-xl">•</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
export default Sidebar;
