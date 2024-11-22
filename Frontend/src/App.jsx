import React from 'react'
import Headers from "./components/Headers"
import Categorys from './components/Categorys'
import Toprest from './components/Toprest'
import FoodDelivery from './components/FoodDelivery.jsx'
import Footer from './components/Footer.jsx'


import DownloadAppSection from './components/DownloadApp.jsx'

const App = () => {
  return (
    <div className='xl:justify-center'>

      <Headers />
      <Categorys />
      <Toprest />
      <FoodDelivery />
      <DownloadAppSection />
      <Footer />
    </div>
  )
}

export default App