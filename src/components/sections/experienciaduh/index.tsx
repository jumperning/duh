import React from 'react'

export const Experiencia = () => {
    return (
        <section className='overflow-hidden text-center mt-24'>
            <h3 className='text-white Aglet-italic-bold text-4xl uppercase translate-y-3'>la experiencia</h3>
            <h4 className='Aglet-italic-bold text-7xl text-[#edcc6b] -skew-y-6'>Duh!</h4>
            <p className='text-white Aglet mt-6'>Disfruta la experiencia Duh! como <br /> nunca antes</p>
            <div className='mt-16'>
                <div className="flex overflow-scroll space-x-6 p-6">

                    <div className="flex flex-col items-center space-y-2">
                        <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                            <a href="#" className="block rounded-full bg-[#965BDD] p-1">
                                <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/Supervielle.png" />
                            </a>
                        </div>
                        <a href="#" className="text-sm text-white Aglet font-bold">Supervielle </a>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                            <a href="#" className="block rounded-full bg-[#965BDD] p-1">
                                <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/Renault.png" />
                            </a>
                        </div>
                        <a href="#" className="text-sm text-white Aglet font-bold">Renault </a>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                            <a href="#" className="block rounded-full bg-[#965BDD] p-1">
                                <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/LATAM.png" />
                            </a>
                        </div>
                        <a href="#" className="text-sm text-white Aglet font-bold">LATAM </a>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                            <a href="#" className="block rounded-full bg-[#965BDD] p-1">
                                <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/Colgate.png" />
                            </a>
                        </div>
                        <a href="#" className="text-sm text-white Aglet font-bold">Colgate </a>
                    </div>
                </div>
            </div>
            <div className="bg-[#F2F2F2] flex flex-col p-4 gap-8 pb-6">
                <div className="indicador flex justify-around">
                    <div className="w-[45%] h-1 bg-[#6A11D6]"></div>
                    <div className="w-[45%] h-1 bg-[#D9D9D9]"></div>
                </div>
                <article className='text-left flex flex-col justify-center gap-7 max-w-[95vw] pb-4'>
                    <h3 className='text-[#6A11D6] text-2xl Aglet-bold'>Experiencia Duh! Supervielle</h3>
                    <p >Banco Supervielle presentó su nueva Cuenta Hit y nos eligió para contarlo a través de influencers. </p>
                    <p>Como parte de la estrategia acompañamos a los creadores de contenido Cristóbal Combes y Juli Castro al impresionante show de Fuerza Bruta, donde el Banco Supervielle instaló su activación para que mostraran en sus redes toda la experiencia.</p>
                    <h4 className='text-[#6A11D6] text-xl Aglet-bold'>Influencers</h4>
                    <div className='flex flex-col gap-8'>
                        <div className="flex flex-row justify-between gap-3 items-center space-y-2">
                            <div className='flex justify-center items-center gap-3'>
                                <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                                    <a href="#" className="block rounded-full bg-[#F2F2F2] p-1">
                                        <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/cristobal.png" />
                                    </a>
                                </div>
                                <div className='flex flex-col'>
                                    <a href="#" className="text-lg text-black Aglet-bold font-bold text-left">cristobalcombes </a>
                                    <span className='text-[#999999]'>265k followers</span>
                                </div>
                            </div>
                            <a href="#" className="text-sm text-black Aglet font-bold">
                                <img src="img/instagram.svg" alt="" />
                            </a>
                        </div>
                        <div className="flex flex-row justify-between gap-3 items-center space-y-2">
                            <div className='flex justify-center items-center gap-3'>
                                <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                                    <a href="#" className="block rounded-full bg-[#F2F2F2] p-1">
                                        <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/juli.png" />
                                    </a>
                                </div>
                                <div className='flex flex-col'>
                                    <a href="#" className="text-lg text-black Aglet-bold font-bold text-left">juli.castroo </a>
                                    <span className='text-[#999999]'>700k followers</span>
                                </div>
                            </div>
                            <a href="#" className="text-sm text-black Aglet font-bold">
                                <img src="img/instagram.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                        <h3 className='text-[#6A11D6] text-xl Aglet-bold py-2'>Resultados</h3>
                        <p><b>Followers y alcance de audiencia: </b> 370.000 personas <br />
                        <b>Reproducciones:</b> 600.000 reproducciones<br />
                        <b> Engagement:</b> 4%</p>
                    </div>
                </article>
            </div>
        </section>
    )
}
