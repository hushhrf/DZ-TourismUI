import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MailList from "../components/MailList"
import HeroDiv from "../components/HeroDiv"
import PopularDest from "../components/PopularDest"
import FeaturedProperties from "../components/FeaturedProperties"




const Home = () => {
  return (
    <div>
      
      <main><HeroDiv/>
        <PopularDest/>
        <FeaturedProperties/>
        <MailList/>
            
      {/* <Search_bar/> */}
      </main>
      <Footer />
    </div>
  )
}

export default Home