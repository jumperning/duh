import { useEffect, useMemo, useRef, useState } from "react";

export const MarcasCreadores = () => {

  const [scale, setScale] = useState("0%");
  const [rotate, setRotate] = useState("720deg");
  const [left, setLeft] = useState("500");
  const [right, setRight] = useState("500");

  const thisSection = useRef<any>();

  const isInViewport = useIsInViewport(thisSection);

  useEffect(() => {
    if (isInViewport) {
      setScale("100%");
      setRotate("0deg");
      setLeft("0");
      setRight("0")
    } else {
      setScale("0%");
      setRotate("720deg");
      setLeft("500");
      setRight("500");
    }
  }, [isInViewport])

  return (
    <section ref={thisSection} className='mt-32 flex flex-col sm:h-[30vh] lg:flex-row lg:gap-4 lg:justify-center lg:items-center  Aglet-italic-bold text-center'>
      <h3 className='text-3xl lg:text-6xl text-white uppercase'
        style={{
          marginRight: left + "px",
          transitionDuration: ".75s",
          transitionTimingFunction: "cubic-bezier(0.495, 0.360, 0.525, 1.490)"
        }}>
        marcas
      </h3>
      <h3 className='text-3xl lg:text-6xl text-[#edcc6b]'
        style={{
          scale: scale,
          rotate: rotate,
          transitionDuration: "1s",
          transitionTimingFunction: "cubic-bezier(0.495, 0.360, 0.525, 1.490)"
        }}>
        Duh!
      </h3>
      <h3 className='text-3xl lg:text-6xl text-white uppercase'
        style={{
          marginLeft: right + "px",
          transitionDuration: ".75s",
          transitionTimingFunction: "cubic-bezier(0.495, 0.360, 0.525, 1.490)"
        }}>
        creadores
      </h3>
    </section>
  )
}


function useIsInViewport(ref: any) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}