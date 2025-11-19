import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
      <footer className='bg-neutral-900 dark:bg-neutral-950 text-neutral-300 dark:text-neutral-400 py-12 text-center px-6 mt-10'>
        <h2 className='text-lg font-semibold text-white'>AGA • Front-End Developer</h2>

        <div className='flex justify-center space-x-6 mt-4'>
          <a href="https://github.com/alfredogalmirez" target='_blank' className='hover:text-white transtition'>GitHub</a>
          <a href="https://www.linkedin.com/in/alfredoalmirez/" target='_blank' className='hover:text-white transtition'>LinkedIn</a>
          <NavLink to="/contact" className="hover:text-white transition">Email</NavLink>
        </div>

        <p className='text-sm text-neutral-500 mt-6'>@ {new Date().getFullYear()} Alfredo Almirez. All rights reserved.</p>
      </footer>
  )
}

export default Footer