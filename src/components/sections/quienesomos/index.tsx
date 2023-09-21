import { Title } from "../../common/titles"
import SliderCard from "./card"
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import CustomSwiper from "./custom-swiper";

function QuienesSomos() {

    const [swipePos, setSwipePos] = useState(["left", "center", "right"]);

    useEffect(() => {
        new Swiper('.swiper', {
            modules: [Navigation],
            loop: true,
            slidesPerView: 1,
            spaceBetween: -600,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }, [])

    function nextSwipe() {
        var auxSwipePos:any = [];
        swipePos.forEach((swipe: any, index: any) => {
            var newSwipe = "";
            switch (swipe) {
                case "left":
                    newSwipe = "center"; break;
                case "center":
                    newSwipe = "right"; break;
                case "right":
                    newSwipe = "left"; break;
            }
            auxSwipePos[index] = newSwipe;
        });
        setSwipePos(auxSwipePos);
    }

    function previousSwipe() {
        var auxSwipePos:any = [];
        swipePos.forEach((swipe: any, index: any) => {
            var newSwipe = "";
            switch (swipe) {
                case "left":
                    newSwipe = "right"; break;
                case "center":
                    newSwipe = "left"; break;
                case "right":
                    newSwipe = "center"; break;
            }
            auxSwipePos[index] = newSwipe;
        });
        setSwipePos(auxSwipePos);
    }

    return (
        <section id="quienes" className="mt-12 w-full flex justify-center items-center flex-col">
            <Title>
                ¿Quiénes somos?
            </Title>
            <p onClick={previousSwipe} className="-skew-y-3 text-lg Aglet-extra text-white mb-5 uppercase text-center leading-5">
                ¡Somos Duh!<br />
                ¡Evolucionemos juntos!
            </p>
            <div className="relative max-w-[800px] w-full mx-auto py-8 h-[460px]">
                <CustomSwiper nextSwipe={nextSwipe} previousSwipe={previousSwipe} swipePos={swipePos[0]} initialPosition="left">
                    <SliderCard bg={true} >3</SliderCard>
                </CustomSwiper>
                <CustomSwiper nextSwipe={nextSwipe} previousSwipe={previousSwipe} swipePos={swipePos[1]} initialPosition="center">
                    <SliderCard bg={true} >
                        <p className="-skew-y-3 w-3/5 text-center Aglet">
                            Somos una compañía de <b className="Aglet-bold">Estrategias Creativas con tecnología AdTech<br /></b>
                            dedicada a <b className="Aglet-bold">gestionar campañas de influencers</b> conectando <b className="Aglet-bold">marcas con los perfiles ideales</b> para sus acciones de marketing.
                        </p>
                    </SliderCard>
                </CustomSwiper>
                <CustomSwiper nextSwipe={nextSwipe} previousSwipe={previousSwipe} swipePos={swipePos[2]} initialPosition="right">
                    <SliderCard bg={false} >2</SliderCard>
                </CustomSwiper>

            </div>
        </section>
    )
}

export default QuienesSomos
