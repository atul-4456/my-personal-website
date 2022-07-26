import { useState,useContext,useEffect } from "react";

import { useParams } from "react-router-dom";
import { BsHeart  } from 'react-icons/bs';
import LikeContext from "../../context/LikeContext";



const UserDetails=()=>{

    

    const params=useParams();
    // const [searchParam,setSearchParam]=useSearchParams();
    const {userId} =params;

    const {incrementLike}=useContext(LikeContext);
    const [userData,setUserData]=useState(null);
    const [loader,showLoader]=useState(false);


    


  useEffect(()=>{
    showLoader(true);
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(jsonResponse=>{
      setUserData(jsonResponse)
      showLoader(false);
    })
    
  },[])
   
    const getUser=()=>{
      const user=userData.find(({id})=>id.toString()===userId);
      if(!user){
        return 'user not found'
      }
        return user;
    };

    if(!userData || loader){
      return <>Loading...</>
    }


    const user=getUser();


    return(
       <div className="p-5 mt-5 bg-light">

        <h4>User Details</h4>
        <div>UserName: {user.name}</div>
        <div>Email: {user.email}</div>

        <button onClick={incrementLike} className=" mt-3 btn btn-primary">
          <BsHeart/> Like
        </button>
        
        </div>
        
    )

}

export default UserDetails;