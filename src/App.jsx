import React from 'react'
import { Carousel, Sales } from './components'
import { heroapi,popularsales,toprateslaes } from './data/data'
const App = () => {
  return (
   <>
    <main className='flex flex-col gap-16 relative'>
      <Carousel heroapi={heroapi}/>
      <Sales endpoint={popularsales}/>
      <Sales endpoint={toprateslaes}/>
    </main>
   </>
  )
}

export default App