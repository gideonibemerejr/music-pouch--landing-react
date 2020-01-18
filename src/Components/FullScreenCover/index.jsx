import React from 'react'

const FullScreenCover = () => {
  return (
    <header className='vh-100 bg-light-pink dt w-100'>
      <div
        style={{
          background:
            'url(http://mrmrs.github.io/photos/display.jpg) no-repeat center right',
          backgroundSize: 'cover'
        }}
        className='dtc v-mid cover ph3 ph4-m ph5-l'
      >
        <h1 className='f2 f-subheadline-l measure lh-title fw9'>
          A Night Taking Photos at San Francisco’s Spooky Ruins of the Sutro
          Baths
        </h1>
        <h2 className='f6 fw6 black'>A story by Nancy Drew</h2>
      </div>
    </header>
  )
}

export default FullScreenCover
