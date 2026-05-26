import React, { useState } from 'react';
import ChatList from './Chatlist';
import ChatWindow from './ChatWindos';
import { chats as initialChats } from '../data';
import './Message.css';

const MessagesPage = () => {
    const [chats, setChats] = useState(initialChats);
    const [activeChatId, setActiveChatId] = useState(1);

    const activeChat = chats.find(c => c.id === activeChatId);

    const handleSendMessage = (text) => {
        setChats(prev => prev.map(c =>
            c.id === activeChatId
                ? { ...c, msgs: [...c.msgs, { t: 's', txt: text }] }
                : c
        ));
    };

    return (
        <div className="messages-page">
            <ChatList
                chats={chats}
                activeChatId={activeChatId}
                onSelectChat={setActiveChatId}
            />
            {activeChat && (
                <ChatWindow
                    chat={activeChat}
                    onSendMessage={handleSendMessage}
                />
            )}
        </div>
    );
};

export default MessagesPage;
