import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function HeaderSearch() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value;
        if (!term) return;
        router.push(`/search?term=${term}`);
    };
    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex w-full p-6 items-center'>
                <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height={40} width={120} alt ="google image" className='cursor-pointer' onClick={() => router.push('/')} />
                <form className='flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5'>
                    <input ref={searchInputRef} type="text" className='flex-grow w-full focus:outline-none' defaultValue={router.query.term} />
                    <XIcon className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125' onClick={() => (searchInputRef.current.value = " ")} />
                    <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
                    <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
                    <button hidden type="submit" onClick={search}>search</button>
                </form>
                <Avatar url="https://pbs.twimg.com/profile_images/901352178408751104/IN8Gwj5Z_400x400.jpg" className='ml-auto'/>
            </div>
            {/* headeroptions */}
            <HeaderOptions/>
        </header>
    )
}

export default HeaderSearch
