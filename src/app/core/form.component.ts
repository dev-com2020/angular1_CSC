import { Component,Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model"
import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

// import { filter, map, distinctUntilChanged, skipWhile } from "rxjs/operators"



@Component({
    selector: "paForm",
    templateUrl: "form.component.html",
    styleUrls: ["form.component.css"]
})
export class FormComponent {
    product: Product = new Product(0);
    originalProduct = new Product(0);
    // lastId: number;

    constructor(public model: Model, activeRoute: ActivatedRoute, private router: Router){
        activeRoute.params.subscribe(params => {
            this.editing = params["mode"] == "edit";
            let id = params["id"];

           
        // this.editing = activeRoute.snapshot.params["mode"] == "edit";

        // let id = activeRoute.snapshot.params["id"];
        
        if (id != undefined){
        //     let name = activeRoute.snapshot.params["name"];
        //     let category = activeRoute.snapshot.params["category"];
        //     let price = activeRoute.snapshot.params["price"];

        // if (name != undefined && category !=undefined && price !=undefined){
        //     this.product.id = id;
        //     this.product.name = name;
        //     this.product.category = category;
        //     this.product.price = Number.parseFloat(price);
        // }
            Object.assign(this.product, model.getProduct(id) || new Product(0));
            Object.assign(this.originalProduct, this.product);

        }
    })
}


    editing: boolean = false;

     submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            this.originalProduct = this.product;
            // this.product = new Product(0);
            // form.reset();
            this.router.navigateByUrl("/");
        }
    }

    // resetForm() {
    //     this.product = new Product(0);
    // }

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
