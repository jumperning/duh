import { Swiper, SwiperSlide } from 'swiper/react';
import data from './datos.json'
import { ExperienciaItem } from './items';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from 'react';

export const Experiencia = () => {

    const swiperControl: any = useRef<any>();

    function changeTo(index: any) {
        console.log(swiperControl);
        swiperControl.current.swiper.slideTo(index);
    }

    return (
        <section className='overflow-hidden text-center mt-24' id="experiencia">
            <h3 className='text-white Aglet-italic-bold text-4xl uppercase translate-y-3'>la experiencia</h3>
            <h4 className='Aglet-italic-bold text-7xl text-[#edcc6b] -skew-y-6'>Duh!</h4>
            <p className='text-white Aglet mt-6'>Disfruta la experiencia Duh! como <br className="sm:hidden" /> nunca antes</p>
            <div className='mt-16 mb-6'>
                <div className="flex lg:justify-center items-center space-x-6 overflow-x-clip">
                    <div className="flex flex-col lg:justify-center items-center space-y-2">
                        <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                            <button onClick={() => {changeTo(0)}} className="block rounded-full bg-[#965BDD] p-1">
                                <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/Supervielle.png" />
                            </button>
                        </div>
                        <button onClick={() => {changeTo(0)}} className="text-sm text-[#edcc6b] Aglet font-bold">Supervielle</button>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                            <button onClick={() => {changeTo(1)}} className="block rounded-full bg-[#965BDD] p-1">
                                <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/Renault.png" />
                            </button>
                        </div>
                        <button onClick={() => {changeTo(1)}} className="text-sm text-white Aglet font-bold">Renault</button>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                            <button onClick={() => {changeTo(2)}} className="block rounded-full bg-[#965BDD] p-1">
                                <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/LATAM.png" />
                            </button>
                        </div>
                        <button onClick={() => {changeTo(2)}} className="text-sm text-white Aglet font-bold">LATAM</button>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                            <button onClick={() => {changeTo(3)}} className="block rounded-full bg-[#965BDD] p-1">
                                <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/Colgate.png" />
                            </button>
                        </div>
                        <button onClick={() => {changeTo(3)}} className="text-sm text-white Aglet font-bold">Colgate</button>
                    </div>
                </div>
            </div>
            <Swiper
                ref={swiperControl}
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
