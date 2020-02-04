import React from 'react'
import { Layout } from '../../Components'
import { Sections } from './components'

const HomePage = props => {
  return (
    <Layout {...props}>
      <Sections />
    </Layout>
  )
}

export default HomePage
