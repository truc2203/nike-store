import React from 'react'
import { Carousel } from './components'
import { heroapi } from './data/data'
const App = () => {
  return (
   <>
    <main>
      <Carousel heroapi={heroapi}/>
    </main>
   </>
  )
}

export default App