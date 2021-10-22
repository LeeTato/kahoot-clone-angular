import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  public message = '';
  public username = '';
  public name = '';
  public quizzes: any[] = [];
  public players: any[] = [];
  public questions: any[] = [];
  public data:any[]=[];
  constructor(private socket: Socket, private router: Router) {
    this.socket.on('connect', () => {});
    this.router.navigate(['/']);
    this.socket.on('not unique nickName', (message: string) => {
      this.message = message;
    }),
      this.socket.on('route', (url: string) => {
        this.router.navigate([url]);
        console.log('route', url);
      });

    this.socket.on('Send quizzes', (quizzes: any) => (this.quizzes = quizzes));
    this.socket.emit('get quizzes');

    this.socket.on(
      'players-ready',
      (username: string) => (this.username = username)
    );
    this.socket.on('add name', (players: any) => (this.players = players));
    this.socket.on('player added name',(players:any)=>{this.players=players});

  

  }

  selectQuiz(quizz: any) {
    this.socket.emit('select quiz', quizz);
  }



}
