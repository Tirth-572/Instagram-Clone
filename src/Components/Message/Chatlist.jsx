import React from 'react';

const ChatList = ({ chats, activeChatId, onSelectChat }) => {
    return (
        <div className="msg-left">
            <div className="msg-left-header">
                <span className="msg-username">your_username <i className="fa-solid fa-chevron-down"></i></span>
                <i className="fa-regular fa-pen-to-square"></i>
            </div>
            <div className="msg-search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search" />
            </div>

            <div className="notes-row">
                {/* Simplified notes row */}
                <div className="note-item">
                    <div className="note-avatar your-note"><img src="https://i.pravatar.cc/80?img=12" alt="" /></div>
                    <span>Your note</span>
                </div>
            </div>

            <div className="msg-section-header">
                <span>Messages</span><span className="msg-requests">Requests</span>
            </div>

            <div className="conv-list">
                {chats.map(chat => (
                    <div
                        key={chat.id}
                        className={`conv-item ${activeChatId === chat.id ? 'active' : ''}`}
                        onClick={() => onSelectChat(chat.id)}
                    >
                        <div className="conv-avatar">
                            {chat.img ? <img src={chat.img} alt={chat.name} /> : '🔥'}
                        </div>
                        <div className="conv-info">
                            <span className="conv-name">{chat.name}</span>
                            <span className="conv-last">{chat.msgs[chat.msgs.length - 1]?.txt || 'No messages'}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatList;
