import { Fragment } from "react"
import InstagramProfile from "./ig"

export const ExperienciaItem = (props: any) => {
    const rowCount = props.exp.Influencers.length;

    return (
        <div className="w-screen mx-auto">
            <div className={`duration-500 bg-[#F2F2F2] flex flex-col lg:flex-row p-4 gap-8 pb-6 lg:mt-20 lg:justify-center lg:items-center lg:w-[1100px] lg:mx-auto lg:max-w-screen-lg lg:rounded-[3rem]`}>
                <div className="indicador flex justify-around lg:hidden">
                    <div className="w-[45%] h-1 bg-[#6A11D6]"></div>
                    <div className="w-[45%] h-1 bg-[#D9D9D9]"></div>
                </div>
                <article className='text-left flex flex-col justify-center gap-7 max-w-[95vw] pb-4 lg:w-1/2 lg:p-5 lg:gap-5'>
                    <h3 className='text-[#6A11D6] text-2xl lg:text-3xl Aglet-bold'>{props.exp.Titulo}</h3>
                    <p className="lg:text-lg">{props.exp.Texto}</p>
                    <h4 className='text-[#6A11D6] text-xl Aglet-bold'>Influencers</h4>
                    <div className={`grid ${rowCount < 3 ? 'grid-cols-1' : 'lg:grid-cols-2'} grid-rows-${rowCount} gap-4`}>
                        {props.exp.Influencers.map((influencer: any, index: number) => {
                            return (
                                <Fragment key={index}>
                                    <InstagramProfile influencer={influencer} />
                                </Fragment>
                            )
                        })}
                    </div>
                    <div className="bg-white rounded-xl p-4 lg:mt-8">
                        <h3 className='text-[#6A11D6] text-xl Aglet-bold py-2'>Resultados</h3>
                        <p>
                            <b>Followers y alcance de audiencia: </b> {props.exp.Resultado.Followers} <br />
                            {props.exp.Resultado.Reproducciones != undefined && <>
                                <b>Reproducciones:</b> {props.exp.Resultado.Reproducciones}<br />
                            </>}
                            {props.exp.Resultado.Impresiones != undefined && <>
                                <b>Impresiones:</b> {props.exp.Resultado.Impresiones}<br />
                            </>}
                            {props.exp.Resultado.Contenidos != undefined && <>
                                <b>Contenidos:</b> {props.exp.Resultado.Contenidos}<br />
                            </>}
                            {props.exp.Resultado["Content creators"] != undefined && <>
                                <b>Content creators:</b> {props.exp.Resultado["Content creators"]}<br />
                            </>}
                            {props.exp.Resultado.Engagement != undefined && <>
                                <b>Engagement:</b> {props.exp.Resultado.Engagement}
                            </>}
                        </p>
                    </div>
                </article>
                <div className="w-1/2 hidden sm:block">
                    <img src={"img/" + props.exp.Video} alt="Superville Instagram" />
                </div>
            </div>
        </div>
    )
}
