import Button from '@/components/Button'
import React from 'react'

function Contact() {
  return (
    <div className='contact' id='contact' >
      <h2 className="contact-title">
        What&apos; Next?

      </h2>
      <h2 className="contact-sub-title">
        Get In Touch
      </h2>
      <p className="contact-text">
      I&apos;m a web developer with a knack for crafting delightful online experiences. Let&apos; build something remarkable together!
      </p>
      <div className="contact-cta button">
     <Button text="Say hello" link="mailto:nigmshrma@gmail.com"/>
      </div>
    </div>
  )
}

export default Contact
