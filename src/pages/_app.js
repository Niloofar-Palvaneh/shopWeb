import Header  from '@/components/header/Header'
import Navbar from '@/components/nav/Navbar'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className='px-[200px] xl:px-[10px]'>
    <Component {...pageProps} />
    </div>
    </>
  )
}
