function Article() {
  return (
<div>
  <section id="projects" className="bg-blue-950 px-6 py-24">
    <h2 className="mx-auto max-w-5xl text-3xl font-bold text-amber-200 sm:text-4xl text-center">
      Projects Completed
    </h2>

    <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
      <article className="flex flex-col rounded-2xl border border-amber-200/20 bg-blue-900/60 p-6 transition hover:-translate-y-1 hover:border-amber-200/60">
        <h3 className="text-xl font-semibold text-amber-200">Clinic Website</h3>
        <p className="mt-3 leading-relaxed text-blue-100">
          Responsive marketing site for a dental clinic with a hero, services
          and booking section.
        </p>
        <p className="mt-4 flex-1 text-sm font-medium text-blue-300">
          HTML, Tailwind CSS
        </p>
        <a href="#" className="mt-6 font-semibold text-amber-200 hover:underline">
          View project
        </a>
      </article>

      <article className="flex flex-col rounded-2xl border border-amber-200/20 bg-blue-900/60 p-6 transition hover:-translate-y-1 hover:border-amber-200/60">
        <h3 className="text-xl font-semibold text-amber-200">
          E-commerce Store API
        </h3>
        <p className="mt-3 leading-relaxed text-blue-100">
          REST API for products, carts and orders with authentication.
        </p>
        <p className="mt-4 flex-1 text-sm font-medium text-blue-300">
          Python, Django, DRF
        </p>
        <a href="#" className="mt-6 font-semibold text-amber-200 hover:underline">
          View project
        </a>
      </article>

      <article className="flex flex-col rounded-2xl border border-amber-200/20 bg-blue-900/60 p-6 transition hover:-translate-y-1 hover:border-amber-200/60">
        <h3 className="text-xl font-semibold text-amber-200">Task Tracker</h3>
        <p className="mt-3 leading-relaxed text-blue-100">
          Simple to-do app with filters and saved state in the browser.
        </p>
        <p className="mt-4 flex-1 text-sm font-medium text-blue-300">
          JavaScript, CSS
        </p>
        <a href="#" className="mt-6 font-semibold text-amber-200 hover:underline">
          View project
        </a>
      </article>
    </div>
  </section>

  <section id="experience" className="bg-blue-900 px-6 py-24">
    <h2 className="mx-auto max-w-3xl text-3xl font-bold text-amber-200 sm:text-4xl text-center">
      Experience
    </h2>

    <div className="mx-auto mt-10 max-w-3xl space-y-6">
      <article className="rounded-2xl border border-amber-200/20 bg-blue-950/60 p-6">
        <h3 className="text-xl font-semibold text-amber-200">
          Freelance Web Developer
        </h3>
        <p className="text-sm font-medium text-blue-300">2025 – Present</p>
        <p className="mt-3 leading-relaxed text-blue-100">
          Built responsive websites and web apps for small businesses, from
          design to deployment.
        </p>
      </article>

      <article className="rounded-2xl border border-amber-200/20 bg-blue-950/60 p-6">
        <h3 className="text-xl font-semibold text-amber-200">
          Junior Developer / Intern
        </h3>
        <p className="text-sm font-medium text-blue-300">2024 – 2025</p>
        <p className="mt-3 leading-relaxed text-blue-100">
          Worked on front-end features and learned Python and Django while
          collaborating with a team.
        </p>
      </article>
    </div>
  </section>
</div>
  );
}
export default Article;