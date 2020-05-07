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
    this.newGame();
  }
  /** initialisiert das Spiel **/
  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }
  /** wenn X am Zug ist, ist O als nächstes dran, wenn nicht ist X als nächstes dran **/
  get player(){
    return this.xIsNext ? 'X' : 'O';
  }
  /** wenn ein Feld noch nicht belegt ist, wird X / O eingefügt
  der nächste Spieler ist dann am Zug **/
  makeMove(idx: number){
    if (!this.squares[idx]){
      this.squares.splice(idx,1,this.player);
      this.xIsNext = !this.xIsNext;

    }
    this.winner = this.calculateWinner();
  }
  calculateWinner() {
    /** Alle möglichen Boardstates, bei denen man gewonnen hat **/
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
    /** überprüft ob einer dieser Boardstates erreicht wurde **/
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
