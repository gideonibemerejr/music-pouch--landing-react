import React from 'react'

import { Circle, Headline } from '../../Components'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`
  {
    photoEssays {
      edges {
        node {
          id
          title
          author {
            id
            name
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

export default PhotoEssays
