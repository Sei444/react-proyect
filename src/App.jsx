import Description from "./components/Panels/Description";
import Hobbies from "./components/Panels/Hobbies";
import Experience from "./components/Panels/experience";
import ButtonA from "./components/Panels/button";
import './App.css';

function App() {

  return (
    <>
    <body>
      <section className='Description'>
        <Description></Description>
      </section>

      <section className='Hobbies'>
        <Hobbies></Hobbies>
      </section>
      
      <section className='Experience'>
        <Experience></Experience>
      </section>

      <section className='Button_accept'>
      <ButtonA></ButtonA>
      </section>

      <section className='Button_close'>
        <button>Cerrar</button>
      </section>    
    </body>
    
    </>
  )
}

export default App
