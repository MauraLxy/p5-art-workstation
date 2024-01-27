let creature;
let denied=false;
function setup() {
  // create the canvas (1200px wide, 800px high)
  createCanvas(1200, 800);
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';

  // draw a border to help you see the size
  // this isn't compulsory (remove this code if you like)
  strokeWeight(5);
  rect(0, 0, width, height);
  creature = {
    bird: false,
    birdNumber: 0,
    fish: false,
    fishNumber: 0,
    flower: false,
    flowerNumber: 0,
    tree: false,
    treeNumber: 0,
    human: false,
    humanNumber: 0
  }
  //board
  strokeWeight(2);
  rectMode(CENTER);
  fill(96, 59, 42);
  rect(600,400,1000,600);
  //earth
  fill(40, 122, 184);
  circle(600,205,400);
  //continent
  fill(45,169,79);
  triangle(600,70,680,70,720,170);
  triangle(700,180,750,250,680,350)
  quad(470,250,  520,250,  540,300,  450,300)
  quad(570,70,  460,70, 410,180,  500,180)
  strokeWeight(1);
  line(400,205,800,205);
  strokeWeight(2);
}

function draw() {
  // your cool workstation code goes in this draw function
  //bird
  push();
  fill(220);
  bird(250,200);
  //button
  rect(250,250,100,40);
  stroke(0);
  textSize(20);
  if(creature.bird){
    fill(211, 194, 207);
    text('bird',230,255);
  }else{
    text('bird',230,255);
  }
  pop();
  
  //fish
  push();
  fill(220);
  fish(250,400);
  //button
  rect(250,450,100,40);
  stroke(0);
  textSize(20);
  if(creature.fish){
    fill(18, 219, 241);
    text('fish',230,455);
  }else{
    text('fish',230,455);
  }
  pop();
  
  //flower
  push();
  fill(220);
  flower(950,200);
  //button
  rect(950,250,100,40);
  stroke(0);
  textSize(20);
  if(creature.flower){
    fill(214, 119, 50);
    text('flower',925,255);
  }else{
    text('flower',925,255);
  }
  pop();

  //tree
  push();
  fill(220);
  tree(950,400);
  //button
  rect(950,450,100,40);
  stroke(0);
  textSize(20);
  if(creature.tree){
    fill(110, 190, 73);
    text('tree',935,455);
  }else{
    text('tree',935,455);
  }
  pop();
  
  //human
  push();
  fill(220);
  human(600,480);
  //button
  rect(600,550,100,40);
  stroke(0);
  textSize(20);
  if(creature.human){
    fill(245, 210, 13);
    text('human',570,555);
  }else{
    text('human',570,555);
  }
  pop();
  
  
  if(creature.birdNumber==1){
    dialog(101);
  }else if(creature.birdNumber==5){
    dialog(102);
  }else if(creature.birdNumber==10){
    dialog(103);
  }
  
  if(creature.fishNumber==1){
    dialog(201);
  }else if(creature.fishNumber==5){
    dialog(202);
  }else if(creature.fishNumber==10){
    dialog(203);
  }
  
  if(creature.flowerNumber==1){
    dialog(301);
  }else if(creature.flowerNumber==5){
    dialog(302);
  }else if(creature.flowerNumber==10){
    dialog(303);
  }
  
  if(creature.treeNumber==1){
    dialog(401);
  }else if(creature.treeNumber==5){
    dialog(402);
  }else if(creature.treeNumber==10){
    dialog(403);
  }
  
  if(creature.humanNumber==1){
    dialog(501);
  }else if(creature.humanNumber==5){
    dialog(502);
  }else if(creature.humanNumber==10){
    dialog(503);
  }
}

function dialog(x){
  push();
  fill(0);
  textSize(15);
  
  if(x==101){
    rect(250,310,380,70)
    fill(255,248,220);
    text('What could go wrong with a harmless bird?',100,300);
    text('So said Mr.Dinosaur.',100,320);
  }else if(x==102){
    rect(250,310,380,70)
    fill(255,248,220);
    text('Ever seen a wedge of white swans flying by?',100,300);
  }else if(x==103){
    rect(250,310,380,70)
    fill(255,248,220);
    text('Worms are not gonna be happy about this.',100,300);
    text('So are the cyclists.',100,320);
  }
  
  if(x==201){
    rect(250,510,380,70)
    fill(255,248,220);
    text('♫ Fishes, fishes, where are you? ♫',140,500);
  }else if(x==202){
    rect(250,510,380,70)
    fill(255,248,220);
    text('- What day of the week do all fish dislike the most?',75,500);
    text('- Fryday.',75,520);
  }else if(x==203){
    rect(250,510,380,70)
    fill(255, 248, 220);
    text('Nemo IS real.',200,500);
  }
  
  if(x==301){
    rect(950,310,380,70)
    fill(255,248,220);
    text('Do you know we have about 400k different flowers',780,300);
    text('in the world?',780,320);
  }else if(x==302){
    rect(950,310,380,70)
    fill(255,248,220);
    text('Howdy! Im Flowey! Flowey the Flower!',820,310);
  }else if(x==303){
    rect(950,310,380,70)
    fill(255,248,220);
    text('God is a Flower Child.',820,310);
  }
  
  if(x==401){
    rect(950,510,380,70)
    fill(255,248,220);
    text('Hurry, Newton is waiting.',880,510);
  }else if(x==402){
    rect(950,510,380,70)
    fill(255,248,220);
    text('- What happened to the wooden car with wooden wheels ',765,490);
    text('and a wooden engine?',775,510)
    text('- It wooden go.',765,530);
  }else if(x==403){
    rect(950,510,380,70)
    fill(255,248,220);
    text('The Kid will LOVE this.' ,880,510);
  }
  
  if(x==501){
    rect(600,610,380,70)
    fill(255,248,220);
    text('Trust me. You are making a big mistake.',470,610)
  }else if(x==502){
    rect(600,610,380,70)
    fill(255,248,220);
    text('You dont want to do this. Stop!',470,610)
  }else if(x==503){
    rect(600,610,380,70)
    fill(255,0,0);
    text('Oh-oh, something is out of control.',470,610);
    fill(0);
    circle(600,205,400);
    fill(255,0,0);
    textSize(60);
    text('ACCESS',480,195);
    text('DENIED',485,255);
    denied=true;
  }
  pop();
}

function bird(x,y){
  push();
  fill(255);
  circle(x,y,40);
  fill(233, 92, 32);
  triangle(x-40,y,x-20,y-10,x-20,y+10);
  fill(0);
  circle(x-10,y-7,5)
  fill(220);
  pop();
}

function fish(x,y){
  push();
  fill(19, 150, 201)
  quad(x-25,y,x-5,y+15,x+10,y,x-5,y-15);
  triangle(x+10,y,x+35,y-15,x+35,y+15);
  fill(0);
  circle(x-15,y,2);
  fill(220);
  pop();
}

function flower(x,y){
  push();
  fill(211, 146, 55)
  circle(x-12,y,15);
  circle(x-10,y-10,15);
  circle(x,y-12,15);
  circle(x+10,y-10,15);
  circle(x+12,y,15);
  circle(x-10,y+10,15);
  circle(x,y+12,15);
  circle(x+10,y+10,15);
  fill(255);
  circle(x,y,15);
  pop();
}

function tree(x,y){
  push();
  fill(128, 91, 80);
  rect(x,y,20,30);
  fill(138, 206, 49);
  circle(x,y-30,40);
  fill(230,0,0);
  circle(x+10,y-37,10)
  circle(x-10,y-30,10)
  circle(x+2,y-20,10)
  pop();
}

function human(x,y){
  push();
  fill(204, 171, 139);
  circle(x,y-10,20);
  line(x,y,x,y+20);
  line(x,y,x-10,y+10);
  line(x,y,x+10,y+10);
  pop();
}

function onEarth(x,y){
  if(dist(x,y,600,205)<=200){
    return true;
  }else{
    return false;
  }
}

function mousePressed(){
  if(!denied){
    //bird
    if(mouseX<=300 && mouseX>=200 && mouseY<=270 && mouseY>=230){
      creature.bird = true;
    }else if(creature.bird && onEarth(mouseX,mouseY)){
      bird(mouseX,mouseY);
      creature.birdNumber+=1;
      creature.bird = false;
    }else{
      creature.bird = false;
    }

    //fish
    if(mouseX<=300 && mouseX>=200 && mouseY<=470 && mouseY>=430){
      creature.fish = true;
    }else if(creature.fish && onEarth(mouseX,mouseY)){
      fish(mouseX,mouseY);
      creature.fishNumber+=1;
      creature.fish = false;
    }else{
      creature.fish = false;
    }

    //flower
    if(mouseX<=1000 && mouseX>=900 && mouseY<=270 && mouseY>=230){
      creature.flower = true;
    }else if(creature.flower && onEarth(mouseX,mouseY)){
      flower(mouseX,mouseY);
      creature.flowerNumber+=1;
      creature.flower = false;
    }else{
      creature.flower = false;
    }

    //tree
    if(mouseX<=1000 && mouseX>=900 && mouseY<=470 && mouseY>=430){
      creature.tree = true;
    }else if(creature.tree && onEarth(mouseX,mouseY)){
      tree(mouseX,mouseY);
      creature.treeNumber+=1;
      creature.tree = false;
    }else{
      creature.tree = false;
    }

    //human
    if(mouseX<=650 && mouseX>=550 && mouseY<=570 && mouseY>=530){
      creature.human = true;
    }else if(creature.human && onEarth(mouseX,mouseY)){
      human(mouseX,mouseY);
      creature.humanNumber+=1;
      creature.human = false;
    }else{
      creature.human = false;
    }
  }
}

// when you hit the spacebar, what's currently on the canvas will be saved (as a
// "thumbnail.png" file) to your downloads folder
function keyTyped() {
  if (key === " ") {
    saveCanvas("thumbnail.png");
  }
}
