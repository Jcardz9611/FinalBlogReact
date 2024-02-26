import React from 'react'

const Menu = () => {
    const posts = [
        {
            id: 1,
            title: "Sports",
            desc: "Sports are very very very important.......",
        },
        {
            id: 2,
            title: "Sports",
            desc: "Sports are very very very important.......",
        },
        {
            id: 3,
            title: "Sports",
            desc: "Sports are very very very important.......",
        },
        {
            id: 4,
            title: "Sports",
            desc: "Sports are very very very important.......",
        },
        {
            id: 5,
            title: "Sports",
            desc: "Sports are very very very important.......",
        },
    ];
    return (
        <div className='menu'>
            <h1>Other recommended posts</h1>
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <h2>{post.title}</h2>
                    <button>Read more</button>
                </div>
            ))}
        </div>
    )
}

export default Menu