export const SearchBar = () => {
    return <>
        <div className="flex items-center">
            <div className="">
                <div className="w-96 flex text-gray-900 border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">
                    <input id="default-search" className="w-full bg-slate-950 text-white border-none outline-none" placeholder="Search" required />
                    <button className="bg-slate-950 text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 02" />
                        </svg>
                    </button>
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 p-1 ml-2  bg-gray-800 rounded-full">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>
            </div>
        </div>
    </>
}