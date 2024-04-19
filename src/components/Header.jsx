import { brainwave } from '../assets'
import { navigation } from "../Constents";
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = () => {
    const pathName = useLocation();
    return (
        <div className="fixed top-0 left-0 z-50 w-full bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 px-lg:py-4">

                <a className='block w-[12rem] xl:mr-8' href='#hero'>
                    <img src={brainwave} alt="brainwave" height={40} width={190} />
                </a>

                <nav className='hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent'>
                    <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                        {navigation.map((item) => (
                            <a className={` block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden': ''}
                            px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathName.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                                key={item.id}
                                href={item.url}

                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </nav>
                        <a href="#signup" className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'>
                            New Account
                        </a>
                        <Button className='hidden lg:flex' href='#login'>Sign In</Button>
            </div>


        </div>
    )
}

export default Header