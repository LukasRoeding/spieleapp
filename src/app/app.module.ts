import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { HomeComponent } from './home/home.component';
import { VierGewinntComponent } from './vier-gewinnt/vier-gewinnt.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbContextMenuModule, NbActionsModule, NbButtonModule, NbAccordionModule, NbMenuModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavComponent } from './nav/nav.component';
import { BoardComponent } from './tic-tac-toe/board/board.component';
import { SquareComponent } from './tic-tac-toe/square/square.component';
import { VierGewinntBoardComponent } from './vier-gewinnt/vier-gewinnt-board/vier-gewinnt-board.component';
import { VierGewinntSquareComponent } from './vier-gewinnt/vier-gewinnt-square/vier-gewinnt-square.component';
import { SnakeComponent } from './snake/snake.component';
import { PaintComponent } from './paint/paint.component';

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent,
    HomeComponent,
    VierGewinntComponent,
    NavComponent,
    BoardComponent,
    SquareComponent,
    VierGewinntBoardComponent,
    VierGewinntSquareComponent,
    SnakeComponent,
    PaintComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbContextMenuModule,
    NbActionsModule,
    NbButtonModule,
    NbAccordionModule,
    NbMenuModule,
    NbCardModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
