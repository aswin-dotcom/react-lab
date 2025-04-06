import React from 'react'
// import Accordian from './Components/accordian/accordian'
// import RandomColor from './Components/random-color/RandomColor'
// import Star from './Components/Star-rating/Star'
// import ImageSlider from './Components/Image-Slider/ImageSlider'
// import Index from './Components/Recursive-view'
// import menus from './Components/Recursive-view/data'
// import Qrcode from './Components/QRCode/Qrcode'
import Scrol from './Components/Scroll-indicator/Scrol'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Index from './Components/Custom-Tabs'
import CustomPopups from './Components/Custom-Popup/CustomPopups'

const App = () => {
  return (
     <div > {/* <Accordian />
      <RandomColor/>
      <Star />
      <ImageSlider />
      <Index  menus={menus}/>
      <Qrcode /> */}
      {/* <Scrol /> */}
      {/* <Index /> */}
      <CustomPopups />
      </div>
      
     
    
  )
}

export default App