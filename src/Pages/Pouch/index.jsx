import React from 'react'
import { Link } from 'react-router-dom'
import { Circle, Nav } from '../../Components'

import Menu from '../../Components/Menu'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const Pouch = props => {
  return (
    <Query
      query={gql`
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
      `}
    >
      {({ loading, error, data }) => {
        return loading ? (
          <div className='flex flex-column justify-center items-center vh-100'>
            <Circle />
            <h1>Loading</h1>
          </div>
        ) : (
          <>
            <div
              className='vh-100 dt w-100 flex flex-column  bg-dark-gray white cover'
              style={{
                background:
                  'url(http://mrmrs.github.io/photos/u/009.jpg) no-repeat center'
              }}
            >
              <Nav handleMenuClick={props.handleMenuClick} color={'black'} />
              <ul className='cf list pl0 ml0 w-100 h-100 flex justify-between items-center'>
                <li
                  className='fl w-100 w-50-ns sans-serif'
                  style={{ color: '#EEEEEE' }}
                >
                  <div className='flex flex-column justify-center items-center'>
                    <div>
                      <h1 className='fw9 f-subheadline-ns f1 b dib pr3 lh-solid ma0 flex items-start h-100'>
                        <span>POUCH</span>{' '}
                        <span className='f1'>
                          <Circle />
                        </span>
                      </h1>

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
                      </blockquote>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <section className='mh7-l mh2'>
              <h2 className='f2 mh3'>The Latest</h2>
              {data.pouches.edges.slice(0, 1).map((item, idx) => (
                <article key={item.node.id} className='bt bb b--black-10'>
                  <Link
                    className='db pv4 ph3 ph0-l no-underline black'
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
                      <div className='w-100 w-50-ns pl3-ns'>
                        <h1
                          dangerouslySetInnerHTML={{ __html: item.node.title }}
                          className='f3 fw7  mt0 lh-title '
                        />
                        <p className='f6 lh-copy mv0'>
                          BY: {item.node.author.name.toUpperCase()}
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
              <div className='flex flex-wrap items-center justify-between-l justify-center mh2'>
                {data.pouches.edges.slice(0, 3).map((item, idx) => (
                  <article key={idx} className='bg-white mw55  mv4 mh1 card'>
                    <a href='/' className='link dim lh-title w-75'>
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
                          className='f5 tc'
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
              <h2 className='mh3'>Inside the Pouch</h2>
              <article className='bt bb b--black-10'>
                <a
                  className='db mv4 mh3 pa0 no-underline black bg-white'
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
