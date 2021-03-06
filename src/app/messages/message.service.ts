import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Message } from "./message.model";


@Injectable()
export class MessageService {
    private subject = new Subject<Message>();

    reportMessage(msg: Message) {
        this.subject.next(msg);
    }
    
   get messages(): Observable<Message>{
       return this.subject;
   }
}
