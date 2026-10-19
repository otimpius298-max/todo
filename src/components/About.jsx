function About() {
  return (
<section id="about" className="bg-blue-950 px-6 py-24">
  <div className="mx-auto max-w-3xl">
    <h2 className="text-3xl font-bold text-amber-200 sm:text-4xl text-center">
      About
    </h2>
    <div className="mt-4 h-1 w-16 rounded bg-amber-200" />

    <p className="mt-8 text-lg leading-relaxed text-blue-100">
      I'm a developer who enjoys turning ideas into working products. I build
      interfaces with HTML, CSS and JavaScript, and back-ends with Python and
      Django. I care about readable code, responsive design and great user
      experience.
    </p>

    <ul className="mt-8 flex flex-wrap gap-3">
      {["HTML", "CSS", "JavaScript", "Python", "Django"].map((skill) => (
        <li
          key={skill}
          className="rounded-full border border-amber-200/40 px-4 py-1.5 text-sm font-medium text-amber-200"
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
</section>
  );
}
export default About;