'use script';

const troll1 = document.getElementById('btn1');
const troll2 = document.getElementById('btn2');

troll1.addEventListener('mouseover', function () {
  mouseOver1();
});

troll1.addEventListener('mouseout', function () {
  mouseOut1();
});

function mouseOver1() {
  document.getElementById('card').style.right = '150px';
  document.getElementById('card').style.top = '150px';
  document.getElementById('card').style.left = '150px';
  document.getElementById('card').style.bottom = '150px';
  console.log(5);
}

function mouseOut1() {
  document.getElementById('card').style.right = '1px';
  document.getElementById('card').style.top = '1px';
  document.getElementById('card').style.left = '1px';
  document.getElementById('card').style.bottom = '1px';
  console.log(5);
}

troll2.addEventListener('mouseover', function () {
  mouseOver2();
});

troll2.addEventListener('mouseout', function () {
  mouseOut2();
});

function mouseOver2() {
  document.getElementById('card').style.top = '1000px';
  console.log(5);
}

function mouseOut2() {
  document.getElementById('card').style.top = '1px';
  console.log(5);
}
