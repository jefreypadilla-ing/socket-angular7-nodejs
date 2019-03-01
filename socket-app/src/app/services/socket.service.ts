import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  ordersRegister = this.socket.fromEvent<any>('test');

  constructor(private socket: Socket) { }

  getSocketId() {
    this.socket.emit('getSocketId');
    return this.socket.fromEvent<string>('socketid');
  }

  emitMessate() {
    this.socket.emit('msg', { id: 1, value: 'This is working' });
  }

}
