import { Component,Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model"
import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
// import { filter, map, distinctUntilChanged, skipWhile } from "rxjs/operators"



@Component({
    selector: "paForm",
    templateUrl: "form.component.html",
    styleUrls: ["form.component.css"]
})
export class FormComponent {
    product: Product = new Product(0);
    // lastId: number;

    constructor(private model: Model, activeRoute: ActivatedRoute){
        this.editing = activeRoute.snapshot.url[1].path == "edit";
    }


    editing: boolean = false;

     submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            this.product = new Product(0);
            form.reset();
        }
    }

    resetForm() {
        this.product = new Product(0);
    }

    // ngDoCheck(){
    //     if (this.lastId != this.state.id){
    //         this.product = new Product();
    //         if (this.state.mode == MODES.EDIT){
    //             Object.assign(this.product, this.model.getProduct(this.state.id));
    //         }
    //         this.lastId = this.state.id;
    //     }
    // }
}
