const motor = new Audio('./assets/sounds/motor.mp3');
const light = new Audio('./assets/sounds/light.mp3');
const electric = new Audio('./assets/sounds/electric.mp3');

document.getElementById('btn1').addEventListener('click', () => {
  if (document.getElementById('btn1').style.backgroundColor === 'green') document.getElementById('btn1').style.backgroundColor = 'red';
  else {
    motor.play();
    document.getElementById('btn1').style.backgroundColor = 'green';
  }
})
document.getElementById('btn2').addEventListener('click', () => {
  if (document.getElementById('btn2').style.backgroundColor === 'green') document.getElementById('btn2').style.backgroundColor = 'red';
  else {
    light.play();
    document.getElementById('btn2').style.backgroundColor = 'green';
  }
})
document.getElementById('btn3').addEventListener('click', () => {
  if (document.getElementById('btn3').style.backgroundColor === 'green') document.getElementById('btn3').style.backgroundColor = 'red';
  else {
    electric.play();
    document.getElementById('btn3').style.backgroundColor = 'green';
  }
})

const container = document.getElementById('container');
const content = document.getElementById('content');
const code = document.getElementById('code');

const storing = new Audio('./assets/sounds/storing.mp3');
const error = new Audio('./assets/sounds/error.mp3');
const rakket = new Audio('./assets/sounds/rakket.mp3');

document.getElementById('btn').addEventListener('click', () => {
  container.style.display = 'none';
  content.style.display = 'flex';
  content.style.flexDirection = 'column';
  content.style.alignItems = 'center';
  content.style.justifyContent = 'center';
  const p = document.createElement('p');
  const img = document.createElement('img');
  img.src = './assets/images/loading.gif'
  const p2 = document.createElement('p');
  p.innerText = 'Zoeken naar een signaal';
  p.style.textAlign = 'center';
  p.style.fontSize = '50px';
  content.appendChild(p);
  content.appendChild(img);
  if(code.value === 'teletijdmachine') {
    window.setTimeout(() => {
      img.style.display = 'none'
      p.style.display = 'none';
      p2.innerText = 'Code correct!';
      p2.style.textAlign = 'center';
      p2.style.fontSize = '50px';
      content.appendChild(p2);
    }, 3000);
    window.setTimeout(() => {
      content.removeChild(p2);
      rakket.play();
      document.body.style.backgroundImage = "url('./assets/images/timemachine.jpeg')";
    }, 5000);
  } else {
    window.setTimeout(() => {
      img.style.display = 'none'
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
  }
})