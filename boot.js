window.onload=function(){
var s = document.createElement('script');
s.src = chrome.extension.getURL('inject.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

var s = document.createElement('script');
s.src = chrome.extension.getURL('encrypter.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
}
