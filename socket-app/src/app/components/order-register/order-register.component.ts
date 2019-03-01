import { Component, OnInit, OnDestroy } from '@angular/core';
import {SocketService} from '../../services/socket.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-order-register',
  templateUrl: './order-register.component.html',
  styleUrls: ['./order-register.component.scss']
})
export class OrderRegisterComponent implements OnInit, OnDestroy {

  orderSubscription: Subscription;
  socketid: string;
  orders: any;

  constructor(private ss: SocketService) { }

  ngOnInit() {

    this.ss.getSocketId()
      .subscribe(id => { this.socketid = id; console.log('SocketId: ' + this.socketid); }); // getSocketId

    this.registerOrder(); //test

    this.orderSubscription = this.ss.ordersRegister
      .subscribe(orders => this.orders = orders); // Waiting for order registers

  }

  ngOnDestroy() {
    this.orderSubscription.unsubscribe();
  }

  registerOrder() {
    console.log('loading orders');
  }

  emitMessage() {
    console.log('Emit message');
    this.ss.emitMessate();
  }

}
