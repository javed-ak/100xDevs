export function VideoCard(props: any) {
    return <>
        <div className="p-2 cursor-pointer">
            <img src={props.thumbnail} alt="Thumbnail" className="rounded-xl hover:rounded-none" />
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-2">
                    <img src={props.authImg} alt="" className="rounded-full h-10 w-10" />
                </div>
                <div className="col-span-10 pl-2">
                    {props.title}
                    <div className="text-sm text-gray-400">
                        {props.author}
                    </div>
                    <div className="text-sm text-gray-400">
                        {props.views} | {props.timestamp}
                    </div>
                </div>
            </div>

        </div>

    </>
} 