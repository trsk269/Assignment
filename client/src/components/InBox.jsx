import React from 'react'
import './InBox.css'
import Email from './Email'
import Info from './Info'
import About from './About'
import TextEditor from './TextEditor'

function InBox() {
  return (
    <div className='container'>
      <div className='mails'>
        <Info />
        <Email />
        <Email />
        <Email />
        <Email />
        <Email />
      </div>

      <div className='text-editor'>
        <TextEditor />
      </div>
      <div className='about'>
        <About />
      </div>
    </div>
  )
}

export default InBox