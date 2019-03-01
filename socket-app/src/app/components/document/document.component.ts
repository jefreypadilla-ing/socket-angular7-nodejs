import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  socketSubscription: Subscription;
  socketid: string;

  constructor(private cs: ChatService) { }

  ngOnInit() {
    this.socketSubscription = this.cs.getSocketId().subscribe(x => { console.log('socketid: ' + x ); this.socketid = x; });
    this.cs.sendMessage('Hello Bro!');
  }

  /*
  newDocument() {
    this.socket.emit('addDoc', { id: this.docId(), doc: '' });
  }*/

  getResponse() {
    this.cs.getMessage();
  }

}
