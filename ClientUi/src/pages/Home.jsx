import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Search_bar from "../components/Search_bar"
import Hero_div from "../components/Hero_div"


const Home = () => {
  return (
    <div>
      <Navbar />
      <main><Hero_div/>
      {/* <Search_bar/> */}
      </main>
      <Footer />
    </div>
  )
}

export default Home