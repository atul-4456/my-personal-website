import { useContext } from "react";
import users from "./user-data";
import { useParams } from "react-router-dom";
import { BsHeart  } from 'react-icons/bs';
import LikeContext from "../../context/LikeContext";



const UserDetails=()=>{
    const params=useParams();
    // const [searchParam,setSearchParam]=useSearchParams();
    const {userId} =params;

    const {incrementLike}=useContext(LikeContext);


   
    const getUserName=()=>{
      const userData=users.filter(({id})=>id===userId);
      if(!userData || userData.length===0){
        return 'user not found'
      }
        return userData[0].name;
    };


    return(
       <div className="p-5 mt-5 bg-light">

        <h4>User Details</h4>
        <div>UserName: {getUserName()}</div>
        <button onClick={incrementLike} className=" mt-3 btn btn-primary">
          <BsHeart/> Like
        </button>
        
        </div>
        
    )

}

export default UserDetails;