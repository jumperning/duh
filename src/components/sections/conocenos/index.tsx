import MainTitle from "../../common/titles"
import ConocenosAnim from "./animation"

function Conocenos() {

    return (
        <section id="evolucion" className="w-full flex flex-col md:flex-row-reverse justify-center  sm:items-start items-center gap-8 sm:gap-44 mt-12 sm:mt-24 overflow-x-clip h-[50vh]">
            <ConocenosAnim />
            <div className="flex flex-col justify-center items-center gap-4 sm:gap-8">
                <MainTitle>
                    Evolución del<br />
                    marketing<br />
                    de influencers
                </MainTitle>
                <p className="Aglet-extra px-4 w-full text-center  sm:text-left text-lg text-white sm:leading-5">
                    Soluciones eficaces para tus campañas con<br />creadores de contenido en redes sociales
                </p>
                <div className="flex flex-row justify-evenly items-center sm:items-start sm:justify-start w-full">
                    <button className="px-8 py-4 font-bold Aglet-bold bg-[#F4CA58] rounded-full text-[#965BDD] duration-200 hover:brightness-110">Conocenos</button>
                    <button className="p-4 Aglet text-[#F4CA58] duration-200 hover:brightness-110">¿Cómo funciona?</button>
                </div>
            </div>
        </section>
    )
}

export default Conocenos
