export default function HowItem(props: any) {


    return (
        <article ref={props.fowardRef} className="flex flex-row justify-center lg:justify-start tems-center lg:items-start gap-4 p-8">
            <div className="number -skew-y-12 font-bold text-[#edcc6b] text-8xl Aglet-italic-bold">{props.number}</div>
            <div className="text-left">
                <h3 className="text-white Aglet-bold mb-2">{props.title}</h3>
                <p className="text-white font-light">{props.children}</p>
            </div>
        </article>
    )
}