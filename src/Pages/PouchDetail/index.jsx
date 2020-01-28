import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
class PouchDetail extends Component {
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
          <div>
            <p>Content Pouch</p>
          </div>
        )}
      </>
    )
  }
}

const getEventBySlug = gql`
  query getEventBySlug($slug: String) {
    event: eventBy(uri: $slug) {
      title
      content
      eventMeta {
        exhibitionType
        artists
        curators
        sponsors
        eventDate
        activations
        eventImages {
          sourceUrl
        }
      }
    }
  }
`
export default graphql(getEventBySlug, {
  options: props => {
    const slug = props.match.params.slug
    return {
      variables: {
        slug
      }
    }
  }
})(PouchDetail)
