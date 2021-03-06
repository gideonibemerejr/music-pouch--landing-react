import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Circle, FeatureText } from '../../Components'

class PouchDetail extends Component {
  state = {}
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const props = this.props

    const { loading } = this.props.data
    return loading ? (
      <div className='flex flex-column justify-center items-center vh-100'>
        <Circle />
        <h1>Loading</h1>
      </div>
    ) : (
      <section className='section db relative'>
        <div className='absolute w-100 bg-black vh-50' />
        <FeatureText
          pouch={true}
          title={props.data.pouch.title}
          text={props.data.pouch.content}
          image={
            props.data.pouch.pouchMeta.photos
              ? props.data.pouch.pouchMeta.photos[0].sourceUrl
              : null
          }
        />
      </section>
    )
  }
}
const getPouchBySlug = gql`
  query getPouchBySlug($slug: String) {
    pouch: pouchBy(uri: $slug) {
      title
      content
      pouchMeta {
        photos {
          sourceUrl
        }
      }
    }
  }
`
export default graphql(getPouchBySlug, {
  options: props => {
    const slug = props.match.params.slug
    return {
      variables: {
        slug
      }
    }
  }
})(PouchDetail)
