import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
// import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Layout from './components/Layout'
import Projects2 from './components/Projects'

function App() {
  

  return (
    <Layout>
      <Sidenav/>
      <Main/>
      <hr />
      <About/>
      <hr />
      <Skills/>
      <hr/>
      <Work/>
      <hr/>
      <Projects2/>
      <hr/>
      <Contact/>
      <hr/>
      <Footer/>
    </Layout>
  )
}

export default App
