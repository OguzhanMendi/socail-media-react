import Avatar from "@mui/material/Avatar";
import { useState,useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function PopularProfileCard() {
  const [userData,setUserData] = useState([]);
  const currentUser = useSelector((state)=> state.user);

  const getUserData = async ()=>{
     const response = await axios.get("http://localhost:3000/users/",{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      }


     });

     setUserData(response.data);
  }

  useEffect(()=>{
    getUserData();
  },[])

  const UserFollowOrUnollow = async (id)=>{
    const serviceUrl =`http://localhost:3000/users/follow/${id}`
    const response = await axios.post(serviceUrl,{},{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      }
    })

    if(response.status === 200){
      getUserData();

    }
  }

  return (
    <>
   
      {userData?.users?.map((user) => {
        return (
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar alt="Remy Sharp" src={user.avatar} />
                <div>
                  <span className="text-sm font-semibold">@{user.username}</span>
                  <div className="flex gap-1 text-gray-400">
                    <span>{user.userFollowers?.length || 0} Followers</span>
                  </div>
                </div>
              </div>

              <div className="text-gray-400 text-sm">
                {
                  user?.userFollowers.includes(currentUser.user._id) ?
                ( <button className="bg-gray-500 text-white rounded-full px-3 py-1" onClick={()=>{
                  UserFollowOrUnollow(user._id);
                }}>
                  UnFollow
                </button>) 
                :
                ( <button className="bg-rose-500 text-white rounded-full px-3 py-1" onClick={()=>{
                  UserFollowOrUnollow(user._id);
                }}>

                  Follow
                </button>)
                }
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
