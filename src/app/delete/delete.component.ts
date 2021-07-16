import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ProductService} from '../product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  sub: Subscription;
  id: number = 0;

  constructor(private productService: ProductService,
              private router: Router,
              private activeRouter: ActivatedRoute) {
    this.sub = this.activeRouter.paramMap.subscribe((paramMap: ParamMap)=>{
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.deleteProduct(this.id)
    })
  }
  deleteProduct(id: number){
    this.productService.delete(id);
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
