

export class registerObj{
    constructor(name,username,password){
        this.name = name;
        this.username = username;
        this.password = password;
    }

}

export class loginObj{
    constructor(username,pwd){
        this.username = username;
        this.password = pwd;
    }
}

export class addObj{
    constructor(image, trackName, trackViewUrl, songUrl, artistUrl, username = ""){
        this.image = image;
        this.trackName = trackName;
        this.trackViewUrl = trackViewUrl;
        this.songUrl = songUrl;
        this.artistUrl = artistUrl;
        this.username = username;
    }
}