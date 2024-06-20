import './style.css';
import React from 'react'

const ContactPage = () => {
  return (
    <div className='contact'>
      <h1>Contato</h1>
      <ul>
        <li>
          <a href="mailto:marcosludwig@gmail.com">E-mail</a>
        </li>
        <li>
          <a href="https://wa.me/5551984241492">WhatsApp</a>
        </li>
        <li>
          <a href="https://github.com/marcosludwig">GitHub</a>
        </li>
        <li>
          <a href="http://www.linkedin.com/in/marcospludwig">LinkedIn</a>
        </li>
        <li>
          <a href="http://instagram.com/ludwigmarcos">Instagram</a>
        </li>
        <li>
          <a href="https://www.facebook.com/marcos.ludwig/">Facebook</a>
        </li>
      </ul>
    </div>
  )
}

export default ContactPage