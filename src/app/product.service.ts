import { Injectable } from '@angular/core';
import {IProduct} from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: IProduct[] = [
    {
      id: 1,
      name: 'sp1',
      description: 'mo ta sp1'
    },
    {
      id: 2,
      name: 'sp2',
      description: 'mo ta sp2'
    },
    {
      id: 3,
      name: 'sp3',
      description: 'mo ta sp3'
    },
    {
      id: 4,
      name: 'sp4',
      description: 'mo ta sp4'
    }
  ];

  constructor() { }
  getProducts(): IProduct[]{
    return this.products;
}
  findProductById(id: number) : IProduct{
    return this.products[id -1];
  }
  updateList(id: number, product: IProduct){
    this.products[id-1] = product;
  }
  addNew(product : IProduct){
    product.id = this.products.length + 1;
    this.products.push(product);
  }
  delete(id: number){
    this.products.splice(id - 1,1);
  }
}
