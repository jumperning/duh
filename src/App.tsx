import './App.css'
import { Comolohacemos } from './components/sections/comolohacemos'
import { Contactanos } from './components/sections/contacto'
import { Experiencia } from './components/sections/experienciaduh'
import Header from './components/sections/header'
import { MarcasCreadores } from './components/sections/marcascreadores'
import { Pensada } from './components/sections/pensadaparati'

function App() {

  return (
    <>
    <Header/>
    <Pensada/>
    <Comolohacemos />
    <MarcasCreadores/>
   <Experiencia/>
   <Contactanos/>
    </>
  )
}

export default App
