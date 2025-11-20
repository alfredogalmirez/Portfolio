import Profile from '../assets/images/profile.webp';

const Hero = () => {
  return (
    <section>
      <div className='font-lexend min-h-screen flex flex-col justify-center items-center space-y-4 bg-slate-50 dark:bg-neutral-900 py-8 px-8'>
        <img src={Profile} alt="Profile Photo" className='w-100 h-100 object-cover rounded-full items-center space-y-6 bg-slate-50 dark:bg-neutral-900 py-8 px-8' />
        <h1 className=' text-6xl text-neutral-900 dark:text-neutral-50 font-bold'>Alfredo Almirez</h1>
        <h2 className='text-4xl text-neutral-700 dark:text-neutral-400 font-semibold'>Front-End Developer</h2>
        <p className='max-w-xl text-center text-lg text-neutral-600 dark:text-neutral-300 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde culpa esse in maxime impedit. Sint assumenda deleniti facere! Provident, autem.</p>
        <button className='rounded-full bg-neutral-800 dark:bg-slate-50 dark:text-neutral-900 text-lg text-white px-6 py-3 hover:bg-neutral-700 dark:hover:bg-neutral-300 transition duration-300 cursor-pointer'>Get in Touch</button>
      </div>
    </section>
  )
}

export default Hero