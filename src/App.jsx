import { Routes, Route } from 'react-router-dom'
import './App.css'
import LeftSide from './Components/LeftSide/leftSide'
import MiddleSide from './Components/MiddleSide/MiddleSide'
import RightSide from './Components/RightSide/RightSide'
import Search from './Components/Search/Search.jsx'
import Explore from './Components/Explore/Explore.jsx'
import ReelsPage from './Components/Reels/ReelPage.jsx'
import MessagesPage from './Components/Message/MessagePage.jsx'
import NotificationPage from './Components/Notification/NotificationPage.jsx'
import ProfilePage from './Components/Profile/ProfilePage.jsx'

function App() {
  return (
    <div className="App">

      <div className="leftSideHome">
        <LeftSide />
      </div>

      <div className="middleSideHome">
        <Routes>
          <Route path="/" element={<MiddleSide />} />
          <Route path="/search" element={<Search />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/reels" element={<ReelsPage />} />
          <Route path="/message" element={<MessagesPage />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
          </div>

      <div className="rightSideHome">
        <RightSide />
      </div>

    </div>
  )
}

export default App
