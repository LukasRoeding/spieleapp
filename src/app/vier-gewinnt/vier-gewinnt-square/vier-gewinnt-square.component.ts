import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vier-gewinnt-square',
  templateUrl: './vier-gewinnt-square.component.html',
  styleUrls: ['./vier-gewinnt-square.component.scss']
})
export class VierGewinntSquareComponent implements OnInit {
  @Input() value: 'X' | 'O';

  constructor() { }

  ngOnInit(): void {
  }

}
