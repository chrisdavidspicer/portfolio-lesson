import '../styles/globals.css'
import Navbar from '../components/Navbar.jsx'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />

      {/* footer would go here */}
    </>
  )
}

export default MyApp
