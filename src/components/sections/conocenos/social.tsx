import { useEffect, useState } from "react";

function SocialAnim(props: any) {
    const [likes, setLikes] = useState(0);
    const [likesDisplay, setLikesDisplay] = useState("");
    const [top, setTop] = useState(110);
    const [duration, setDuration] = useState(0.4);
    const [ease, setEase] = useState("ease-out");

    useEffect(() => {
        setTimeout(() => {
            setTop(-15);
        }, (props.delay * 1000))
        setTimeout(() => {
            setDuration(duration / 1.25);
            setEase("cubic-bezier(0.750, 0.335, 0.695, 1.5)")
            setTop(0);
        }, ((props.delay * 1000) + (duration * 1000)))
        setTimeout(() => {
            increaseLikes();
        }, ((props.delay * 1000) + (duration * 1000) + 500))
    }, [])

    useEffect(() => {
        var auxLikesK = Math.floor(likes / 1000);
        var auxLikesD = likes - (auxLikesK * 1000);
        var auxLikesDString;
        if (auxLikesD < 100) {
            if (auxLikesD < 10) {
                auxLikesDString = "00" + auxLikesD;
            } else {
                auxLikesDString = "0" + auxLikesD;
            }
        } else {
            auxLikesDString = auxLikesD;
        }
        if (auxLikesK == 0) {
            setLikesDisplay(likes.toString());
        } else {
            setLikesDisplay(auxLikesK + "." + auxLikesDString)
        }
    }, [likes])

    function increaseLikes() {
        var auxNum:any;
        if (props.likes) {
            auxNum = 2000;
        } else {
            auxNum = 1000;
        }
        for (var i = 0; i < 100; i++) {
            setTimeout(() => {
                setLikes(prevCount => prevCount + Math.floor(Math.random() * auxNum))
            }, i * 10)
        }
    }

    return (
        <div
            className={`${props.className} flex flex-col justify-center items-center font-bold text-white absolute drop-shadow-sm`}
            style={{
                marginTop: top + "%",
                transitionDuration: duration + "s",
                transitionTimingFunction: ease,
                transitionProperty: "all"
            }}
        >
            <span className="bg-[#FB4949] px-2 py-2 text-sm rounded-lg flex justify-center items-center gap-1 Aglet">
                {props.children}
                {likesDisplay}
            </span>
            <span className="w-1" style={{
                borderLeft: "15px solid transparent",
                borderRight: "15px solid transparent",
                borderTop: "12px solid #FB4949",
            }} />
        </div>
    )
}

export default SocialAnim
