
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
  return (
  <>
      <Header/>
      <div>{children}</div>
      <Footer/>
      </>
  )
}

export default Layout
