import BgAttach from '../BgAttach/BgAttach'
import Header from '../Header/Header'
import { HeroSection } from '../HeroSection/HeroSection'
import MenModel from '../MenModel/MenModel'
import PopularProduct from '../PopularProduct/PopularProduct'
import WomenPreview from '../WomenPreview/WomenPreview'
import { SummerProductSection } from '../SummerProduct/SummerProductSection.jsx'
import { CommentSection } from '../CommentSection/CommentSection.jsx'
import { CategorySection } from '../CategorySection/CategorySection.jsx'
import { FooterSection } from '../FooterSection/FooterSection.jsx'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home_Page = () => {

    return (
        <div>
            <Header/>
            <HeroSection/>
            <PopularProduct/>
            <MenModel/>
            <BgAttach/>
            <WomenPreview/>
            <SummerProductSection/>
            <CommentSection/>
            <CategorySection/>
            <FooterSection/>
        </div>
    )
}

export default Home_Page