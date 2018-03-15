var video = document.getElementsByTagName('video')[0];
window.addEventListener("keypress", function(e){
    if(e.keyCode == 228){
        video.playbackRate = Math.round((video.playbackRate + 0.1) * 100) / 100;
        console.log(video.playbackRate);
    }
    if(e.keyCode == 246){
        video.playbackRate = Math.round((video.playbackRate - 0.1) * 100) / 100;
        console.log(video.playbackRate);
    }
});
