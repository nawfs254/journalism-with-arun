import './App.css'
import About from './Component/About/About'
import Courses from './Component/Courses/Courses'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Marquee from './Component/Marquee/Marquee'
import Testimolials from './Component/Testimonials/Testimolials'

function App() {

  return (
    <>
      <Header></Header>
      <Marquee></Marquee>
      <About></About>
      <Courses></Courses>
      <Testimolials></Testimolials>
      <Footer></Footer>
    </>
  )
}

export default App
