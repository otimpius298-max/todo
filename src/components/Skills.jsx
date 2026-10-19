function Skills() {
  return (
<section id="skills" className="bg-blue-900 px-6 py-24">
  <div className="mx-auto max-w-3xl">
    <h2 className="text-3xl font-bold text-amber-200 sm:text-4xl text-center">
      Skills
    </h2>
    <div className="mt-4 h-1 w-16 rounded bg-amber-200" />

    <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {[
        "HTML & CSS",
        "JavaScript",
        "Tailwind CSS",
        "Python",
        "Django",
        "Git",
      ].map((skill) => (
        <li
          key={skill}
          className="rounded-xl border border-amber-200/30 bg-blue-950/60 px-5 py-4 text-center font-medium text-blue-100 transition hover:-translate-y-1 hover:border-amber-200 hover:text-amber-200"
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
</section>
  );
}
export default Skills;