import React from 'react'
import { Link } from 'react-router-dom'

import { Circle, Headline } from '../../Components'

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
            photos {
              sourceUrl
            }
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
            <section className='section bg-black ph7-l pb5-l white mb2'>
              {data.pouches.edges.slice(0, 1).map((item, idx) => (
                <Headline article={item} title='POUCH' color='white' />
              ))}
            </section>
            <section className='ph7-l mv2'>
              <h2 className='f2 mh7-l mh4-m mh2'>The Latest</h2>
              <div className='flex flex-wrap items-center mh7-l mh4 mb4'>
                {data.pouches.edges.slice(1).map((item, idx) => (
                  <article key={idx} className='w-25-l w-50-m w-100 mv2 ph2 '>
                    <Link
                      to={`/blog/pouch/${item.node.slug}`}
                      className='link dim lh-title w-25 '
                    >
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

export default Pouch
