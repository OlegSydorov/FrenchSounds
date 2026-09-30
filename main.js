
const audio=document.getElementById("audio_player");

let audioSrc="";

function playAudio(elementId)
{
   // console.log("Click");
    let currSrc="assets/"+elementId+".mp3";
   // console.log(currSrc);
//console.log(elementId+"P")

document.querySelectorAll('[data-group="btns"]').forEach(el => {
  el.setAttribute("pointer-events", "none");
  el.classList.replace('tiny-button', 'tiny-button-disabled');
});
    document.getElementById(elementId+"P").classList.replace('tiny-button-disabled', 'tiny-button');
     document.getElementById(elementId+"P").setAttribute("pointer-events", "auto");
    document.getElementById(elementId+"S").classList.replace('tiny-button-disabled', 'tiny-button');
document.getElementById(elementId+"S").setAttribute("pointer-events", "auto");
    if (currSrc==audioSrc){
         document.getElementById("audio_player").play();
    }
    else{
        audioSrc=currSrc;
    document.getElementById("audio_player").pause();
    document.getElementById("audio_player").setAttribute('src', currSrc);
    document.getElementById("audio_player").load();
    document.getElementById("audio_player").play();
    }
}


function pauseAudio()
{
    console.log("Pause");
    document.getElementById("audio_player").pause();
}

function stopAudio(elementId)
{    
    console.log(elementId);
    document.getElementById("audio_player").pause();
     document.getElementById(elementId.slice(0, -1)+"P").classList.replace('tiny-button', 'tiny-button-disabled');
    document.getElementById(elementId).classList.replace('tiny-button', 'tiny-button-disabled');
   audioSrc="";

}


