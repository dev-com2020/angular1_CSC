import { Injectable } from "@angular/core";
import { Product } from "./product.model";
// import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";


@Injectable()
export class Model{
    private products: Product[] = new Array<Product>();
    private locator = (p: Product, id: number) => p.id === id;

    constructor(private dataSource: RestDataSource){
        // this.products = new Array<Product>();
        // this.dataSource.getData().forEach(p => this.products.push(p));
        this.dataSource.getData().subscribe(data => this.products = data);
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        return this.products.filter(p => this.locator(p,id))[0];

    }

    saveProduct(product: Product){
        if (product.id === 0 || product.id === undefined){
            product.id = this.generateID();
            this.products.push(product);
        }else{
            let index = this.products.findIndex(p => this.locator(p, product.id));
            this.products.splice(index, 1, product);
        }
    }

    deleteProduct(id: number){
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1){
            this.products.splice(index,1);
        }
    }

    private generateID(): number{
        let candidate = 100;
        while (this.getProduct(candidate) !== undefined){
            candidate++;
        }
        return candidate;
    }


}