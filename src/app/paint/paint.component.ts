import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss']
})
export class PaintComponent implements OnInit {
  canvas3: any;
  /** coordinates of the rectangle */
  x = 0;
  y = 0;
  /** direction in which the rectangle moves */
  xspeed = 1;
  yspeed = 0;
  scl=20;
  winner: string;

  constructor() {}
  /** clickevent controllbuttons for mobile */
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

    this.winner = null;
    const sketch = s => {
      s.setup = () => {
        let canvas4 = s.createCanvas(340,260);


        canvas4.parent('maze-holder');
        

      
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
        s.start();
        
      };
      /** if an arrowkey is pressed the direction of the rectangle changes accordingly */
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
        /** creates all the walls of the maze */
        s.start = () => {

            for(var i = 0; i < 10; i++){
              s.rect(i*this.scl,this.scl, this.scl, this.scl);
              s.rect((i+2)*this.scl,80, this.scl, this.scl);
              
              
            }
            for(var i = 0; i < 4; i++){
              s.rect(240,i*this.scl, this.scl, this.scl);
            }
            for(var i = 0; i < 12; i++){
              s.rect(300,i*this.scl, this.scl, this.scl);
              s.rect(i*this.scl,140, this.scl, this.scl);
            }
            for(var i = 0; i < 15; i++){
              s.rect(i*this.scl,220, this.scl, this.scl);
            }



        }
        /** if the "food" at the end of the maze is beeing eaten, then "Gewonnen" will be displayed */
        s.eat = () => {
          if (s.dist(this.x,this.y,0,180)<this.scl){
            

            this.winner = "Gewonnen";
            
          }else{
            return false;
          }

        }
        /** position of the food at the end of the maze */
        s.food = () => {

        s.rect(0,180, this.scl, this.scl, 55);
        s.fill("#00d68f");

      }
      /** if the rectangle collides with any of the walls, the game resets */
      s.death = () => {

          for(var i = 0; i < 10; i++){

            if (s.dist(this.x, this.y, i*this.scl, this.scl)<20){

              this.scl=20;
              this.x = 0;
              this.y = 0;

            }else if(s.dist(this.x, this.y, (i+2)*this.scl, 80)<20){

              this.scl=20;

              this.x = 0;
              this.y = 0;

            }
            
          }
          for(var i = 0; i < 4; i++){
            if (s.dist(this.x, this.y, 240, i*this.scl)<20){

              this.scl=20;

              this.x = 0;
              this.y = 0;

            }     
          }

          for(var i = 0; i < 12; i++){
            if (s.dist(this.x, this.y, 300, i*this.scl)<20){

              this.scl=20;

              this.x = 0;
              this.y = 0;

            }  }  
            for(var i = 0; i < 12; i++){ 
            
            if (s.dist(this.x, this.y, i*this.scl, 140)<20){

              this.scl=20;

              this.x = 0;
              this.y = 0;

            }  
          }
          for(var i = 0; i < 15; i++){
            if (s.dist(this.x, this.y, i*this.scl, 220)<20){

              this.scl=20;

              this.x = 0;
              this.y = 0;

            } 

          }
      }
      /** updates the position of the rectangle */
      s.update = () => {
        

        this.x = this.x + this.xspeed*this.scl;
        this.y = this.y + this.yspeed*this.scl;
        this.x = s.constrain(this.x,0,s.width-this.scl);
        this.y = s.constrain(this.y,0,s.width-this.scl);
        s.background('#323259');
        
      }
     
      /** shows where the rectangle is */
      s.show = () => {
        


          s.rect(this.x, this.y, this.scl, this.scl);

        

      }

    };

    this.canvas3 = new p5(sketch);
  }
  /** resets the game */
  newGame(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.winner = null;

  }
}