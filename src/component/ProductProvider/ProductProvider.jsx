import React, { createContext, useEffect, useState } from 'react'
import popularProduct from '../PopularProduct/product';

export const ProductContext = createContext(null);

const ProductExport = ({ children }) => {

    const contextProduct = { popularProduct };

    return (
        <ProductContext.Provider value={{contextProduct}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductExport