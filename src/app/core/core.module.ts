import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TableComponent } from "./table.component";
import { FormComponent } from "./form.component";
import { SharedState, SHARED_STATE } from "./sharedState.model";
import { MessageModule } from "../messages/message.module";
import { MessageService } from "../messages/message.service";
import { Message } from "../messages/message.model";
import { Model } from "../model/repository.model";
import { MODES } from "./sharedState.model";
import { Subject } from "rxjs";
import { StatePipe } from "./state.pipe";
import { RouterModule } from "@angular/router";
import { ProductCountComponent } from "./productCount.component";
import { NotFoundComponent } from "./notFound.component";
import { CategoryCountComponent } from "./categoryCount.component";




@NgModule({
    imports: [BrowserModule, FormsModule, ModelModule, MessageModule, RouterModule],
    declarations: [TableComponent, FormComponent, StatePipe, ProductCountComponent, CategoryCountComponent, NotFoundComponent],
    
    exports: [ModelModule, TableComponent, FormComponent],
    // providers: [{
    //     provide: SHARED_STATE,
    //     deps: [MessageService, Model],
    //     useFactory: (messageService:any, model:any) => {
    //         return new Subject<SharedState>();
            // let subject = new Subject<SharedState>();
            // subject.subscribe(m => messageService.reportMessage(
            //         new Message(MODES[m.mode] + (m.id != undefined
            //             ? ` ${model.getProduct(m.id).name}` : "")))
            //     );
    //         // return subject;
    //     }
    // }]
})

export class CoreModule {}