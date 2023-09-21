
export const Footer = () => {
    return (
        <footer className='bg-black/20 flex flex-col justify-around items-center gap-8 py-8'>
            <figure>
                <img src="img/logo.svg" alt="Duh!" className='w-24' />
            </figure>
            <div>
                <ul className='flex gap-8'>
                    <li>
                        <a href="#">
                            <img src="img/ig.svg" alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/in.svg" alt="LinkedIn" />
                        </a>
                    </li>
                </ul>
            </div>
            <small className='text-white text-xl Aglet-extra'>Copyright 2023</small>
        </footer>
    )
}
