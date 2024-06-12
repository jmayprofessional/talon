import './App.css'
import { Box } from "@mui/material";
import NavigationBar from './components/navigationBar/navigationBar'
import HeroSection from './components/hero/heroSection'
import GallerySection from './components/gallery/gallerySection'
import PricingSection from './components/pricing/pricingSection'
import AboutUsSection from './components/aboutUs/aboutUsSection'
import FooterSection from './components/footer/footerSection'
import SocialsSection from './components/socials/socialsSection'

function App() {

  return (
    <>
      <NavigationBar />
      <HeroSection />
      <Box id="gallery">
      <GallerySection />
      </Box>
      <Box id="pricing">
      <PricingSection />
      </Box>
      <Box id="about">
      <AboutUsSection />
      </Box>
      <Box id="pricing">
      <SocialsSection />
      </Box>
      <FooterSection />
    </>
  )
}

export default App
