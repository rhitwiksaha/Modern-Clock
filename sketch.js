let Monoton;
let Notable;
let months;
let days;

function preload() {
  Monoton = loadFont('Monoton/Monoton-Regular.ttf');
  // Notable = loadFont('Notable/Notable-Regular.ttf')
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  months = new Array(13);
  months[1] = "JAN";
  months[2] = "FEB";
  months[3] = "MAR";
  months[4] = "APR";
  months[5] = "MAY";
  months[6] = "JUN";
  months[7] = "JUL";
  months[8] = "AUG";
  months[9] = "SEP";
  months[10] = "OCT";
  months[11] = "NOV";
  months[12] = "DEC";

  days  = new Array(8);
  days[0] = "SUN";
  days[1] = "MON";
  days[2] = "TUE";
  days[3] = "WED";
  days[4] = "THU";
  days[5] = "FRI";
  days[6] = "SAT";

}

function draw() {
  background(0,0,0);
  let h = hour();
  let m = minute();
  let s = second();
  let da = day();
  let mo = month();
  let yr = year();
  let date_v = new Date();
  let wday = date_v.getDay();
  let wid = window.innerWidth;
  let hig = window.innerHeight;


  strokeWeight(6);
  noFill();
  stroke(255,112,197);
  arc(wid/2, hig/2, 300, 300, 3*PI/2, 3*PI/2 + s*PI/30, OPEN);
  stroke(57,255,20);
  arc(wid/2, hig/2, 260, 260, 3*PI/2, 3*PI/2 + m*PI/30, OPEN);
  stroke(156,38,255);
  arc(wid/2, hig/2, 220, 220, 3*PI/2, 3*PI/2 + h*PI/6, OPEN);

  fill(255, 123, 25).strokeWeight(0).textSize(50);
  textFont(Monoton);
  textAlign("center");

  if(h<10)
    h = '0' + h;
  if(m<10)
    m = '0' + m;
  if(s<10)
    s = '0' + s;
  if(da<10)
    da = '0' + da;
  
  text(h + ':' + m, wid/2, hig/2 - 15);
  textSize(80);
  text(s, wid/2, hig/2+65);

  textSize(20);
  text(da + '   ' + months[mo], wid/2, hig/2 - 70);

  textSize(20);
  text(days[wday], wid/2, hig/2 + 90);

}
