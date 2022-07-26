import users from "./user-data";
import { useParams } from "react-router-dom";



const UserDetails=()=>{
    const params=useParams();
    // const [searchParam,setSearchParam]=useSearchParams();
    const {userId} =params;


   
    const getUserName=()=>{
      const userData=users.filter(({id})=>id===userId);
      if(!userData || userData.length===0){
        return 'user not found'
      }
        return userData[0].name;
    };


    return(
    
        <div>UserName: {getUserName()}</div>
       

        
    )

}

export default UserDetails;