/**
 * Created on 2017/5/17.
 */
var html1 = document.documentElement;
function autoPlay() {
	var screenW = html1.clientWidth;
	html1.style.fontSize = 0.032 * screenW + 'px';
}
autoPlay();
window.onresize = function () {
	autoPlay();
}
// var html1 = document.documentElement;
// function autoPlay() {
//     var screenW = html1.clientWidth;
//     html1.style.fontSize = screenW / 7.5 + 'px';
// }
// autoPlay();
// window.onresize = function () {
//     autoPlay();
// }
