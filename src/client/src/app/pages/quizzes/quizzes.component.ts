import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss'],
})
export class QuizzesComponent implements OnInit {
  constructor(private socket: SocketService) {
    console.log(this.socket.quizzes);
  }

  ngOnInit(): void {}

  get quizzes() {
    return this.socket.quizzes;
  }
  selectQuiz(quizz:any) {
    this.socket.selectQuiz(quizz);
  }
}
