document.addEventListener('DOMContentLoaded', function() {
    const container=document.getElementById('con');
    const status = document.querySelector('h1');
    window.addEventListener('load', () => {
      const handleNetworkChange = () => {
        if (navigator.onLine) {
            status.innerHTML='WELCOME TO WEBSITE';
        } else {
          status.innerHTML='NO INTERNET CONNECTION';
          
          
        }
      };
    
      window.addEventListener('online', handleNetworkChange);
      window.addEventListener('offline', handleNetworkChange);
    });
    


    const toggleSwitch = document.getElementById('toggleSwitch');
    
    const title=document.querySelector('h1');
    const label=document.querySelector('label');
    toggleSwitch.addEventListener('change', function() {
      if (this.checked) {
        // Perform actions when switch is toggled on
        document.body.style.background = "#000000";
        container.style.backgroundColor="#FFFFFF";
        title.style.color="white";
        label.style.color="white";
        document.getElementsByTagName("button").style.borderColor = "black";
        console.log('Switch is ON');
      } else {
        // Perform actions when switch is toggled off
        document.body.style.background = "#FFFFFF";
        container.style.backgroundColor="#000000";
        title.style.color="black";
        label.style.color="black";
        document.getElementsByTagName("button").style.borderColor = "white";
        console.log('Switch is OFF');
      }
    });
    var show=document.getElementById('show');
   
    var songs=['music/song2.wav','music/song1.mp3']
    var i=0
    var music = new Audio(songs[i]);
    

    var colors=["#FFFF00","#90EE90"]
  const cont=document.getElementById('con');
  
  var anim=document.getElementById('load')
    const next=document.getElementById("next")
  next.addEventListener("click",function(){
    i = (i + 1) % songs.length; // Ensure looping through songs
    stopp.innerHTML = 'STOP';

    anim.style.display='flex'
    anim.style.margin='auto'

    const chosenColor = colors[i];
    cont.style.backgroundColor = chosenColor;
    music.pause(); // Pause the current song
    music.src = songs[i]; // Update the source of the Audio object for the next song
    music.play();
  })

  const prev=document.getElementById("prev")
  prev.addEventListener("click",function(){
    i = (i - 1) % songs.length; // Ensure looping through songs
    stopp.innerHTML = 'STOP';
    
    anim.style.display='flex'
    anim.style.margin='auto'

    const chosenColor = colors[i];
    cont.style.backgroundColor = chosenColor;
  
    music.pause(); // Pause the current song
    music.src = songs[i]; // Update the source of the Audio object for the next song
    music.play();
  })
    
    var stopp = document.getElementById('start');
   /* var disp=document.getElementById('con')*/

    songName=document.createElement('h2')

    stopp.addEventListener("click", function() {
      // Disable the button to prevent multiple clicks
      if (stopp.innerHTML=="START"){
      const chosenColor = colors[i];
    cont.style.backgroundColor = chosenColor;

     anim.style.display='flex'
     anim.style.margin='auto'

    /* songName.innerHTML=songs[i]
     disp.style.margin='auto'
     disp.appendChild(songName)*/
     
      music.play();
      stopp.innerHTML="STOP";
    }
      else{
        stopp.innerHTML="START";
        anim.style.display='none'
        cont.style.backgroundColor = "#ADD8E6";
       /* songName.innerHTML=''*/
        music.pause();
      
      }
    });
    
    const volume=document.getElementById("Volume")
    volume.addEventListener("click", function(){  
        var volumeValue = document.getElementById('Volume').value;  
        console.log(volumeValue);  
        music.volume = volumeValue;  
          
    });  
  });
  
  