function Article() {
  return (
    <div>
      <section id="projects">
        <h2>Projects</h2>

        <article>
          <h3>Clinic Website</h3>
          <p>
            Responsive marketing site for a dental clinic with a hero, services
            and booking section.
          </p>
          <p>HTML, Tailwind CSS</p>
          <a href="#">View project</a>
        </article>

        <article>
          <h3>E-commerce Store API</h3>
          <p>REST API for products, carts and orders with authentication.</p>
          <p>Python, Django, DRF</p>
          <a href="#">View project</a>
        </article>

        <article>
          <h3>Task Tracker</h3>
          <p>Simple to-do app with filters and saved state in the browser.</p>
          <p>JavaScript, CSS</p>
          <a href="#">View project</a>
        </article>
      </section>

      <section id="experience">
        <h2>Experience</h2>

        <article>
          <h3>Freelance Web Developer</h3>
          <p>2025 – Present</p>
          <p>
            Built responsive websites and web apps for small businesses, from
            design to deployment.
          </p>
        </article>

        <article>
          <h3>Junior Developer / Intern</h3>
          <p>2024 – 2025</p>
          <p>
            Worked on front-end features and learned Python and Django while
            collaborating with a team.
          </p>
        </article>
      </section>
    </div>
  );
}
export default Article;