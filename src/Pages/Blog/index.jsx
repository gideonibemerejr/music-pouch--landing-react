import React from 'react'
import { Link } from 'react-router-dom'
import { Circle, Nav } from '../../Components'

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
          pouchMeta {
            image {
              sourceUrl
            }
          }
        }
      }
    }
  }
`

const Blog = () => {
  return (
    <Query asyncMode query={query}>
      {({ loading, error, data }) => {
        return loading ? (
          <div className='mt4 flex flex-column justify-start items-center vh-100'>
            <Circle />
            <h1>Loading</h1>
          </div>
        ) : (
          <>
            <section className='section bg-black ph7-l pb5-l white mb2'>
              {data.pouches.edges.slice(0, 1).map((item, idx) => (
                <article key={item.node.id} className='mh7-l mh4-m'>
                  <ul className='cf list ph0 ma0 w-100 h-100 flex justify-center items-center pv4'>
                    <li
                      className='fl w-100 w-50-ns sans-serif'
                      style={{ color: '#EEEEEE' }}
                    >
                      <div className='flex flex-column justify-center items-center'>
                        <div>
                          <h1 className='fw9 f1 b dib mh4 lh-solid ma0 flex flex-row-ns items-start-ns flex-column-reverse justify-center items-center h-100'>
                            <span>POUCH</span>{' '}
                            <span className='f2'>
                              <Circle />
                            </span>
                          </h1>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <Link
                    className='link db pb4 ph0-l no-underline'
                    to={`/blog/pouch/${item.node.slug}`}
                  >
                    <div className='flex flex-column flex-row-ns items-center'>
                      <div className='pr3-ns mb4 mb0-ns w-100 w-50-ns'>
                        <img
                          src={item.node.pouchMeta.image.sourceUrl}
                          className='db'
                          alt='A dimly lit room with a computer interface terminal.'
                        />
                      </div>
                      <div className='w-100 w-50-ns pl3-ns tl-ns tc'>
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
                        <p className='f6 lh-copy mv0'>
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
            <section className='ph7-l mv2'>
              <h2 className='f2 mh7-l mh4-m mh2'>The Latest</h2>
              <div className='flex flex-wrap items-center justify-between mh7-l mh4 mb4'>
                {data.pouches.edges.slice(1, 5).map((item, idx) => (
                  <article key={idx} className='w-25-l w-50-m w-100 mv2 ph2 '>
                    <a href='/' className='link dim lh-title w-25 '>
                      <img
                        src='http://tachyons.io/img/cat-720.jpg'
                        className='w-100 db'
                        alt='Closeup of a tabby cat yawning.'
                      />
                      <div className='bg-white pa2 flex flex-column justify-around h5 items-center card'>
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
            <section className='ph7-l mv2'>
              <div className='ph2 '>
                <div className='mh7-l mh4 bt b--black-10' />
                {data.pouches.edges.map((item, idx) => (
                  <article className=' mh7-l mh4 tl-ns tc'>
                    <a
                      className='db mv4 pa0 no-underline black bg-white'
                      href='#0'
                    >
                      <div className='flex flex-column flex-row-ns items-center'>
                        <div className='pr3-ns mb4 mb0-ns w-100 w-50-ns'>
                          <img
                            src='http://mrmrs.github.io/photos/cpu.jpg'
                            className='dib ma0'
                            alt='A dimly lit room with a computer interface terminal.'
                          />
                        </div>
                        <div className='w-100 w-50-ns pl3-ns bg-white ph3 pb3 flex flex-column items-center'>
                          <div>
                            <h1 className='f3 fw7  mt0 lh-title'>
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
                              <span className='black-50'>
                                / JANUARY 20 2020
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            </section>
          </>
        )
      }}
    </Query>
  )
}

export default Blog
