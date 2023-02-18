import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FsrnlButton from "../../Components/Button/FsrnlButton";
import FsrnlInput, { INPUT_TYPES } from "../../Components/Fsrnlnput/FsrnlInput";
import { getLoginApiUrl } from "../../Services/ApiService";
import { getUserToken, setUserData, setUserToken } from "../../Services/StorageService";
import "./LoginPageStyles.css";

const LoginPage = () => {

    const [phone, setPhone] = useState(null); 
    const [password, setPassword] = useState(null); 

    const [phoneErr, setPhoneErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    const navigate = useNavigate();
    if (getUserToken()) {
        navigate('/dashboard');
        return;
    }

    const onPhoneChanged = (value) => {
        setPhone(value);
    }

    const onPasswordChanged = (value) => {
        setPassword(value);
    }

    const onLoginBtnClick = () => {
        if (!phone) {
            setPhoneErr(true);
        }

        if (!password) {
            setPassErr(true);
        }

        axios.post(getLoginApiUrl(), {
            phone: phone,
            password: password
        }).then(resp => {
            console.log(resp);
            if (resp.data.token) {
                setUserToken(resp.data.token);
            }
            if (resp.data.user) {
                setUserData(resp.data.user);
            }
            navigate('/dashboard');
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="login-page-container">
            <div className="banner"></div>
            <div className="login-form-container">
                <div>
                    <div>
                        <FsrnlInput 
                            type={INPUT_TYPES.INPUT_TXT} 
                            onChangeCb={onPhoneChanged} 
                            placeholder={'Phone'}
                        />
                    </div>
                    <div>
                        <FsrnlInput 
                            type={INPUT_TYPES.INPUT_PASSWORD} 
                            placeholder={'Passowrd'}
                            onChangeCb={onPasswordChanged}
                        />
                    </div>
                    <div>
                        <FsrnlButton text={'Login'} onClickCb={onLoginBtnClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;