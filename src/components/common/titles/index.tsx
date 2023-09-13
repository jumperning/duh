function MainTitle(props: any) {

    return (
        <h1 className="-skew-y-3 text-4xl Aglet-bold text-white mb-5 uppercase text-center">
            {props.children}
        </h1>
    )
}

export default MainTitle

export function Title(props: any) {
    return (
        <h2 className="-skew-y-3 text-4xl Aglet-bold text-white mb-5 uppercase ">
            {props.children}
        </h2>
    )
}

export function SubTitle(props: any) {
    return (
        <h3 className="-skew-y-3 text-4xl Aglet-bold text-white mb-5 uppercase ">
            {props.children}
        </h3>
    )
}
