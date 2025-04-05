import React from 'react'
import Accordian from './Components/accordian/accordian'
import RandomColor from './Components/random-color/RandomColor'
import Star from './Components/Star-rating/Star'
import ImageSlider from './Components/Image-Slider/ImageSlider'
import Index from './Components/Recursive-view'
import menus from './Components/Recursive-view/data'

const App = () => {
  return (
    <div>
      <Accordian />
      <RandomColor/>
      <Star />
      <ImageSlider />
      <Index  menus={menus}/>
    </div>
  )
}

export default App