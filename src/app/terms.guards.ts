import { Injectable } from "@angular/core";
import { MessageService } from "./messages/message.service";
import { Router } from "@angular/router";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Message } from "./messages/message.model";





@Injectable()
export class TermsGuard {
    constructor(private messages: MessageService,
        private router: Router){}



    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Promise<boolean> | boolean {
        if (route.params["mode"] == "create"){
            return new Promise<boolean>((resolve, reject) => {
                let responses: [string, (arg0: string)=> void][] 
                = [["Tak", () => resolve(true)], 
                  ["Nie", () => resolve(false)]
                ];
                this.messages.reportMessage(
                    new Message("Akceptujesz warunki?",
                    false, responses));
            });
        } else {
            return true;
    }
}
canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
Promise<boolean> | boolean {
    if (route.url.length > 0 && route.url[route.url.length - 1].path == "categories"){
        return new Promise<boolean>((resolve, reject) => {
            let responses: [string, (arg0: string)=> void][] = [ 
              ["Tak", () => resolve(true)], 
              ["Nie", () => resolve(false)]
            ];
            this.messages.reportMessage(
                new Message("Czy chcesz wyświetlić liczbę kategorii?",
                false, responses));
        });
    } else {
        return true;
}
}

}