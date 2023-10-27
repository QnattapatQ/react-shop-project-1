import React from 'react'
import Header from '../Header/Header'
import { HeroSection } from '../HeroSection/HeroSection'
import PopularProduct from '../PopularProduct/PopularProduct'

const Home_Page = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <PopularProduct/>
        </div>
    )
}

export default Home_Page