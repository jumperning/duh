import { useEffect, useState } from "react";

export default function InstagramProfile(props: any) {

    const [followerString, setFollowerString] = useState("");


    useEffect(() => {
        if (props.influencer.followers < 1000) {
            setFollowerString(props.influencer.followers);
        }
        if (props.influencer.followers > 1000 && props.influencer.followers < 1000000) {
            setFollowerString(Math.floor(props.influencer.followers / 1000) + "K");
        }
        if (props.influencer.followers > 1000000) {
            var auxMillion = Math.floor(props.influencer.followers / 1000000);
            var auxPoint = Math.floor((props.influencer.followers - auxMillion) / 100000);
            setFollowerString(auxMillion + "." + auxPoint + "M");
        }
    }, [])

    return (
        <div className="flex flex-row justify-between gap-3 items-center space-y-2">
            <div className='flex justify-center items-center gap-3'>
                <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                    <span className="block rounded-full bg-[#F2F2F2] p-1">
                        <img className="h-16 w-16 max-w-none rounded-full object-cover" src={props.influencer.img} />
                    </span>
                </div>
                <div className='flex flex-col'>
                    <p className="text-base text-black Aglet-bold font-bold text-left">{props.influencer.nombre}</p>
                    <span className='text-[#999999]'>{followerString} followers</span>
                    <p className="text-sm text-black Aglet font-bold hidden lg:block">
                        <img src="img/instagram.svg" alt="" />
                    </p>
                </div>
            </div>
            <span className="text-sm text-black Aglet font-bold block lg:hidden">
                <img src="img/instagram.svg" alt="" />
            </span>
        </div>
    )
}