// getting all elements with tag video from the page and selecting the first one
var video = document.getElementsByTagName('video')[0];

var lastTimeoutID;
var snack;


// check if there was a video found
if(video !== undefined){
    init_snackbar();

    snackbar("Video found");

    // adding eventlisteners for keypress
    window.addEventListener("keypress", function(e){

        // if key pressed is ä increase speed
        if(e.keyCode === 228){
            video.playbackRate = Math.round((video.playbackRate + 0.1) * 100) / 100;
            snackbar(video.playbackRate);
        }

        // if key pressed is ö decrease speed
        if(e.keyCode === 246){
            video.playbackRate = Math.round((video.playbackRate - 0.1) * 100) / 100;
            snackbar(video.playbackRate);
        }
    });
}

function init_snackbar(){
    // including the css for the snackbar
    var snackbar_css = document.createElement("link");
    snackbar_css.setAttribute("rel", "stylesheet");
    snackbar_css.setAttribute("href", "https://rawgit.com/mmoehrlein/chrome_BlaybackRateControll/master/snackbar.css");
    document.getElementsByTagName("html")[0].appendChild(snackbar_css);

    // adding the div for the snacks
    snack = document.createElement("div");
    snack.setAttribute("id", "snackbar");
    snack.innerHTML = "";
    document.getElementsByTagName("body")[0].appendChild(snack);
}

function snackbar(text){
    snack.innerHTML = text;
    snack.className = "show";

    //resetting timeout
    if(lastTimeoutID !== undefined){
        window.clearTimeout(lastTimeoutID);
    }

    // After 3 seconds, remove the show class from DIV
    lastTimeoutID = window.setTimeout(function(){
        snack.className = snack.className.replace("show", "");
    }, 3000);


}
