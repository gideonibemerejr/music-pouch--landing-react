import React from 'react'
import { Link } from 'react-router-dom'
import { Circle, Headline } from '../../Components'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`
  {
    pouches(first: 5) {
      edges {
        node {
          id
          title
          slug
          author {
            name
          }
          pouchMeta {
            photos {
              sourceUrl
            }
          }
        }
      }
    }
    photoEssays(first: 5) {
      edges {
        node {
          id
          title
          slug
          author {
            name
          }
          photoEssayMeta {
            photos {
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
                <Headline article={item} title={null} color='white' />
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
                {data.photoEssays.edges.map((item, idx) => (
                  <article key={idx} className=' mh7-l mh4 tl-ns tc'>
                    <Link
                      className='db mv4 pa0 no-underline black bg-white'
                      to={`/blog/essays/${item.node.slug}`}
                    >
                      <div className='flex flex-column flex-row-ns items-center'>
                        <div className='pr3-ns mb4 mb0-ns w-100 w-50-ns'>
                          <img
                            src={item.node.photoEssayMeta.photos[0].sourceUrl}
                            className='dib ma0'
                            alt='A dimly lit room with a computer interface terminal.'
                          />
                        </div>
                        <div className='w-100 w-50-ns pl3-ns bg-white ph3 pb3 flex flex-column items-center'>
                          <div>
                            <h1
                              className='f3-l f5 fw7 mt0 lh-title'
                              dangerouslySetInnerHTML={{
                                __html: item.node.title
                              }}
                            />

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
                              <span className='black-50'>
                                / JANUARY 20 2020
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
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
