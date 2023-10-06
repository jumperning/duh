function MainTitle(props: any) {

    return (
        <h1 className="skew-y-[-6.5deg]  text-4xl sm:text-7xl Aglet-italic-bold text-white mb-5 uppercase text-center sm:text-left sm:leading-[3.4rem]">
            {props.children}
        </h1>
    )
}

export default MainTitle

export function Title(props: any) {
    return (
        <h2 className={`${props.className} -skew-y-3 text-4xl Aglet-bold text-white uppercase`}>
            {props.children}
        </h2>
    )
}

export function SubTitle(props: any) {
    return (
        <h3 className="-skew-y-3 text-4xl Aglet-bold text-white uppercase ">
            {props.children}
        </h3>
    )
}
