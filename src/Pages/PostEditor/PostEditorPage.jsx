import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FsrnlButton from "../../Components/Button/FsrnlButton";
import FsrnlInput, { INPUT_TYPES } from "../../Components/Fsrnlnput/FsrnlInput";
import { getCreateBlogApiUrl } from "../../Services/ApiService";
import { getUserToken } from "../../Services/StorageService";
import "./PostEditorPageStyles.css";

const PostEditorPage = () => {

    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);
    const navigate = useNavigate();

    const onTitleChanged = (value) => {
        const title = value;
        if (title) {
            setTitle(title);
        }
    }

    const onContentChanged = (value) => {
        const content = value;
        if (content) {
            setContent(content);
        }
    }

    const onCreateBlogClicked = () => {
        if (!title) {
            alert('Title must be there!');
            return;
        } 

        if (!content) {
            alert('Content is missing!');
             return;
        }

        const headers = {
            'Authorization': `Bearer ${getUserToken()}`
        };

        axios.post(getCreateBlogApiUrl(), {
            title: title,
            content: content
        }, {headers: headers}).then(resp => {
            alert('Blog is now ready to read!')
            navigate('/dashboard');
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="page-container">
            <div>
                Blog Creation / Modification
            </div>
            <div className="create-blog-form-container">
                <div>
                    <FsrnlInput
                        type={INPUT_TYPES.INPUT_TXT}
                        onChangeCb={onTitleChanged}
                        placeholder={'Title'}
                    />
                </div>
                <div>
                    <FsrnlInput
                        type={INPUT_TYPES.INPUT_TXT_AREA}
                        onChangeCb={onContentChanged}
                        placeholder={'Write anything :)'}
                    />
                </div>
                <FsrnlButton text={'Submit'} onClickCb={onCreateBlogClicked} />
            </div>
        </div>
    )
}

export default PostEditorPage;