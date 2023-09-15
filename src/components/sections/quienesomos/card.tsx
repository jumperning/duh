export default function SliderCard(props:any) {

    return (
        <article className={`${props.bg ? "bg-[#965BDDA6] backdrop-blur-md shadow-xl " : "bg-transparent"} bg-[#965BDDA6] rounded-b-xl aspect-square w-[90%] lg:w-[350px] overflow-hidden relative`}>
            <div className={`${props.bg ? "" : "hidden"} w-full h-10 lg:h-12 bg-white flex justify-between items-center py-2 pl-3 pr-4 rounded-t-xl`}>
                <div className="flex justify-start items-center flex-row gap-2">
                    <img src="img/logo.svg" className="bg-[#6A11D6] p-1 rounded-full h-8 " />
                    <p className="Aglet-bold text-lg lg:text-sm">Duh!</p>
                </div>
                <a className="text-[#0075FF] duration-200 hover:brightness-125 text-lg lg:text-sm" target="_blank" href="https://www.instagram.com/duhcreatorsok/">
                    ¡Seguinos!
                </a>
            </div>
            <div className={`${props.bg ? "h-[85%]" : "h-full"} w-full  px-10 text-lg -skew-y-3 flex flex-col text-center justify-center items-center text-white`}>
            Somos una compañía de Estrategias Creativas con tecnología AdTech dedicada a gestionar campañas de influencers conectando marcas con los perfiles ideales para sus acciones de marketing.
            </div>
        </article>
    )
}
