import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'products',
  templateUrl: './products.component.html'
})

export class ProductsComponent implements OnDestroy, OnInit {

  public results: any;
  public featuredResult: {
  };
  subscription: Subscription;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {

    let me = this;
    this.subscription = this.productsService.getProducts()
        .subscribe(data => {
          data['Items'].map(function(item, i) {
            if(item.productid === '0m8hjmd721') {
              me.featuredResult = item;
            } else {
              me.results = data;
            }
          });
        });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
