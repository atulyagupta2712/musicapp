import React from 'react';
import { Song } from './Song';
import { ListSongs } from './ListSongs';

export const SongsList = (props)=>{
    console.log("songs lst",props)
    return(
        <div>
            <h1>Songs List</h1>
            <button onClick = {props.songListfn}>Load Songs</button>
            {props.songList? props.songList.map((song,i)=>{
                return <ListSongs key = {i} song = {song}/>
            })
             :"" }
        </div>
    )
}