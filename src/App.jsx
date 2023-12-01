import { createContext, useState, useEffect } from 'react'
import './App.css'
import Home_Page from './component/All_Pages/Home_Page'

export const SizeWidth = createContext();
export const MobileMenuShow = createContext();

function App() {

    /*const [mobileSize, setMobileSize] = useState(false);

    const [desktopSize, setDesktopSize] = useState({
        winWidth: window.innerWidth
    })

    const detechSize = () => {
        setDesktopSize({
            winWidth: window.innerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detechSize);


        if(desktopSize.winWidth <= 1024){
            setMobileSize(true);
            console.log(mobileSize)
        } else {
            setMobileSize(false);
            console.log(mobileSize)
        }

        return () => {
            window.removeEventListener('resize', detechSize);
        }

    },[desktopSize]); */


    return (
        <MobileMenuShow.Provider value={mobileSize}>
            <SizeWidth.Provider value={desktopSize.winWidth}>
                <div>
                    <Home_Page/>
                </div>
            </SizeWidth.Provider>
        </MobileMenuShow.Provider>
    )
}

export default App
