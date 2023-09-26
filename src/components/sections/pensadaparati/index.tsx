import { useEffect, useState } from "react";
import { PensadaItem, PensadaItemNoIMG, PensadaVideoNav } from "./item"

export const Pensada = () => {

  const [selectedId, setSelectedId] = useState("info");
  const [videoDescription, setVideoDescription] = useState("Cargando...");
  const [videoTitle, setVideoTitle] = useState("Cargando...");
  const [videoIcon, setVideoIcon] = useState("");
  const [videoDataOpacity, setVideoDataOpacity] = useState("opacity-100");

  useEffect(() => {
    setVideoDataOpacity("opacity-0");
    setTimeout(() => {
      switch (selectedId) {
        case "info":
          setVideoIcon("img/info.svg");
          setVideoTitle("Información demográfica y perfiles");
          setVideoDescription("Lorem ipsum dolor sit amet consectetur. Tellus turpis non consequat dictum faucibus ultricies.");
          break;
        case "seleccion":
          setVideoIcon("img/seleccion.svg");
          setVideoTitle("Posibilidad de seleccionar perfiles");
          setVideoDescription("Lorem ipsum dolor sit amet consectetur. Tellus turpis non consequat dictum faucibus ultricies.");
          break;
        case "reporte":
          setVideoIcon("img/reporte.svg");
          setVideoTitle("Reportes con métricas finales");
          setVideoDescription("Lorem ipsum dolor sit amet consectetur. Tellus turpis non consequat dictum faucibus ultricies.");
          break;
        default:
          setVideoDescription("Cargando...");
      }
    }, 210)
    setTimeout(() => {
      setVideoDataOpacity("opacity-100");
    }, 410)

  }, [selectedId])

  return (
    <>
      <section className="flex flex-col justify-around items-center text-center mt-12">
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
          </PensadaItem>

          <PensadaItem img="img/reporte.svg" description="Lorem ipsum dolor sit amet consectetur. Tellus turpis non consequat dictum faucibus ultricies.">
            Reportes con <br />
            métricas finales
          </PensadaItem>

        </div>
        <div className="relative top-0 m-auto left-0 right-0 flex flex-col justify-center items-center mt-12 w-full">
          <div className="absolute md:flex justify-center items-center gap-16 z-50 -top-8 hidden">
            <PensadaVideoNav id="info" selectedId={selectedId} setSelectedId={setSelectedId}>
              <img src="img/info.png" width="50px" />
            </PensadaVideoNav>
            <PensadaVideoNav id="seleccion" selectedId={selectedId} setSelectedId={setSelectedId}>
              <img src="img/seleccion.png" width="50px" />
            </PensadaVideoNav>
            <PensadaVideoNav id="reporte" selectedId={selectedId} setSelectedId={setSelectedId}>
              <img src="img/reporte.png" width="50px" />
            </PensadaVideoNav>
          </div>
          <div className="absolute z-20">
            <PensadaItemNoIMG opacity={videoDataOpacity} img={videoIcon} description={videoDescription}>
              {videoTitle}
            </PensadaItemNoIMG>
            <img src="img/mirarVideo.svg" alt="" className="z-20 mx-auto" />
          </div>

          <img src="img/video.png" alt="video" className="w-full md:w-3/4 relative md:rounded-3xl aspect-video" />
        </div>
      </section>
      <>

      </>
    </>
  )
}
