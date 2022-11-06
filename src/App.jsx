import React from 'react'
import { Carousel, FlexContent, Sales, Stories } from './components'
import { heroapi,popularsales,toprateslaes,highlight,sneaker,story } from './data/data'
const App = () => {
  return (
   <>
    <main className='flex flex-col gap-16 relative'>
      <Carousel heroapi={heroapi}/>
      <Sales endpoint={popularsales} ifExists/>
      <FlexContent endpoint={highlight} ifExists/>
      <Sales endpoint={toprateslaes}/>
      <FlexContent endpoint={sneaker}/>
      <Stories story={story} />
    </main>
   </>
  )
}

export default App