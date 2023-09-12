import './App.css'
import { Comolohacemos } from './components/sections/comolohacemos'
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
    </>
  )
}

export default App
