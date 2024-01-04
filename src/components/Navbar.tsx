import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible);
    };

    const clicked = () => {
        setIsVisible(false);
    };

    return (
        <nav className='flex items-center justify-between flex-wrap bg-green-600 p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <Link to='/' className='font-semibold text-2xl tracking-tight'>Green Thumb</Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 py-2 text-gray-200 border border-gray-400 hover:text-white hover:border-white rounded'>
                    <i className='fas fa-bars'></i>
                </button>
            </div>
            { isVisible ? (
                <div className='w-full block flex-grow items-center'>
                    <div className="text-sm lg:flex-grow">
                        <Button className='p-3 m-5 bg-gray-200 justify-center rounded'>
                            <div>
                                <Link to='/' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 font-semibold text-black hover:text-green-700 mr-4'>
                                    Home
                                </Link>
                            </div>
                        </Button>
                        <Button className="p-3 m-5 bg-gray-200 justify-center rounded">
                            <div>
                                <Link to='/plants' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 font-semibold text-black hover:text-green-700 mr-4'>
                                    My Plants
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-gray-200 justify-center rounded'>
                            <div>
                                <Link to='/plants/when_to_plant' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 font-semibold text-black hover:text-green-700 mr-4'>
                                    When to Plant
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-gray-200 justify-center rounded'>
                            <div>
                                <Link to='/dashboard' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 font-semibold text-black hover:text-green-700 mr-4'>
                                    Dashboard
                                </Link>
                            </div>
                        </Button>
                        {
                            !isAuthenticated ? 
                            <Button className='p-3 m-5 bg-gray-200 justify-center rounded'>
                                <div>
                                    <Link to="/" onClick={signInOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 font-semibold text-black hover:text-green-700'>
                                        Login
                                    </Link>
                                </div>
                            </Button>
                            :
                            <Button className='p-3 m-5 bg-gray-200 justify-center rounded'>
                                <div>
                                    <Link to="/" onClick={signOutOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 font-semibold text-black hover:text-green-700'>
                                        Sign Out
                                    </Link>
                                </div>
                            </Button>
                        }
                    </div>
                </div>
            ) : (
                <></>
            )}
        </nav>
    );
}

export default Navbar;