
export const PensadaItem = (props:any)=> {
    return (
    <article className='text-left flex flex-col justify-center gap-7 max-w-[95vw] pb-4 lg:w-1/2 lg:p-5 lg:gap-5'>
                    <h3 className='text-[#6A11D6] text-2xl lg:text-3xl Aglet-bold'>  {props.title}</h3>
                    {props.children}
                    <h4 className='text-[#6A11D6] text-xl Aglet-bold'>Influencers</h4>
                    <div className='flex flex-col gap-8'>
                        <div className="flex flex-row justify-between gap-3 items-center space-y-2">
                            <div className='flex justify-center items-center gap-3'>
                                <div className="from-instagramYellow via-instagramOrange to-instagramPurple relative rounded-full bg-gradient-to-tr p-1">
                                    <a href="#" className="block rounded-full bg-[#F2F2F2] p-1">
                                        <img className="h-16 w-16 max-w-none rounded-full object-cover" src="img/cristobal.png" />
                                    </a>
                                </div>
                                <div className='flex flex-col'>
                                    <a href="#" className="text-lg text-black Aglet-bold font-bold text-left">cristobalcombes</a>
                                    <span className='text-[#999999]'>265k followers</span>
                                    <a href="#" className="text-sm text-black Aglet font-bold hidden lg:block">
                                        <img src="img/instagram.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <a href="#" className="text-sm text-black Aglet font-bold block lg:hidden">
                                <img src="img/instagram.svg" alt="" />
                            </a>
                        </div>
                       
                    </div>
                    <div className="bg-white rounded-xl p-4 lg:mt-8">
                        <h3 className='text-[#6A11D6] text-xl Aglet-bold py-2'>Resultados</h3>
                        <p>
                            <b>Followers y alcance de audiencia: </b> 370.000 personas <br />
                            <b>Reproducciones:</b> 600.000 reproducciones<br />
                            <b> Engagement:</b> 4%
                        </p>
                    </div>
                </article>
  )
}