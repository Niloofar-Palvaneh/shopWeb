import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Navbar from '@/components/nav/Navbar'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <div className=' xl:px-[10px]'>
    <Component {...pageProps} />
    </div>
    <Footer/>
    </>
  )
}
