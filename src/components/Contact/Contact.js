import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <p>
      As a developer, I&#39;m always looking for new challenges. So if you have some opportunities/challenges or just want to build amazing things together, don&#39;t hesitate to contact me!</p>
      <a href={`mailto:${contact.email}`} translate="no">
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact
