import MainTitle from "../../common/titles"
import ConocenosAnim from "./animation"

function Conocenos() {

    return (
        <section id="evolucion" className="w-full flex flex-col md:flex-row-reverse justify-center items-center gap-8 lg:gap-4 mt-12 overflow-x-clip">
            <ConocenosAnim />
            <div className="flex flex-col justify-center items-center gap-4">
                <MainTitle>
                    Evolución del<br />
                    marketing<br />
                    de influencers
                </MainTitle>
                <p className="Aglet-extra px-4 w-full text-center text-lg text-white">
                    Soluciones eficaces para tus campañas con<br />creadores de contenido en redes sociales
                </p>
                <div className="flex flex-row justify-evenly items-center w-full">
                    <button className="px-6 py-2 font-bold Aglet-bold bg-[#F4CA58] rounded-full text-[#965BDD] duration-200 hover:brightness-110">Conocenos</button>
                    <button className="px-2 py-2 Aglet text-[#F4CA58] duration-200 hover:brightness-110">¿Cómo funciona?</button>
                </div>
            </div>
        </section>
    )
}

export default Conocenos
