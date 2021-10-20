import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderBoardPageComponent } from './pages/leader-board-page/leader-board-page.component';
import { LobbyPageComponent } from './pages/lobby-page/lobby-page.component';
import { QuestionBoardPageComponent } from './pages/question-board-page/question-board-page.component';
import { QuizzesComponent } from './pages/quizzes/quizzes.component';

const routes: Routes = [
  {path:'question-page',component:QuestionBoardPageComponent},
  {path:'leader-board', component:LeaderBoardPageComponent},
  {path:'lobby', component:LobbyPageComponent},
  {path:'quizzes', component:QuizzesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
