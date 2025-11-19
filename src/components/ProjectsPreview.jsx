const ProjectsPreview = () => {
  return (
    <section className='bg-slate-50 dark:bg-neutral-900 py-20'>

      <h1 className='text-4xl text-center text-neutral-900 dark:text-slate-50 font-bold mt-12 mb-12'>Projects</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6'>
        <div className="bg-slate-100 dark:bg-neutral-800 p-6 rounded-xl shadow-md dark:shadow-neutral-700 space-y-3 transition ease-in-out hover:translate-y-1 hover:scale-110">
          <h2 className='text-2xl text-center font-semibold text-neutral-900 dark:text-neutral-50'>Project 1</h2>
          <p className="text-neutral-600 dark:text-neutral-50 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, earum?</p>
          <div className="max-w-40 mx-auto bg-indigo-100 dark:bg-neutral-300 text-indigo-800 py-2 px-2 rounded-full text-sm">HTML - CSS - React</div>
        </div>

        <div className="bg-slate-100 dark:bg-neutral-800 p-6 rounded-xl shadow-md dark:shadow-neutral-700 space-y-3 transition ease-in-out hover:translate-y-1 hover:scale-110">
          <h2 className='text-2xl text-center font-semibold text-neutral-900 dark:text-neutral-50'>Project 2</h2>
          <p className='text-neutral-600 dark:text-neutral-50 text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, earum?</p>
          <div className="flex items-center max-w-40 mx-auto bg-indigo-100 dark:bg-neutral-300 text-indigo-800 py-2 px-2 rounded-full text-sm">HTML - CSS - React</div>
        </div>
      </div>
      
      <div className="text-center mt-10">
      <button className='text-lg text-neutral-900 dark:text-slate-50 underline'>View All Projects</button>
      </div>

    </section>
  )
}

export default ProjectsPreview