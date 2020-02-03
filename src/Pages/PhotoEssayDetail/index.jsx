import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { DetailHeadline } from '../../Components'
import Footer from '../../Components/Layout/Footer'
class PhotoEssayDetail extends Component {
  state = {}
  render() {
    const props = this.props

    const { loading } = props.data

    return (
      <>
        {loading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <div className='bg-black'>
              <DetailHeadline title={props.data.photoEssay.title} />
            </div>
            <article className='helvetica pb5'>
              {/* Blockquote 
            // TODO: ADD PROPS of statement & statement
        */}
              {/* <Blockquote /> */}
              <div className='f5 f3-m lh-copy'>
                <div className='cf dt-l w-100 bt b--black-10 pv4 bg-black white'>
                  <div className='dtc-l v-mid mw6 pr3-l'>
                    <img
                      className='w-100'
                      src={
                        props.data.photoEssay.photoEssayMeta.photos[0].sourceUrl
                      }
                      alt=''
                    />
                  </div>
                  <div className='dtc-l v-mid f6 f5-m f4-l measure-l'>
                    <p className='measure pv4-l center'>
                      <span className='fw9 fw4-ns'>
                        Before it burned to the ground, the structure
                      </span>{' '}
                      filled a small beach inlet below the Cliff House, also
                      owned by Adolph Sutro at the time. Shortly after closing,
                      a fire in 1966 destroyed the building while it was in the
                      process of being demolished. All that remains of the site
                      are concrete walls, blocked off stairs and passageways,
                      and a tunnel with a deep crevice in the middle. The cause
                      of the fire was arson. Shortly afterwards, the developer
                      left San Francisco and claimed insurance money.
                    </p>
                  </div>
                </div>
                <div className='cf pt3'>
                  <div className='fl w-100 w-50-l pr2-l pb3'>
                    <img
                      className='db w-100'
                      src='http://mrmrs.github.io/photos/010.jpg'
                      alt='Photo of a dusk skyline above a grassy rockface covered in trees.'
                    />
                  </div>
                  <div className='fl w-50 w-50-l pr1 pr0-l pl2-l pb3'>
                    <img
                      className='db w-100'
                      src='http://mrmrs.github.io/photos/011.jpg'
                      alt='Photo of the sea and sky on the horizon with the foundations of a demolished house.'
                    />
                  </div>
                </div>
                <div className='center measure-wide f6 f5-m f4-l pv3 lh-copy ph2'>
                  <p>
                    The choice of paper size is one of the first of any given
                    work to be printed. There are two basic paper size systems
                    in the world: the international A sizes, and the American
                    sizes.
                  </p>
                  <p>
                    The international Standard paper sizes, called the A series,
                    is based on a golden rectangle, the divine proportion. It is
                    extremely handsome and practical as well. It is adopted by
                    many countries around the world and is based on the German
                    DIN metric Standards. The United States uses a basic letter
                    size (8 1/2 x 11”) of ugly proportions, and results in
                    complete chaos with an endless amount of paper sizes. It is
                    a by-product of the culture of free enterprise, competition
                    and waste. Just another example of the misinterpretations of
                    freedom.
                  </p>
                  <p>
                    These are the basic DIN sizes in mm. for : A0, 841x1189 -
                    A1, 594x841 - A2, 420x594 - A3, 297x420 - A4, 210x297 - A5,
                    148x210 - A6, 105 x148 - A7, 74x 105 - A8, 52x74 - A9, 37x52
                    - A10, 26x37.
                  </p>
                  <p>
                    The A4 is the basic size for stationary. Two thirds of it is
                    a square, a nice economical happenstance resulting from the
                    golden rectangle. It is one of the reasons we tend to use as
                    much as possible the DIN sizes: proportions are always
                    leading to other nice proportions.
                  </p>
                  <p>
                    This does not happen with the American basic size which
                    leads to nothing. I counted 28 different standard sizes in
                    USA!. The only reason we use it is because everybody in USA
                    uses it, all stationary in USA is that size, so are manilla
                    folders, les and of ce equipment! The repercussion of
                    ugliness is endless.
                  </p>
                </div>
                <div className='cf'>
                  <div className='fl w-100 w-50-l pr2-l pb3'>
                    <img
                      className='db w-100'
                      src='http://mrmrs.github.io/photos/010.jpg'
                      alt='Photo of a dusk skyline above a grassy rockface covered in trees.'
                    />
                  </div>
                  <div className='fl w-50 w-50-l pr1 pr0-l pl2-l pb3'>
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
                  </div>
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
