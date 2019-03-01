import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentComponent } from './components/document/document.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {ChatService} from './services/chat.service';
import { OrderRegisterComponent } from './components/order-register/order-register.component';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    OrderRegisterComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
