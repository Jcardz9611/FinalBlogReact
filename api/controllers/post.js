import { db } from "../db.js";
import jwt from "jsonwebtoken";
import fs from 'fs';


export const getPosts = (req, res) => {
    const q = req.query.cat
        ? "SELECT p.id AS id, p.title AS title, p.description as description, p.cat AS cat, p.date AS date, u.username AS username FROM posts p JOIN users u ON p.uid = u.id WHERE cat=?"
        : "SELECT p.id AS id, p.title AS title, p.description as description, p.cat AS cat, p.date AS date, u.username AS username FROM posts p JOIN users u ON p.uid = u.id";

    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    });
};

export const getPost = (req, res) => {
    const q =
        "SELECT p.id AS id, p.title AS title, p.description as description, p.cat AS cat, p.date AS date, u.username AS username FROM posts p JOIN users u ON p.uid = u.id WHERE p.id=? ";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data[0]);
    });
};

export const addPost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid");

        const q =
            "INSERT INTO posts(`title`, `description`, `cat`, `date`,`uid`) VALUES (?)";

        const values = [
            req.body.title,
            req.body.desc,
            req.body.cat,
            req.body.date,
            userInfo.id,
        ];

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json("Post has been created.");
        });
    });
};

export const deletePost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const postId = req.params.id;
        const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

        db.query(q, [postId, userInfo.id], (err, data) => {
            if (err) return res.status(403).json("You can delete only your post!");

            return res.json("Post has been deleted!");
        });
    });
};

export const downloadPost = (req, res) => {
    let setData = [];
    fs.readFile("downloaded.json", "UTF8", function (err, data) {
        if (err) { throw err };
        setData.push(JSON.parse(data));
    });

    const postId = req.params.id;
    const q = "SELECT * FROM posts WHERE `id` = ?";
    db.query(q, postId, (err, data) => {
        if (err) {
            return res.status(403).json("You were not able to download the post");
        }
        let downloadData = [
            { "id": data[0].id, "title": data[0].title, "description": data[0].description },
        ]

        //downloadData.push(setData);
        //let json = JSON.stringify(downloadData);


        setData.push(downloadData);

        console.log(downloadData);

        let json = JSON.stringify(setData)

        fs.writeFile('downloaded.json', json, err => {
            if (err) {
                console.error(err);
            } else {
                console.log("File written successfully")
            }
        })
        return res.json("Post has been downloaded");
        window.alert("Post has been downloaded");


    });

};

export const updatePost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const postId = req.params.id;
        const q =
            "UPDATE posts SET `title`=?,`description`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";

        const values = [req.body.title, req.body.desc, req.body.cat];

        db.query(q, [...values, postId, userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json("Post has been updated.");
        });
    });
};