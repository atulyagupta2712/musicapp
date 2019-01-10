import {addObj} from './Class';

export const songOperations = {
    songs : [],
    fillSongs(songs){
        console.log("song operations ",songs)
        for(let song of songs){
            this.songs.push(new addObj(song.artworkUrl100,song.trackName, song.trackViewUrl, song.previewUrl, song.artistViewUrl));
        }
        return this.songs;
    }
}