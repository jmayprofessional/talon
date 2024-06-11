import './App.css'
import NavigationBar from './components/navigationBar/navigationBar'
import HeroSection from './components/hero/heroSection'
import GallerySection from './components/gallery/gallerySection'
import PricingSection from './components/pricing/pricingSection'
import AboutUsSection from './components/aboutUs/aboutUsSection'
import FooterSection from './components/footer/footerSection'

function App() {

  return (
    <>
      <NavigationBar />
      <HeroSection />
      <GallerySection />
      <PricingSection />
      <AboutUsSection />
      <FooterSection />
    </>
  )
}

export default App
