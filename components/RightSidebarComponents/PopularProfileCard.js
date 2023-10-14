
export default function PopularProfileCard() {
    return (
        <>
            <div>


                <div className="bg-gray-100 flex-col mt-5">
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <Avatar sx={{ bgcolor: deepOrange[500] }} >M</Avatar>

                        </div>
                        <span className="text-lg font-sembolid">SSS</span>
                        <div className="flex gap-1 text-gray-400">
                            <span>148K followers</span>
                        </div>
                    </div>

                </div>
                <div className="text-gray-400">
                    <button>Follow</button>
                </div>

            </div>

        </>);
}