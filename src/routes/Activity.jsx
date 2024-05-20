import Footer from "../components/Footer"

import PopularDest from "../components/PopularDest"
import FeaturedProperties from "../components/FeaturedProperties"
import MailList from "../components/MailList"

import ActHero from "../components/activity/ActHero"

const Activity = () => {
  return (
    <div>
        
        <ActHero/>
        <PopularDest/>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
    </div>
  )
}

export default Activity