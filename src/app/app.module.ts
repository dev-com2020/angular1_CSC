import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { ModelModule } from "./model/model.module";
import { CoreModule } from "./core/core.module";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { MessageModule } from "./messages/message.module";
import { MessageComponent } from "./messages/message.component";
import { registerLocaleData } from '@angular/common';
import localePL from '@angular/common/locales/pl';
import { routing } from "./app.routing";
import { TermsGuard } from "./terms.guards";
registerLocaleData(localePL);

@NgModule({
    imports: [BrowserModule, ModelModule, CoreModule, MessageModule, routing],
    declarations: [AppComponent],
    providers:[TermsGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
