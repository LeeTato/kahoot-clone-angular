import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { IPlayer } from '../../../../../shared/models/players.model'

@Component({
  selector: 'app-leader-board-page',
  templateUrl: './leader-board-page.component.html',
  styleUrls: ['./leader-board-page.component.scss']
})
export class LeaderBoardPageComponent implements OnInit {
  gamePlayer:null | IPlayer = null
  constructor(private socket:Socket) {}


  ngOnInit(): void {
    this.socket.emit('request-gamePlayers')
    this.socket.on('allPlayer-data',(gamePlayer:any)=>{
      console.log(gamePlayer)
      this.gamePlayer = gamePlayer;} )


  }



}
