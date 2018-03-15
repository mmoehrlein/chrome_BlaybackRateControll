# chrome_BlaybackRateControll
grabbing the first element with the &lt;video> tag from a page and beeing able to controll the PlaybackRate

You can just add a bookmark to your browser with The following code in the URL. The actual code will be pulled dynamically from this repo and is therefore always up to date.

```JavaScript
javascript:(function(){
    window.s0 = document.createElement('script');
    window.s0.setAttribute('type', 'text/javascript');
    window.s0.setAttribute('src', 'https://rawgit.com/mmoehrlein/chrome_BlaybackRateControll/master/bookmarklet.js');
    document.getElementsByTagName('body')[0].appendChild(window.s0);
})();
```

If you don't like it to always get the up to date version just add the following snippet as a bookmark and add the code from [bookmarklet](https://github.com/mmoehrlein/chrome_BlaybackRateControll/blob/master/bookmarklet.js) at the indicated spot.

```JavaScript
javascript:(function(){
    
   //TODO PASTE CODE HERE
    
})();
```
