import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() { }

  ngOnInit() {
  /** a new game is started */
    this.newGame();
  }
  /** resets the game. squares stores the 9 squares that the tic-tac-toe board has.  **/
  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }
  /** if xIsNext is true, then its X turn, if it is false, then it is O turn. **/
  get player(){
    return this.xIsNext ? 'X' : 'O';
  }
  /** wenn ein Feld noch nicht belegt ist, wird X / O eingefügt
  der nächste Spieler ist dann am Zug **/
  makeMove(idx: number){
    if (!this.squares[idx]){
      /** if a square is clicked the corresponding value in the array gets changed with X or O. 
       * After that the current player swaps.*/
      this.squares.splice(idx,1,this.player);
      this.xIsNext = !this.xIsNext;

    }
    /** checks if a winner has been found after the move has been made. */
    this.winner = this.calculateWinner();
  }
  calculateWinner() {
    /** lines has all the different rows, collums and diagonals in which a player has won **/
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    /** this loop checks the squares array, if a player has met any of the winconditions. **/
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

}
