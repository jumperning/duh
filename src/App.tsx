import './App.css'
import { Comolohacemos } from './components/sections/comolohacemos'
import Conocenos from './components/sections/conocenos'
import { Contactanos } from './components/sections/contacto'
import { Experiencia } from './components/sections/experienciaduh'
import { Footer } from './components/sections/footer'
import Header from './components/sections/header'
import { MarcasCreadores } from './components/sections/marcascreadores'
import { Pensada } from './components/sections/pensadaparati'
import QuienesSomos from './components/sections/quienesomos'

function App() {

  return (
    <>
      <Header />
      <Conocenos/>
      <QuienesSomos/>
      <Pensada />
      <Comolohacemos />
      <MarcasCreadores />
      <Experiencia />
      <Contactanos/>
      <Footer/>
    </>
  )
}

export default App
