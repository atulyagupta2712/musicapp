import React from 'react';
import { PlaySong } from './playSong';

export const ListSongs = (props)=>{
    return(
        <div>
            <img src={props.song.image} alt=""/>
            <p>{props.song.trackName}</p>
            <p>{props.song.username}</p>
            <button onClick ={()=><PlaySong/>}>Play song</button>
        </div>
    )
}