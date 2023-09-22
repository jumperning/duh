import { useState } from "react";
import { PensadaItem, PensadaVideoNav } from "./item"

export const Pensada = () => {

  const [selectedId, setSelectedId] = useState("info");

  return (
    <>
      <section className="flex flex-col justify-around  items-center text-center mt-12">

        <div className="p-4 gap-5">
          <div className=" -skew-y-3">
            <span className="text-[#F4CA58] text-base md:text-3xl Aglet-Sans">Una plataforma interactiva </span></div>
          <h2 className="text-white Aglet-bold uppercase text-3xl md:text-6xl">pensada para TÍ</h2>
          <p className="text-white Aglet-extra text-base font-light mt-6 max-w-[540px]">Métricas y <b className="Aglet-bold"> proyecciones de resultados</b> para que puedas tomar la mejor decisión para tu campaña</p>

          <PensadaItem img="img/info.svg" description="Lorem ipsum dolor sit amet consectetur. Tellus turpis non consequat dictum faucibus ultricies.">
            Información demográfica <br />
            y perfiles
          </PensadaItem>

          <PensadaItem img="img/seleccion.svg" description="Lorem ipsum dolor sit amet consectetur. Tellus turpis non consequat dictum faucibus ultricies.">
            Posibilidad de <br />
            seleccionar perfiles
            y perfiles
          </PensadaItem>

          <PensadaItem img="img/reporte.svg" description="Lorem ipsum dolor sit amet consectetur. Tellus turpis non consequat dictum faucibus ultricies.">
            Reportes con <br />
            métricas finales
          </PensadaItem>

        </div>

      </section>
      <>

        <div className="relative top-0 m-auto left-0 right-0 flex flex-col justify-center items-center mt-12">
          <div className="absolute flex justify-center items-center gap-16 z-50 -top-8">
            <PensadaVideoNav id="info" selectedId={selectedId} setSelectedId={setSelectedId} icon="img/info.svg" />
            <PensadaVideoNav id="seleccion" selectedId={selectedId} setSelectedId={setSelectedId} icon="img/seleccion.svg" />
            <PensadaVideoNav id="reporte" selectedId={selectedId} setSelectedId={setSelectedId} icon="img/reporte.svg" />
          </div>

          <img src="img/mirarVideo.svg" alt="" className="absolute z-20" />
          <img src="img/video.png" alt="video" className="w-full md:w-3/4 relative md:rounded-3xl aspect-video" />
        </div>

      </>
    </>
  )
}
