import React, {Component} from 'react';
import {Login} from '../components/Login';
import {Register} from '../components/Register';
import { Nav } from '../components/Nav';
import {Switch, Route} from 'react-router-dom'
import { Home } from '../components/Home';
import { registerObj, loginObj } from '../utils/Class';
import { registerOperations, loginOperations, songDbOperations } from '../utils/dbOpr';
import { SongsList } from '../components/SongsList';
import { AddSong } from '../components/AddSong';
import { Playlist } from '../components/Playlist';
import { Ajax } from '../utils/Ajax';

export class MusicApp extends Component{
    constructor(props){
        // var name = "";
        super(props);
        this.state = {regMsg: "", loginMsg: "", isUser: false, songsArray: "", songMsg: "", songsList: []}
    }
    onRegister(event){
        event.preventDefault();
        var name = event.target.querySelector('#name').value;
        var username = event.target.querySelector('#username').value;
        var pwd = event.target.querySelector('#pwd').value;
        var userObject = new registerObj(name,username,pwd);
        var pr = registerOperations.checkUsername(userObject);
        pr.then(data=>{
            if(data){
                this.setState({regMsg: "Username is already taken"})
            }
            else{
                registerOperations.addUser(userObject);
                this.setState({regMsg: "Registered successfully"});
             
            }
        })
       
    }
    onLogin(event){
        event.preventDefault();
        var username = event.target.querySelector('#username').value;
        var pwd = event.target.querySelector('#pwd').value;
        var userObject = new loginObj(username,pwd);
        var pr = loginOperations.checkUser(userObject);
        pr.then(data=>{
            if(data){
                if(data.password == pwd){
                    this.setState({loginMsg: "Logged in", isUser: true});
                    localStorage.setItem('name', username);
                    console.log(this.props);
                    // this.props.history.replace("/");
                }
                else{
                    this.setState({loginMsg: "Invalid password"})
                }
            }
            else{
                this.setState({loginMsg: "Invalid username or password"})
            }
          
      
        })
    }
    fillsongs(songs){
        this.setState({songsArray: songs});
        console.log(songs)
    }
    searchSong(event){
        event.preventDefault();
        var search = event.target.querySelector('#input').value;
         Ajax(search, this.fillsongs.bind(this));
        
       
    }
    addSong(song){
        var pr = songDbOperations.addUser();
        console.log("hello")
        pr.then(data=>{
            console.log("data is",data)
            if(data){
                song.username = data.username;
                console.log(song.username);
            }
           songDbOperations.addSongToDb(song);
            this.setState({...this.state, songMsg:"Song Successfully added"})
          

        })
    }
    addSongsToList(){
        console.log("hey")
        var pr = songDbOperations.addSongsForList();
       
        pr.then(data=>{
            console.log("data is",data);
            for(let key in data){
               this.state.songsList.push(data[key]);
            }
            this.setState({...this.state, songsList: this.state.songsList})
        })
    }
    
    render(){
        // {this.state.isUser ?
        // (<Redirect to = "/"/>):""}
        return(
            <div>
                <Nav isUser = {this.state.isUser}/>
              {this.state.isUser?  <Route exact path = "/" component = {Home}></Route>:
                <Switch>
                    <Route exact path = "/" component = {Home}></Route>
                    <Route path = "/login" render = {(props)=>{
                        return <Login login = {this.onLogin.bind(this)} loginMsg = {this.state.loginMsg}/>
                    }}></Route>
                    <Route path = "/register" render = {(props)=>{
                        return <Register regMsg = {this.state.regMsg} reg = {this.onRegister.bind(this) }/>
                    }}></Route>
                </Switch>
              }
              <Switch>
                  <Route exact path = "/list" render = {()=>{
                  return <SongsList songList = {this.state.songsList} songListfn = {this.addSongsToList.bind(this)}/>}}/>
                  <Route path = "/addSong" render = {()=>{
                      return <AddSong msg = {this.state.songMsg} songs = {this.state.songsArray} search = {this.searchSong.bind(this)} add = {this.addSong.bind(this)}/>
                  }}/>
                  <Route path = "/playlist" render = {()=><Playlist/>}/>
              </Switch>
            </div>
        )
    }
}