let points= 200
let radius
let factor = 0
function setup(){
  createCanvas(600, 600)
  radius = width / 2 - 15
}

function findPoints(num){
  let angle = map(num, 0, points, 0, PI * 2)
  let x = radius * cos(angle - PI)
  let y = radius * sin(angle - PI)
  let vec = createVector(x, y)
  return vec
}
function draw() {
  background(0);
  factor += 0.009
  translate(width / 2, height / 2);
  stroke(23,255,98)
  strokeWeight(1)
  noFill()
  circle(0, 0, radius * 2)

  for(let i = 0; i < points; i++){
    let a = findPoints(i)
    let b = findPoints(i * factor)
    line(a.x, a.y, b.x, b.y)
  }

}
