import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-lobby-page',
  templateUrl: './lobby-page.component.html',
  styleUrls: ['./lobby-page.component.scss']
})
export class LobbyPageComponent implements OnInit {

  constructor(private sockets:SocketService, private socket:Socket) { }

  ngOnInit(): void {
  }

  get players(){
    return this.sockets.players
  }

    addPlayer(name:string){
      this.socket.emit('add name', name)
      }

      goToQuiz(){
        this.socket.emit('go-to-quiz')
      }

}
