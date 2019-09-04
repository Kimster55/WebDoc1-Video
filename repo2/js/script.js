window.onscroll = function() {
    var blooper = document.getElementById("myVideo");
    var aud = document.getElementById("myAudio");
    var triangle = document.getElementById("purple-triangle");

    if (blooper.getBoundingClientRect().bottom < 250 || blooper.getBoundingClientRect().top > 250)
      blooper.pause();
    else 
      blooper.play(); 

    if (triangle.getBoundingClientRect().bottom < 200 || triangle.getBoundingClientRect().top > 10)
      aud.pause();
    else 
      aud.play();
}




function playWalker() 
{

    var element = document.getElementById('audio-player');
    if (element == null)
    {
        document.getElementById('song').innerHTML = '<audio id="audio-player" controls="controls" src="audio/Walker.mp3" type="audio/mpeg">';
        document.getElementById('WalkerKnap').innerHTML = "Nu kan du afspille Walker";
    }
    else
    {
        document.getElementById('song').innerHTML = null;
        document.getElementById('WalkerKnap').innerHTML = "Afspil Walker";
    }

   
}
