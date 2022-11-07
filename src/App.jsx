import React from 'react'
import { Carousel, Cart, FlexContent, Footer, Sales, Stories } from './components'
import Navbar from './components/Navbar'
import { heroapi,popularsales,toprateslaes,highlight,sneaker,story,footerAPI } from './data/data'
const App = () => {
  return (
   <>
   <Navbar/>
   <Cart/>
    <main className='flex flex-col gap-16 relative'>
      <Carousel heroapi={heroapi}/>
      <Sales endpoint={popularsales} ifExists/>
      <FlexContent endpoint={highlight} ifExists/>
      <Sales endpoint={toprateslaes}/>
      <FlexContent endpoint={sneaker}/>
      <Stories story={story} />
    </main>
    <Footer footerAPI={footerAPI}/>

   </>
  )
}

export default App