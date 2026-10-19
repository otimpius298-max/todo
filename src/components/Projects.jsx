
function Projects({title, description}){
    return (
        <div className="mx-auto max-w-3xl px-6 text-center">
  <h1 className="text-3xl font-bold text-amber-200 sm:text-4xl">{title}</h1>
  <p className="mt-4 text-lg leading-relaxed text-blue-100">{description}</p>
</div>
    )
}
export default Projects