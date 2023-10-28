import { createContext, useState, useEffect } from 'react'
import './App.css'
import Home_Page from './component/All_Pages/Home_Page'

export const SizeWidth = createContext();
export const MobileMenuShow = createContext();
export const ProductSelect = createContext();

function App() {

    const [mobileSize, setMobileSize] = useState(false);

    const [desktopSize, setDesktopSize] = useState({
        winWidth: window.innerWidth
    })

    const [productSelect, setProductSelect] = useState(null);

    console.log(productSelect)

    const detechSize = () => {
        setDesktopSize({
            winWidth: window.innerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detechSize);

        if(desktopSize.winWidth <= 1024){
            setMobileSize(true);
        } else {
            setMobileSize(false);
        }

        return () => {
            window.removeEventListener('resize', detechSize);
        }

    },[desktopSize]);

    return (
        <ProductSelect.Provider value={{productSelect, setProductSelect}}>
            <MobileMenuShow.Provider value={mobileSize}>
                <SizeWidth.Provider value={desktopSize.winWidth}>
                    <div className='pb-[3000px]'>
                        <Home_Page/>
                    </div>
                </SizeWidth.Provider>
            </MobileMenuShow.Provider>
        </ProductSelect.Provider>
    )
}

export default App
