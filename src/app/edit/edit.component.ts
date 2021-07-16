import { Component, OnInit } from '@angular/core';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  sub: Subscription;
  product: IProduct ={
    id: 0,
    name: '',
    description: ''
  }
  id: number = 0;

  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private productservice: ProductService) {
    this.sub = this.activeRouter.paramMap.subscribe((paramMap: ParamMap)=>{
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getProuductById(this.id);
    })
  }
  getProuductById(id: number){
    this.product = this.productservice.findProductById(id)
  }
  update(){
    this.productservice.updateList(this.id, this.product);
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
