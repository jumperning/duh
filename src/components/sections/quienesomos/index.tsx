import { Title } from "../../common/titles"
import SliderCard from "./card"

function QuienesSomos() {

    return (
        <section id="quienes" className="mt-12 w-full flex justify-center items-center flex-col">
            <Title>
                ¿Quiénes somos?
            </Title>
            <p className="-skew-y-3 text-lg Aglet-extra text-white mb-5 uppercase text-center leading-5">
                ¡Somos Duh!<br />
                ¡Evolucionemos juntos!
            </p>
            <div className="relative w-full py-8">
                <SliderCard bg={true}/>
                <SliderCard bg={true}/>
                <SliderCard bg={false}/>
            </div>
        </section>
    )
}

export default QuienesSomos
