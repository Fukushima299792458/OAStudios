var win;
$(window).load(function() {
$('#button').click(function(){
openPopup();
});
});

function openPopup() {
var left = (screen.width/2);
var top = (screen.height/2);
var popWidth = 800;
var popHeight = 600;
var popTop = top - popHeight/2;
var popLeft = left - popWidth/2;
if(win && !win.closed){ //checks to see if window is open
win.focus();
} else {
win = window.open('http://www.example.com', 'Example_window', 'height=' + popHeight + ',width=' + popWidth + ',resizeable=0, top=' + popTop + ', left=' + popLeft);
win.focus();
}
}

function polling(){
if (win && win.closed) {
clearInterval(timer);
alert('popup window is closed.');
}
}
timer = setInterval('polling()',1000);
