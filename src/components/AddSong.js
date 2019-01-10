import React from 'react';
import { Song } from './Song';

export const AddSong = (props)=>{
    return(
        <div>
               <h3>{props.msg}</h3>
            <h3>Enter your favourite artist/singer</h3>
            <form onSubmit = {props.search}>
            <input type="text" id = "input" className = "form-control"/>
            <button>Search</button>
                   
            </form>
            {props.songs && props.songs? props.songs.map(song=>{
            return <Song song = {song} add = {(song)=>{props.add(song)}}/>
            }) : ""
  
        }
          {/* <h4>Know more about your favourite artist <button onClick = {props.knowArtist}>Click here</button></h4>    */}
        </div>
    )
}