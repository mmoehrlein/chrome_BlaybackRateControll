# chrome_BlaybackRateControll
[![GitHub license](https://img.shields.io/github/license/mmoehrlein/chrome_BlaybackRateControll.svg?style=flat-square)](https://github.com/mmoehrlein/chrome_BlaybackRateControll/blob/master/LICENSE) ![GitHub top language](https://img.shields.io/github/languages/top/mmoehrlein/chrome_BlaybackRateControll.svg?style=flat-square)

## Description
grabbing the first element with the &lt;video> tag from a page and controls the playbackrate via button presses.

## Chrome Extension
1. clone or download the repo
2. in your chrome go to `chrome://extensions`
3. on the top right enable developer mode
4. click "load unpacked extension" and select the chrome _extension directory from the repo


## Bookmarklet
You can just add a bookmark to your browser with The following code in the URL. The actual code will be pulled dynamically from this repo and is therefore always up to date.

```JavaScript
javascript:(function(){
    window.s0 = document.createElement('script');
    window.s0.setAttribute('type', 'text/javascript');
    window.s0.setAttribute('src', 'https://rawgit.com/mmoehrlein/chrome_BlaybackRateControll/master/chrome_extension/contentscript.js');
    document.getElementsByTagName('body')[0].appendChild(window.s0);
})();
```

If you don't like it to always get the up to date version just add the following snippet as a bookmark and add the code from [contenscript.js](https://github.com/mmoehrlein/chrome_BlaybackRateControll/blob/master/chrome_extension/contentscript.js) at the indicated spot.

```JavaScript
javascript:(function(){
    
   //TODO PASTE CODE HERE
    
})();
```
