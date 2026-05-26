import React, { useState } from 'react';
import './Notification.css';

const data = {
    today: [
        { id: 1,  type: 'like',    avatar: 'https://i.pravatar.cc/40?img=1',  user: 'rahul_k',    text: 'liked your photo.',              time: '2m',  postImg: 'https://picsum.photos/50/50?random=1'  },
        { id: 2,  type: 'comment', avatar: 'https://i.pravatar.cc/40?img=3',  user: 'amit_v',     text: 'commented: "Absolutely 🔥🔥"',   time: '18m', postImg: 'https://picsum.photos/50/50?random=2'  },
        { id: 3,  type: 'follow',  avatar: 'https://i.pravatar.cc/40?img=5',  user: 'karan_j',    text: 'started following you.',         time: '45m'  },
        { id: 4,  type: 'like',    avatar: 'https://i.pravatar.cc/40?img=7',  user: 'rohan_p',    text: 'liked your reel.',               time: '1h',  postImg: 'https://picsum.photos/50/50?random=3'  },
    ],
    thisWeek: [
        { id: 5,  type: 'follow',  avatar: 'https://i.pravatar.cc/40?img=2',  user: 'priya_s',    text: 'started following you.',         time: '2d'   },
        { id: 6,  type: 'like',    avatar: 'https://i.pravatar.cc/40?img=4',  user: 'sneha_m',    text: 'liked your photo.',              time: '3d',  postImg: 'https://picsum.photos/50/50?random=4'  },
        { id: 7,  type: 'comment', avatar: 'https://i.pravatar.cc/40?img=6',  user: 'divya_r',    text: 'commented: "So beautiful ✨"',   time: '4d',  postImg: 'https://picsum.photos/50/50?random=5'  },
        { id: 8,  type: 'like',    avatar: 'https://i.pravatar.cc/40?img=9',  user: 'vikas_n',    text: 'liked your post.',               time: '5d',  postImg: 'https://picsum.photos/50/50?random=6'  },
        { id: 9,  type: 'follow',  avatar: 'https://i.pravatar.cc/40?img=11', user: 'meera_g',    text: 'started following you.',         time: '6d'   },
    ],
    thisMonth: [
        { id: 10, type: 'like',    avatar: 'https://i.pravatar.cc/40?img=12', user: 'sagar_p',    text: 'liked your photo.',              time: '1w',  postImg: 'https://picsum.photos/50/50?random=7'  },
        { id: 11, type: 'comment', avatar: 'https://i.pravatar.cc/40?img=14', user: 'neha_t',     text: 'commented: "Goals! 🙌"',         time: '2w',  postImg: 'https://picsum.photos/50/50?random=8'  },
        { id: 12, type: 'follow',  avatar: 'https://i.pravatar.cc/40?img=16', user: 'arjun_c',    text: 'started following you.',         time: '3w'   },
        { id: 13, type: 'like',    avatar: 'https://i.pravatar.cc/40?img=18', user: 'pooja_k',    text: 'liked your reel.',               time: '3w',  postImg: 'https://picsum.photos/50/50?random=9'  },
    ],
};

const NotifItem = ({ n }) => {
    const [following, setFollowing] = useState(false);

    return (
        <div className="notif-item">
            <img src={n.avatar} alt={n.user} className="notif-avatar" />
            <div className="notif-body">
                <p className="notif-text">
                    <span className="notif-user">{n.user}</span> {n.text}
                    <span className="notif-time"> {n.time}</span>
                </p>
            </div>
            {n.type === 'follow' ? (
                <button
                    className={`notif-follow-btn ${following ? 'following' : ''}`}
                    onClick={() => setFollowing(f => !f)}
                >
                    {following ? 'Following' : 'Follow'}
                </button>
            ) : (
                <img src={n.postImg} alt="" className="notif-post-thumb" />
            )}
        </div>
    );
};

const NotificationPage = () => (
    <div className="notif-page">
        <h2 className="notif-title">Notifications</h2>

        <div className="notif-section">
            <p className="notif-section-label">Today</p>
            {data.today.map(n => <NotifItem key={n.id} n={n} />)}
        </div>

        <div className="notif-section">
            <p className="notif-section-label">This Week</p>
            {data.thisWeek.map(n => <NotifItem key={n.id} n={n} />)}
        </div>

        <div className="notif-section">
            <p className="notif-section-label">This Month</p>
            {data.thisMonth.map(n => <NotifItem key={n.id} n={n} />)}
        </div>
    </div>
);

export default NotificationPage;
