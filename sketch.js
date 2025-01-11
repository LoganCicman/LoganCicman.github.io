// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
  
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background(225);
    stroke('green');
    noFill();
    for(let i=0; i<12; i++){
      circle(400, 300, i*45+100);
    }
    stroke('black');
    fill('green');
    circle(400, 300, (hr%12)*45+100);
    noFill();
    stroke('blue');
    for(let j=15; j<60; j+=15){
      circle(400, 300, (j/60)*((hr%12)*45+100))
    }
    fill('blue');
    stroke('black');
    circle(400, 300, (min/60)*((hr%12)*45+100));
    fill('red');
    circle(400, 300, (sec/60)*((min/60)*((hr%12)*45+100)));
    if(sec == 0){
      print(min)
    }
}