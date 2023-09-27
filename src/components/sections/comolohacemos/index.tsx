import { useEffect, useRef, useState } from "react";
import HowItem from "./items"

export const Comolohacemos = () => {

    const [actualScroll, setActualScroll] = useState(0);

    const item1 = useRef<any>(null);
    const item2 = useRef<any>(null);
    const item3 = useRef<any>(null);
    const item4 = useRef<any>(null);
    const item5 = useRef<any>(null);

    const refs = [item1, item2, item3, item4, item5];

    useEffect(() => {
        setTimeout(() => {
            setActualScroll(0);
            refs[0].current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }, 2000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            var auxActualScroll;
            if (actualScroll == 4) {
                auxActualScroll = 0;
            } else {
                auxActualScroll = actualScroll + 1;
            }
            setActualScroll(auxActualScroll);
            refs[auxActualScroll].current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }, 2000)
    }, [actualScroll])

    return (
        <section className="text-center gap-4 mt-28 flex flex-col lg:flex-row justify-center items-center ">
            <div className="flex justify-center items-center flex-col lg:text-right">
                <h3 className="-skew-y-3 text-4xl Aglet-bold text-white mb-5 uppercase lg:text-right lg:leading-[3rem] lg:text-6xl">¿cómo lo <br className="hidden lg:block" /> hacemos?</h3>
                <p className="text-white font-light">¿Quieres formar parte del ecosistema Duh!? <br />
                    <b className="Aglet-bold"> ¡Contáctanos!</b></p>
            </div>
            <div className="relative">
                <div className="gradient">
                    <div className="lg:h-[400px] lg:overflow-x-hidden lg:overflow-y-hidden lg:snap-y">
                        <span className="w-full h-[140px]" />
                        <HowItem fowardRef={item1} number="1" title="SELECCIÓN">
                            Seleccionamos los perfiles <br /> adecuados según <b className="Aglet-bold"> la estrategia de marketing </b> de tu marca.
                        </HowItem>
                        <HowItem fowardRef={item2} number="2" title="CONTRATACIÓN">
                            Contratamos y brifeamos a los <b className="Aglet-bold">creadores de contenido.</b>
                        </HowItem>
                        <HowItem fowardRef={item3} number="3" title="PRODUCCIÓN Y APROBACIÓN">
                            La producción de contenido pasa por etapas de aprobación entre Duh! y tu equipo.
                        </HowItem>
                        <HowItem fowardRef={item4} number="4" title="GESTIÓN">
                            Gestionamos, calendarizamos y hacemos <b className="Aglet-bold"> seguimiento de las publicaciones.</b>
                        </HowItem>
                        <HowItem fowardRef={item5} number="5" title="SELECCIÓN">
                            Entregamos métricas y reportes online de resultados.
                        </HowItem>
                        <span className="w-full h-[140px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}
