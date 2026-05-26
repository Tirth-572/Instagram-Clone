import React, { useState } from 'react';
import './Post.css';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function PostCard({ profileImg, postImg, username, time, likes, caption }) {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [likeCount, setLikeCount] = useState(parseInt(likes) || 0);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [showOptions, setShowOptions] = useState(false);

    const handleLike = () => {
        setLiked(prev => !prev);
        setLikeCount(prev => liked ? prev - 1 : prev + 1);
    };

    const handleComment = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            setComments(prev => [...prev, comment.trim()]);
            setComment('');
        }
    };

    return (
        <div className="post-card">

            {/* Header */}
            <div className="post-header">
                <div className="post-avatar-ring">
                    <img className="post-profile-img" src={profileImg} alt="" />
                </div>
                <div className="post-header-info">
                    <span className="post-username">{username}</span>
                    <span className="post-time">{time} ago</span>
                </div>
                <div className="post-more-options" onClick={() => setShowOptions(p => !p)}>
                    <MoreHorizIcon sx={{ fontSize: 22 }} />
                    {showOptions && (
                        <div className="options-dropdown">
                            <div className="option-item option-danger">Unfollow</div>
                            <div className="option-item">Add to favorites</div>
                            <div className="option-item">Go to post</div>
                            <div className="option-item">Share to...</div>
                            <div className="option-item">Copy link</div>
                            <div className="option-item">Cancel</div>
                        </div>
                    )}
                </div>
            </div>

            {/* Post Image */}
            <div className="post-image-container">
                <img className="post-image" src={postImg} alt="post" onDoubleClick={handleLike} />
            </div>

            {/* Actions */}
            <div className="post-actions">
                <div className="post-icons-left">
                    <span onClick={handleLike} className={`action-icon ${liked ? 'liked' : ''}`}>
                        {liked
                            ? <FavoriteIcon sx={{ fontSize: 27 }} />
                            : <FavoriteBorderIcon sx={{ fontSize: 27 }} />}
                    </span>
                    <span className="action-icon">
                        <ModeCommentOutlinedIcon sx={{ fontSize: 27 }} />
                    </span>
                    <span className="action-icon">
                        <SendIcon sx={{ fontSize: 27 }} />
                    </span>
                </div>
                <span className="action-icon" onClick={() => setSaved(p => !p)}>
                    {saved
                        ? <BookmarkIcon sx={{ fontSize: 27 }} />
                        : <BookmarkBorderOutlinedIcon sx={{ fontSize: 27 }} />}
                </span>
            </div>

            {/* Likes */}
            <div className="post-likes">{likeCount.toLocaleString()} likes</div>

            {/* Caption */}
            <div className="post-caption-section">
                <div className="post-caption">
                    <span className="caption-user">{username}</span>
                    <span className="caption-text"> {caption}</span>
                </div>
                {comments.map((c, i) => (
                    <div key={i} className="post-caption">
                        <span className="caption-user">you</span>
                        <span className="caption-text"> {c}</span>
                    </div>
                ))}
                <div className="post-time-label">{time} ago</div>
            </div>

            {/* Comment Input */}
            <form className="comment-form" onSubmit={handleComment}>
                <input
                    className="comment-input"
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                />
                {comment.trim() && (
                    <button type="submit" className="comment-post-btn">Post</button>
                )}
            </form>

        </div>
    );
}

function Post({ data }) {
    return <PostCard {...data} />;
}

export default Post;