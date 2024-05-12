import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Search_bar from "../components/Search_bar"
import Hero_div from "../components/Hero_div"
import PopularDest from "../components/accommodation/PopularDest"
import HeroDiv from "../components/HeroDiv"




const Home = () => {
  return (
    <div>
      <Navbar />
      <main><HeroDiv/>
            
      {/* <Search_bar/> */}
      </main>
      <Footer />
    </div>
  )
}

export default Home