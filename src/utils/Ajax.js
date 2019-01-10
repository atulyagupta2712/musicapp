import { addObj } from "./Class";
import { songOperations } from "./songOpr";

export const Ajax = (search, fn)=>{
    var url = "https://itunes.apple.com/search?term="+search+"&limit=24";
    fetch(url).then(response=>{
        response.json().then(data=>{
            var songs = songOperations.fillSongs(data.results);
            fn(songs);
        })
    })
}