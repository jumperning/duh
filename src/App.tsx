import './App.css'
import { Comolohacemos } from './components/sections/comolohacemos'
import Conocenos from './components/sections/conocenos'
import { Contactanos } from './components/sections/contacto'
import { Experiencia } from './components/sections/experienciaduh'
import { Footer } from './components/sections/footer'
import Header from './components/sections/header'
import { Pensada } from './components/sections/pensadaparati'
import QuienesSomos from './components/sections/quienesomos'

function App() {

  return (
    <div className='overflow-x-hidden Aglet scrollbar-thin scrollbar-rounded-lg scrollbar-thumb-white/25 scrollbar-thumb-rounded scrollbar-track-transparent'>
      <Header />
      <Conocenos />
      <QuienesSomos />
      <Pensada />
      <Comolohacemos />
      <Experiencia />
      <Contactanos />
      <Footer />
    </div>
  )
}

export default App
