import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import Edit from "../img/edit.jpg";
import Delete from "../img/delete.jpg";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";

const Single = () => {
    const [post, setPost] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const postId = location.pathname.split("/")[2];

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/${postId}`);
                setPost(res.data);
            } catch (err) {
            }
        };
        fetchData();
    }, [postId]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${postId}`);
            navigate("/")
        } catch (err) {
        }
    }

    const handleDownload = async () => {
        try {
            await axios.post(`/posts/${postId}`);
        } catch (err) {
        }
    }

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    return (
        <div className="single">
            <div className="content">
                <div className="user">
                    <div className="info">
                        <span><b>Posted by: </b>{post.username}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && (
                        <div className="edit">
                            <Link to={`/write?edit=2`} state={post}>
                                <img src={Edit} alt="" />
                            </Link>
                            <img onClick={handleDelete} src={Delete} alt="" />
                        </div>
                    )}

                </div>
                <h1>{post.title}</h1>
                <p
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(post.description),
                    }}
                ></p>      </div>
            <Link className="link" >
                <button onClick={handleDownload} className="return">Download post</button>
            </Link>
            <Link className="link" to={`/`}>
                <button className="return">Return to homepage</button>
            </Link>

        </div>
    );
};

export default Single;