import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'


function Controls(props) {
    return <>
        <div className="c-player--controls">
            <button className="skip-btn" >
                <FontAwesomeIcon icon={faBackward} onClick={() => props.SkipSong(false)}/>
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                {props.isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong(true)}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    </>;
}

export default Controls;
