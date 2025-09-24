// import ThemeToggle from "./ThemeToggle";

function Sidebar() {
  const items = ["#menu", "#settings", "#user", "#chart", "#layers"];
  return (
    <aside className="hidden  max-w-18 md:flex flex-col justify-center max-h-min items-center pt-4 sticky top-14">
      {/* <ThemeToggle /> */}
      <div className="flex flex-col gap-4 rounded-full bg-secondary p-3 shadow-lg ring-1 ring-primary max-h-min">
        {items.map((k) => (
          <a
            key={k}
            aria-label={k}
            href={k}
            className="size-12 grid place-items-center rounded-full bg-tertiary text-secondary hover:text-primary hover-bg transition-colors"
          >
            <span className="text-xl">•</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
export default Sidebar;
