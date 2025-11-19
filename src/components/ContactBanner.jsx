import { NavLink } from "react-router-dom"

const ContactBanner = () => {
  return (
    <section className='bg-neutral-900'>
      <div className='max-w-3xl mx-auto text-center py-24 px-6 mt-10'>
        <h1 className="text-4xl md:text-5xl text-white font-semibold">Let's work together.</h1>
        <p className="text-neutral-300 text-lg mt-4">
          I'm open to freelance work, collaborations, or full-time opportunities.
        </p>

        <NavLink to='/contact' className="inline-block mt-8 bg-slate-50 text-neutral-900 px-8 py-3 rounded-full font-medium hover:bg-neutral-300 transition duration-300">
          Contact Me
        </NavLink>
      </div>
    </section>
  )
}

export default ContactBanner