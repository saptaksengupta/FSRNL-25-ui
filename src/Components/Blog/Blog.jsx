import "./BlogStyles.css";

const Blog = ({blog, user}) => {
    const {title, content, time} = blog;
    const {userName} = user;

    const getFormattedTime = (time) => {
        const d = new Date(time);
        return d.toDateString();
    }

    return (
        <div className="blog-container">
            <div className="blog-title">
                {title}
            </div>
            <div className="blog-content">
                {content}
            </div>
            <div className="blog-footer">
                Posted by &nbsp; <span className="post-owner">{userName}</span> &nbsp; at &nbsp; <span >{getFormattedTime(time)}</span>
            </div>
        </div>
    );
}

export default Blog;