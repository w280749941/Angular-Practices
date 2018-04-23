import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WebSocketService {

  ws: WebSocket;

  constructor() { }

  createObservableSocket(url: string): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable(
      observer => {
        // Send data when there is an incoming message
        this.ws.onmessage = event => observer.next(event.data);
        // Send error when there is an error
        this.ws.onerror = event => observer.error(event);
        // Send complete signal when socket is closed.
        this.ws.onclose = event => observer.complete();
      }
    );
  }

  sendMessage(message: string) {
    this.ws.send(message);
  }

}
