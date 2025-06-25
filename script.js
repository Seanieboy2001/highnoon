
function hostGame() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  navigator.vibrate(200);
}
function joinGame() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  navigator.vibrate([100, 100, 100]);
}
