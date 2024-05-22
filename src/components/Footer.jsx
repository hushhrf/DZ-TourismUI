import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaBars, FaPhone } from "react-icons/fa";
import {Link} from "react-router-dom";
const Footer = () => {
    return(
     <footer>
        <section className="flex flex-col bg-[#07253f] pt-8">
            <div className="lg:flex items-start justify-between pb-8">
                <div className="lg:flex justify-between lg:w-2/3 m-auto lg:px-0 px-3">
                    <div>
                        <img src="/assets/logo2.png" alt="logo" className="w-20 mb-4" />
                        <p className="text-xs text-white mt-2">Terms & conditions</p>
                        <p className="text-xs text-white mt-2" >privacy Policy</p>
                        <div className="flex items-center pt-6 w-full lg:justify-between lg:gap-x-0 gap-x-6">
                            <FaFacebookF className="text-white" />
                            <TiSocialGooglePlus className="text-white" />
                            <FaTwitter className="text-white" />
                            <FaInstagram className="text-white" />
                        </div>
                        <p className="text-xs text-white mt-2">Copyright © 2024 DZTourism. All rights reserved.</p>
                    </div>
                    <div>
                        <p className="text-xs text-white mt-2">Write a review</p>
                        <p className="text-xs text-white mt-2">Hotel recommandations</p>
                        <Link to='/ActivityRegister' className="text-xs text-white mt-2 underline">join us as Activity Provider</Link>
                    </div>
                    
                    <div>
                        <p className="text-xs text-white mt-2">
                            Travel tips and inspiration
                        </p>
                        <p className="text-xs text-white mt-2">Hiking and adventures</p>
                        <p className="text-xs text-white mt-2">Attractions</p>
                        <p className="text-xs text-white mt-2">Become an activity provider</p>
                    </div>
                    <div>
                        <p className="text-[#3b6680] font-medium lg:mb-4 lg:mt-0 mt-6 uppercase">
                            Support
                        </p>
                        <p className="text-xs text-white mt-2">Blog</p>
                        <p className="text-xs text-white mt-2">Help</p>
                        <p className="text-xs text-white mt-2">Contact us</p>
                        <div className="py-2 flex text-white uppercase font-medium items-center leading-snug ">
                            <button className="rounded-full px-4 py-1 hoverBtn flex items-center gap-2">
                                <FaPhone className="rotate-90" />
                                <p>+213</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
     </footer>
    );
};
export default Footer;