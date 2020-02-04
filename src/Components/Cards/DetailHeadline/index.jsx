import React from 'react'
import { Circle } from '../../index'
const DetailHeadline = ({ title, image, pouch }) => {
  return (
    <div className='white relative'>
      {pouch ? (
        <ul className='cf ph0 list ma0 w-100 h-100 flex justify-center items-center pb4'>
          <li
            className='fl w-100 w-50-ns sans-serif'
            style={{ color: 'white' }}
          >
            <div className='flex flex-column justify-center items-center'>
              <div>
                <h4 className='fw9 f3 b dib mh4 lh-solid ma0 flex items-center h-100'>
                  <span>POUCH</span>{' '}
                  <span className='f4'>
                    <Circle />
                  </span>
                </h4>
              </div>
            </div>
          </li>
        </ul>
      ) : null}
      <article className=''>
        <div className={`flex flex-column items-center`}>
          <div
            className='w-100 w-50-ns
           tc mw7'
          >
            <h1
              dangerouslySetInnerHTML={{
                __html: title
              }}
              className='f1-l f3 fw7 b  mt0 lh-title'
            />
          </div>
          {image ? (
            <div className='pr3-ns mb4 mb0-ns w-100 w-50-ns mw7'>
              <img
                src={image}
                className='db'
                alt='A dimly lit room with a computer interface terminal.'
              />
            </div>
          ) : null}
        </div>
      </article>
    </div>
  )
}

export default DetailHeadline
