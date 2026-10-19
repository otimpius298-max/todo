function Head() {
  return (
<div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 flex items-center">
  <section
    id="top"
    className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center"
  >
    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-200/80">
      Web Developer
    </p>

    <h1 className="text-4xl font-bold text-amber-200 sm:text-5xl md:text-6xl">
      Otim Pius Portfolio
    </h1>

    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
      Web developer building clean, fast and useful websites and web apps.
      Based in Kampala, Uganda.
    </p>

    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <a
        href="#projects"
        className="rounded-lg bg-amber-200 px-6 py-3 font-semibold text-blue-900 transition hover:bg-amber-300"
      >
        View my work
      </a>
      <a
        href="#contact"
        className="rounded-lg border border-amber-200 px-6 py-3 font-semibold text-amber-200 transition hover:bg-amber-200 hover:text-blue-900"
      >
        Get in touch
      </a>
    </div>
  </section>
</div>
  );
}
export default Head;