import React from 'react'
import Header from '../Header/Header'
import { FooterSection } from '../FooterSection/FooterSection'
import { AllProduct } from '../AllProducts/AllProduct.jsx'

const Shop = () => {
    return (
        <div>
            <Header/>
            <AllProduct/>
            <FooterSection/>
        </div>
    )
}

export default Shop