import React from 'react'

export const Experiencia = () => {
    return (
        <section className='overflow-hidden text-center mt-24'>
            <h3 className='text-white Aglet-italic-bold text-4xl uppercase translate-y-3'>la experiencia</h3>
            <h4 className='Aglet-italic-bold text-7xl text-[#edcc6b] -skew-y-6'>Duh!</h4>
            <p className='text-white Aglet mt-6'>Disfruta la experiencia Duh! como <br /> nunca antes</p>
            <div className='mt-16'>
                <div className="flex  space-x-6 p-6">

                    <div className="flex flex-col items-center space-y-2">
                        <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                            <a href="#" className="block rounded-full bg-[#965BDD] p-1">
                                <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/Supervielle.png" />
                            </a>
                        </div>
                        <a href="#" className="text-lg text-white Aglet-bold">Supervielle </a>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                            <a href="#" className="block rounded-full bg-[#965BDD] p-1">
                                <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/Renault.png" />
                            </a>
                        </div>
                        <a href="#" className="text-lg text-white Aglet-bold">Renault </a>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                            <a href="#" className="block rounded-full bg-[#965BDD] p-1">
                                <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/LATAM.png" />
                            </a>
                        </div>
                        <a href="#" className="text-lg text-white Aglet-bold">LATAM </a>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                            <a href="#" className="block rounded-full bg-[#965BDD] p-1">
                                <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/Colgate.png" />
                            </a>
                        </div>
                        <a href="#" className="text-lg text-white Aglet-bold">Colgate </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
