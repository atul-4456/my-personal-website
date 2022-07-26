import { createContext, useState } from "react";


const LikeContext=createContext({
    likeCount:0,
    incrementLike:()=>{}
});

const LikesContextProvider=(props)=>{
    const { children }=props;
    const [likeCount,setLikeCount]=useState(0);
    const incrementLike=()=>{
        setLikeCount((count)=>count+1);
    }

    return(
        <LikeContext.Provider value={{
            likeCount,
            incrementLike
        }}>
            {children}
        </LikeContext.Provider>
    )
}

export default LikeContext;
export { LikesContextProvider };