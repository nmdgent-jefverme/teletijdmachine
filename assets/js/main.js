document.getElementById('btn1').addEventListener('click', () => {
  if (document.getElementById('btn1').style.backgroundColor === 'green') document.getElementById('btn1').style.backgroundColor = 'red';
  else document.getElementById('btn1').style.backgroundColor = 'green';
})
document.getElementById('btn2').addEventListener('click', () => {
  if (document.getElementById('btn2').style.backgroundColor === 'green') document.getElementById('btn2').style.backgroundColor = 'red';
  else document.getElementById('btn2').style.backgroundColor = 'green';
})
document.getElementById('btn3').addEventListener('click', () => {
  if (document.getElementById('btn3').style.backgroundColor === 'green') document.getElementById('btn3').style.backgroundColor = 'red';
  else document.getElementById('btn3').style.backgroundColor = 'green';
})

const container = document.getElementById('container');
const content = document.getElementById('content');
const storing = new Audio('./assets/sounds/storing.mp3');
const error = new Audio('./assets/sounds/error.mp3');
document.getElementById('btn').addEventListener('click', () => {
  container.style.display = 'none';
  const p = document.createElement('p');
  p.innerText = 'Zoeken naar een signaal';
  p.style.textAlign = 'center';
  p.style.fontSize = '50px';
  content.appendChild(p);
  window.setTimeout(() => {
    content.removeChild(p);
  }, 3000);

  window.setTimeout(() => {
    document.body.style.backgroundImage = "url('./assets/images/tvbackground.gif')";
    storing.play();
  }, 3000);

  window.setTimeout(() => {
    document.body.style.backgroundImage = "url('./assets/images/error.jpg')";
    error.play();
  }, 6000);
})