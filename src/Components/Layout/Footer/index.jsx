import React from 'react'

const Footer = () => {
  return (
    <footer className='mb4'>
      <div className='mh4 mb5'>
        <h2 className='f1-ns f2'>Contact</h2>
      </div>
      <section className='section-layout mh4 justify-between'>
        <article>
          <inner className='mb4 text-grid grid-container--content'>
            <div className='grid-block--title'>
              <h2 className='f2-ns f3'>General inquiries</h2>
            </div>
            <div className='grid-block--content flex justify-end'>
              <p className='text f2-ns f5 measure-wide'>
                <a
                  href='mailto:info@musicpouch.us'
                  className='link black hover-dark-red'
                >
                  info@musicpouch.us
                </a>
              </p>
            </div>
          </inner>
        </article>
      </section>
    </footer>
  )
}

export default Footer
