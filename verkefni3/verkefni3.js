function geimflaug(name,speed,life){
  this.name=name;
  this.speed=speed;
  this.life=life;
}
var f1 = new geimflaug("Planet Express",1000000,10);
var f2 = new geimflaug("Voyager",10000,10);
var f3 = new geimflaug("Millenium Falcon",100000,10);

geimflaug.prototype.fly=function(){
  this.speed+=1;
}

class spaceShip {
  constructor(name,speed){
    this.name=name;
    this.speed=speed;
    this.life=10;
  }
  fly(){
    this.speed+=1;
  }
}
const f4 = new spaceShip("Serenity",1000);
