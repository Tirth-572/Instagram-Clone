import React, { useState } from 'react';
import './Explore.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CloseIcon from '@mui/icons-material/Close';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const explorePosts = [
    { id: 1,  img: "https://picsum.photos/600/600?random=1",  likes: "102K", comments: 340, isVideo: false, username: "travel_vibes",   caption: "Lost in the mountains 🏔️ #travel #nature" },
    { id: 2,  img: "https://picsum.photos/600/700?random=2",  likes: "88K",  comments: 210, isVideo: true,  username: "dance_world",    caption: "New reel out now! 🔥 #dance #reels" },
    { id: 3,  img: "https://picsum.photos/600/600?random=3",  likes: "54K",  comments: 180, isVideo: false, username: "food_lover",     caption: "Sunday brunch goals 🍳 #food #brunch" },
    { id: 4,  img: "https://picsum.photos/600/600?random=4",  likes: "23K",  comments: 95,  isVideo: true,  username: "fitness_raj",    caption: "Morning workout done ✅ #fitness #gym" },
    { id: 5,  img: "https://picsum.photos/600/800?random=5",  likes: "76K",  comments: 430, isVideo: false, username: "portrait_art",   caption: "Golden hour magic ✨ #photography" },
    { id: 6,  img: "https://picsum.photos/600/600?random=6",  likes: "31K",  comments: 120, isVideo: false, username: "city_explorer",  caption: "City lights never get old 🌆 #citylife" },
    { id: 7,  img: "https://picsum.photos/600/600?random=7",  likes: "19K",  comments: 67,  isVideo: true,  username: "music_beats",    caption: "New track dropping soon 🎵 #music" },
    { id: 8,  img: "https://picsum.photos/600/600?random=8",  likes: "45K",  comments: 200, isVideo: false, username: "nature_clicks",  caption: "Breathe in the fresh air 🌿 #nature" },
    { id: 9,  img: "https://picsum.photos/600/600?random=9",  likes: "60K",  comments: 310, isVideo: true,  username: "comedy_hub",     caption: "When Monday hits different 😂 #funny" },
    { id: 10, img: "https://picsum.photos/600/600?random=10", likes: "12K",  comments: 55,  isVideo: false, username: "art_studio",     caption: "New artwork in progress 🎨 #art" },
    { id: 11, img: "https://picsum.photos/600/600?random=11", likes: "98K",  comments: 500, isVideo: false, username: "fashion_icon",   caption: "OOTD vibes 👗 #fashion #style" },
    { id: 12, img: "https://picsum.photos/600/600?random=12", likes: "37K",  comments: 145, isVideo: true,  username: "sports_zone",    caption: "Game day energy ⚽ #sports #football" },
    { id: 13, img: "https://picsum.photos/600/600?random=13", likes: "55K",  comments: 230, isVideo: false, username: "sunset_chaser",  caption: "Chasing sunsets every day 🌅 #sunset" },
    { id: 14, img: "https://picsum.photos/600/600?random=14", likes: "41K",  comments: 175, isVideo: true,  username: "pet_world",      caption: "My dog is the cutest 🐶 #pets #dogs" },
    { id: 15, img: "https://picsum.photos/600/600?random=15", likes: "29K",  comments: 88,  isVideo: false, username: "coffee_diaries", caption: "Coffee and good vibes ☕ #coffee" },
    { id: 16, img: "https://picsum.photos/600/600?random=16", likes: "73K",  comments: 390, isVideo: false, username: "wedding_reelz",  caption: "Love is in the air 💍 #wedding" },
    { id: 17, img: "https://picsum.photos/600/600?random=17", likes: "18K",  comments: 62,  isVideo: true,  username: "tech_talks",     caption: "New gadget unboxing 📱 #tech" },
    { id: 18, img: "https://picsum.photos/600/600?random=18", likes: "84K",  comments: 460, isVideo: false, username: "beach_life",     caption: "Ocean therapy 🌊 #beach #summer" },
    { id: 19, img: "https://picsum.photos/600/600?random=19", likes: "33K",  comments: 130, isVideo: true,  username: "yoga_daily",     caption: "Find your balance 🧘 #yoga #wellness" },
    { id: 20, img: "https://picsum.photos/600/600?random=20", likes: "67K",  comments: 280, isVideo: false, username: "street_photo",   caption: "Streets tell stories 📸 #streetphotography" },
    { id: 21, img: "https://picsum.photos/600/600?random=21", likes: "22K",  comments: 79,  isVideo: false, username: "book_nook",      caption: "Currently reading 📚 #books #reading" },
    { id: 22, img: "https://picsum.photos/600/600?random=22", likes: "91K",  comments: 520, isVideo: true,  username: "travel_couple",  caption: "Exploring together 🌍 #couplegoals" },
    { id: 23, img: "https://picsum.photos/600/600?random=23", likes: "48K",  comments: 195, isVideo: false, username: "minimal_life",   caption: "Less is more ⚪ #minimalism" },
    { id: 24, img: "https://picsum.photos/600/600?random=24", likes: "36K",  comments: 160, isVideo: true,  username: "cooking_with_me", caption: "Homemade pasta night 🍝 #cooking #food" },
];

const sampleComments = [
    { user: "rahul_k",    text: "Absolutely stunning! 😍",         avatar: "https://i.pravatar.cc/40?img=1"  },
    { user: "priya_s",    text: "Love this so much ❤️",            avatar: "https://i.pravatar.cc/40?img=2"  },
    { user: "amit_v",     text: "Goals! 🔥🔥",                     avatar: "https://i.pravatar.cc/40?img=3"  },
    { user: "sneha_m",    text: "Where is this place? 😮",         avatar: "https://i.pravatar.cc/40?img=4"  },
    { user: "karan_j",    text: "Incredible shot 📸",              avatar: "https://i.pravatar.cc/40?img=5"  },
    { user: "divya_r",    text: "You look amazing! ✨",            avatar: "https://i.pravatar.cc/40?img=6"  },
    { user: "rohan_p",    text: "This is everything 💯",           avatar: "https://i.pravatar.cc/40?img=7"  },
    { user: "ananya_t",   text: "Saving this for inspo 🙌",        avatar: "https://i.pravatar.cc/40?img=8"  },
    { user: "vikas_n",    text: "Wow just wow 😲",                 avatar: "https://i.pravatar.cc/40?img=9"  },
    { user: "meera_g",    text: "Can't stop looking at this 👀",   avatar: "https://i.pravatar.cc/40?img=10" },
];

function PostModal({ post, onClose }) {
    const [liked, setLiked] = useState(false);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(sampleComments);

    const handlePost = () => {
        if (!comment.trim()) return;
        setComments([...comments, { user: "you", text: comment, avatar: "https://i.pravatar.cc/40?img=11" }]);
        setComment('');
    };

    return (
        <div className="modalBackdrop" onClick={onClose}>
            <div className="modalContainer" onClick={(e) => e.stopPropagation()}>

                {/* Left — Image */}
                <div className="modalLeft">
                    <img src={post.img} alt="" className="modalImg" />
                </div>

                {/* Right — Comments */}
                <div className="modalRight">

                    {/* Header */}
                    <div className="modalHeader">
                        <img src={`https://i.pravatar.cc/40?img=${post.id}`} alt="" className="modalAvatar" />
                        <div className="modalUsername">{post.username}</div>
                        <button className="modalFollow">Follow</button>
                    </div>

                    <div className="modalDivider" />

                    {/* Caption + Comments */}
                    <div className="modalComments">
                        <div className="modalCaptionRow">
                            <img src={`https://i.pravatar.cc/40?img=${post.id}`} alt="" className="commentAvatar" />
                            <div>
                                <span className="commentUser">{post.username} </span>
                                <span className="commentText">{post.caption}</span>
                            </div>
                        </div>
                        {comments.map((c, i) => (
                            <div className="modalCaptionRow" key={i}>
                                <img src={c.avatar} alt="" className="commentAvatar" />
                                <div>
                                    <span className="commentUser">{c.user} </span>
                                    <span className="commentText">{c.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="modalDivider" />

                    {/* Actions */}
                    <div className="modalActions">
                        <div className="modalActionsLeft">
                            <span onClick={() => setLiked(!liked)} style={{ cursor: 'pointer' }}>
                                {liked? <FavoriteIcon sx={{ fontSize: 26, color: '#ed4956' }} />
                                    : <FavoriteBorderIcon sx={{ fontSize: 26 }} />}
                            </span>
                            <ModeCommentOutlinedIcon sx={{ fontSize: 26 }} />
                            <SendOutlinedIcon sx={{ fontSize: 26 }} />
                        </div>
                        <BookmarkBorderIcon sx={{ fontSize: 26 }} />
                    </div>

                    <div className="modalLikes">{post.likes} likes</div>

                    <div className="modalDivider" />

                    {/* Add Comment */}
                    <div className="modalAddComment">
                        <TagFacesIcon sx={{ fontSize: 26, color: '#8e8e8e' }} />
                        <input
                            className="modalCommentInput"
                            placeholder="Add a comment..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handlePost()}
                        />
                        <button className="modalPostBtn" onClick={handlePost} disabled={!comment.trim()}>Post</button>
                    </div>
                </div>

                {/* Close */}
                <button className="modalClose" onClick={onClose}>
                    <CloseIcon sx={{ fontSize: 28, color: '#fff' }} />
                </button>
            </div>
        </div>
    );
}

function Explore() {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <div className="explorePage">
            <div className="exploreGrid">
                {explorePosts.map((post) => (
                    <div className="exploreItem" key={post.id} onClick={() => setSelectedPost(post)}>
                        <img src={post.img} alt="" className="exploreImg" />
                        {post.isVideo && (
                            <div className="videoIcon">
                                <PlayCircleFilledIcon sx={{ fontSize: 22, color: '#fff' }} />
                            </div>
                        )}
                        <div className="exploreOverlay">
                            <span className="overlayCount">
                                <FavoriteIcon sx={{ fontSize: 20 }} /> {post.likes}
                            </span>
                            <span className="overlayCount">
                                <ModeCommentIcon sx={{ fontSize: 20 }} /> {post.comments}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedPost && (
                <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
            )}
        </div>
    );
}

export default Explore;
