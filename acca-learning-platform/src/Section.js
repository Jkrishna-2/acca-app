import React from 'react'

const Section = ({title, content}) => {
  return (
    <section className='py-5'>
      <div className='container'>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  )
}

export default Section
