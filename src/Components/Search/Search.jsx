import React, { useState } from 'react';
import './Search.css';
import AllUsers from '../AllUsers.js';

const Search = () => {
    const [query, setQuery] = useState("");
    const [history, setHistory] = useState([]);

    const suggestions = AllUsers.filter((user) =>
        user.username.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (user) => {
        if (!history.find(u => u.id === user.id)) {
            setHistory([user, ...history]);
        }
        setQuery("");
    };

    const removeHistory = (user) => {
        setHistory(history.filter((item) => item.id !== user.id));
    };

    return (
        <div className="searchPage">
            <div className="searchPanel">
                <h2 className="searchTitle">Search</h2>

                <input className="searchInput" type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)}/>

                <div className="divider" />

                {query ? (
                    <div className="suggestions">
                        {suggestions.length > 0 ? (
                            suggestions.map((user) => (
                                <div className="suggestionItem" key={user.id} onClick={() => handleSelect(user)}>
                                    <img src={user.profilePic} alt={user.username} />
                                    <div className="userInfo">
                                        <div className="userName">{user.username}</div>
                                        <div className="fullName">{user.fullName}</div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="noResult">No results found.</div>
                        )}
                    </div>
                ) : history.length > 0 ? (
                    <div className="history">
                        <div className="historyHeader">
                            <h3>Recent</h3>
                            <button onClick={() => setHistory([])}>Clear all</button>
                        </div>
                        {history.map((user, index) => (
                            <div className="historyItem" key={index}>
                                <img src={user.profilePic} alt={user.username} />
                                <div className="userInfo">
                                    <div className="userName">{user.username}</div>
                                    <div className="fullName">{user.fullName}</div>
                                </div>
                                <button className="removeBtn" onClick={() => removeHistory(user)}>×</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="noResult">No recent searches.</div>
                )}
            </div>
        </div>
    );
};

export default Search;
