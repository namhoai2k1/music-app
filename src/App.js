import React, { useEffect, useState } from 'react';
import Player from './components/Player';

function App() {
    const [songs] = useState([
        {
            title: 'Forget me too ft. Halsey',
            artist: 'Machine Gun Kelly',
            img_src: './images/song-1.jpg',
            src: './music/public_music_on-n-on.mp3',
        },
        {
            title: 'Song 2',
            artist: 'Artist 2',
            img_src: './images/song-2.jpg',
            src: './music/public_music_somebody-new.mp3',
        },
        {
            title: 'Heat Waves',
            artist: 'Glass Animals',
            img_src: './images/song-3.jpg',
            src: './music/Glass Animals - Heat Waves (Lyrics) -sometimes all i think about is you-.mp3',
        },
        {
            title: 'Save Your Tears',
            artist: 'The Weeknd',
            img_src: './images/song-4.jpg',
            src: './music/The Weeknd - Save Your Tears (Official Music Video).mp3',
        },
    ]);

    const [currentSong, setCurrentSong] = useState(0);
    const [nextSong, setNextSong] = useState(currentSong + 1);

    useEffect(() => {
        setNextSong(() => {
            if (currentSong + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSong + 1;
            }
        });
    }, [currentSong, songs.length]);

    return (
        <div className="App">
            <Player
                currentSong={currentSong}
                nextSong={nextSong}
                setCurrentSong={setCurrentSong}
                songs={songs}
            />
        </div>
    );
}

export default App;
