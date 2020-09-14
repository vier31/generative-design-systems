const ITEM_SIZE = 500;
const SIDES = 6;

let PALETTE = [];

function setup() {
  createCanvas(530, 530, SVG)

  PALETTE = [
    color(255, 52, 154),
    color(4, 0, 152)
  ];

  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function guides() {
  noFill()
  stroke(PALETTE[0])
  push()
  translate(width / 2, height / 2)
  ellipse(0, 0, ITEM_SIZE, ITEM_SIZE)

  stroke(PALETTE[1])
  const angle = 360 / SIDES
  for (let i = 0; i < SIDES; i++) {
    line(0, 0, 0, ITEM_SIZE / 2)
    rotate(angle)
  }
  pop()
}

function draw() {
  guides()
}