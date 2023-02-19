import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import FsrnlButton from "../../Components/Button/FsrnlButton";
import { getBlogsApiUrl } from "../../Services/ApiService";
import { getUserData, getUserToken } from "../../Services/StorageService";
import "./DashboardStyles.css";

const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);

    const user = getUserData();
    const navigate = useNavigate();


    const onBannerTxtClicked = () => {
        navigate('/profile');
    }

    const onPostAddBtnClicked = () => {
        navigate('/post-add')
    }

    useEffect(() => {
        const headers = {
            'Authorization': `Bearer ${getUserToken()}`
        };

        axios.get(getBlogsApiUrl(), {
            headers: headers
        })
        .then((resp) => {
            const blogs = resp.data.blogs;
            if (blogs && blogs.length > 0) {
                setBlogs(blogs);
            }
        });
    }, []);

    const renderBlogList = (blogs) => {
        return (
            <div className="blog-list">
                {blogs.map((blog) => (<Blog blog={blog} user={getUserData()} />))}
            </div>
        )
    }

    return (
        <div>
            <div className="banner">
                <div onClick={onBannerTxtClicked} className="banner-main-text">Hi, {user.userName}</div>
                <div>
                    <FsrnlButton text={'Add Post'} style={{ backgroundColor: "orange" }} onClickCb={onPostAddBtnClicked} />
                </div>
            </div>
            <div className="blogs-container">
                {blogs.length > 0 ? renderBlogList(blogs) : 'No blogs are there!'}
            </div>
        </div>

    )
}

export default Dashboard;