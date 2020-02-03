import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Circle, FeatureText } from '../../Components'

class PouchDetail extends Component {
  state = {}
  render() {
    const props = this.props

    const { loading } = this.props.data
    return loading ? (
      <div className='flex flex-column justify-center items-center vh-100'>
        <Circle />
        <h1>Loading</h1>
      </div>
    ) : (
      <section className='section bg-black ph7-l pb5-l white mb2'>
        <FeatureText
          title={props.data.pouch.title}
          text={props.data.pouch.content}
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
        image {
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
