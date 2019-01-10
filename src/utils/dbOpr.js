import * as firebase from 'firebase'

export const registerOperations = {
  
    addUser(userObj){
     firebase.database().ref("/users/"+userObj.username).set(userObj);
    },
    checkUsername(userObj){
        var pr = new Promise((resolve,reject)=>{
            var object = firebase.database().ref("/users/"+userObj.username);
            object.on('value', snapshot=>{
                resolve(snapshot.val());
            })
        })
        return pr;
    }  
 }

 export const loginOperations = {
     checkUser(userObj){
         var promise = new Promise((resolve,reject)=>{
            var object = firebase.database().ref("/users/"+userObj.username);
            object.on('value', snapshot=>{
                // console.log(snapshot.val());
                resolve(snapshot.val());
            })
         })
       return promise;
     }
 }
 export const songDbOperations = {
     addUser(){
         var username = localStorage.getItem('name');
         console.log(username);
         var pr = new Promise((resolve,reject)=>{
             var obj = firebase.database().ref("/users/"+username);
             console.log("object is",obj)
             obj.on('value', snapshot=>{
                 resolve(snapshot.val());
             })
         })
         return pr;
        
     },
     addSongToDb(song){
       
            firebase.database().ref("/songs/"+song.trackName).set(song);
            
 
     },
     addSongsForList(){
         var pr = new Promise((resolve,reject)=>{
             var obj = firebase.database().ref("/songs");
             obj.on('value', snapshot=>{
                 resolve(snapshot.val());
             })
         })
         return pr;
     }
 }
