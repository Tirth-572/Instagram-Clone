import React, { useRef, useState, useEffect } from 'react';
import CommentModal from './Modal/CommentModel';

const ReelItem = ({ reel }) => {
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(true);
    const [playing, setPlaying] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(reel.likes);
    const [following, setFollowing] = useState(false);
    const [commentOpen, setCommentOpen] = useState(false);
    const [comments, setComments] = useState([
        { user: 'kruti_vada', text: 'Amazing shot! 🔥', img: 'https://i.pravatar.cc/40?img=5' },
        { user: 'yash_kola', text: 'Bhai too good 👌', img: 'https://i.pravatar.cc/40?img=8' }
    ]);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play().catch(() => {});
            setPlaying(true);
        } else {
            videoRef.current.pause();
            setPlaying(false);
        }
    };

    const toggleLike = (e) => {
        e.stopPropagation();
        setLiked(prev => !prev);
        setLikeCount(prev => liked ? prev - 1 : prev + 1);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!videoRef.current) return;
                if (entry.isIntersecting) {
                    videoRef.current.play().catch(() => {});
                    setPlaying(true);
                } else {
                    videoRef.current.pause();
                    setPlaying(false);
                }
            },
            { threshold: 0.6 }
        );
        if (videoRef.current) observer.observe(videoRef.current);
        return () => observer.disconnect();
    }, []);

    const formatCount = (n) => n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k' : n;

    return (
        <div className="reel-item">
            <div className="reel-media" onClick={togglePlay}>
                <video ref={videoRef} src={reel.video} loop playsInline muted={muted} />

                <button className="reel-mute-btn" onClick={e => { e.stopPropagation(); setMuted(m => !m); }}>
                    <i className={`fa-solid ${muted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
                </button>

                {!playing && (
                    <div className="reel-play-overlay">
                        <i className="fa-solid fa-play"></i>
                    </div>
                )}

                <div className="reel-overlay-info">
                    <div className="reel-user">
                        <div className="story-ring small">
                            <img src={reel.userImg} alt={reel.username} />
                        </div>
                        <span className="username">{reel.username}</span>
                        <button
                            className={`follow-btn ${following ? 'following' : ''}`}
                            onClick={e => { e.stopPropagation(); setFollowing(f => !f); }}
                        >
                            {following ? 'Following' : 'Follow'}
                        </button>
                    </div>
                    <p className="reel-caption">{reel.caption}</p>
                </div>

                <div className="reel-actions" onClick={e => e.stopPropagation()}>
                    <div className={`reel-action-btn ${liked ? 'liked' : ''}`} onClick={toggleLike}>
                        <i className={`${liked ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
                        <span className="action-count">{formatCount(likeCount)}</span>
                    </div>
                    <div className="reel-action-btn" onClick={() => setCommentOpen(true)}>
                        <i className="fa-regular fa-comment"></i>
                        <span className="action-count">{formatCount(comments.length + reel.comments)}</span>
                    </div>
                    <div className="reel-action-btn">
                        <i className="fa-regular fa-paper-plane"></i>
                        <span className="action-count">Share</span>
                    </div>
                    <div className="reel-action-btn">
                        <i className="fa-solid fa-retweet"></i>
                        <span className="action-count">Repost</span>
                    </div>
                    <div className="reel-action-btn">
                        <i className="fa-regular fa-bookmark"></i>
                        <span className="action-count">Save</span>
                    </div>
                    <div className="reel-action-btn">
                        <i className="fa-solid fa-ellipsis"></i>
                        <span className="action-count">More</span>
                    </div>
                </div>
            </div>

            <CommentModal
                isOpen={commentOpen}
                onClose={() => setCommentOpen(false)}
                comments={comments}
                setComments={setComments}
            />
        </div>
    );
};

export default ReelItem;
