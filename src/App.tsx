import './App.css'
import { Comolohacemos } from './components/sections/comolohacemos'
import Conocenos from './components/sections/conocenos'
import { Experiencia } from './components/sections/experienciaduh'
import Header from './components/sections/header'
import { MarcasCreadores } from './components/sections/marcascreadores'
import { Pensada } from './components/sections/pensadaparati'

function App() {

  return (
    <>
      <Header />
      <Conocenos/>
      <Pensada />
      <Comolohacemos />
      <MarcasCreadores />
      <Experiencia />
    </>
  )
}

export default App
