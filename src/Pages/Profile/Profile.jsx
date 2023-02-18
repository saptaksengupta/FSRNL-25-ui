import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserData, getUserToken, isLoggedIn } from "../../Services/StorageService";


const ProfilePage = () => {
    const navigate = useNavigate();

    if (!isLoggedIn()) {
        navigate('/login');
        return null;
    }

    const user = getUserData();
    return (
        <div>
            Profile page {user.userName};
        </div>
    );
} 

export default ProfilePage;