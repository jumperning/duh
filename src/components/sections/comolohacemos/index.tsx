import { useEffect, useState } from "react";
import HowItem from "./items"

export const Comolohacemos = () => {

    const [actualScroll, setActualScroll] = useState(0);
    const [top, setTop] = useState("80px");
    const [transition, setTransition] = useState(".5s");
    const [ease, setEase] = useState("ease-in");

    useEffect(() => {
        if (window.innerWidth > 1023) {
            setTimeout(() => {
                setTop("80px");
                setActualScroll(0);
            }, 2000)
        }
    }, [])

    useEffect(() => {
        if (window.innerWidth > 1023) {
            const time = 5000;
            setTransition('.5s');
            setEase("ease-in");
            setTimeout(() => {
                var auxScroll = 0;
                if (actualScroll >= 4) {
                    auxScroll = 0;
                    setTop("120px");
                } else {
                    auxScroll = actualScroll + 1;
                    setTop("-" + ((160 * (actualScroll + 1)) - 40) + "px");
                }
                setActualScroll(auxScroll);
            }, time)
            setTimeout(() => {
                setTransition(".25s");
                setEase('ease-out');
                if (actualScroll >= 4) {
                    setTop("80px");
                } else {
                    setTop("-" + ((160 * (actualScroll + 1)) - 80) + "px");
                }

            }, time + 500)
        }
    }, [actualScroll])

    return (
        <section className="text-center gap-4 sm:gap-24 mt-28 flex flex-col lg:flex-row justify-center items-center sm:h-[40vh] ">
            <div className="flex justify-center items-center flex-col lg:text-right">
                <h3 className="-skew-y-3 text-4xl Aglet-bold text-white mb-5 uppercase lg:text-right lg:leading-[3rem] lg:text-6xl">¿cómo lo <br className="hidden lg:block" /> hacemos?</h3>
                <p className="text-white font-light Aglet-Extra">¿Quieres formar parte del ecosistema Duh!? <br />
                    <b className="Aglet-bold"> ¡Contáctanos!</b></p>
            </div>
            <div className="relative lg:w-[600px]">
                <div className="gradient">
                    <div className="lg:h-[400px] overflow-auto lg:snap-y relative w-full">
                        <div className="w-full  lg:absolute"
                            style={{
                                top: top,
                                transitionDuration: transition,
                                transitionTimingFunction: ease
                            }}>
                            <HowItem number="1" title="SELECCIÓN">
                                Seleccionamos los perfiles <br /> adecuados según <b className="Aglet-bold"> la estrategia de marketing </b> de tu marca.
                            </HowItem>
                            <HowItem number="2" title="CONTRATACIÓN">
                                Contratamos y brifeamos a los <b className="Aglet-bold">creadores de contenido.</b>
                            </HowItem>
                            <HowItem number="3" title="PRODUCCIÓN Y APROBACIÓN">
                                La producción de contenido pasa por etapas de aprobación entre Duh! y tu equipo.
                            </HowItem>
                            <HowItem number="4" title="GESTIÓN">
                                Gestionamos, calendarizamos y hacemos <b className="Aglet-bold"> seguimiento de las publicaciones.</b>
                            </HowItem>
                            <HowItem number="5" title="SELECCIÓN">
                                Entregamos métricas y reportes online de resultados.
                            </HowItem>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
