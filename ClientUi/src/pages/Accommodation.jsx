import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroDiv from "../components/HeroDiv"
import PopularDest from "../components/accommodation/PopularDest"
import FeaturedProperties from "../components/accommodation/FeaturedProperties"
import MailList from "../components/accommodation/MailList"

const Accommodation = () => {
  return (
    <div>
        <Navbar />
        <HeroDiv/>
        <PopularDest/>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
    </div>
  )
}

export default Accommodation