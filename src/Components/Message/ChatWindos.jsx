import React, { useState, useRef, useEffect } from 'react';

const ChatWindow = ({ chat, onSendMessage }) => {
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chat.msgs]);

    const handleSend = () => {
        if (inputText.trim()) {
            onSendMessage(inputText);
            setInputText('');
        }
    };

    return (
        <div className="msg-right">
            <div className="chat-header">
                <div className="chat-header-user">
                    {chat.img ? <img src={chat.img} alt={chat.name} /> : <div className="conv-avatar small">🔥</div>}
                    <div>
                        <div className="chat-name">{chat.name}</div>
                        <div className="chat-sub">{chat.sub}</div>
                    </div>
                </div>
                <div className="chat-header-icons">
                    <i className="fa-solid fa-phone"></i>
                    <i className="fa-solid fa-video"></i>
                    <i className="fa-solid fa-circle-info"></i>
                </div>
            </div>
            <div className="chat-messages">
                {chat.msgs.map((m, i) => (
                    <div key={i} className={`chat-msg ${m.t === 'r' ? 'received' : 'sent'}`}>
                        {m.t === 'r' && chat.img && <img src={chat.img} className="chat-msg-avatar" alt="" />}
                        <div className="chat-bubble">{m.txt}</div>
                    </div>
                ))}
                <div className="chat-seen">Seen</div>
                <div ref={messagesEndRef} />
            </div>
            <div className="chat-input-row">
                <i className="fa-regular fa-face-smile"></i>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Message..."
                />
                <i className="fa-solid fa-microphone"></i>
                <i className="fa-regular fa-image"></i>
                <i className="fa-regular fa-face-laugh"></i>
            </div>
        </div>
    );
};

export default ChatWindow;
