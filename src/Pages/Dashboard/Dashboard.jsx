import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../Services/StorageService";
import "./DashboardStyles.css";

const Dashboard = () => {
    const user = getUserData();
    const navigate = useNavigate();
    
    const onBannerTxtClicked = () => {
        navigate('/profile')
    }

    return (
        <div className="banner">
            <div onClick={onBannerTxtClicked} className="banner-main-text">Hi, {user.userName}</div>
        </div>
    )
}

export default Dashboard;