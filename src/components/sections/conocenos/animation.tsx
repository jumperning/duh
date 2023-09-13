import { useEffect, useState } from "react";

function ConocenosAnim() {

    const [rotate, setRotate] = useState(0);
    const [transitionDuration, setTransitionDuration] = useState(.5);
    const [scale, setScale] = useState(10);
    const [transitionTimingFunction, setTransitionTimingFunction] = useState("ease-out");
    const [top, setTop] = useState(100);
    //@ts-ignore
    const [likes, setLikes] = useState(0);
    //@ts-ignore
    const [comments, setComments] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setTop(-3);
            setScale(105);
            setRotate(-6);
        }, 1000)
        setTimeout(() => {
            setTransitionDuration(.3);
            setTransitionTimingFunction("ease-in")
            setTop(0);
            setScale(100);
            setRotate(3);
        }, (transitionDuration * 1000) + 1000)
    }, [])

    return (
        <div className="relative w-[410px] h-[350px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 462 409" fill="none" className="w-full -bottom-2 left-1 absolute rotate-3">
                <path d="M448.059 355.464C444.858 345.92 441.688 332.309 441.88 314.566C442.072 309.986 442.616 304.606 443.801 298.713C444.89 293.3 446.33 288.528 447.803 284.461C447.803 284.461 450.909 274.981 453.759 258.135C460.963 220.567 461.283 189.469 460.195 167.787C458.37 131.565 456.384 100.563 435.38 70.9062C412.23 38.2709 379.186 25.5563 356.997 17.7738C273.811 -11.4026 127.067 -12.2353 47.2437 87.3039C25.0544 114.975 13.4635 146.393 13.4635 146.393C13.4635 146.393 12.3428 149.404 10.7418 154.4C10.7418 154.4 8.46847 159.108 5.65079 172.687C4.11387 179.125 2.67301 186.267 1.74445 193.537C-4.05102 237.958 4.72223 337.753 72.5388 383.263C124.218 417.916 188.384 408.468 230.585 402.223C305.254 391.206 344.381 357.738 411.398 373.143C432.978 378.107 449.596 386.306 459.907 392.167C460.323 392.327 460.899 392.423 461.283 392.167C464.133 390.277 453.759 372.534 448.059 355.432V355.464Z" fill="url(#paint0_linear_134_239)" />
                <defs>
                    <linearGradient id="paint0_linear_134_239" x1="231.016" y1="0.639435" x2="231.016" y2="408.298" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F2AC4E" />
                        <stop offset="1" stop-color="#F4CA58" />
                    </linearGradient>
                </defs>
            </svg>

            <svg viewBox="0 0 462 409" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                    <clipPath id="clipPath">
                        <path d="M 448.059 355.464 C 444.858 345.92 441.688 332.309 441.88 314.566 C 442.072 309.986 442.616 304.606 443.801 298.713 C 444.89 293.3 446.33 288.528 447.803 284.461 C 447.803 284.461 450.909 274.981 453.759 258.135 C 460.963 220.567 461.283 189.469 460.195 167.787 C 458.37 131.565 454.403 -61.305 433.403 -90.965 C 422.368 -106.551 20.838 -99.548 17.506 -91.76 C 8.542 -70.81 2.673 186.267 1.744 193.537 C -4.051 237.958 4.722 337.753 72.539 383.263 C 124.218 417.916 188.384 408.468 230.585 402.223 C 305.254 391.206 344.381 357.738 411.398 373.143 C 432.978 378.107 449.596 386.306 459.907 392.167 C 460.323 392.327 460.899 392.423 461.283 392.167 C 464.133 390.277 453.759 372.534 448.059 355.432 L 448.059 355.464 Z" />
                    </clipPath>
                </defs>
                <img src="img/girl.png"
                    className="absolute top-0 left-0"
                />
            </svg>
            <div
                className="absolute w-full h-[400px] bottom-0 -left-[4px]"
                style={{
                    clipPath: "url(#clipPath)"
                }}
            >
                <div className="w-full h-full inset-0 m-auto relative">
                    <div className="flex flex-col justify-center items-center bg-red-400 px-4 py-2 text-sm text-bold text-white absolute rounded-lg">
                        <span>Heart {likes}</span>
                        
                    </div>
                    <img src="img/girl.png"
                        className="absolute"
                        style={{
                            top: top + "%",
                            rotate: rotate + "deg",
                            scale: scale + "%",
                            transitionDuration: transitionDuration + "s",
                            transitionTimingFunction: transitionTimingFunction
                        }}
                    />
                </div>

            </div>
        </div>
    )
}

export default ConocenosAnim
