import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import PopularDest from "../components/PopularDest"
import FeaturedProperties from "../components/FeaturedProperties"
import MailList from "../components/MailList"
import AccHero from "../components/accommodation/AccHero"

const Accommodation = () => {
  return (
    <div>
        
        <AccHero/>
        <PopularDest/>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
    </div>
  )
}

export default Accommodation