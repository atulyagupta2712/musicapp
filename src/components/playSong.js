import React from 'react';

export const PlaySong = (props)=>{
    console.log("play song")
    console.log(props);
    return(
        <div>
            <h2>Play songs</h2>
            {/* <audio src={props.song.songUrl}></audio> */}
        </div>
    )
}