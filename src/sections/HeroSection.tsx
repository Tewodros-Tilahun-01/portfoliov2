function HeroSection() {
  return (
    <section className="rounded-3xl bg-neutral-900 ring-1 ring-neutral-800/80 p-10">
      <p className="text-neutral-300">
        Hello, I’m <span className="text-emerald-400">Lead Data Scientist</span>
      </p>
      <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight">
        Senior Data Engineer and
        <span className="mx-2 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-300">
          Data Scientist
        </span>
        Based in
      </h1>
      <h2 className="text-5xl md:text-6xl font-extrabold">
        California, Los Angeles.
      </h2>

      <p className="mt-6 max-w-2xl text-neutral-400">
        Have worked in a variety of positions, including key developer, solution
        designer, and data architect. Strong engineering background combined
        with closely working with business customers.
      </p>
    </section>
  );
}
export default HeroSection;
