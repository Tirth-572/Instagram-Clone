import React from 'react';
import ReelItem from './RellsItem';
import { reels } from './Reels';
import './Reels.css';

const ReelsPage = () => {
    return (
        <div className="reels-page">
            {reels.map(reel => (
                <ReelItem key={reel.id} reel={reel} />
            ))}
        </div>
    );
};

export default ReelsPage;
