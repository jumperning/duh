import { useState } from "react";

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

export const PensadaVideoNav = (props: any) => {

    return (
        <button onClick={() => {props.setSelectedId(props.id)}} className="aspect-square bg-white rounded-lg duration-300" style={{
            
        }}>
            <img src={props.icon} className="" />
        </button>
    )
}