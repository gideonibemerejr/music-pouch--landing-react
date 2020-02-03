import React from 'react'

import { Link } from 'react-router-dom'

import { Circle } from '../../index'

const Headline = ({ article, title, color }) => {
  return (
    <article key={article.node.id} className='mh7-l mh4-m'>
      {title ? (
        <ul className='cf ph0 list ma0 w-100 h-100 flex justify-center items-center pb4'>
          <li className='fl w-100 w-50-ns sans-serif' style={{ color: color }}>
            <div className='flex flex-column justify-center items-center'>
              <div>
                <h4 className='fw9 f1 b dib mh4 lh-solid ma0 flex items-start h-100'>
                  <span>{title}</span>{' '}
                  <span className='f2'>
                    <Circle />
                  </span>
                </h4>
              </div>
            </div>
          </li>
        </ul>
      ) : null}
      <Link
        className='link db pb4 ph0-l no-underline'
        to={`/blog/pouch/${article.node.slug}`}
      >
        <div
          style={{ outline: 0 }}
          className={`${color} flex flex-column flex-row-ns items-center`}
        >
          <div className='pr3-ns mb4 mb0-ns w-100 w-50-ns'>
            <img
              src={article.node.pouchMeta.photos[0].sourceUrl}
              className='db'
              alt='A dimly lit room with a computer interface terminal.'
            />
          </div>
          <div className='w-100 w-50-ns pl3-ns tl-ns tc'>
            <h1
              dangerouslySetInnerHTML={{
                __html: article.node.title
              }}
              className='f1-l f3 fw7 b  mt0 lh-title '
            />
            <h2
              dangerouslySetInnerHTML={{
                __html: article.node.title
              }}
              className='f4-l f5 fw1 b  mt0 lh-title '
            />
            <p className='f6 lh-copy mv0'>
              BY: {article.node.author.name.toUpperCase()}
            </p>
            <p className='f6 lh-copy mv0'>
              <span className={`${color}-50`}>
                <strong className={color}>RAP </strong> / JANUARY 20 2020
              </span>
            </p>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default Headline
