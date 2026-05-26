import React, { useMemo } from 'react';
import Story from '../../assets/Story.json';
import Post from '../Post/Post';
import Instagram_logo from '../../assets/Instagram_logo.png';
import './MiddleSide.css';

const captions = [
    "Life is beautiful! ✨",
    "Exploring the world 🌍",
    "Coffee and code ☕💻",
    "Weekend vibes 🌈",
    "Chasing sunsets 🌅",
    "Stay hungry, stay foolish 🚀",
    "Good things take time ⏳",
    "Keep smiling! 😊",
    "Minimalism is key ⚪",
    "Adventure awaits ⛰️"
];

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function MiddleSide() {
    const allUsers = Story.Story;

    // Shuffle once per page load — stable across re-renders
    const storyUsers = useMemo(() => shuffle(allUsers), []);
    const postUsers  = useMemo(() => shuffle(allUsers), []);
    

    const posts = useMemo(() => postUsers.map((item, index) => ({
        profileImg: item.img,
        postImg: `https://picsum.photos/600/600?random=${index + 1}`,
        username: item.Name,
        time: `${Math.floor(Math.random() * 59) + 1} Min`,
        likes: (Math.floor(Math.random() * 900) + 100).toString(),
        caption: captions[index % captions.length]
    })), []);

    return (
        <div className="middle-container">

            <div className="logo-container">
                <img className="logo" src={Instagram_logo} alt="Instagram Logo" />
            </div>

            <div className="story-container">
                {storyUsers.map((item, index) => (
                    <div key={index} className="story-item">
                        <div className="story-avatar">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="story-name">{item.Name}</div>
                    </div>
                ))}
            </div>

            <div className="post-container">
                {posts.map((data, index) => (
                    <Post key={index} data={data} />
                ))}
            </div>

        </div>
    );
}

export default MiddleSide;
