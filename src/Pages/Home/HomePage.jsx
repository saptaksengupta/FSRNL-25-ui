import { useNavigate } from "react-router-dom"
import FsrnlButton from "../../Components/Button/FsrnlButton"

import "./HomePageStyles.css";

const HomePage = () => {
    const navigate = useNavigate();
    const onLoginBtnClicked = () => {
        navigate('/login');
    }

    return (
        <div className="home-page-container">
            <div>Welcome to our Application</div>
            <div>Please login to our apllication by clicking below</div>
            <FsrnlButton text={'Login'} style={{ backgroundColor: "orange", marginTop: "10px" }} onClickCb={onLoginBtnClicked} />
        </div>
    )
}

export default HomePage;