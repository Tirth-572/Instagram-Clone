import React, { useState } from 'react';

const CommentModal = ({ isOpen, onClose, comments, setComments }) => {
    const [commentText, setCommentText] = useState('');

    const handlePost = () => {
        if (!commentText.trim()) return;
        setComments(prev => [...prev, {
            user: 'you',
            text: commentText.trim(),
            img: 'https://i.pravatar.cc/40?img=12'
        }]);
        setCommentText('');
    };

    if (!isOpen) return null;

    return (
        <div className="comment-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <span>Comments</span>
                <i className="fa-solid fa-xmark" onClick={onClose}></i>
            </div>
            <div className="comment-list">
                {comments.map((c, i) => (
                    <div key={i} className="comment-item">
                        <img src={c.img} alt={c.user} />
                        <div>
                            <span className="c-user">{c.user}</span>
                            <span className="c-text">{c.text}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="comment-input-row">
                <img src="https://i.pravatar.cc/40?img=12" alt="me" />
                <input
                    type="text"
                    placeholder="Add a comment..."
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handlePost()}
                />
                <button onClick={handlePost}>Post</button>
            </div>
        </div>
    );
};

export default CommentModal;
