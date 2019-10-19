import React from 'react'
import { infoBlack, infoRed } from '../../data'

const Info = () => {
  return (
    <>
      <section className='pt6-ns pt4 bg-near-black near-white section-layout'>
        {infoBlack.map(section => (
          <inner className='pb6-ns pb4 text-grid grid-container--content'>
            <div className='grid-block--title mh4'>
              <h2 className='f1-ns f2'>{section.title}</h2>
            </div>
            <div className='grid-block-content mh4'>
              <p className='text f2-ns f4 measure-wide'>
                {section.copy}
                {section.copy2 ? (
                  <>
                    {' '}
                    <br /> {section.copy2}{' '}
                  </>
                ) : (
                  ''
                )}
              </p>
            </div>
          </inner>
        ))}
      </section>
      <section className='pt6-ns pt4 bg-dark-red near-black section-layout justify-between'>
        {infoRed.map(section => (
          <inner className='pb6-ns pb4 text-grid grid-container--content'>
            <div className='grid-block--title mh4'>
              <h2 className='f1-ns f2'>{section.title}</h2>
            </div>
            <div className='grid-block-content mh4'>
              <p className='text f2-ns f4 measure-wide'>
                {section.copy}
                {section.copy2 ? (
                  <>
                    {' '}
                    <br /> {section.copy2}{' '}
                  </>
                ) : (
                  ''
                )}
              </p>
            </div>
          </inner>
        ))}
      </section>
    </>
  )
}

export default Info
