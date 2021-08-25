import Avatar from "./Avatar";
import { ViewGridIcon } from '@heroicons/react/solid'
function Header() {
    return (
        <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
            {/* left */}
            <div className='flex space-x-4 items-center'>
                <p className='link'>About</p>
                <p className='link'>Store</p>
            </div>
            {/* right */}
            <div className='flex space-x-4 items-center'>
                <p className='link'>GMail</p>
                <p className='link'>Images</p>

                {/* icon */}
                <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>
                {/* avatar */}
                <Avatar url="https://pbs.twimg.com/profile_images/901352178408751104/IN8Gwj5Z_400x400.jpg"/>
            </div>
        </header>
    )
}

export default Header
