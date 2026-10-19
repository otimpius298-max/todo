function Contact() {
  return (
   <div>
  <section id="contact" className="bg-blue-950 px-6 py-24">
    <h2 className="mx-auto max-w-3xl text-3xl font-bold text-amber-200 sm:text-4xl text-center">
      Contact Via
    </h2>

    <ul className="mx-auto mt-10 flex max-w-3xl flex-col gap-4 sm:flex-row justify-center">
      <li>
        <a
          href="otimpius@gmail.com"
          className="block rounded-lg border border-amber-200 px-6 py-3 text-center font-semibold text-amber-200 transition hover:bg-amber-200"
        >
          Email
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-lg border border-amber-200 px-6 py-3 text-center font-semibold text-amber-200 transition hover:bg-amber-200 hover:text-blue-900"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-lg border border-amber-200 px-6 py-3 text-center font-semibold text-amber-200 transition hover:bg-amber-200 hover:text-blue-900"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  </section>
</div>
  );
}
export default Contact;