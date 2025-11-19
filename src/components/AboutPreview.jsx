

const AboutPreview = () => {
  return (
    <section className="bg-slate-50 dark:bg-neutral-900">
      <div className="text-center max-w-xl mx-auto py-20 px-6 rounded-2xl shadow-sm bg-white dark:bg-neutral-900 space-y-5">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-slate-50">About</h1>
        <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">I’m Alfredo, a front-end developer passionate about building modern, responsive web experiences. I enjoy working with React and Tailwind CSS to create clean and user-friendly interfaces. I'm continuously learning and improving my skills to deliver better digital solutions.</p>
        <button className="rounded-full bg-neutral-800 text-lg text-white dark:bg-slate-50 dark:text-neutral-900 px-6 py-3 hover:bg-neutral-700 dark:hover:bg-neutral-300 transition duration-300 cursor-pointer">Learn More</button>
      </div>
    </section>
  )
}

export default AboutPreview