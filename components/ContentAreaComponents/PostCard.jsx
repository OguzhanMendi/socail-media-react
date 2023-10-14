
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function PostCard(
    avatar, fullname, username, createdOn, likeCount, commentCount


) {
    return (<>
        <div className="bg-gray-100 flex-col mt-5">
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <Avatar sx={{ bgcolor: deepOrange[500] }} >M</Avatar>
                    <div className=''>
                        <span>Jhones Stim</span>
                        <div>
                            <span>Jhones Stim</span>
                            <span>*</span>
                            <span>1 hour Ago</span>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </div>
        </div >
    </>);
}