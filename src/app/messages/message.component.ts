import { Component } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";
import { filter, Observable } from "rxjs";
import { NavigationCancel, NavigationEnd, Router } from "@angular/router";

@Component({
    selector: "paMessages",
    templateUrl: "message.component.html",
})
export class MessageComponent {
    lastMessage: Message | undefined;

    constructor(messageService: MessageService, router: Router) {
        messageService.messages.subscribe(m => this.lastMessage = m);
        router.events
        .pipe(filter(e=> e instanceof NavigationEnd || e instanceof NavigationCancel))
        .subscribe(e => { this.lastMessage = undefined;});
    }
}
