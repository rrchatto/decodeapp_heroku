"use strict";

class App{
  constructor(){
    this.music = [
       {
        "id":0,
        "title": "Shout out to my ex",
        "album": "Glory Days",
        "genre": "Pop",
        "artist": "Little Mix.",
        "image": "img/LM.jpg",
      
      },
      {
        "id":1,
        "title": "Work from Home",
        "album": "7/27",
        "genre": "Pop",
        "artist": "Fifth Harmony",
        "image": "img/FM.png",
       
      },
      {
        "id":2,
        "title": "Little Things",
        "album": "Take Me Home",
        "genre": " Teen pop, Pop",
        "artist": "One Direction",
        "image": "img/1D.png",
      },
      {
        "id":3,
        "title": "Closer",
        "album": "Closer",
        "genre": "Dance/electronic",
        "artist": "The Chainsmokers",
        "image": "img/c.png",
       
      },
      {
        "id": 4,
        "title": "Photograph",
        "album": "X",
        "genre": "Contemporary R&B, Pop",
        "artist": "Ed Sheeran",
        "image": "img/ed.jpg",
       
      }   
    ];  


  
  }



  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }

  createDesign(){
    let id = document.getElementById('new_id');
    let title = document.getElementById('music_title');
    let album = document.getElementById('music_album');
    let genre = document.getElementById('music_genre');
    let artist = document.getElementById('music_artist');
    let image = document.getElementById('music_image');
  

    let music = {      
      "id": id.value,
      "title": title.value,
      "album": album.value,
      "genre": genre.value,
      "artist": artist.value,
      "image": image.value,     
    };
    this.music.push(music);   
    id.value = title.value  = album.value = genre.value = artist.value = image.value = ''; 
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
            <li><a href="#" onclick="component.Home()"><i class="material-icons left">stay_primary_portrait</i>Home</a></li>
            <li><a href="#" onclick="component.musicList()"><i class="material-icons left">assignment</i>Music Layout</a></li>  
            <li><a href="#" onclick="component.createMusic()"><i class="material-icons left">note_add</i>Create Music</a></li>  
            <li><a href="#" onclick="component.musicList()"><i class="material-icons left">assignment</i>View Music</a></li> 
          </ul> 
        </div>
      </nav>
    </div>
  </nav>

  <div id="Home"></div>
  <div id="recentActivity"></div>
  <div id="viewMusic"></div>
  <div id="musicList"></div>
  <div id="createMusic"></div>
  <div id="lyricsPage "></div>


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
            <li><a class="grey-text text-lighten-3" href="#!"onclick="component.viewMusic()"">View Music</a></li>          
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
    this.recentActivity(); 

  }

  recentActivity(){
    
    let html = `

    <div class="carousel">
    <a class="carousel-item" href="#one!"><img src="img/LM.jpg"></a>
    <a class="carousel-item" href="#two!"><img src="img/FM.png"></a>
    <a class="carousel-item" href="#three!"><img src="img/1D.png"></a>
    <a class="carousel-item" href="#four!"><img src="img/c.png"></a>
    <a class="carousel-item" href="#five!"><img src="img/ed.jpg"></a>
  </div>

 <div class="col s12 m12">
          <div class="card">
            <div class="card-image">
              <img src="http://www.1zoom.ru/big2/23/193217-Sepik.jpg">
                 <span class="card-title">Music for me is Life :) Welcome to My Music App </span>
            </div>
           
            <div class="card-action">
            <center>
              <a href="#"onclick="component.createMusic()"><i class="material-icons center">note_add</i> Create Music</a>
               <a href="#"onclick="component.viewMusic()"><i class="material-icons center">movie</i> Watch Sample Music</a>
               </center>
            </div>
          </div>
        </div>
      </div>

<video class="responsive-video" controls>
    <source src="img/Shout Out to My Ex .mp4" type="video/mp4">
  </video>

        <div class="row">
        <div class="col s6 m6">
          <div class="card">
            <div class="card-image">
              <img src="img/tj.jpg">
              <span class="card-title">TJ Monterde</span>
            </div>
            <div class="card-content">
              <p>Record label: PolyEast Records Albums: Ikaw At Ako, TJ Monterde Parents: Tito Monterde, Weng Monterde
                   Nominations: Awit Award for Best Performance by a New Male Recording Artist</p>
            </div>
            <div class="card-action">
          <a href="https://www.youtube.com/watch?v=r4f_pzRm058"><i class="material-icons center">movie</i>Watch TJ Monterde - Dating Tayo (Official Music Video)</a>
            </div>
          </div>
          </div>


        <div class="col s6 m6">
          <div class="card">
            <div class="card-image">
              <img src="img/cc.jpg">
              <span class="card-title">Curse One</span>
            </div>
            <div class="card-content">
              <p>Record label: Warner Music Philippines Albums: Infinity
                Awards: Awit Award for Most Downloaded Artist, Awit Award for Most Downloaded Song</p>
            </div>
            <div class="card-action">
              <a href="https://www.youtube.com/watch?v=Zxl7R_VRP-E"><i class="material-icons center">movie</i> Watch Curse One - Kailangan Kita (Official Music Video)</a>
            </div>
          </div>
        </div>  
             <div class="row">
                 `;

    let m = this.music;
    let count = 0;
    for(let i=(m.length-1);i>=0;i--){
      if(count++ === 5)break;
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

  }

  viewMusic(id){
    let m = this.musicSearchName(id);

    let html = `
      <h5 class="center-align">${m[i].title}</h5>
      <div class="row">       
        <div class="col s12 m12">
          <div class="card horizontal small">
            <div class="card-image">
              <img src="${m[i].image}">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>Album : ${m[i].album}</p>
                <p>Genre : ${m[i].genre}</p>
                <p>Artist : ${m[i].artist}</p>
                
              </div>
            <div class="card-action small">               
                <span onclick="component.deleteMusic(${m[i].id})" class="new badge small red" data-badge-caption="">Delete Music</span>
               <span onclick="component.musicList()" class="new badge small" data-badge-caption="">Back to MusicList</span>
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
    $('#musicList').hide();
    $('#createMusic').hide();
    $('#lyricsPage').hide();
    $('#Home').hide();
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
    $('#recentActivity').hide();
    $('#createMusic').hide();    
    $('#lyricsPage').hide();    
    $('#Home').hide();
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
    $('#recentActivity').hide();  
    $('#createMusic').hide();
    $('#lyricsPage').hide();    
    $('#Home').hide();    
  }

  createMusic(){
    let html = `
   
         <div class="row">
             <div class="input-field col s6 ">
              <input disabled value="${this.music.length+1}" id="new_id" type="text" class="pink lighten-1">
            </div>
          <div class="input-field col s6 ">
              <input id="music_title" type="text" class="  yellow lighten-1">
              <label for="music_title"><i class="material-icons center">perm_contact_calendar</i> Enter Music Title</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6 ">
              <input id="music_album" type="text" class=" light-green accent-1">
             <label for="music_album"><i class="material-icons center">description</i> Enter Album Name</label>
            </div>
            <div class="row">
            <div class="input-field col s6 ">
              <input id="music_genre" type="text" class=" light-green accent-1">
             <label for="music_genre"><i class="material-icons center">description</i> Enter Genre</label>
            </div>
            <div class="row">
            <div class="input-field col s6 ">
              <input id="music_artist" type="text" class=" light-green accent-1">
             <label for="music_artist"><i class="material-icons center">description</i> Enter Artist </label>
            </div>
            <div class="input-field col s6 "">
              <input id="music_image" type="text" class="deep-orange lighten-1">
              <label for="music_image"><i class="material-icons center">assignment_ind</i> Enter Image Address</label>
            </div>

              <button onclick="component.musicList()" class="btn waves-effect waves-light">Back</button>
              <button onclick="component.musicList()" class="btn waves-effect waves-light">Save</button>
    `;

    this.reRender(`
      ${html}
      `,document.getElementById("createMusic"));
    $('#createMusic').show();
    $('#musicList').hide();
    $('#viewMusic').hide();
    $('#recentActivity').hide();  
    $('#lyricsPage').hide(); 
    $('#Home').hide();    
  }

  lyricsPage(){
    let html =`
 
<video class="responsive-video" controls>
    <source src="img/Shout Out to My Ex .mp4" type="video/mp4">
  </video>


`;
  
    this.reRender(`
      ${html}
      `,document.getElementById("Home"));
    $('#createMusic').show();
    $('#musicList').hide();
    $('#viewMusic').hide();
    $('#recentActivity').hide(); 
    $('#aboutMe').hide();  
    $('#Home').hide();  

  

}



} 
let component = new Component();
component.Home();
