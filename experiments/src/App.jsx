import React from 'react'
import Accordian from './Components/accordian/accordian'
import RandomColor from './Components/random-color/RandomColor'
import Star from './Components/Star-rating/Star'
import ImageSlider from './Components/Image-Slider/ImageSlider'

const App = () => {
  return (
    <div>
      <Accordian />
      <RandomColor/>
      <Star />
      <ImageSlider />
    </div>
  )
}

export default App