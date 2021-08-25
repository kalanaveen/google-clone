import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from "@heroicons/react/outline";
import HeaderOptionSingle from "./HeaderOptionSingle";

function HeaderOptions() {
    return (
        <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b'>
            {/* left section */}
            <div className='flex space-x-6'>
              <HeaderOptionSingle Icon={SearchIcon} title="All" selected/>
              <HeaderOptionSingle Icon={PhotographIcon} title="Images"/>
              <HeaderOptionSingle Icon={PlayIcon} title="Videos"/>
              <HeaderOptionSingle Icon={NewspaperIcon} title="News"/>
              <HeaderOptionSingle Icon={MapIcon} title="Maps"/>
              <HeaderOptionSingle Icon={DotsVerticalIcon} title="More"/>
            </div>

            {/* right section */}
            <div className='flex space-x-4'>
                <p className='link'>Settings</p>
                <p className='link'>Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
