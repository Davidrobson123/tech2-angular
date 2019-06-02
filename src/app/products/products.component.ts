import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnDestroy, OnInit {

  public results: any;
  subscription: Subscription;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.subscription = this.productsService.getProducts()
        .subscribe(data => this.results = data);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
