import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VierGewinntComponent } from './vier-gewinnt/vier-gewinnt.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { SnakeComponent } from './snake/snake.component';
import { PaintComponent } from './paint/paint.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tic-tac-toe', component: TicTacToeComponent},
  {path: 'vier-gewinnt', component: VierGewinntComponent},
  {path: 'vier-gewinnt', component: VierGewinntComponent},
  {path: 'snake', component: SnakeComponent},
  {path: 'maze', component: PaintComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
