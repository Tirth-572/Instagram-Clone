import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Instagram_logo from '../../assets/Instagram_logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import GestureIcon from '@mui/icons-material/Gesture';
import MenuIcon from '@mui/icons-material/Menu';
import './leftSide.css';

const navItems = [
    { icon: <HomeIcon sx={{ fontSize: 28 }} />,                    name: "Home",         path: "/"             },
    { icon: <SearchIcon sx={{ fontSize: 28 }} />,                  name: "Search",       path: "/search"       },
    { icon: <ExploreIcon sx={{ fontSize: 28 }} />,                 name: "Explore",      path: "/explore"      },
    { icon: <SmartDisplayRoundedIcon sx={{ fontSize: 28 }} />,     name: "Reels",        path: "/reels"        },
    { icon: <LocalPostOfficeOutlinedIcon sx={{ fontSize: 28 }} />, name: "Message",      path: "/message"      },
    { icon: <FavoriteBorderIcon sx={{ fontSize: 28 }} />,          name: "Notification", path: "/notification" },
    { icon: <AddBoxOutlinedIcon sx={{ fontSize: 28 }} />,          name: "Create",       path: "/create"       },
];

function LeftSide() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="leftSide">

            {/* Logo */}
            <div className="logoContainer" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                <img className="logo" src={Instagram_logo} alt="Instagram Logo" />
            </div>

            {/* Nav Links */}
            <div>
                {navItems.map((item, index) => (
                    <div
                        key={index}
                        className={`navItem ${location.pathname === item.path ? 'navActive' : ''}`}
                        onClick={() => navigate(item.path)}
                    >
                        <span className="icon">{item.icon}</span>
                        <div className="text">{item.name}</div>
                    </div>
                ))}

                {/* Profile */}
                <div
                    className={`navItem ${location.pathname === '/profile' ? 'navActive' : ''}`}
                    onClick={() => navigate('/profile')}
                >
                    <img className="profileImg" src="https://newsmeter.in/h-upload/2021/11/10/308083-jhanvi-kapoor.webp" alt="ProfileImg" />
                    <div className="text">Profile</div>
                </div>

                {/* Bottom Part */}
                <div className="bottomSection">
                    <div className="navItem">
                        <span className="icon"><GestureIcon sx={{ fontSize: 28 }} /></span>
                        <div className="text">Thread</div>
                    </div>
                    <div className="navItem">
                        <span className="icon"><MenuIcon sx={{ fontSize: 28 }} /></span>
                        <div className="text">More</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LeftSide;
