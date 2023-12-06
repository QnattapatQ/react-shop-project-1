import BgAttach from '../BgAttach/BgAttach'
import Header from '../Header/Header'
import { HeroSection } from '../HeroSection/HeroSection'
import MenModel from '../MenModel/MenModel'
import PopularProduct from '../PopularProduct/PopularProduct'
import { useState, useEffect, useContext } from 'react'
import WomenPreview from '../WomenPreview/WomenPreview'

const Home_Page = () => {

    return (
        <div>
            <Header/>
            <HeroSection/>
            <PopularProduct/>
            <MenModel/>
            <BgAttach/>
            <WomenPreview/>
        </div>
    )
}

export default Home_Page