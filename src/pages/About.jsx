const About = () => {
  return (
    <section className="bg-slate-50 dark:bg-neutral-900 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <h1 className="text-5xl font-bold text-center text-neutral-900 dark:text-slate-50 mb-16">
          About Me
        </h1>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-neutral-800 dark:text-slate-50">
              Who I Am
            </h2>
            <p className="text-lg leading-relaxed text-neutral-600 dark:neutral-300">
              Hi, I’m <span className="font-semibold">Alfredo</span> — a front-end developer
              passionate about building modern, responsive web experiences.
              I love creating clean UI, smooth interactions, and intuitive user flows
              using <span className="font-semibold">React</span> and <span className="font-semibold">Tailwind CSS</span>.
            </p>

            <p className="text-lg leading-relaxed text-neutral-600 dark:neutral-300">
              I combine creativity and logic to build interfaces that feel both beautiful
              and functional. I’m always exploring new tools, learning new techniques, and
              improving my craft one project at a time.
            </p>

            <button className="px-8 py-3 rounded-full bg-neutral-900 text-slate-50 dark:bg-slate-50 dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-200 transition">
              View Projects
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-slate-50 dark:bg-neutral-800 shadow-xl rounded-2xl p-10 space-y-8 border border-neutral-200 dark:border-neutral-700">

            {/* TITLE */}
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-slate-50">
              What I'm Learning
            </h3>

            <ul className="space-y-4 text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-xl">💻</span>
                <p><strong>Front-End Development</strong> — React, Vite, Tailwind CSS</p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-xl">🚀</span>
                <p>Strengthening my <strong>HTML, CSS, JavaScript</strong> fundamentals</p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-xl">⚛️</span>
                <p>Building components and pages using <strong>React</strong></p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-xl">🎨</span>
                <p>Styling and layouting using <strong>Tailwind CSS</strong></p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-xl">📱</span>
                <p>Creating clean and responsive UI for all screen sizes</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 bg-slate-50 dark:bg-neutral-800 p-10 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-slate-50 mb-6">
            Tools & Technologies
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-col-4 gap-6">
            {["HTML", "CSS", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Git & GitHub"].map((tool) => (<div key={tool} className="p-4 text-center rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-slate-50 font-medium hover:scale-105 transition">{tool}</div>))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About