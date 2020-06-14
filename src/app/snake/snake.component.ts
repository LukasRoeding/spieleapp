import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';



@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit {
  canvas: any;
  /** coordinates of the snake */
  x = 0;
  y = 0;
  /**direction in which the snake goes */
  xspeed = 1;
  yspeed = 0;
  /**variable for the size and speed of the snake */
  scl=20;
  /** coordinates of the "food" */
  a = Math.random();
  b = Math.random();
  /** how much food has been eaten */
  total = 0;
  /** array for saving the "tail" of the snake. the coordinates of the other rectangles get saved in here */
  tail = [];
  /** variable to store highscore */
  score = 0;

  constructor() {}
  /** clickevents for buttons when the site is viewed in mobile */
  up(){
    this.xspeed = 0;
    this.yspeed = -1;
    this.scl= 12;
  }
  down(){
    this.xspeed = 0;
    this.yspeed = 1;
    this.scl= 12;
  }
  left(){
    this.xspeed = -1;
    this.yspeed = 0;
    this.scl= 12;
  }
  right(){
    this.xspeed = 1;
    this.yspeed = 0;
    this.scl= 12;
  }
  ngOnInit() {
    //** creates the area in which the game is beeing played*/
    const sketch = s => {
      s.setup = () => {
        let canvas2 = s.createCanvas(s.windowHeight -300, s.windowHeight - 300);


        canvas2.parent('sketch-holder');
        

      
        s.background('white');
        s.frameRate(15);
        

      };
      /** all of these functions are getting called all the time*/
      s.draw = () => {
      
        s.update();
        s.show();
        s.keyPressed();
        s.food();
        s.eat();
        s.death();
        
        
      };
      /** if an arrowkey is pressed the direction of the snake changes */
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
        /** if a piece of food is eaten, then a new piece of food is created by assigning a and b new values.
         * total is increased, so a new rectangle will be created. when total reaches 10, the snake becomes larger and faster.
         */
        s.eat = () => {
          if (s.dist(this.x,this.y,(s.windowHeight - 300 - this.scl)*this.a,(s.windowHeight - 300 - this.scl)*this.b)<this.scl){
            
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
        /** creates the food rectangle at a random spot on the canvas */
        s.food = () => {

        s.rect((s.windowHeight - 300 - this.scl)*this.a,(s.windowHeight - 300 - this.scl)*this.b, this.scl, this.scl);
        s.fill("#00d68f");
      }
      /** if the distance between the x and y coordinates gets too small compared to a rectangle in the snake tail,
       *  total is set to zero and the tail gets setback aswell. The game basicly restarts, except for the position of the snake and
       *  the highscore */
      s.death = () => {
          for(var i = 0; i < this.tail.length;i++){
            if (s.dist(this.x, this.y, this.tail[i].x, this.tail[i].y)<5){
              this.total=0;
              this.tail=[];
              this.scl=20;
            }
          }
      }
      /** update() moves the snake and updates the tailarray when the total amount is increased. Also it updates the highscore accordingly.*/
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
     
      /** show shows the rectangles. With this function the head of the snake and its tail is created on the canvas.*/
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