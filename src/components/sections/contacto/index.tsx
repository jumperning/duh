
export const Contactanos = () => {
    return (
        <section className='text-center py-16 lg:flex lg:flex-row lg:justify-center lg:items-start lg:gap-20'>
            <div className="block lg:hidden">
                <h2 className='text-4xl Aglet-italic-bold text-[#F4CA58] pt-6 -skew-y-6'>¡CONTÁCTANOS!</h2>
                <p className='text-white Aglet-bold font-bold py-6 text-xl'>¿Cómo podemos ayudarte?</p>
                <p className='text-white Aglet-extra text-md'>Escribinos y te mostramos <br />
                    la experiencia 360° de Duh!</p>
            </div>
            <div className="text-left hidden sm:block">
                <h2 className='text-4xl Aglet-italic-bold text-white -skew-y-6 uppercase text-left mt-8'>¿En qué podemos  <br />
                    colaborar?</h2>
                    <p className="text-white mt-11 text-left ">Escríbenos y vive la experiencia <br />
completa de Duh! en 360°.</p>
            </div>
            <div className="bg-white w-full py-2 my-16 lg:my-0 lg:w-96 lg:rounded-2xl">

                <div className="flex flex-row items-center gap-3 boder border-b-2  pb-2 px-4">
                    <img src="img/logo-form-header.png" alt="Duh!" />
                    <h2 className='Aglet font-bold text-xl'>Duh!</h2>

                </div>
                <div className='body-chat'>
                   
                    <div className="flex justify-start items-center py-8 lg:-ml-12">
                        <img src="img/icon-chat.png" alt="Duh!" />
                        <div className='bg-[#D9D9D9] flex justify-center items-center rounded-full py-2 px-4'>
                            <p>¿En qué podemos ayudarte?</p>
                        </div>
             
                    </div>
                    <div className="flex flex-col gap-4 justify-between items-center  w-full">
                        <div className="flex justify-between w-[95%]  gap-4">
                            <input type="text" placeholder='Nombre' className='border py-2 px-4 w-[100%] rounded-full border-black placeholder-black' />
                            <input type="text" placeholder='Empresa' className='border py-2 px-4 w-[100%] rounded-full border-black placeholder-black' />
                        </div>
                        <input type="text" placeholder='Email' className='border py-2 px-4 w-[95%] rounded-full border-black placeholder-black' />
                        <input type="text" placeholder='Mensaje' className='border py-2 px-4 w-[95%] rounded-full border-black placeholder-black' />

                    </div>
                    <div className="flex justify-end p-4">
                        <button className='text-[#0075FF]'>Enviar</button>
                    </div>
                </div>

            </div>
        </section>
    )
}
