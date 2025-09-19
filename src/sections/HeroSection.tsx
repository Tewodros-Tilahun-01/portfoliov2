function HeroSection() {
  return (
    <section className="  p-10 pb-0 ">
      <p className="text-secondary">
        Hello, I'm <span className="text-accent">Lead Data Scientist</span>
      </p>
      <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight">
        Senior Data Engineer and
        <span className="mx-2 inline-block rounded-full bg-accent px-3 py-1 text-accent-secondary">
          Data Scientist
        </span>
        Based in
      </h1>
      <h2 className="text-5xl md:text-6xl font-extrabold">
        California, Los Angeles.
      </h2>

      <p className="mt-6 max-w-2xl text-tertiary">
        Have worked in a variety of positions, including key developer, solution
        designer, and data architect. Strong engineering background combined
        with closely working with business customers.
      </p>
    </section>
  );
}
export default HeroSection;
