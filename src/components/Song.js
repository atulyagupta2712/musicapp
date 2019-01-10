import React from 'react';
import { Playlist } from './Playlist';

export const Song = (props)=>{
    return(
        <div>
            <img src={props.song.image} alt=""/>
            <p>{props.song.trackName}</p>
            <button onClick = {()=>{props.add(props.song)}}>Add this song</button>
            {/* <button onClick = {()=><Playlist/>}>Play this song</button> */}
        </div>
    )
}