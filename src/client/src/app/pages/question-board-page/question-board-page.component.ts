import { Component, Input, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Questions } from '../../../../../shared/models/questions.model'
@Component({
  selector: 'app-question-board-page',
  templateUrl: './question-board-page.component.html',
  styleUrls: ['./question-board-page.component.scss']
})
export class QuestionBoardPageComponent implements OnInit {
question:null | Questions = null;
@Input()
answer= ''
  constructor(private socket:Socket) { }

  ngOnInit(): void {
    this.socket.emit('request-question')
    this.socket.on('data-question',(question:any)=>{
      console.log(question)
      this.question=question;
      // this.socket.emit("everyone-answered", question)

  }
    )
  }

}
