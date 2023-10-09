import { Swiper, SwiperSlide } from 'swiper/react';
import data from './datos.json'
import { ExperienciaItem } from './items';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Experiencia = () => {

    return (
        <section className='overflow-hidden text-center mt-24' id="experiencia">
            <h3 className='text-white Aglet-italic-bold text-4xl uppercase translate-y-3'>la experiencia</h3>
            <h4 className='Aglet-italic-bold text-7xl text-[#edcc6b] -skew-y-6'>Duh!</h4>
            <p className='text-white Aglet mt-6'>Disfruta la experiencia Duh! como <br className="sm:hidden" /> nunca antes</p>
            <div className='mt-16 mb-6'>
                <div className="flex lg:justify-center items-center space-x-6 overflow-x-clip">
                    <div className="flex flex-col lg:justify-center items-center space-y-2">
                        <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                            <a href="#" className="block rounded-full bg-[#965BDD] p-1">
                                <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/Supervielle.png" />
                            </a>
                        </div>
                        <a href="#" className="text-sm text-[#edcc6b] Aglet font-bold">Supervielle</a>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                            <a href="#" className="block rounded-full bg-[#965BDD] p-1">
                                <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/Renault.png" />
                            </a>
                        </div>
                        <a href="#" className="text-sm text-white Aglet font-bold">Renault</a>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                            <a href="#" className="block rounded-full bg-[#965BDD] p-1">
                                <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/LATAM.png" />
                            </a>
                        </div>
                        <a href="#" className="text-sm text-white Aglet font-bold">LATAM</a>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                            <a href="#" className="block rounded-full bg-[#965BDD] p-1">
                                <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/Colgate.png" />
                            </a>
                        </div>
                        <a href="#" className="text-sm text-white Aglet font-bold">Colgate</a>
                    </div>
                </div>
            </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {data.map((exp: any, index: number) => {
                    return (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <ExperienciaItem isActive={isActive} exp={exp} />
                            )}
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}
