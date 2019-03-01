import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {Document} from '../models/document';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) {}

  getSocketId() {
    this.socket.emit('getSocketId');
    return this.socket.fromEvent<string>('socketid');
  }

  sendMessage(msg: string) {
    this.socket.emit('msg', msg);
  }

  getMessage() {
    return this.socket.fromEvent<Document>('msg');
  }

  close() {
    this.socket.disconnect();
  }

}
