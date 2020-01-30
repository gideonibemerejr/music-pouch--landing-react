import React from 'react'
import { Link } from 'react-router-dom'
import { Circle, Nav } from '../../Components'

import Menu from '../../Components/Menu'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`
  {
    pouches {
      edges {
        node {
          id
          title
          slug
          author {
            name
          }
        }
      }
    }
  }
`

const Pouch = props => {
  return (
    <Query asyncMode query={query}>
      {({ loading, error, data }) => {
        return loading ? (
          <div className='flex flex-column justify-center items-center vh-100'>
            <Circle />
            <h1>Loading</h1>
          </div>
        ) : (
          <>
            <section className='section bg-black ph5-l pb5-l  white'>
              {data.pouches.edges.slice(0, 1).map((item, idx) => (
                <article key={item.node.id} className='mh7-l'>
                  <ul className='cf list pl0 ml0 ma0 w-100 h-100 flex justify-between items-center pb4'>
                    <li
                      className='fl w-100 w-50-ns sans-serif pb5'
                      style={{ color: '#EEEEEE' }}
                    >
                      <div className='flex flex-column justify-center items-center'>
                        <div>
                          <h1 className='fw9 f1 b dib mh4 lh-solid ma0 flex items-start h-100'>
                            <span>POUCH</span>{' '}
                            <span className='f2'>
                              <Circle />
                            </span>
                          </h1>
                          {/*
                  <blockquote className='ph0 pb2 mb3 mh0 mt2 flex flex-column'>
                    <p className=' measure f4-l f5 ma0 fw7'>
                      Short writings
                    </p>
                    <p className=' measure f4-l f5 ma0 fw7'>
                      Escritos Cortos
                    </p>
                    <p className=' measure f4-l f5 ma0 fw3'>短い文章</p>
                    <p className='measure f4-l f5 ma0 fw5'>
                      Богино бичээсүүд
                    </p>
                  </blockquote> */}
                        </div>
                      </div>
                    </li>
                  </ul>
                  <Link
                    className='link db pb4 ph3 ph0-l no-underline'
                    to={`/blog/pouch/${item.node.slug}`}
                  >
                    <div className='flex flex-column flex-row-ns items-center'>
                      <div className='pr3-ns mb4 mb0-ns w-100 w-50-ns'>
                        <img
                          src='http://mrmrs.github.io/photos/cpu.jpg'
                          className='db'
                          alt='A dimly lit room with a computer interface terminal.'
                        />
                      </div>
                      <div className='w-100 w-50-ns pl3-ns tl-l tc'>
                        <h1
                          dangerouslySetInnerHTML={{
                            __html: item.node.title
                          }}
                          className='f1-l f3 fw7 b  mt0 lh-title '
                        />
                        <h2
                          dangerouslySetInnerHTML={{
                            __html: item.node.title
                          }}
                          className='f4-l f5 fw1 b  mt0 lh-title '
                        />
                        <p className='f6 lh-copy mv0'>
                          BY: {item.node.author.name.toUpperCase()}
                        </p>
                        <p className='f6 lh-copy mv0 '>
                          <span className='white-50'>
                            <strong className='white'>RAP </strong> / JANUARY 20
                            2020
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </section>
            <section className='ph5-l'>
              <h2 className='f2 mh7-l mh2'>The Latest</h2>
              <div className='flex flex-wrap items-center justify-between-l justify-center mh7-l mh2'>
                {data.pouches.edges.slice(1, 5).map((item, idx) => (
                  <article
                    key={idx}
                    className='bg-white mw6 mw5-l mw6-m mv4 mh1 card'
                  >
                    <a href='/' className='link dim lh-title w-25'>
                      <img
                        src='http://tachyons.io/img/cat-720.jpg'
                        className='w-100 db'
                        alt='Closeup of a tabby cat yawning.'
                      />
                      <div className='pa3 flex flex-column justify-between h5 items-center'>
                        <h2
                          dangerouslySetInnerHTML={{
                            __html: item.node.title
                          }}
                          className='f4 tc'
                        />
                        <div className='tc'>
                          <p className='f6 lh-copy mv0'>
                            BY:&nbsp;
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item.node.author.name.toUpperCase()
                              }}
                            />
                          </p>

                          <p className='f6 lh-copy mv0'>
                            {' '}
                            <strong>RAP</strong>{' '}
                            <span className='black-50'>/ JANUARY 20 2020</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            </section>
            <section className='center mw8  mh2'>
              <h2 className='mh2'>Inside the Pouch</h2>
              <article className='bt bb b--black-10'>
                <a
                  className='db mv4 mh2 pa0 no-underline black bg-white'
                  href='#0'
                >
                  <div className='flex flex-column flex-row-ns items-center'>
                    <div className='pr3-ns mb4 mb0-ns w-100 w-60-ns'>
                      <img
                        src='http://mrmrs.github.io/photos/cpu.jpg'
                        className='db'
                        alt='A dimly lit room with a computer interface terminal.'
                      />
                    </div>
                    <div className='w-100 w-40-ns pl3-ns bg-white ph3 pb3 inside'>
                      <h1 className='f4 fw7  mt0 lh-title'>
                        Tech Giant Invests Huge Money Lorem ipsum dolor
                      </h1>
                      <p className='f6 lh-copy mv0'>
                        BY:&nbsp;
                        <span
                        // dangerouslySetInnerHTML={{
                        //   __html: item.node.author.name.toUpperCase()
                        // }}
                        />
                      </p>
                      <p className='f6 lh-copy mv0'>
                        {' '}
                        <strong>RAP</strong>{' '}
                        <span className='black-50'>/ JANUARY 20 2020</span>
                      </p>
                    </div>
                  </div>
                </a>
              </article>
            </section>
          </>
        )
      }}
    </Query>
  )
}

export default Pouch
