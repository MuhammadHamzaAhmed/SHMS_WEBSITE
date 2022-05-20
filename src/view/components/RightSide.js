import "../css/RightSide.css"
import {Avatar} from "@mui/material";
import profile from '../../images/profile.jpg'
import Update from "./Update";


const RightSide = (param) => {
    return (
        <div className="RightSide">
            <div className='profile'>
                <Avatar src={param.user_name==="Muhammad Hamza"?profile:param.user_name} alt="profile" sx={{width: 200, height: 200}}/>
                <h1>{param.user_name}</h1>
            </div>
            <div>
                <h2 className="head">Updates</h2>
                <Update/>
            </div>
        </div>
    )
}
export default RightSide