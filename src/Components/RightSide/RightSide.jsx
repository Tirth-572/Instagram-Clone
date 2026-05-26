import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFollow } from '../../redux/socialSlice';
import './RightSide.css';

const suggestions = [
    { id: 1,  label: "travel_vibes",   sublabel: "Suggested for you", avatar: "https://i.pravatar.cc/40?img=12" },
    { id: 2,  label: "fitness_raj",    sublabel: "Follows you",        avatar: "https://i.pravatar.cc/40?img=13" },
    { id: 3,  label: "food_lover99",   sublabel: "Suggested for you", avatar: "https://i.pravatar.cc/40?img=14" },
    { id: 4,  label: "sunset_chaser",  sublabel: "New to Instagram",  avatar: "https://i.pravatar.cc/40?img=15" },
    { id: 5,  label: "art_studio_in",  sublabel: "Suggested for you", avatar: "https://i.pravatar.cc/40?img=16" },
];

const SuggestionRow = ({ user }) => {
    const dispatch = useDispatch();
    const followedUsers = useSelector((state) => state.social.followedUsers);
    const isFollowing = followedUsers.includes(user.label);

    return (
        <div className="profile-row">
            <div className="profile-left">
                <div className="profile-img">
                    <img src={user.avatar} alt="" />
                </div>
                <div className="profile-text">
                    <div className="profile-label">{user.label}</div>
                    <div className="profile-sublabel">{user.sublabel}</div>
                </div>
            </div>
            <button
                className={`follow-btn ${isFollowing ? 'following' : ''}`}
                onClick={() => dispatch(toggleFollow(user.label))}
            >
                {isFollowing ? 'Following' : 'Follow'}
            </button>
        </div>
    );
};

function RightSide() {
    const navigate = useNavigate();

    return (
        <div className="right-container">
            <div className="right-inner">

                <div className="profile-row">
                    <div className="profile-left">
                        <div className="profile-img">
                            <img src="https://newsmeter.in/h-upload/2021/11/10/308083-jhanvi-kapoor.webp" alt="" />
                        </div>
                        <div className="profile-text">
                            <div className="profile-label">__Janvi@Kapoor</div>
                            <div className="profile-sublabel">Janvi Kapoor</div>
                        </div>
                    </div>
                    <div className="profile-action" onClick={() => navigate('/profile')}>Switch</div>
                </div>

                <div className="suggestions">
                    <div className="suggestions-header">
                        <span className="suggested-text">Suggested For You</span>
                        <span className="see-all">See All</span>
                    </div>
                    <div className="suggestions-list">
                        {suggestions.map((user) => (
                            <SuggestionRow key={user.id} user={user} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RightSide;
