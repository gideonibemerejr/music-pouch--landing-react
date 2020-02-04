import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { DetailHeadline, Circle } from '../../Components'
import Footer from '../../Components/Layout/Footer'
class PhotoEssayDetail extends Component {
  state = {}
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const props = this.props

    const { loading } = props.data

    return (
      <>
        {loading ? (
          <div className='flex flex-column justify-center items-center vh-100'>
            <Circle />
            <h1>Loading</h1>
          </div>
        ) : (
          <>
            <div className='bg-black'>
              <DetailHeadline
                title={props.data.photoEssay.title}
                pouch={false}
              />
            </div>
            <article className='helvetica pb5'>
              {/* Blockquote 
            // TODO: ADD PROPS of statement & statement
        */}
              {/* <Blockquote /> */}
              <div className='f5 f3-m lh-copy'>
                <div className='cf dt-l w-100 bt b--black-10 pv4 bg-black white'>
                  <div className='dtc-l v-mid mw6 ph3-l'>
                    <img
                      className='w-100 photo'
                      src={
                        props.data.photoEssay.photoEssayMeta.photos[0].sourceUrl
                      }
                      alt=''
                    />
                  </div>
                  <div className='dtc-l v-mid f6 f5-m f4-l measure-l'>
                    <p
                      className='measure pv4-l center'
                      dangerouslySetInnerHTML={{
                        __html: props.data.photoEssay.photoEssayMeta.intro
                      }}
                    />
                  </div>
                </div>
                <div className='cf pt3 ph2 flex items-center'>
                  <div className='w-100 w-50-l ph2 pb3 flex justify-center items-center'>
                    <img
                      className='dib w-100'
                      src={
                        props.data.photoEssay.photoEssayMeta.photos[1].sourceUrl
                      }
                      alt='of a dusk skyline above a grassy rockface covered in trees.'
                    />
                  </div>
                  <div className='fl w-50 w-50-l ph2 pb3 flex justify-center items-center'>
                    <img
                      className='dib w-100'
                      src={
                        props.data.photoEssay.photoEssayMeta.photos[2].sourceUrl
                      }
                      alt=' of the sea and sky on the horizon with the foundations of a demolished house.'
                    />
                  </div>
                </div>
                <div
                  className='center measure-wide f6 f5-m f4-l pv3 lh-copy ph2'
                  dangerouslySetInnerHTML={{
                    __html: props.data.photoEssay.content
                  }}
                />
                <div className='flex flex-wrap justify-center items-center ph2'>
                  {props.data.photoEssay.photoEssayMeta.photos
                    .slice(3)
                    .map((photo, idx) => (
                      <div
                        key={idx}
                        className='w-100 w-50-l ph2 pb3 flex justify-center items-center'
                      >
                        <img
                          sizes='(max-width: 479px) 87vw, (max-width: 767px) 42vw, (max-width: 991px) 47vw, 50vw'
                          className='dib w-100 photo'
                          src={photo.sourceUrl}
                          alt='of a dusk skyline above a grassy rockface covered in trees.'
                        />
                      </div>
                    ))}

                  {/* <div className='fl w-50 w-50-l pr1 pr0-l pl2-l pb3'>
                    <img
                      className='db w-100'
                      src='http://mrmrs.github.io/photos/011.jpg'
                      alt='Photo of the sea and sky on the horizon with the foundations of a demolished house.'
                    />
                  </div>
                  <div className='fl w-50 w-50-l pl2 pl0-l pr2-l pb3'>
                    <img
                      className='db w-100'
                      src='http://mrmrs.github.io/photos/012.jpg'
                      alt='Photo of the sea with mist covering the rocky formations near the shore.'
                    />
                  </div>
                  <div className='fl w-100 w-50-l pl2-l'>
                    <img
                      className='db w-100'
                      src='http://mrmrs.github.io/photos/013.jpg'
                      alt='Photo of the foundations of a building on a cliff overlooking a lighthouse.'
                    />
                  </div> */}
                </div>
              </div>
            </article>
          </>
        )}
        <Footer />
      </>
    )
  }
}

const getPhotoEssayBySlug = gql`
  query getPhotoEssayBySlug($slug: String) {
    photoEssay: photoEssayBy(uri: $slug) {
      title
      content
      photoEssayMeta {
        intro
        photos {
          sourceUrl
        }
      }
    }
  }
`

export default graphql(getPhotoEssayBySlug, {
  options: props => {
    const slug = props.match.params.slug
    return {
      variables: {
        slug
      }
    }
  }
})(PhotoEssayDetail)
