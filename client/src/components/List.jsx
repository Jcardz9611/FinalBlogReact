import { React, useState } from 'react'
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const List = (props) => {
    const [posts, setPosts] = useState([]);
    const cat = useLocation().search
    const truncate = (str) => {
        return str.length > 10 ? str.substring(0, 50) + "..." : str;
    }
    const filteredData = posts.filter((el) => {
        if (props.input === '') {

            return el;
        } else {
            return el.title.toLowerCase().includes(props.input) || el.description.toLowerCase().includes(props.input) || el.username.toLowerCase().includes(props.input)
        }
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts${cat}`);
                setPosts(res.data);
            } catch (err) {

            }
        };
        fetchData();
    }, [cat]);


    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }
    return (
        <div className='prepost'>
            {filteredData.map((post) => (
                <div className='post' key={post.id}>
                    <div className="content">
                        <h1>{post.title}</h1>
                        <p className="paragrapgh">{getText(truncate(post.description))}</p>
                        <p><b>Posted by: </b>{post.username}</p>
                        <Link className="link" to={`/post/${post.id}`}>
                            <button>Read more!</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default List