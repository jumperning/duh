export const PensadaItem = (props: any) => {
    return (
        <article className="flex flex-col justify-center items-center mt-8 md:hidden">
            <figure>
                <img src={props.img} alt="Info" />
            </figure>
            <h3 className="text-yellow-400 text-xl Aglet-bold">
                {props.children}
            </h3>
            <p className="text-white font-light">
                {props.description}
            </p>
        </article>
    )
}

export const PensadaItemNoIMG = (props: any) => {
    return (
        <article className={`${props.opacity} md:flex flex-col justify-center items-center mt-8 hidden mb-8 duration-200`}>
            <figure>
                <img src={props.img} alt="Info" />
            </figure>
            <h3 className="text-yellow-400 text-xl Aglet-bold">
                {props.children}
            </h3>
            <p className="text-white font-light max-w-[400px]">
                {props.description}
            </p>
        </article>
    )
}

export const PensadaVideoNav = (props: any) => {

    return (
        <button onClick={() => {props.setSelectedId(props.id)}} className={`${props.selectedId == props.id ? "shadow-[0px_0px_10px_5px_rgba(255,231,0,0.75)]" : ""} aspect-square bg-white rounded-lg duration-300 hover:scale-110 p-2`} style={{

        }}>
            {props.children}
        </button>
    )
}