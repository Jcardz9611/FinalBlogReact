import React, { useContext } from "react";
import { useState } from "react";
import List from "../components/List";
import { Link } from 'react-router-dom'
import { AuthContext } from "../context/authContext";

const Home = () => {

    const { currentUser, logout } = useContext(AuthContext);
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };


    return (
        <div className="home">
            <div className="status">
                <span>{currentUser?.username}</span>
                {currentUser ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <Link className="link" to="/login">
                        Login
                    </Link>
                )}
            </div>
            <input type="text" id="myInput" className="search" onChange={inputHandler} placeholder="Search by title, author or content"></input>
            <div className="posts">
                <List input={inputText} />
            </div>
        </div>

    );
};

export default Home