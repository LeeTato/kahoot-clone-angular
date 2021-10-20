import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule } from 'ngx-socket-io';
import { SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyPageComponent } from './pages/lobby-page/lobby-page.component';
import { QuestionBoardPageComponent } from './pages/question-board-page/question-board-page.component';
import { LeaderBoardPageComponent } from './pages/leader-board-page/leader-board-page.component';
import { FormsModule } from '@angular/forms';
import { QuizzesComponent } from './pages/quizzes/quizzes.component';

const config: SocketIoConfig = {url: 'http://localhost:3000', options:{}};

@NgModule({
  declarations: [
    AppComponent,
    LobbyPageComponent,
    QuestionBoardPageComponent,
    LeaderBoardPageComponent,
    QuizzesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
