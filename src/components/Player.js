import React, { useEffect, useRef, useState } from 'react';
import Details from './Details';
import Controls from './Controls';

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSong(() => {
                let temp = props.currentSong;
                temp++;
                if (temp > props.songs.length - 1) {
                    temp = 0;
                }
                return temp;
            });
        } else {
            props.setCurrentSong(() => {
                let temp = props.currentSong;
                temp--;
                if (temp < 0) {
                    temp = props.songs.length - 1;
                }
                return temp;
            });
        }
    };
    return (
        <>
            <div className="c-player">
                <audio
                    src={props.songs[props.currentSong].src}
                    ref={audioEl}
                ></audio>
                <h4>Play Now</h4>
                <Details song={props.songs[props.currentSong]} />
                <Controls 
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    SkipSong={SkipSong}
                />
                <p>
                    <strong>Next up:</strong>
                    {props.songs[props.nextSong].title}
                    by {props.songs[props.nextSong].artist}
                </p>
            </div>
        </>
    );
}

export default Player;
