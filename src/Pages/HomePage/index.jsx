import React from 'react'
import { Layout } from '../../Components'
import { Sections } from './components'
import Menu from '../../Components/Menu'

const HomePage = props => {
  return (
    <Layout {...props}>
      <Sections />
    </Layout>
  )
}

export default HomePage
