import { Icon } from '@iconify/react/dist/iconify.js';

const SearchBar = () => {
    return (
        <div className='w-full p-4 bg-bgcolor flex items-center justify-center border border-gray-700'>
            <input type="text" className='w-full bg-primary text-white focus:outline-none p-4' placeholder='Search...' />
            <button className='py-4 w-[100px] bg-secondary text-white flex justify-center items-center'>
            <Icon icon="stash:search-duotone" width="24" height="24" />
            </button>
        </div>
    );
}

export default SearchBar;
