import React from 'react'
import { Link } from 'react-router-dom'

import { Circle } from '../../Components'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`
  {
    photoEssays {
      edges {
        node {
          id
          title
          slug
          author {
            id
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

const PhotoEssays = props => {
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
            <section className='ph7-l mv2'>
              <h2 className='f2 mh7-l mh4-m mh2 tc'>Photo Essays</h2>
              <div className='ph2 '>
                <div className='mh7-l mh4 bt b--black-10' />
                {data.photoEssays.edges.map((item, idx) => (
                  <article className=' mh7-l mh4 tl-ns tc'>
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
                              className='f3-l f5 fw7  mt0 lh-title'
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

export default PhotoEssays
