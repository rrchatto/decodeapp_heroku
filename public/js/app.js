"use strict";

class App{
  constructor(){
    this.music = [
    {
      "id":1,
      "title": "Shout out to my ex",
      "album": "Glory Days",
      "genre": "Pop",
      "artist": "Little Mix.",
      "image": "img/LM.jpg",
      
    },
    {
      "id":2,
      "title": "Work from Home",
      "album": "7/27",
      "genre": "Pop",
      "artist": "Fifth Harmony",
      "image": "img/FM.png",

    },
    {
      "id":3,
      "title": "Little Things",
      "album": "Take Me Home",
      "genre": " Teen pop, Pop",
      "artist": "One Direction",
      "image": "img/1D.png",
    },
    {
      "id":4,
      "title": "Closer",
      "album": "Closer",
      "genre": "Dance/electronic",
      "artist": "The Chainsmokers",
      "image": "img/c.png",

    },
    {
      "id": 5,
      "title": "Photograph",
      "album": "X",
      "genre": "Contemporary R&B, Pop",
      "artist": "Ed Sheeran",
      "image": "img/ed.jpg",

    }   
    ];  

    this.cards = [
    {

      "pic1": "img/tj.jpg",
      "title1": "TJ Monterde",
      "detail1": `Record label: PolyEast Records Albums: Ikaw At Ako, TJ Monterde Parents: Tito Monterde, Weng Monterde
      Nominations.`,
      "link1": "https://www.youtube.com/watch?v=r4f_pzRm058",

    },
    {

      "pic1": "img/cc.jpg",
      "title1": "Curse one",
      "detail1": `Record label: Warner Music Philippines Albums: Infinity
      Awards: Awit Award for Most Downloaded Artist, Awit Award for Most Downloaded Song`,
      "link1": "https://www.youtube.com/watch?v=Zxl7R_VRP-E",

    },
    ];


    this.carusel = [
    {
      "img":"img/LM.jpg",

    },
    {
      "img":"img/FM.png",

    },
    {

      "img":"img/1D.png",
    },
    {
      "img":"img/c.png",

    },
    {
      "img":"img/ed.jpg",

    },
    ];


  }



  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }



  createDesign(){

    let title = document.getElementById('music_title');
    let album = document.getElementById('music_album');
    let genre = document.getElementById('music_genre');
    let artist = document.getElementById('music_artist');
    let image = document.getElementById('music_image');


    let music = {     
      "title": title.value,
      "album": album.value,
      "genre": genre.value,
      "artist": artist.value,
      "image": image.value,     
    };
    this.music.push(music);   
   title.value  = album.value = genre.value = artist.value = image.value = ''; 
  } 

updateMusicNow(id){
id = id+1;
    let musicDummy = {
      "id" :  id, 
      "title": $('musicTitle').val(),
      "album": $('musicAlbum').val(),
      "genre": $('musicGenre').val(),
      "artist": $('musicArtist').val(),
      "image": $('musicImage').val()   
    };

    let m = this.music;
    for(let i=0;i<m.length;i++){
      if(m[i].id == id){
        m[i] = musicDummy;
        break;
      }
    }
    this.viewMusic();
  }
  deleteMusic(key){
    let m = this.music;
    for(let i=0;i<m.length;i++){
      if(m[i].id == key){
        this.music.splice(i,1);
        break;
      }
    }   
    this.musicList();
  }

  musicSearchName(id){
    let m = this.music; 
    for(let i=0;i<m.length;i++){
      if(id==m[i].id){
        return m[i];
      }
    }
  } 

  musicSearch(title){
    let objects = [];
    let m = this.music;
    for(let i=0;i<m.length;i++){
      let expr = (m[i].title.toUpperCase().indexOf(title.toUpperCase()) > -1);
      if(expr){
        objects.push(m[i]);
      }
    }
    return objects;
  }

}

class Component extends App{
  constructor(){

    super();
  }

  Home(){
    let html = `
    <nav>
    <div class="nav-wrapper pink darken-1">
    <a href="#" onclick="component.landingPage()" class="brand-logo"> My Music App </a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
    <li>
    <li><a href="#" onclick="component.landingpage()"><i class="material-icons left">stay_primary_portrait</i>Home</a></li>
    <li><a href="#" onclick="component.musicList()"><i class="material-icons left">assignment</i>Music Layout</a></li>  
    <li><a href="#" onclick="component.createMusic()"><i class="material-icons left">note_add</i>Create Music</a></li>  
    </ul> 
    </div>
    </nav>
    </div>
    </nav>


    <div id="landingpage"></div>
    <div id="Home"></div>
    <div id="recentActivity"></div>
    <div id="viewMusic"></div>
    <div id="musicList"></div>
    <div id="createMusic"></div>
    <div id="updateMusic"></div>

  


    <footer class="page-footer pink darken-1">
    <div class="container">
    <div class="row">
    <div class="col l6 s12">
    <h5 class="white-text">Romelyn Rose Chatto</h5>
    <p class="grey-text text-lighten-4">Music is Life!</p>
    <p><a class="grey-text text-lighten-3" href="http://wpsolutions-hq.com/wp/wp-content/uploads/2013/03/sc-icon.png">
    <img class="left" src="img/ako.jpg"/>
    </div>
    <div class="col l4 offset-l2 s12 ">
    <h5 class="white-text "> Music App </h5>
    <ul>
    <li><a class="grey-text text-lighten-3" href="#!"onclick="component.Home()">Home</li>
    <li><a class="grey-text text-lighten-3" href="#!"onclick="component.musicList()"">Music Layout</a></li>
    <li><a class="grey-text text-lighten-3" href="#!"onclick="component.createMusic()">Create Music</li>      
    </ul>
    </div>
    <p><a class="grey-text text-lighten-3" href="https://www.facebook.com/raven.chatto">
    </div>
    @musicLover
    </div>         
    </div>
    </div>
    <div class="footer-copyright">
    <div class="container">
    ©2016-2017 Copyright Text   
    <img class="right" src="img/HK.png" style="margin-top:6px;" />   
    </div>
    </div>      
    </footer>
    </div>

    `;

    this.reRender(`
      ${html}
      `,document.getElementById("app"));
    $('#viewMusic').hide();
    $('#recentActivity').show();
    $('#musicList').hide();
    $('#createMusic').hide();
    $('#updateMusic').hide();
    $('#Home').show();
    $('#landingpage').hide();   
    this.recentActivity(); 

  }

  recentActivity(){

    let html = `

    <div class="carousel">


    `;
      html+=`
      <a class="carousel-item" href="#one!"><img src="${this.carusel[0].img}"></a>
      <a class="carousel-item" href="#two!"><img src="${this.carusel[1].img}"></a>
      <a class="carousel-item" href="#three!"><img src="${this.carusel[2].img}"></a>
      <a class="carousel-item" href="#four!"><img src="${this.carusel[3].img}"></a>
      <a class="carousel-item" href="#five!"><img src="${this.carusel[4].img}"></a>
      </div>
      `;
  html+=`


    <div class="col s12 m12">
    <div class="card">
    <div class="card-image">
    <img src="http://www.1zoom.ru/big2/23/193217-Sepik.jpg">
    <span class="card-title">Music for me is Life :) Welcome to My Music App </span>
    </div>

    <div class="card-action">
    <center>
    <a href="#"onclick="component.createMusic()"><i class="material-icons center">note_add</i> Create Music</a>
    </center>
    </div>
    </div>
    </div>
    </div>



    `;

    for(let i=0;i<this.cards.length;i++){
      html+=`
      <div class="row">
      <div class="col s6 m6">
      <div class="card">
      <div class="card-image">
      <img src="${this.cards[i].pic1}">
      <span class="card-title">${this.cards[i].title1}</span>
      </div>
      <div class="card-content">
      <p>${this.cards[i].detail1}</p>
      </div>
      <div class="card-action">
      <a href="${this.cards[i].link1}"><i class="material-icons center">movie</i>Watch TJ Monterde - Dating Tayo (Official Music Video)</a>
      </div>
      </div>
      </div>



      <div class="row">
      `;
    }

    let m = this.music;
    let count = 0;
    for(let i=(m.length-1);i>=0;i--){
      if(count++ === 4)break;
      html+= `

      <div class="col s8 m6">
      <div class="card large hoverable">
      <div class="card-image">
      <img src="${m[i].image}">
      <span class="card-title">${m[i].title}</span>
      </div>
      <div class="card-content">
      <p>Album : ${m[i].album}</p>
      <p>Artist : ${m[i].artist}</p>
      <p>Genre : ${m[i].genre}</p>

      </div>
      <div class="card-action">
      <a href="#" onclick="component.viewMusic(${m[i].id})">Music Details</a>
      </div>
      </div>
      </div>
      `;
    }

    html += `</div>`;

    this.render(`   
      ${html}
      `,document.getElementById("recentActivity"));
    $('#viewMusic').show();
    $('#recentActivity').show();
    $('#updateMusic').hide();
    $('#Home').show();
    $('#musicList').hide();
    $('#createMusic').hide();
    $('#landingpage').hide();   



  }

  viewMusic(id){
    let m = this.musicSearchName(id);

    let html = `
    <div class="row">       
    <div class="col s12 m12">
    <div class="card horizontal small">
    <div class="card-image">
    <img src="${m.image}">
    </div>
    <div class="card-stacked">
    <div class="card-content">
    <p>Title : ${m.title}</p>
    <p>Album : ${m.album}</p>       
    <p>Genre : ${m.genre}</p>
    <p>Artist : ${m.artist}</p>

    </div>
    <div class="card-action small"> 
    <button onclick="component.deleteMusic(${m.id})"class="btn waves-effect waves-light">Delete</button>
    <button onclick="component.musicList()" class="btn waves-effect waves-light">Back</button>
    <button onclick="component.updateMusic(${m.id})" class="btn waves-effect waves-light">Update</button>
    </div>            
    </div>     
    </div>        
    </div>      
    </div>
    `;

    this.reRender(`   
      ${html}     
      `,document.getElementById("viewMusic"));
    $('#viewMusic').show();
    $('#recentActivity').hide();
    $('#updateMusic').hide();
    $('#musicList').hide();
    $('#createMusic').hide();
    $('#Home').hide();
    $('#landingpage').hide();   
  }

  musicList(){
    let html = `
    <br/>
    <nav>
    <div class="nav-wrapper white">
    <form>
    <div class="input-field">       
    <input onkeyup="component.musicInventory(this.value)" id="search" type="search" placeholder="Search" required>
    <label for="search"><i class="material-icons">search</i></label>
    <i class="material-icons">close</i>
    </div>
    </form>
    </div>
    </nav>
    <br/>
    `;

    html += `
    <div class="row" id="musicInventory">
    `;
    let m = this.music;
    for(let i=0;i<m.length;i++){
      html+= `
      <div class="col s6 m6">
      <div class="card large hoverable">
      <div class="card-image">
      <img src="${m[i].image}">
      <span class="card-title">${m[i].title}</span>
      </div>
      <div class="card-content">
      <p>Album : ${m[i].album}</p>
      <p>Artist : ${m[i].artist}</p>
      <p>Genre : ${m[i].genre}</p>             
      </div>
      <div class="card-action">
      <a href="#" onclick="component.viewMusic(${m[i].id})"> Music Details</a>
      </div>
      </div>
      </div>
      `;
    }

    html += `</div>`;

    this.reRender(`
      ${html}
      `,document.getElementById("musicList"));
    $('#musicList').show();
    $('#viewMusic').hide();
    $('#updateMusic').hide();
    $('#recentActivity').hide();
    $('#createMusic').hide();    
    $('#Home').hide();
    $('#landingpage').hide();   
  }

  musicInventory(title){
    let html = ``;
    let m = this.musicSearch(title);
    for(let i=0;i<m.length;i++){
      html+= `
      <div class="col s12 m4">
      <div class="card small hoverable">
      <div class="card-image">
      <img src="${m[i].image}">
      <span class="card-title">${m[i].title}</span>
      </div>
      <div class="card-content">
      <p>Album : ${m[i].album}</p>
      <p>Artist : ${m[i].artist}</p>
      <p>Genre : ${m[i].genre}</p>
      </div>
      <div class="card-action">
      <a href="#" onclick="component.viewMusic(${m[i].id})">Music Details</a>
      </div>
      </div>
      </div>
      `;
    }   
    this.reRender(`
      ${html}
      `,document.getElementById("musicInventory"));
    $('#musicList').show();
    $('#viewMusic').hide();
    $('#updateMusic').hide();
    $('#recentActivity').hide(); 
    $('#createMusic').hide();  
    $('#Home').hide();    
    $('#landingpage').hide();   

  }

  createMusic(){
    let html = `

    <br>
    <br>
    <form>
    <div>

    <center><h1>Create Music</h1></center>
    <label for="music_title">  <span>Enter Title</span><input type="text" id="music_title"/> </label>
    <label for="music_album"><span>Enter Album</span><input type="text" id="music_album" /> </label>
    <label for="music_genre"><span>Enter Genre</span><textarea id="music_genre" class="textarea-field"></textarea> </label>
    <label for="music_artist"><span>Enter Artist </span><textarea id="music_artist" class="textarea-field"></textarea> </label>
    <label for="music_image"><span>Enter Image Address </span><textarea id="music_image" class="textarea-field"></textarea> </label>

    <div class="center-align">

    <button onclick="component.musicList()" class="btn waves-effect waves-light">Back</button>
    <button onclick="component.createDesign()" class="btn waves-effect waves-light">Save</button>
    </div>

    </div>
    </form>
    </br>
    </br>

    `;

    this.reRender(`
      ${html}
      `,document.getElementById("createMusic"));
    $('#createMusic').show();
    $('#updateMusic').hide();
    $('#musicList').hide();
    $('#viewMusic').hide();
    $('#recentActivity').hide();  
    $('#Home').hide();   
    $('#landingpage').hide();    
  }

updateMusic(id){

  id = id - 1;
    let html = `
    <br>
    <br>
   <form>
    <div class="row">
      <div class="input-field col s6">
      
        <h5><B>Title:</B></h5>
        <input id="musicTitle" type="text" class="validate" value="${this.music[id].title}"></div>

          <div class="input-field col s6">
            <h5><B>Album:</B></h5>
            <input id="musicAlbum" type="text" class="validate" value="${this.music[id].album}"></div>

         <div class="input-field col s6">
            <h5><B>Genre :</B></h5>
            <input id="musicGenre" type="text" class="validate" value="${this.music[id].genre}"></div>

         <div class="input-field col s6">
            <h5><B>Artist :</B></h5>
            <input id="musicArtist" type="text" class="validate" value="${this.music[id].artist}"></div>

             <div class="input-field col s6">
            <h5><B>Image :</B></h5>
            <input id="musicImage" type="text" class="validate" value="${this.music[id].image}"></div>
    </div>
      <a onclick="component.updateMusicNow(${id})" class="waves-effect blue waves-light btn">Update</a>

      </form>
       </br>
    </br>
      `; 
    this.reRender(`
    ${html}
    `,document.getElementById("updateMusic"));
    
    $('#createMusic').hide();
    $('#musicList').hide();
    $('#updateMusic').show();
    $('#viewMusic').hide();
    $('#recentActivity').hide(); 
    $('#aboutMe').hide();  
    $('#Home').hide();  
    $('#landingpage').hide(); 
  } 

  landingpage(){

    let html=`




    `;
    this.reRender(`
      ${html}
      `,document.getElementById("createMusic"));
    $('#createMusic').hide();
    $('#musicList').hide();
    $('#updateMusic').hide();
    $('#viewMusic').hide();
    $('#recentActivity').show(); 
    $('#aboutMe').hide();  
    $('#Home').show();  
    $('#landingpage').show();   

  }



} 
let component = new Component();
component.Home();
