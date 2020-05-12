import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';



@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit {
  canvas: any;
  x = 0;
  y = 0;
  xspeed = 1;
  yspeed = 0;
  scl=20;
  a = Math.random();
  b = Math.random();
  total = 0;
  tail = [];
  score = 0;

  constructor() {}
  up(){
    this.xspeed = 0;
    this.yspeed = -1;
  }
  down(){
    this.xspeed = 0;
    this.yspeed = 1;
  }
  left(){
    this.xspeed = -1;
    this.yspeed = 0;
  }
  right(){
    this.xspeed = 1;
    this.yspeed = 0;
  }
  ngOnInit() {
    // this sketch was modified from the original
    // https://editor.p5js.org/Janglee123/sketches/HJ2RnrQzN
    const sketch = s => {
      s.setup = () => {
        let canvas2 = s.createCanvas(s.windowHeight -300, s.windowHeight - 300);

        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');
        

      
        s.background('white');
        s.frameRate(15);
        

      };

      s.draw = () => {
      
        s.update();
        s.show();
        s.keyPressed();
        s.food();
        s.eat();
        s.death();
        
        
      };
      s.keyPressed = () => {
        if (s.keyCode === s.UP_ARROW){
          this.xspeed = 0;
          this.yspeed = -1;}
          else if ( s.keyCode === s.DOWN_ARROW){
            this.xspeed = 0;
            this.yspeed = 1;}
            else if ( s.keyCode === s.RIGHT_ARROW){
              this.xspeed = 1;
              this.yspeed = 0;}
              else if ( s.keyCode === s.LEFT_ARROW){
                this.xspeed = -1;
                this.yspeed = 0;}
        };
        s.eat = () => {
          if (s.dist(this.x,this.y,(s.windowHeight - 320)*this.a,(s.windowHeight - 320)*this.b)<this.scl){
            
            this.a=Math.random();
            this.b = Math.random();
            this.total++;
            if(this.total == 10){
              this.scl=this.scl+10;
            }
            
          }else{
            return false;
          }

        }

        s.food = () => {

        s.rect((s.windowHeight - 320)*this.a,(s.windowHeight - 320)*this.b, this.scl, this.scl);
        s.fill("#00d68f");
      }

      s.death = () => {
          for(var i = 0; i < this.tail.length;i++){
            if (s.dist(this.x, this.y, this.tail[i].x, this.tail[i].y)<20){
              this.total=0;
              this.tail=[];
              this.scl=20;
            }
          }
      }

      s.update = () => {
        for(var i = 0; i <this.tail.length-1; i++){
          this.tail[i]= this.tail[i+1];  
        }
        this.tail[this.total-1] = s.createVector(this.x,this.y);

        this.x = this.x + this.xspeed*this.scl;
        this.y = this.y + this.yspeed*this.scl;
        this.x = s.constrain(this.x,0,s.width-this.scl);
        this.y = s.constrain(this.y,0,s.width-this.scl);
        s.background('#323259');
        if(this.total > this.score){
          this.score = this.total;
        }
      }
     
      
      s.show = () => {
        for (var i = 0; i < this.total; i++){
          s.rect(this.tail[i].x, this.tail[i].y, this.scl, this.scl);
        }


          s.rect(this.x, this.y, this.scl, this.scl);

        

      }
      

      
    };

    this.canvas = new p5(sketch);

  }
}