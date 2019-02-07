//var blooper = document.getElementById("myVideo");

window.onscroll = function() {
    var offsetTop = blooper.getBoundingClientRect().top;
    var offsetBottom = blooper.getBoundingClientRect().bottom; 
    if (offsetTop <= 50 && offsetTop > 0) {
       playVideo();
    } else if (offsetBottom < 0) {
        stopVideo();
    }
}

function playVideo() {
    blooper.play();
}

function stopVideo() {
    blooper.pause();
}

