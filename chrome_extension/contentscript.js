console.log("content");

var video = document.getElementsByTagName('video')[0];



var snack = document.createElement("div");
snack.setAttribute("id", "snackbar");
snack.innerHTML = "";
document.getElementsByTagName("body")[0].appendChild(snack);

snackbar("test");

if(video !== undefined){
    console.log("Video found");

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
} else {
    console.log("There is no video on this page");
}

function snackbar(text){
    snack.innerHTML = text;
    snack.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){
        snack.className = snack.className.replace("show", "");
    }, 3000);

}
