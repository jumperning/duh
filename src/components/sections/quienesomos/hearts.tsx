import { Fragment, useEffect, useState } from "react";

export function HeartExplosion(props: any) {

    const [clicked, isClicked] = useState(false);

    useEffect(() => {
        if (props.clicked) {
            isClicked(true);
        }
    }, [props.clicked])

    return (
        <div className="absolute w-1 h-1 inset-0 m-auto">
            {[...Array(Math.floor((Math.random() * 32) + 24))].map((_A, index: number) => {
                return (
                    <Fragment key={index}>
                        <RandomHeartGenerator clicked={clicked} isClicked={isClicked} />
                    </Fragment>
                )
            })}
        </div>
    )
}

export function RandomHeartGenerator(props: any) {

    const [rotation, setRotation] = useState("0deg");
    const [scale, setScale] = useState("0%");
    const [opacity, setOpacity] = useState("0%");
    const [left, setLeft] = useState("0px");
    const [top, setTop] = useState("0px");
    const [duration, setDuration] = useState(0);
    const [ease, setEase] = useState("ease-in");

    const size = ((Math.floor(Math.random() * 25) + 5));

    useEffect(() => {
        if (props.clicked) {
            setOpacity("100%");
            setDuration((Math.floor(Math.random() * 1500) + 1000));
            setTimeout(() => {
                setRotation((Math.floor(Math.random() * 360) + 1) + "deg");
                setScale((Math.floor(Math.random() * 200) + 100) + "%");
                setOpacity("100%");
                var directionAux = Math.random() * 2;
                var direction = "";
                if (directionAux > 1) {
                    direction = "-";
                }
                setLeft(direction + (Math.floor(Math.random() * 200) + 1) + "px");
                var directionTop = "";
                var directionAuxTop = Math.random() * 2;
                if (directionAuxTop > 1) {
                    directionTop = "-";
                }
                setTop(directionTop + (Math.floor(Math.random() * 200) + 1) + "px");
            }, 10)
        }
    }, [props.clicked])

    useEffect(() => {
        setTimeout(() => {
            setEase("ease-out");
            setScale("0%");
            setOpacity("0%");
            props.isClicked(false);
        }, duration)
    }, [duration])

    return (
        <svg width={size} height={size} viewBox="-2 -2 32 32" xmlns="http://www.w3.org/2000/svg"
            style={{
                width: size + "px",
                height: size + "px",
                rotate: rotation,
                scale: scale,
                opacity: opacity,
                left: left,
                top: top,
                transitionDuration: duration + "ms",
                transitionTimingFunction: ease,
                position: "absolute"
            }}
        >
            <path className="fill-[#EC4444] stroke-[#EC4444]" d="M14.1582 26.35C13.9683 26.35 13.7377 26.2776 13.4663 26.1329C13.195 25.9973 12.9373 25.8481 12.6931 25.6853C10.1789 24.0574 7.9903 22.3436 6.12726 20.5438C4.27327 18.7441 2.8353 16.8946 1.81335 14.9954C0.791392 13.0872 0.280415 11.1608 0.280415 9.21642C0.280415 7.92315 0.483901 6.74745 0.890875 5.68932C1.30689 4.62214 1.87665 3.70419 2.60016 2.93547C3.33271 2.16674 4.17379 1.57437 5.1234 1.15835C6.08204 0.733288 7.11304 0.520758 8.21639 0.520758C9.58201 0.520758 10.7622 0.868946 11.7571 1.56532C12.7609 2.25266 13.5613 3.148 14.1582 4.25135C14.7641 3.13895 15.5645 2.23909 16.5593 1.55176C17.5632 0.864424 18.748 0.520758 20.1136 0.520758C21.2079 0.520758 22.2344 0.733288 23.193 1.15835C24.1517 1.57437 24.9927 2.16674 25.7162 2.93547C26.4398 3.70419 27.005 4.62214 27.412 5.68932C27.828 6.74745 28.036 7.92315 28.036 9.21642C28.036 11.1608 27.525 13.0872 26.5031 14.9954C25.4811 16.8946 24.0431 18.7441 22.1891 20.5438C20.3352 22.3436 18.1511 24.0574 15.6369 25.6853C15.3836 25.8481 15.1214 25.9973 14.8501 26.1329C14.5878 26.2776 14.3572 26.35 14.1582 26.35Z" />
        </svg>
    )
}