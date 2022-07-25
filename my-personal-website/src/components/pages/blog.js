import { useNavigate } from "react-router-dom";


const Blog=()=>{
    const navigate=useNavigate();
    return (
            <div className="container">
                <h2>This is Blog Page</h2>
                <div className="d-flex flex-row gap-3">
                    <button onClick={()=>navigate('/abc/user/1')} className="btn btn-primary">User 1</button>
                    <button onClick={()=>navigate('/abc/user/2')} className="btn btn-primary">User 2</button>
                    <button onClick={()=>navigate('/abc/user/3')} className="btn btn-primary">User 3</button>
                    <button onClick={()=>navigate('/abc/user/4')} className="btn btn-primary">User 4</button>


                </div>
            </div>
            
    
    );
}

export {Blog};