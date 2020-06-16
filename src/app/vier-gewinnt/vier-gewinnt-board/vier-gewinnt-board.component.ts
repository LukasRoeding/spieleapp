import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vier-gewinnt-board',
  templateUrl: './vier-gewinnt-board.component.html',
  styleUrls: ['./vier-gewinnt-board.component.scss']
})
export class VierGewinntBoardComponent implements OnInit {

  squares: any[];
  xIsNext: boolean;
  winner: string;
  spieler: boolean;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }
  /** starts a new game / resets the board. A connect-four game has 42(6*7) squares which can be filled. 
   * Each element in the squares array represents a square**/
  newGame(){
    this.squares = Array(42).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.spieler = true;
  }
  /** gets the current player, if spieler is true Grün is returned, otherwise Blau is beeing returned**/
  get player(){
    return this.spieler ? 'Grün' : 'Blau';
  }
  /** since some of the code from the tic-tac-toe game is beeing recycled, 
   * the player() function is still in this code, just under the name player2() */
  get player2(){
    return this.xIsNext ? 'X' : 'O';
  }
  /** if a square has no value and its beeing clicked(makeMove) the lowest square in the collum is getting filled.**/
  makeMove(idx: number){
    if (!this.squares[idx+35] && idx < 7){
      this.squares.splice(idx+35,1,this.player2);
      this.xIsNext = !this.xIsNext;
      this.spieler = !this.spieler;}
    else if(!this.squares[idx+28] && idx < 14){
      this.squares.splice(idx+28,1,this.player2);
      this.xIsNext = !this.xIsNext;
      this.spieler = !this.spieler;}
      else if(!this.squares[idx+21] && idx < 21){
        this.squares.splice(idx+21,1,this.player2);
        this.xIsNext = !this.xIsNext;
        this.spieler = !this.spieler;}
        else if(!this.squares[idx+14] && idx < 28){
          this.squares.splice(idx+14,1,this.player2);
          this.xIsNext = !this.xIsNext;
          this.spieler = !this.spieler;}
          else if(!this.squares[idx+7] && idx < 35){
            this.squares.splice(idx+7,1,this.player2);
            this.xIsNext = !this.xIsNext;
            this.spieler = !this.spieler;}
            else if(!this.squares[idx] && idx < 43){
              this.squares.splice(idx,1,this.player2);
              this.xIsNext = !this.xIsNext;
              this.spieler = !this.spieler;}
      
    
    
    this.winner = this.calculateWinner();
  }
  calculateWinner() {
    /** just like the tic tac toe game this function checks if a winner is found after a move has been made.
     * lines stores all the possible ways 4 pieces can be placed to get a wincondition inside the array squares.**/
    const lines = [
      [0,1,2,3],[1,2,3,4],[2,3,4,5],[3,4,5,6],
      [7,8,9,10],[8,9,10,11],[9,10,11,12],[10,11,12,13],
      [14,15,16,17],[15,16,17,18],[16,17,18,19],[17,18,19,20],
      [21,22,23,24],[22,23,24,25],[23,24,25,26],[24,25,26,27],
      [28,29,30,31],[29,30,31,32],[30,31,32,33],[31,32,33,34],
      [35,36,37,38],[36,37,38,39],[37,38,39,40],[38,39,40,41],
      [0,7,14,21],[1,8,15,22],[2,9,16,23],[3,10,17,24],[4,11,18,25],[5,12,19,26],[6,13,20,27],
      [7,14,21,28],[8,15,22,29],[9,16,23,30],[10,17,24,31],[11,18,25,32],[12,19,26,33],[13,20,27,34],
      [14,21,28,35],[15,22,29,36],[16,23,30,37],[17,24,31,38],[18,25,32,39],[19,26,33,40],[20,33,40,41],
      [3, 9, 15, 21],[4, 10, 16, 22],[5, 11, 17, 23],[6, 12, 18, 24],
      [10, 16, 22, 29],[11, 17, 23, 29],[12, 18, 24, 30],[13, 19, 25, 31],
      [17, 23, 29, 35],[18, 24, 30, 36],[19, 25, 31, 37],[20, 26, 32, 38],
      [0, 8, 16, 24],[1, 9, 17, 25],[2, 10, 18, 26],[3, 11, 19, 27],
      [7, 15, 23, 31],[8, 16, 24, 32],[9, 17, 25, 33],[10, 18, 26, 34],
      [14, 22, 30, 38],[15, 23, 31, 39],[16, 24, 32, 40],[17, 25, 33, 31],
    ];
    /** squares collored green have an invisible X in them**/
    /** if the array has X at the indices of lines[] Grün is returned as the winner*/
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c] &&
        this.squares[a] === this.squares[d] &&
        this.squares[a] === 'X'

      ) {
        return 'Grün';
      /** squares collored blue have an invisible X in them
       * if the array has O at the indices of lines[] Grün is returned as the winner**/
      } else if (        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c] &&
        this.squares[a] === this.squares[d] &&
        this.squares[a] === 'O')
    {
    return 'Blau';
  }
}
    return null;
  }

}
