import Link from 'next/link'
import React from 'react'

function Email() {
  return (
    <div className='email'>
      <Link href="mailto:nigmshrma@gmail.com" className='email-link'>nigmshrma@gmail.com</Link>
    </div>
  )
}

export default Email
