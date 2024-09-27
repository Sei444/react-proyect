import Header from './components/Header'
import Personal from './components/Personal'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Header />
      <section id='personal'>
        <Personal />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer/>
    </div>
  )
}

export default App
