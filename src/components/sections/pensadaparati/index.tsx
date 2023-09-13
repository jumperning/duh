
export const Pensada = () => {
  return (
    <>
      <section className="flex flex-col justify-around  items-center text-center mt-12">
        <div className="p-4 gap-5">
          <div className=" -skew-y-3">
            <span className="text-[#F4CA58] text-base">Una plataforma interactiva </span></div>
          <h2 className="text-white  Aglet-bold uppercase text-3xl">pensada para TÍ</h2>
          <p className="text-white  Aglet-extra text-base font-light mt-6">Métricas y <b className="Aglet-bold"> proyecciones de resultados</b> para que puedas tomar la mejor decisión para tu campaña</p>


          <article className="flex flex-col justify-center items-center mt-8">
            <figure>
              <img src="img/info.svg" alt="Info" />
            </figure>
            <h3 className="text-yellow-400 text-xl">Información demográfica <br />
              y perfiles</h3>
            <p className="text-white font-light">Lorem ipsum dolor sit amet consectetur. Tellus turpis non consequat dictum faucibus ultricies. </p>
          </article>

          <article className="flex flex-col justify-center items-center mt-8">
            <figure>
              <img src="img/seleccion.svg" alt="Info" />
            </figure>
            <h3 className="text-yellow-400 text-xl">Posibilidad de <br />
              seleccionar perfiles
              y perfiles</h3>
            <p className="text-white font-light">Lorem ipsum dolor sit amet consectetur. Tellus turpis non consequat dictum faucibus ultricies. </p>
          </article>

          <article className="flex flex-col justify-center items-center mt-8">
            <figure>
              <img src="img/reporte.svg" alt="Info" />
            </figure>
            <h3 className="text-yellow-400 text-xl">Reportes con <br />
              métricas finales</h3>
            <p className="text-white font-light">Lorem ipsum dolor sit amet consectetur. Tellus turpis non consequat dictum faucibus ultricies. </p>
          </article>
        </div>

      </section>
      <>

        <div className="relative top-0 m-auto left-0 right-0 flex justify-center items-center mt-12">
          <img src="img/mirarVideo.svg" alt="" className="absolute z-20" />
          <img src="img/video.png" alt="video" className="w-full relative" />

        </div>

      </>
    </>
  )
}
