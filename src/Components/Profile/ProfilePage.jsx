import React, { useState } from 'react';
import './Profile.css';
import GridOnIcon from '@mui/icons-material/GridOn';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const highlights = [
    { id: 1, label: 'Travel',  img: 'https://picsum.photos/80/80?random=10' },
    { id: 2, label: 'Food',    img: 'https://picsum.photos/80/80?random=11' },
    { id: 3, label: 'Friends', img: 'https://picsum.photos/80/80?random=12' },
    { id: 4, label: 'Fitness', img: 'https://picsum.photos/80/80?random=13' },
];

const posts = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    img: `https://picsum.photos/300/300?random=${i + 20}`,
}));

const tabs = [
    { icon: <GridOnIcon sx={{ fontSize: 22 }} />,                       key: 'posts'  },
    { icon: <BookmarkBorderIcon sx={{ fontSize: 22 }} />,               key: 'saved'  },
    { icon: <AutorenewIcon sx={{ fontSize: 22 }} />,                    key: 'reels'  },
    { icon: <PermContactCalendarOutlinedIcon sx={{ fontSize: 22 }} />,  key: 'tagged' },
];

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('posts');

    return (
        <div className="profile-page">

            {/* Header */}
            <div className="profile-header">
                <div className="profile-avatar-wrap">
                    <img
                        src="https://newsmeter.in/h-upload/2021/11/10/308083-jhanvi-kapoor.webp"
                        alt="profile"
                        className="profile-big-avatar"
                    />
                </div>

                <div className="profile-info">
                    <div className="profile-name-row">
                        <span className="profile-username">__Janvi@Kapoor</span>
                    </div>

                    <div className="profile-stats">
                        <div className="stat-item"><span className="stat-num">4</span> posts</div>
                        <div className="stat-item"><span className="stat-num">574</span> followers</div>
                        <div className="stat-item"><span className="stat-num">1,037</span> following</div>
                    </div>

                    <div className="profile-bio">
                        <span>😊 Janvi Kapoor</span><br />
                        <span>Bollywood Actress 🎬</span><br />
                        <span>✨ Living life to the fullest</span>
                    </div>

                    <div className="profile-btns">
                        <button className="profile-btn">Edit Profile</button>
                        <button className="profile-btn">View archive</button>
                    </div>
                </div>
            </div>

            {/* Highlights */}
            <div className="profile-highlights">
                {highlights.map(h => (
                    <div key={h.id} className="highlight-item">
                        <div className="highlight-ring">
                            <img src={h.img} alt={h.label} />
                        </div>
                        <span className="highlight-label">{h.label}</span>
                    </div>
                ))}
                <div className="highlight-item">
                    <div className="highlight-ring highlight-new">
                        <span>+</span>
                    </div>
                    <span className="highlight-label">New</span>
                </div>
            </div>

            <div className="profile-divider" />

            {/* Tabs */}
            <div className="profile-tabs">
                {tabs.map(t => (
                    <div
                        key={t.key}
                        className={`profile-tab ${activeTab === t.key ? 'active' : ''}`}
                        onClick={() => setActiveTab(t.key)}
                    >
                        {t.icon}
                    </div>
                ))}
            </div>

            {/* Grid */}
            <div className="profile-grid">
                {posts.map(p => (
                    <div key={p.id} className="profile-grid-item">
                        <img src={p.img} alt="" />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProfilePage;
